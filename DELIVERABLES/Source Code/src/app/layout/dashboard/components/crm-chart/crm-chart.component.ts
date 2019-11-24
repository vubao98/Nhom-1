import { Component, OnInit } from '@angular/core';
import { DATETIME_PICKER_CONFIG } from '../../../../shared/configs/datepicker.config';
import { ChartService } from '../../../../shared/services/chart.service';
import { ChartModel } from '../../../../shared/models/chart/chart.model';
import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import DateTimeConvertHelper from '../../../../shared/helpers/datetime-convert-helper';
import ValidationHelper from '../../../../shared/helpers/validation.helper';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TranslateService } from '@ngx-translate/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import {
    ProspectService,
    CampaignService,
    OpportunityService,
    CustomerService,
    ActivityService,
    ContactService,
    SessionService
} from '../../../../shared/services';
import { ActivityListItem } from '../../../../shared/models/activity/activity-list-item.model';
import { ExcelService } from '../../../../shared/services/excel.service';
import { CampaignListItem, ProspectListItem, CustomerListItem, ContactListItem, ProspectFilter } from '../../../../shared/models';
import { OpportunityListItem } from '../../../../shared/models/opportunity/opportunity-list-item.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { CampaignFilter } from '../../../../shared/models/campaign/campaign-filter.model';
import { OpportunityFilter } from '../../../../shared/models/opportunity/opportunity-filter.model';
import { ContactFilter } from '../../../../shared/models/contact/contact-filter.model';
import { CustomerFilter } from '../../../../shared/models/customer/customer-filter.model';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';
import Utils from '../../../../shared/helpers/utils.helper';
import { Location } from '../../../../shared/models/location';
@Component({
    selector: 'app-crm-chart',
    templateUrl: './crm-chart.component.html',
    styleUrls: ['./crm-chart.component.scss']
})
export class CrmChartComponent implements OnInit {
    @ViewChild('module') module: ElementRef;
    chart: string;
    datePickerConfig = DATETIME_PICKER_CONFIG;

    public lineChartData = [{ data: [], label: '' }];

    public lineChartLabels: Array<any> = [];

    public arrayChart: ChartModel[] = [];

    public lineChartOptions: any = {
        responsive: true,
        scales: {
            xAxes: [
                {
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: 'Thời gian (tháng)'
                    }
                }
            ],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        callback: label => {
                            const floatting = (label + '').split('.')[1];
                            if (floatting && floatting.length > 1) {
                                return label.toFixed(1);
                            }
                            return `${label}`;
                        }
                    },
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: 'Số lượng'
                    }
                }
            ]
        }
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(167,221,236,0.39)',
            borderColor: '#17a2b8',
            borderCapStyle: 'butt',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    chartForm: FormGroup;
    isSubmitted: boolean;
    invalidMessages: string[];
    formErrors = {
        startDate: '',
        endDate: ''
    };

    listPermission: any[];
    userGroupRole = USER_GROUP_ROLE;

    get groupRole(): string {
        if (this.sessionService.currentSession) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }

    get isStatisticsProspect(): boolean {
        // xem tiem nang
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'StatisticsProspect').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsCustomer(): boolean {
        // xem khach hang
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeCustomer').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsContact(): boolean {
        // xem lien he
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeContact').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsCampaign(): boolean {
        // xem chien dich
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeCampaign').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsOpportunity(): boolean {
        // xem co hoi
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeOpportunity').length > 0 ? true : false;
        } else {
            return false;
        }
    }

    constructor(
        private chartService: ChartService,
        private fb: FormBuilder,
        private translateService: TranslateService,
        private prospectService: ProspectService,
        private campaignService: CampaignService,
        private opportunityService: OpportunityService,
        private contactService: ContactService,
        private activityService: ActivityService,
        private customerService: CustomerService,
        private excelService: ExcelService,
        private spinner: NgxSpinnerService,
        private sessionService: SessionService
    ) { }

    ngOnInit() {
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        if (this.isStatisticsProspect || this.groupRole === this.userGroupRole.SuperAdmin || this.groupRole === this.userGroupRole.Admin) {
            this.chart = 'prospects';
        } else if (this.isStatisticsCustomer) {
            this.chart = 'customers';
        } else if (this.isStatisticsContact) {
            this.chart = 'contacts';
        } else if (this.isStatisticsOpportunity) {
            this.chart = 'opportunities';
        } else if (this.isStatisticsCampaign) {
            this.chart = 'campaigns';
        }
        this.createForm();
        this.chartService
            .getChartByModule(
                this.chart,
                'month',
                moment()
                    .startOf('year')
                    .valueOf(),
                moment()
                    .endOf('year')
                    .valueOf()
            )
            .subscribe(result => {
                this.arrayChart = result;
                this.lineChartLabels = [];
                this.lineChartData[0].data = [];
                this.lineChartData[0].label = this.translateService.instant(
                    'prospect'
                );
                if (this.arrayChart) {
                    this.arrayChart.forEach(element => {
                        this.lineChartLabels.push(
                            `Tháng ${moment(element.paymentDate).format('MM')}`
                        );
                        this.lineChartData[0].data.push(element.amount);
                    });
                }
            });
    }

    createForm() {
        this.chartForm = this.fb.group({
            startDate: [
                DateTimeConvertHelper.fromTimestampToDtObject(
                    moment()
                        .startOf('year')
                        .valueOf()
                ),
                Validators.required
            ],
            endDate: [
                DateTimeConvertHelper.fromTimestampToDtObject(
                    moment()
                        .endOf('year')
                        .valueOf()
                ),
                Validators.required
            ],
            moduleName: 'prospects'
        });
        this.chartForm.valueChanges.subscribe(data =>
            this.onFormValueChanged(data)
        );
    }
    onFormValueChanged(data?: any) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    }

    validateForm() {
        this.invalidMessages = ValidationHelper.getInvalidMessages(
            this.chartForm,
            this.formErrors
        );
        return this.invalidMessages.length === 0;
    }
    // events
    public chartClicked(e: any): void { }

    public chartHovered(e: any): void { }

    onSelectType(value) {
        this.chartService
            .getChartByModule(
                value,
                'month',
                moment(this.chartForm.value.startDate).unix() * 1000,
                moment(this.chartForm.value.endDate).unix() * 1000
            )
            .subscribe(result => {
                this.arrayChart = result;
                this.lineChartLabels = [];
                this.lineChartData[0].data = [];
                this.lineChartData[0].label = this.translateService.instant(
                    value.substring(0, value.length - 1)
                );
                this.arrayChart.forEach(element => {
                    this.lineChartLabels.push(
                        `Tháng ${moment(element.paymentDate).format('MM')}`
                    );
                    this.lineChartData[0].data.push(element.amount);
                });
            });
    }

    onClick() {
        const value = this.module.nativeElement.value.toString();
        this.isSubmitted = true;
        if (this.validateForm()) {
            this.chartService
                .getChartByModule(
                    this.chartForm.value.moduleName,
                    'month',
                    moment(this.chartForm.value.startDate).unix() * 1000,
                    moment(this.chartForm.value.endDate).unix() * 1000
                )
                .subscribe(result => {
                    this.arrayChart = result;
                    this.lineChartLabels = [];
                    this.lineChartData[0].data = [];
                    this.lineChartData[0].label = this.translateService.instant(
                        value.substring(0, value.length - 1)
                    );
                    if (this.arrayChart) {
                        this.arrayChart.forEach(element => {
                            this.lineChartLabels.push(
                                `Tháng ${moment(element.paymentDate).format(
                                    'MM'
                                )}`
                            );
                            this.lineChartData[0].data.push(element.amount);
                        });
                    }
                });
        }
    }

    xuatFile() {
        const fromDate = moment(this.chartForm.value.startDate).unix() * 1000;
        const toDate = moment(this.chartForm.value.endDate).unix() * 1000;
        const moduleName = this.chartForm.value.moduleName;
        switch (moduleName) {
            case 'prospects': {
                const filterModel = new ProspectFilter();
                filterModel.fromDate = fromDate;
                filterModel.toDate = toDate;
                this.spinner.show();
                this.prospectService
                    .filter('', filterModel, 0, 10000)
                    .subscribe(result => {
                        const list = result.items;
                        this.exportProspect(list);
                        this.spinner.hide();
                    }, err => this.spinner.hide());
                break;
            }
            case 'customers': {
                const filterModel = new CustomerFilter();
                filterModel.fromDate = fromDate;
                filterModel.toDate = toDate;
                this.spinner.show();
                this.customerService
                    .filter('', filterModel, 0, 10000)
                    .subscribe(result => {
                        const list = result.items;
                        this.exportCustomer(list);
                        this.spinner.hide();
                    }, err => this.spinner.hide());
                break;
            }
            case 'contacts': {
                const filterModel = new ContactFilter();
                filterModel.fromDate = fromDate;
                filterModel.toDate = toDate;
                this.spinner.show();
                this.contactService
                    .filter('', filterModel, 0, 10000)
                    .subscribe(result => {
                        const list = result.items;
                        this.exportContact(list);
                        this.spinner.hide();
                    }, err => this.spinner.hide());
                break;
            }
            case 'opportunities': {
                const filterModel = new OpportunityFilter();
                filterModel.fromDate = fromDate;
                filterModel.toDate = toDate;
                this.spinner.show();
                this.opportunityService
                    .filter('', filterModel, 0, 10000)
                    .subscribe(result => {
                        const list = result.items;
                        this.exportOpportunity(list);
                        this.spinner.hide();
                    }, err => this.spinner.hide());
                break;
            }
            case 'campaigns': {
                const filterModel = new CampaignFilter();
                filterModel.fromDate = fromDate;
                filterModel.toDate = toDate;
                this.spinner.show();
                this.campaignService
                    .filter('', filterModel, 0, 10000)
                    .subscribe(result => {
                        const list = result.items;
                        this.exportCampaign(list);
                        this.spinner.hide();
                    }, err => this.spinner.hide());
                break;
            }
            default:
                break;
        }

    }

    exportActivity(array: Array<ActivityListItem>) {
        const exportItems = array.map(x => {
            return {
                'Tiêu đề': x.name ? x.name : '',
                Loại: this.translateService.instant(x.activityType || 'null'),
                'Ngày giờ bắt đầu': `${moment(x.startDate).format(
                    'L'
                )} ${moment(x.startDate).format('LT')}`,
                'Ngày giờ kết thúc': `${moment(x.endDate).format('L')} ${moment(
                    x.endDate
                ).format('LT')}`,
                'Trạng thái': this.translateService.instant(x.status || 'null'),
                'Vị trí': x.address ? x.address : '',
                'Liên quan đến loại': this.translateService.instant(
                    x.relatedToType || 'null'
                ),
                'Cụ thể liên quan': x.specificRelated
                    ? `${x.specificRelated.name ? x.specificRelated.name : ''}`
                    : '',
                'Phân công cho': x.assignTo ? x.assignTo : ''
            };
        });
        this.excelService.exportAsExcelFile(exportItems, 'HoatDong');
    }

    exportCampaign(array: Array<CampaignListItem>) {
        const exportItems = array.map(x => {
            return {
                'Tên chiến dịch': this.translateService.instant(x.category || 'null'),
                'Loại chiến dịch': this.translateService.instant(x.category || 'null'),
                'Trạng thái': this.translateService.instant(x.status || 'null'),
                'Ngày bắt đầu': moment(x.campaignDateStart).format('L'),
                'Ngày dự kiến xong': moment(x.campaignDateStop).format('L'),
                'Mục tiêu chiến dịch': x.target ? x.target : '',
                'Số lượng': x.numberOfParticipants ? x.numberOfParticipants : 0,
                'Phân công cho': x.assignTo ? x.assignTo : '',
                'Nhà tài trợ': x.donors ? x.donors : '',
                'Đối tượng tiếp thị': x.marketingObject ? x.marketingObject : '',
                'Ngân sách': x.budget ? x.budget : '',
                'Hiệu quả đầu tư dự kiến': x.expectedInvestmentEfficiency ? x.expectedInvestmentEfficiency : '',
                'Doanh thu dự kiến': x.expectedRevenue ? x.expectedRevenue : '',
                'Chi phí thực tế': x.actualCost ? x.actualCost : '',
                'Hiệu quả đầu tư thực tế': x.actualInvestmentEfficiency ? x.actualInvestmentEfficiency : '',
                'Doanh thu thực tế': x.actualRevenue ? x.actualRevenue : '',
                'Mô tả': x.description ? x.description : ''
            };
        });
        this.excelService.exportAsExcelFile(exportItems, 'ChienDich');
    }

    exportProspect(array: Array<ProspectListItem>) {
        const exportItems = array.map(x => {
            return {
                'Danh xưng': x.salutation ? this.translateService.instant(x.salutation) : '',
                'Họ và tên': x.fullName || '',
                'Đánh giá': x.evaluation ? this.translateService.instant(x.evaluation) : '',
                'Điện thoại chính': x.companyPhone ? x.companyPhone : '',
                'Điện thoại di động': x.mobilePhone ? x.mobilePhone : '',
                'Địa chỉ email': x.email ? x.email : '',
                'Nguồn tiềm năng': x.source ? this.translateService.instant(x.source['name']) : '',
                'Chiến dịch': x.campaign && x.campaign.name || '',
                'Tên công ty': x.companyName ? x.companyName : '',
                'Người phụ trách': x.assignTo ? x.assignTo : '',
                'Nhóm phụ trách': x.assignToGroup || '',
                'Giới tính': x.gender ? this.translateService.instant(x.gender) : '',
                'Doanh thu hằng năm': x.revenue,
                'Website': x.website ? x.website : '',
                'Tình trạng': x.potentialStatus ? this.translateService.instant(x.potentialStatus) : '',
                'Địa chỉ': x.address ? x.address : '',
                'Quận/huyện': x.location ? this.getLocation(x.location, 'District') : '',
                'Tỉnh/Thành phố': x.location ? this.getLocation(x.location, 'StateProvince') : '',
                'Quốc gia': x.location ? this.getLocation(x.location, 'Country') : '',
                'Ngày sinh': x.dob ? moment(x.dob).format('L') : '',
                'Năm sinh âm': x.lunarBirthday ? x.lunarBirthday : '',
                'Mô tả': x.description || '',
                'Cần xử lý bởi': x.handlerStr || '',
                'Ngày phát sinh tiềm năng': x.date ? moment(x.date).format('L') : '',
                'Social link': x.socialLink || '',
                'Retail': x.retails || '',
                'Model': x.models || '',
                'D&B': x.dab || '',
                'CTKM quan tâm': x.promotionCare || '',
                'Hỏi địa chỉ showroom': x.askShowroomAddress ? 'Có' : 'Không',
                'Cơ hội bán hàng': x.onlineSaleOpportunity ? 'Có' : 'Không',
                'Ads ID': x.adsID,
                'Kết quả': x.result,
                'Đã tiếp cận': x.approached ? 'Đã tiếp cận' : 'Chưa tiếp cận',
                'Kênh tiếp cận': x.approachChannels || ''
            };
        });
        this.excelService.exportAsExcelFile(exportItems, 'TiemNang');
    }

    exportOpportunity(array: Array<OpportunityListItem>) {
        const exportItems = array.map(x => {
            return {
                'Tên cơ hội': x.opportunityName ? x.opportunityName : '',
                'Khách hàng': x.customerName ? x.customerName : '',
                'Số điện thoại': x.tel1 ? x.tel1 : '',
                'Liên hệ': x.contact || '',
                'Phân loại': this.translateService.instant(x.category || 'null'),
                'Giá trị dự kiến': x.expectedValue ? x.expectedValue : 0,
                'Giai đoạn': this.translateService.instant(x.phase || 'null'),
                'Xác suất': x.probability ? x.probability : 'Không có',
                'Phân công cho': x.assignTo ? x.assignTo : ''
              };
        });
        this.excelService.exportAsExcelFile(exportItems, 'CoHoi');
    }

    exportCustomer(array: Array<CustomerListItem>) {
        const exportItems = array.map(x => {
            return {
                'Mã khách hàng': x.customerNumber ? x.customerNumber : '',
                'Tên khách hàng': x.customerName ? x.customerName : '',
                'ĐT chính': x.customerPhone ? x.customerPhone : '',
                'Website': x.website ? x.website : '',
                'Email chính': x.email ? x.email : '',
                'Nhóm': this.translateService.instant(x.group || 'null'),
                'Đánh giá': x.rating ? x.rating : 0,
                'Doanh thu/năm': x.revenue ? x.revenue : 0,
                'Phân công cho': x.assignTo ? x.assignTo : '',
                'Địa chỉ': x.address ? x.address : '',
                'Quận/huyện': x.location ? this.getLocation(x.location, 'District') : '',
                'Tỉnh/Thành phố': x.location ? this.getLocation(x.location, 'StateProvince') : '',
                'Quốc gia': x.location ? this.getLocation(x.location, 'Country') : '',
              };
        });
        this.excelService.exportAsExcelFile(exportItems, 'KhachHang');
    }

    exportContact(array: Array<ContactListItem>) {
        const exportItems = array.map(x => {
            return {
                'Mã liên hệ': x.contactNumber ? x.contactNumber : '',
                'Danh xưng': x.salutation ? this.translateService.instant(x.salutation) : '',
                'Họ và tên': x.name ? x.name : '',
                'ĐT phòng': x.companyPhone ? x.companyPhone : '',
                'ĐT di động': x.mobilePhone ? x.mobilePhone : '',
                'Địa chỉ email': x.email ? x.email : '',
                'Tên khách hàng': x.companyName ? x.companyName : '',
                'Chức danh': x.jobTitle ? x.jobTitle : '',
                'Phân công cho': x.assignTo ? x.assignTo : '',
                'Địa chỉ': x.address ? x.address : '',
                'Quận/huyện': x.location ? this.getLocation(x.location, 'District') : '',
                'Tỉnh/Thành phố': x.location ? this.getLocation(x.location, 'StateProvince') : '',
                'Quốc gia': x.location ? this.getLocation(x.location, 'Country') : '',
                'Địa chỉ khác': x.address2 ? x.address2 : '',
                'Quận/huyện khác': x.locationOther ? this.getLocation(x.locationOther, 'District') : '',
                'Tỉnh/Thành phố khác': x.locationOther ? this.getLocation(x.locationOther, 'StateProvince') : '',
                'Quốc gia khác': x.locationOther ? this.getLocation(x.locationOther, 'Country') : '',
              };
        });
        this.excelService.exportAsExcelFile(exportItems, 'LienHe');
    }

    getLocation(data: Location, type: string): string {
        const result = data ? Utils.getLocation(data, type) : '';
        return result;
    }
}
