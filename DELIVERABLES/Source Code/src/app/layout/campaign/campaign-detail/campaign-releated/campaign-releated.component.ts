import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {
  CustomerListItem,
  PagedResult,
  DictionaryItem,
  CustomerModel,
  ProspectFilter,
  ContactListItem,
  ProspectListItem,
  CampaignModel,
} from '../../../../shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService, DataService, AlertService, ProspectService, ContactService, SessionService, CampaignService } from '../../../../shared/services';
// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject, Subscription, Subject } from 'rxjs';
// import { CustomerRelatedFilter } from '../../../shared/models/customer/customer-related-filter.model';
// import { CustomerActivityGroupItem } from '../../../shared/models/customer/customer-activity-group-item.model';
// import { CustomerFilter } from '../../../shared/models/customer/customer-filter.model';
// import { CustomerModule } from '../../customer/customer.module';
// import { ContactFilter } from '../../../shared/models/contact/contact-filter.model';
import { COMMON_CONSTANTS } from '../../../../shared/configs/common.config';
import { DATATABLE_CONFIG } from '../../../../shared/configs';
import Utils from '../../../../shared/helpers/utils.helper';
import { Location } from '../../../../shared/models/location';
import { ExcelService } from '../../../../shared/services/excel.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-campaign-releated',
  templateUrl: './campaign-releated.component.html',
  styleUrls: ['./campaign-releated.component.scss']
})
export class CampaignReleatedComponent implements OnInit {
  dtOptions: any = DATATABLE_CONFIG;
  dtTrigger: Subject<any> = new Subject();
  listData: any[] = [];
  campaignModel: CampaignModel = new CampaignModel();
  releatedType: string;
  searchTerm$ = new BehaviorSubject<string>('');

  listPermission: any[];
  get checkProspectProspectInformation() {// xem thông tin tiềm năng
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectViewProspectInformation').length > 0 ? true : false;
    } else {
      return false;
  }

  }
  get checkContactViewInformation() {/// Xem thông tin cá nhân
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactViewInformation').length > 0 ? true : false;
    } else {
      return false;
  }
    }
  get isPmsViewList(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
        return this.listPermission.filter(i => i.functionWeb.no === 'CustomerViewCustomerInformation').length > 0 ? true : false;
    } else {
        return false;
    }
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campaignService: CampaignService,
    private excelService: ExcelService,
    private translateService: TranslateService,
    private alertService: AlertService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(params => {
      this.campaignService.view(params.id).subscribe(data => {
        this.campaignModel = data;
        if (this.campaignModel.relatedToType) {
          this.searchTerm$.debounceTime(COMMON_CONSTANTS.SearchDelayTimeInMs)
            .distinctUntilChanged()
            .subscribe(filter => this.filter());
          switch (this.campaignModel.relatedToType) {
            case 'Contact':
              this.releatedType = 'liên hệ';
              this.listData = this.campaignModel.contacts ? this.campaignModel.contacts : null;
              break;
            case 'Customer':
              this.releatedType = 'khách hàng';
              this.listData = this.campaignModel.customers ? this.campaignModel.customers : null;
              break;
            case 'Prospect':
              this.releatedType = 'tiềm năng';
              this.listData = this.campaignModel.prospects ? this.campaignModel.prospects : null;
              break;
          }
        }
        setTimeout(() => {
          this.dtTrigger.next();
        });
      });
    });
    // this.level = [];
    // let inFormation =  this.sessionService.currentSession;
    // this.level = inFormation.userGroupFunctions;
    // this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

  getLocation(data: Location, type: string): string {
    const result = data ? Utils.getLocation(data, type) : '';
    return result;
  }

  goToDeitalCustomer(customerId) {
    this.router.navigate([`/customer/detail/${customerId}`]);
  }

  exportFileExcel() {
    if (this.listData) {
      let exportItems = [];
      let fileName = '';
      let index = 0;
      switch (this.campaignModel.relatedToType) {
        case 'Contact':
          fileName = 'CaNhan';
          exportItems = this.listData.map(x => {
            let companys = '';
            if (x['customerContactGroups'] && x['customerContactGroups'].length > 0) {
              companys = x['customerContactGroups'].map(i => i.customer.name).join(', ');
            }
            index++;
            return {
              'STT': index,
              'Họ và tên': x.name || '',
              'Chức vụ': x.jobTitle || '',
              'Công ty': companys,
              'Vai trò với HBC': this.translateService.instant(x['relationHBC'] || 'null'),
              'Điện thoại': x.cellularPhone || '',
              'Email': x.email2 || '',
              'Địa chỉ công ty': x.address || '',
              'Địa chỉ nhà riêng': x['address2'] || '',
              'Tỉnh/thành phố': this.getLocation(x.location, 'StateProvince'),
              'Tầm quan trọng': this.translateService.instant(x['significantType'] || 'null'),
              // tslint:disable-next-line:max-line-length
              'Người/nhóm phụ trách': (x['employee'] && x['employee'].name) ? (x['employee'] && x['employee'].name) : (x['employeeGroup'] && x['employeeGroup'].name) ? (x['employeeGroup'] && x['employeeGroup'].name) : '',
              'Cá nhân/bộ phận liên lạc': (x.departments && x.departments.name) ? (x.departments && x.departments.name) : ''
            };
          });
          break;
        case 'Customer':
          fileName = 'KhachHang';
          exportItems = this.listData.map(x => {
            let companys = '';
            index++;
            if (x['customerContactGroups'] && x['customerContactGroups'].length > 0) {
              companys = x['customerContactGroups'].map(i => i.customer.name).join(', ');
            }
            return {
              'STT': index,
              'Họ và tên': x.name || '',
              'Chức vụ': x['jobTitle'] || '',
              'Công ty': '',
              'Vai trò với HBC': this.translateService.instant(x['customerCategories'] || 'null'),
              'Điện thoại': x['tel1'] || '',
              'Email': x['email1'] || '',
              'Địa chỉ công ty': x.address || '',
              'Địa chỉ nhà riêng': x['address2'] || '',
              'Tỉnh/thành phố': this.getLocation(x.location, 'StateProvince'),
              'Tầm quan trọng': this.translateService.instant(x['significantType'] || 'null'),
              // tslint:disable-next-line:max-line-length
              'Người/nhóm phụ trách': (x['employee'] && x['employee'].name) ? (x['employee'] && x['employee'].name) : (x['employeeGroup'] && x['employeeGroup'].name) ? (x['employeeGroup'] && x['employeeGroup'].name) : '',
              'Cá nhân/bộ phận liên lạc': (x['departments'] && x['departments'].name) ? (x['departments'] && x['departments'].name) : ''
            };
          });
          break;
        case 'Prospect':
          fileName = 'TiemNang';
          exportItems = this.listData.map(x => {
            let companys = '';
            index++;
            if (x['customerContactGroups'] && x['customerContactGroups'].length > 0) {
              companys = x['customerContactGroups'].map(i => i.customer.name).join(', ');
            }
            return {
              'STT': index,
              'Họ và tên': x.name || '',
              'Chức vụ': x['jobTitle'] || '',
              'Công ty': x['company'] || '',
              'Vai trò với HBC': this.translateService.instant(x['customerCategories'] || 'null'),
              'Điện thoại': x['phone'] || '',
              'Email': x.email || '',
              'Địa chỉ công ty': '',
              'Địa chỉ nhà riêng': x['address'] || '',
              'Tỉnh/thành phố': this.getLocation(x.location, 'StateProvince'),
              'Tầm quan trọng': this.translateService.instant(x['significantType'] || 'null'),
              // tslint:disable-next-line:max-line-length
              'Người/nhóm phụ trách': (x['employee'] && x['employee'].name) ? (x['employee'] && x['employee'].name) : (x['employeeGroup'] && x['employeeGroup'].name) ? (x['employeeGroup'] && x['employeeGroup'].name) : '',
              'Cá nhân/bộ phận liên lạc': (x['departments'] && x['departments'].name) ? (x['departments'] && x['departments'].name) : ''
            };
          });
          break;
      }
      this.excelService.exportAsExcelFile(exportItems, fileName);
      // this.excelService.testexportAsExcelFile(fileName);
    } else {
      this.alertService.success('Danh sách liên quan rỗng');
    }
  }

  filter() {
    switch (this.campaignModel.relatedToType) {
      case 'Contact':
        // tslint:disable-next-line:max-line-length
        // this.listData = this.campaignModel.contacts && this.listData && this.campaignModel.contacts.filter(i => i.name.toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim()) || (i.cellularPhone && i.cellularPhone.toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim())) || (i.email2 && i.email2.toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim())));
        break;
      case 'Customer':
        // tslint:disable-next-line:max-line-length
        this.listData = this.campaignModel.customers && this.campaignModel.customers.filter(i => i.name.toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim()) || (i['tel1'] && i['tel1'].toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim())) || (i['email1'] && i['email1'].toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim())));
        break;
      case 'Prospect':
        // tslint:disable-next-line:max-line-length
        this.listData = this.campaignModel.prospects && this.campaignModel.prospects.filter(i => i.name.toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim()) || (i['phone'] && i['phone'].toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim())) || (i.email && i.email.toLowerCase().includes(this.searchTerm$.value.toLowerCase().trim())));
        break;
    }
  }
}
