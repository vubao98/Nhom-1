import { Component, OnInit, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs/Observable';
import {
    ProspectService,
    AlertService,
    DataService,
    SessionService
} from '../../../shared/services';
import {
    ProspectListItem,
    DictionaryItem,
    PagedResult,
    ProspectFilter
} from '../../../shared/models';
import * as moment from 'moment';
import { DATATABLE_CONFIG } from '../../../shared/configs';
// tslint:disable-next-line:import-blacklist
import { Subject, BehaviorSubject } from 'rxjs';
import { ConfirmationService } from '../../../shared/services';
import { COMMON_CONSTANTS, USER_GROUP_ROLE } from '../../../shared/configs/common.config';
import { ExcelService } from '../../../shared/services/excel.service';
import { TranslateService } from '@ngx-translate/core';
import { DownloadTemplateService } from '../../../shared/services/download-template.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
    DialogService,
    DialogRef
} from '../../../../../node_modules/@progress/kendo-angular-dialog';
import { EmailEditorComponent } from '../../../shared/components/email-editor/email-editor.component';
import { EmailRecipientModel } from '../../../shared/models/email-recipient-model';
import Utils from '../../../shared/helpers/utils.helper';
import { ProspectModule } from '../prospect.module';
import { Location } from '../../../shared/models/location';
import { TableColumnConfig } from '../../../shared/models/table-column-config';
import { TableConfigType } from '../../../shared/constants/table-config-type.enum';
import { DATETIME_PICKER_CONFIG } from '../../../shared/configs/datepicker.config';

@Component( {
    selector: 'app-prospect-list',
    templateUrl: './prospect-list.component.html',
    styleUrls: ['./prospect-list.component.scss'],
    animations: [routerTransition()]
    // providers: [DialogRef]
} )
export class ProspectListComponent implements OnInit {
    datePickerConfig = DATETIME_PICKER_CONFIG;
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();
    pagedResult: PagedResult<ProspectListItem> = new PagedResult<
        ProspectListItem
        >();
    month: string;
    prospectSourceList: Observable<DictionaryItem[]>;

    vd: Observable<DictionaryItem[]>;
    businessList: Observable<DictionaryItem[]>;
    evaluationList: Observable<DictionaryItem[]>;
    prospectHandlerList: Observable<DictionaryItem[]>;
    approachChanelList: Observable<DictionaryItem[]>;
    employeeList: Observable<DictionaryItem[]>;
    employeeGroupList: Observable<DictionaryItem[]>;
    statusList: Observable<DictionaryItem[]>;

    term: string;
    searchTerm$ = new BehaviorSubject<string>( ProspectModule.searchTerm );
    filterModel = new ProspectFilter();
    @ViewChild( 'tablePin' )
    tablePin: ElementRef;
    @ViewChild( 'fakeScrollBar' )
    fakeScrollBar: ElementRef;

    wrap1: HTMLElement;
    wrap2: HTMLElement;

    hiddenArr: boolean[] = [];
    checkboxSeclectAll: boolean;
    listColumnSetting: TableColumnConfig[];
    listColumnSettingTemp: TableColumnConfig[] = [];
    loading = true;

    get columnSelectedCount(): number {
        return this.listColumnSettingTemp
            ? this.listColumnSettingTemp.filter( i => !i.hidden ).length
            : null;
    }
    get disableSendEmail(): boolean {
        if (
            this.pagedResult.items &&
            this.pagedResult.items.filter( x => x.checkboxSelected ).length > 0
        ) {
            return false;
        } else {
            return true;
        }
    }

    /* Phân quyền */
    listPermission: any[];

    get isProspectAddProspect(): boolean {
        // thêm tiềm năng mới
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectAddProspect' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectViewProspectInformation(): boolean {
        // xem thông tin tiềm năng
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewProspectInformation' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectSendEmail(): boolean {
        // gởi mail
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectSendEmail' ).length > 0 ? true : false;
        } else {
            return false;
        }
    } get isProspectEditProspect(): boolean {
        // sửa tiềm năng
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectEditProspect' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectDeleteProspect(): boolean {
        // xóa tiềm năng
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectDeleteProspect' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectImportDownloadProspectTemplate(): boolean {
        // nhập file+ tải temple
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectImportDownloadProspectTemplate' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectExportFile(): boolean {
        // xuất file
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectExportFile' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectProspectSummary(): boolean {
        // sơ lược
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectProspectSummary' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectViewProspectDetail(): boolean {
        // xem chi tiết
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewProspectDetail' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectAddComment(): boolean {
        // add comment
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectAddComment' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectViewComments(): boolean {
        // view comment
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewComments' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectActivities(): boolean {
        // các hoạt động
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectActivities' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isProspectHistories(): boolean {
        // các cập nhật
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ProspectHistories' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isCongCu(): boolean {
        if ( this.isProspectDeleteProspect || this.isProspectSendEmail || this.isProspectImportDownloadProspectTemplate || this.isProspectExportFile ) {
            return true;
        } else {
            return false;
        }
    }

    get groupRole(): string {
        if ( this.sessionService.currentSession ) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }

    userGroupRole = USER_GROUP_ROLE;

    constructor (
        private alertService: AlertService,
        private confirmationService: ConfirmationService,
        private dataService: DataService,
        private prospectService: ProspectService,
        private excelService: ExcelService,
        private translateService: TranslateService,
        private downloadTemplate: DownloadTemplateService,
        private spinner: NgxSpinnerService,
        private dialogService: DialogService,
        private sessionService: SessionService
    ) { }

    ngOnInit() {
        this.pagedResult.pageSize = 9;
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        this.month = ( moment().month() + 1 ).toString();
        window.scrollTo( 0, 0 );

        this.dtOptions = DATATABLE_CONFIG;
        this.filterModel = ProspectModule.filterModel;
        this.prospectHandlerList = this.dataService.getProspectHandlers();
        this.approachChanelList = this.dataService.getApproachChanels( 'Prospect' );
        this.prospectSourceList = this.dataService.getProspectSources();
        this.businessList = this.dataService.getBusiness();
        this.evaluationList = this.dataService.getProspectEvaluations();
        this.employeeList = this.dataService.getEmployeesFilter();
        this.employeeGroupList = this.dataService.getEmployeeGroupsFilter();
        this.statusList = this.dataService.getProspectStatus();
        // this.filterModel.prospectSource = null;
        // this.filterModel.rate = null;
        // this.filterModel.month = null;
        this.dataService
            .getDefaultTableConfig( TableConfigType.ARProspectCustomers )
            .subscribe( data => {
                this.listColumnSetting = data;
                // tslint:disable-next-line:forin
                for ( const ind in data ) {
                    this.listColumnSettingTemp[ind] = JSON.parse( JSON.stringify( data[ind] ) );
                }
            }
            );

        this.searchTerm$.debounceTime( COMMON_CONSTANTS.SearchDelayTimeInMs )
            .distinctUntilChanged().subscribe( search => {
                ProspectModule.searchTerm = search;
                this.filter();
            } );

        setTimeout( () => {
            this.wrap1 = document.getElementById( 'wrap1' );
            this.wrap2 = document.getElementById( 'wrap2' );
        }, 1000 );
    }

    openEmailEditor() {
        let listSelected = this.pagedResult.items.filter(
            x => x.checkboxSelected
        );
        const noEmailCount = listSelected.filter( x => !x.email ).length;
        if ( noEmailCount === listSelected.length ) {
            this.confirmationService.openConfirmationPopup( {
                text: 'Vui lòng chọn ít nhất một tiềm năng có địa chỉ email'
            } );
        } else if ( noEmailCount === 0 ) {
            this.openMultiEmailEditor( listSelected );
        } else {
            const listNoEmail = listSelected
                .filter( i => !i.email )
                .map( i => `${ i.firstName } ${ i.lastName }` )
                .join( ', ' );
            this.confirmationService.confirm(
                `Tiềm năng ${ listNoEmail } không có email, bạn có muốn tiếp tục không?`,
                () => {
                    listSelected = listSelected.filter( i => i.email );
                    this.openMultiEmailEditor( listSelected );
                }
            );
        }
    }

    openMultiEmailEditor( listSelected ) {
        const dialogRef = this.dialogService.open( {
            title: 'Email',
            content: EmailEditorComponent,
            width: ( window.screen.availWidth * 80 ) / 100
        } );
        const paramRef = dialogRef.content.instance;
        paramRef.emailList = listSelected.map( i => {
            const recipient = new EmailRecipientModel();
            recipient.email = i.email;
            recipient.id = Number( i.id );
            recipient.name = `${ i.firstName } ${ i.lastName }`;
            return recipient;
        } );
    }

    openSingleEmailEditor( email, id, firstName, lastName ) {
        if ( email ) {
            const dialogRef = this.dialogService.open( {
                title: 'Email',
                content: EmailEditorComponent,
                width: ( window.screen.availWidth * 80 ) / 100
            } );
            const paramRef = dialogRef.content.instance;
            const recipientList = [];
            const recipient = new EmailRecipientModel();
            recipient.email = email;
            recipient.id = Number( id );
            recipient.name = `${ lastName } ${ firstName }`;
            recipientList.push( recipient );
            paramRef.emailList = recipientList;
        }
    }

    pagedResultChange( pagedResult: any ) {
        this.refresh();
    }

    delete( ids: number | number[] ) {
        const that = this;

        let deleteIds = [];
        if ( !( ids instanceof Array ) ) {
            deleteIds = [ids];
        } else {
            deleteIds = ids;
        }

        this.confirmationService.confirm(
            'Bạn có chắc chắn muốn xóa tiềm năng này?',
            () => {
                that.prospectService.delete( deleteIds ).subscribe( _ => {
                    if (
                        this.pagedResult.items.length === deleteIds.length &&
                        +this.pagedResult.currentPage > 0
                    ) {
                        this.pagedResult.currentPage =
                            +this.pagedResult.currentPage - 1;
                    }
                    that.alertService.success( 'Đã xóa tiềm năng!' );
                    that.refresh();
                } );
            }
        );
    }

    multiDelete() {
        const deleteIds = this.pagedResult.items
            .filter( x => x.checkboxSelected )
            .map( x => +x.id );

        if ( deleteIds.length === 0 ) {
            this.alertService.error(
                'Bạn phải chọn ít nhất một đối tượng để xóa!'
            );
        } else {
            this.delete( deleteIds );
        }
    }

    refresh( displayAlert: boolean = false ) {
        ProspectModule.currentPage = this.pagedResult.currentPage;
        ProspectModule.pageSize = this.pagedResult.pageSize;
        this.loading = true;
        this.prospectService
            .filter(
                this.searchTerm$.value,
                this.filterModel,
                ProspectModule.currentPage,
                this.pagedResult.pageSize
            )
            .subscribe(
                result => {
                    this.rerender( result );
                    if ( displayAlert ) {
                        this.alertService.success(
                            'Dữ liệu đã được cập nhật mới nhất!'
                        );
                    }
                    this.loading = false;
                },
                err => this.loading = false
            );
    }

    filter() {
        ProspectModule.filterModel = this.filterModel;
        this.loading = true;
        this.prospectService
            .filter(
                this.searchTerm$.value,
                this.filterModel,
                ProspectModule.currentPage,
                this.pagedResult.pageSize
            )
            .subscribe(
                result => {
                    this.rerender( result );
                    this.loading = false;
                },
                err => this.loading = false
            );
    }

    clearFilter() {
        this.filterModel = new ProspectFilter();
        this.filter();
    }

    fileChange( event ) {
        const fileList: FileList = event.target.files;
        const that = this;
        if ( fileList.length > 0 ) {
            this.spinner.show();
            const file = fileList[0];
            this.prospectService.importFile( file ).subscribe(
                result => {
                    this.spinner.hide();
                    that.refresh();
                    this.alertService.success(
                        'Bạn đã nhập dữ liệu thành công!'
                    );
                    event.target.value = null;
                },
                err => {
                    let message;
                    const error = JSON.parse( err.text() );
                    switch ( error.error_code ) {
                        case 'INVALID_VALUE':
                            const messErrArr = error.error_message.split( ',' );
                            message = `Giá trị của cột ${
                                messErrArr[0]
                                } ở vị trí ${
                                messErrArr[1]
                                } không phù hợp, vui lòng kiểm tra lại!`;
                            break;
                        case 'EXIST_PHONE_NUMBER':
                            message = `${
                                error.error_message
                                } đã tồn tại trong hệ thống, vui lòng kiểm tra lại!`;
                            break;
                        case 'SOCIAL_LINK_EXIST':
                            message = `Social link đã tồn tại trong hệ thống, vui lòng kiểm tra lại!`;
                            break;
                        default:
                            if ( error.error_message === 'Campaign No. is not exist.' ) {
                                message = `Mã chiến dịch không tồn tại, vui lòng kiểm tra lại!`;
                            } else {
                                message = error.error_message;
                            }
                            break;
                    }
                    this.alertService.error( message );
                    event.target.value = null;
                    this.spinner.hide();
                }
            );
        }
    }

    rerender( pagedResult: any ) {
        this.checkboxSeclectAll = false;
        this.pagedResult = pagedResult;
        // get data in master data
        this.pagedResult.items.forEach( i => {
            if ( i.handler ) {
                this.dataService.getSettingTypeItem( 'prospect-handler', i.handler ).subscribe( data => i.handlerStr = data.text );
            }
        } );
        this.dtTrigger.next();
        setTimeout( () => {
            if ( this.tablePin && this.tablePin.nativeElement ) {
                const table = this.tablePin.nativeElement as HTMLElement;
                const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
                scrollBar.style.width = table.offsetWidth + 100 + 'px';
            }
        } );
    }

    onSelectAll( value: boolean ) {
        this.pagedResult.items.forEach( x => ( x.checkboxSelected = value ) );
    }

    exportFileExcel() {
        this.prospectService
            .filter(
                this.searchTerm$.value,
                this.filterModel,
                0,
                999999999
            )
            .subscribe(
                result => {
                    const exportItems = result.items.map( x => {
                        return {
                            'Ngày phát sinh tiềm năng': x.date ? moment( x.date ).format( 'L' ) : '',
                            'Danh xưng': x.salutation ? this.translateService.instant( x.salutation ) : '',
                            'Họ và tên': x.fullName || '',
                            'Điện thoại chính': x.companyPhone ? x.companyPhone : '',
                            'Điện thoại di động': x.mobilePhone ? x.mobilePhone : '',
                            'Email': x.email ? x.email : '',
                            'Social link': x.socialLink || '',
                            'Hỏi địa chỉ showroom': x.askShowroomAddress ? 'Có' : 'Không',
                            'Cần xử lý bởi': x.handler || '',
                            'Đã tiếp cận': x.approached ? 'Đã tiếp cận' : 'Chưa tiếp cận',
                            'Tình trạng': x.potentialStatus ? this.translateService.instant( x.potentialStatus ) : '',
                            'Kết quả': x.result,
                            'CTKM quan tâm': x.promotionCare || '',
                            'Đánh giá tiềm năng': x.evaluation ? this.translateService.instant( x.evaluation ) : '',
                            'Cơ hội bán hàng': x.onlineSaleOpportunity ? 'Có' : 'Không',
                            'Tên công ty': x.companyName ? x.companyName : '',
                            'Nguồn tiềm năng': x.source ? this.translateService.instant( x.source['name'] ) : '',
                            'Chiến dịch': x.campaign && x.campaign.name || '',
                            'Giới tính': x.gender ? this.translateService.instant( x.gender ) : '',
                            'Doanh thu hằng năm': x.revenue,
                            'Website': x.website ? x.website : '',

                            'Người phụ trách': x.assignTo ? x.assignTo : '',
                            'Nhóm phụ trách': x.assignToGroup || '',

                            'Ngày sinh': x.dob ? moment( x.dob ).format( 'L' ) : '',
                            'Năm sinh âm': x.lunarBirthday ? x.lunarBirthday : '',
                            'Ads ID': x.adsID,
                            'Địa chỉ': x.address ? x.address : '',
                            'Quận/huyện': x.location ? this.getLocation( x.location, 'District' ) : '',
                            'Tỉnh/Thành phố': x.location ? this.getLocation( x.location, 'StateProvince' ) : '',
                            'Quốc gia': x.location ? this.getLocation( x.location, 'Country' ) : '',
                            'Mô tả': x.description || '',

                            // 'Retail': x.retails || '',
                            // 'Model': x.models || '',
                            // 'D&B': x.dab || '',
                            // 'Kênh tiếp cận': x.approachChannels || ''
                        };
                    } );
                    this.excelService.exportAsExcelFile( exportItems, 'TiemNang' );
                    this.loading = false;
                },
                err => this.loading = false
            );


    }

    downTemplate() {
        this.downloadTemplate
            .downloadTemplate( 'prospect' )
            .subscribe( result => result );
    }

    getLocation( data: Location, type: string ): string {
        const result = data ? Utils.getLocation( data, type ) : '';
        return result;
    }

    columnSettingClick( id: number ) {
        this.hiddenArr = [];
        this.listColumnSetting.forEach( ( e, i ) => ( this.hiddenArr[i] = e.hidden ) );
        const item = this.listColumnSettingTemp.find( i => i.id === id );
        item.hidden = !item.hidden;

    }

    setColumnSetting( popup: any, toDefault = false ) {
        this.listColumnSetting = this.listColumnSettingTemp;
        this.dataService
            .setTableConfig(
                this.listColumnSetting,
                TableConfigType.ARProspectCustomers,
                toDefault
            )
            .subscribe( data => {
                this.listColumnSetting = data;
                // tslint:disable-next-line:forin
                for ( const ind in data ) {
                    this.listColumnSettingTemp[ind] = JSON.parse( JSON.stringify( data[ind] ) );
                }
                setTimeout( () => {
                    if ( this.tablePin && this.tablePin.nativeElement ) {
                        const table = this.tablePin.nativeElement as HTMLElement;
                        const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
                        scrollBar.style.width = table.offsetWidth + 100 + 'px';
                    }
                } );
                popup.hide();
            } );
    }

    setColumnDefault( popup: any ) {
        // this.listColumnSetting = [];
        this.dataService
            .getDefaultTableConfig( TableConfigType.ARProspectCustomers )
            .subscribe( data => {
                this.listColumnSettingTemp = data;
                setTimeout( () => {
                    if ( this.tablePin && this.tablePin.nativeElement ) {
                        const table = this.tablePin.nativeElement as HTMLElement;
                        const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
                        scrollBar.style.width = table.offsetWidth + 100 + 'px';
                    }
                } );
            }
            );
        popup.hide();
    }

    isCancel( popup: any ) {
        popup.hide();
        // this.listColumnSettingTemp.forEach((e, i) => (e.hidden = this.hiddenArr[i]));
        this.listColumnSettingTemp.forEach( ( e, i ) => e.hidden = this.listColumnSetting[i].hidden );

    }

    chooseAllColumnSetting( popup: any ) {
        this.hiddenArr = [];
        this.listColumnSetting.forEach( ( e, i ) => ( this.hiddenArr[i] = e.hidden ) );
        this.listColumnSettingTemp.forEach( e => ( e.hidden = false ) );
    }

    getColumnShow( name: string ): boolean {
        if ( this.listColumnSetting && this.listColumnSetting.find( i => i.fieldName === name ) ) {
            return this.listColumnSetting.find( i => i.fieldName === name ).hidden;
        } else {
            return false;
        }
    }
    syncScroll1() {
        this.wrap2.scrollLeft = this.wrap1.scrollLeft;
    }

    syncScroll2() {
        this.wrap1.scrollLeft = this.wrap2.scrollLeft;
    }

    isEyeVisible() {
        if ( this.isProspectProspectSummary || this.isProspectViewProspectDetail || this.isProspectAddComment || this.isProspectViewComments || this.isProspectActivities || this.isProspectHistories ) {
            return true;
        } else return false;
    }

    assignToGroupChange( groupId: string ) {
        if ( groupId === 'null' ) {
            this.filterModel.assignToGroup = null;
        }
        // lọc nhân viên theo nhóm
        if ( groupId !== 'null' ) {
            this.employeeList = Observable.create( data => data.next( [] ) );
            this.filterModel.assignTo = null;
            this.employeeList = this.dataService.getEmployeesFilter( groupId && groupId !== '0' ? groupId : null );
        }
    }
}
