import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DATATABLE_CONFIG } from '../../../shared/configs';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService, DataService, ContactService, ConfirmationService, SessionService } from '../../../shared/services/index';
import { ContactListItem, DictionaryItem, ProspectFilter } from '../../../shared/models/index';
import { PagedResult } from '../../../shared/models';
import { Subscription } from 'rxjs/Subscription';
import { ContactFilter } from '../../../shared/models/contact/contact-filter.model';
import { ExcelService } from '../../../shared/services/excel.service';
import { TranslateService } from '@ngx-translate/core';
import { DownloadTemplateService } from '../../../shared/services/download-template.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactModule } from '../contact.module';
import { COMMON_CONSTANTS, USER_GROUP_ROLE } from '../../../shared/configs/common.config';
import { Location } from '../../../shared/models/location';
import Utils from '../../../shared/helpers/utils.helper';
import * as moment from 'moment';
import { TableColumnConfig } from '../../../shared/models/table-column-config';
import { TableConfigType } from '../../../shared/constants/table-config-type.enum';

@Component( {
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  animations: [routerTransition()]
} )

export class ContactListComponent implements OnInit {
  dtElement: DataTableDirective;
  dtOptions: any = {};
  checkboxSeclectAll: boolean;
  dtTrigger: Subject<any> = new Subject();
  prospectSourceList: Observable<DictionaryItem[]>;
  pagedResult: PagedResult<ContactListItem> = new PagedResult<ContactListItem>();
  searchTerm$ = new BehaviorSubject<string>( ContactModule.searchTerm );
  employeeList: Observable<DictionaryItem[]>;
  employeeGroupList: Observable<DictionaryItem[]>;

  filterModel = new ContactFilter();
  month: string;

  hiddenArr: boolean[] = [];
  @ViewChild( 'tablePin' )
  tablePin: ElementRef;
  @ViewChild( 'fakeScrollBar' )
  fakeScrollBar: ElementRef;
  listColumnSetting: TableColumnConfig[];
  listColumnSettingTemp: TableColumnConfig[] = [];
  loading = true;
  get columnSelectedCount(): number {
    return this.listColumnSettingTemp
      ? this.listColumnSettingTemp.filter( i => !i.hidden ).length
      : null;
  }

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if ( this.sessionService.currentSession ) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isContactAddContact(): boolean {
    // thêm mới lien hệ
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactAddContact' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isContactViewInformation(): boolean {
    // xem thông tin
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactViewInformation' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactEditContact(): boolean {
    // sửa liên hệ
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactEditContact' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactSendEmail(): boolean {
    // email
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactSendEmail' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactDeleteContact(): boolean {
    // xóa
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactDeleteContact' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactImportDownloadTemplate(): boolean {
    // import + tải template
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactImportDownloadTemplate' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactExportFile(): boolean {
    // export
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactExportFile' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactContactSummary(): boolean {
    // sơ lược
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactContactSummary' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactViewContactDetail(): boolean {
    // view detail
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactViewContactDetail' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactViewComments(): boolean {
    // xem comment
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactViewComments' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactComments(): boolean {
    // đăng comment
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactComments' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactActivities(): boolean {
    // xem hoạt động
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactActivities' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactHistories(): boolean {
    // xem cập nhật
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactHistories' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactOpportunities(): boolean {
    // xem cập nhật
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ContactOpportunities' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCongCu(): boolean {
    if ( this.isContactDeleteContact || this.isContactImportDownloadTemplate || this.isContactExportFile ) {
      return true;
    } else {
      return false;
    }
  }

  wrap1: HTMLElement;
  wrap2: HTMLElement;

  constructor (
    private router: Router,
    private alertService: AlertService,
    private confirmationService: ConfirmationService,
    private dataService: DataService,
    private contactService: ContactService,
    private excelService: ExcelService,
    private translateService: TranslateService,
    private downloadTemplate: DownloadTemplateService,
    private spinner: NgxSpinnerService,
    private sessionService: SessionService
  ) {
  }

  ngOnInit() {
    this.month = ( moment().month() + 1 ).toString();
    window.scrollTo( 0, 0 );
    this.dtOptions = DATATABLE_CONFIG;
    this.filterModel = ContactModule.filterModel;
    this.employeeList = this.dataService.getEmployeesFilter();
    this.employeeGroupList = this.dataService.getEmployeeGroupsFilter();
    this.prospectSourceList = this.dataService.getProspectSources();
    this.searchTerm$.debounceTime( COMMON_CONSTANTS.SearchDelayTimeInMs )
      .distinctUntilChanged().subscribe( search => {
        ContactModule.searchTerm = search;
        this.filter();
      } );
    this.dataService
      .getDefaultTableConfig( TableConfigType.ARCustomerContactsCRM )
      .subscribe( data => {
        this.listColumnSetting = data;
        for ( var ind in data ) {
          this.listColumnSettingTemp[ind] = JSON.parse( JSON.stringify( data[ind] ) );
        }
      }
      );
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    setTimeout( () => {
      this.wrap1 = document.getElementById( 'wrap1' );
      this.wrap2 = document.getElementById( 'wrap2' );
    }, 1000 );
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

    this.confirmationService.confirm( 'Bạn có chắc chắn muốn xóa liên hệ này?',
      () => {
        that.contactService.delete( deleteIds ).subscribe( _ => {
          if ( this.pagedResult.items.length === deleteIds.length && +this.pagedResult.currentPage > 0 ) {
            this.pagedResult.currentPage = +this.pagedResult.currentPage - 1;
          }
          that.alertService.success( 'Đã xóa liên hệ!' );
          that.refresh();
        } );
      } );
  }

  multiDelete() {
    const deleteIds = this.pagedResult.items
      .filter( x => x.checkboxSelected )
      .map( x => +x.id );

    if ( deleteIds.length === 0 ) {
      this.alertService.error( 'Bạn phải chọn ít nhất một đối tượng để xóa!' );
    } else {
      this.delete( deleteIds );
    }


  }
  sendEmail( id: number | string ) {

  }

  refresh( displayAlert: boolean = false ): void {
    this.loading = true;
    ContactModule.currentPage = this.pagedResult.currentPage;
    ContactModule.pageSize = this.pagedResult.pageSize;
    this.contactService
      .filter( this.searchTerm$.value, this.filterModel, ContactModule.currentPage, this.pagedResult.pageSize )
      .subscribe( result => {
        this.rerender( result );
        if ( displayAlert ) {
          this.alertService.success( 'Dữ liệu đã được cập nhật mới nhất!' );
        }
        this.loading = false;
      }, err => this.loading = false );
  }

  filter() {
    ContactModule.filterModel = this.filterModel;
    this.loading = true;
    this.contactService
      .filter( this.searchTerm$.value, this.filterModel, ContactModule.currentPage, this.pagedResult.pageSize )
      .subscribe( result => {
        this.rerender( result );
        this.loading = false;
      }, err => this.loading = false );
  }

  clearFilter() {
    this.filterModel = new ContactFilter();
    this.filter();

  }

  fileChange( event ) {
    const fileList: FileList = event.target.files;
    const that = this;
    if ( fileList.length > 0 ) {
      const file = fileList[0];
      this.contactService.importFile( file )
        .subscribe( result => {
          that.refresh();
          this.alertService.success( 'Bạn đã nhập dữ liệu thành công!' );
          event.target.value = null;
        }, err => {
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
        } );
    }
  }
  rerender( pagedResult: any ) {
    this.checkboxSeclectAll = false;
    this.pagedResult = pagedResult;
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
    this.pagedResult.items.forEach( x => x.checkboxSelected = value );
  }

  exportFileExcel() {
    this.contactService
      .filter( this.searchTerm$.value, this.filterModel, 0, 999999999 )
      .subscribe( result => {
        const exportItems = result.items.map( x => {
          return {
            'Danh xưng': x.salutation ? this.translateService.instant( x.salutation ) : '',
            'Ngày sinh': x.dob ? moment( x.dob ).format( 'L' ) : '',
            'Họ và tên': x.name ? x.name : '',
            'Email': x.email ? x.email : '',
            'Nguồn tiềm năng': x.customerResource || '',
            'Chức danh': x.jobTitle ? x.jobTitle : '',
            'Phòng ban': x.department ? this.translateService.instant( x.department ) : '',
            'Điện thoại công ty': x.companyPhone ? x.companyPhone : '',
            'Điện thoại di động': x.mobilePhone ? x.mobilePhone : '',
            'Điện thoại nhà riêng': x.assignTo && x.homePhone ? x.homePhone : '',
            'Điện thoại phụ': x.secondaryPhone || '',
            'Trợ lý': x.assistant || '',
            'Điện thoại trợ lý': x.assistantPhone || '',

            'Người phụ trách': x.assignTo ? x.assignTo : '',
            'Nhóm phụ trách': x.assignToGroup || '',

            'Địa chỉ': x.address ? x.address : '',
            'Quận/huyện': x.location ? this.getLocation( x.location, 'District' ) : '',
            'Tỉnh/Thành phố': x.location ? this.getLocation( x.location, 'StateProvince' ) : '',
            'Quốc gia': x.location ? this.getLocation( x.location, 'Country' ) : '',
            'Địa chỉ khác': x.address2 ? x.address2 : '',
            'Quận/huyện khác': x.locationOther ? this.getLocation( x.locationOther, 'District' ) : '',
            'Tỉnh/Thành phố khác': x.locationOther ? this.getLocation( x.locationOther, 'StateProvince' ) : '',
            'Quốc gia khác': x.locationOther ? this.getLocation( x.locationOther, 'Country' ) : '',


            // 'Mã liên hệ': x.contactNumber ? x.contactNumber : '',
            // 'ĐT phòng': x.companyPhone ? x.companyPhone : '',
            // 'Tên khách hàng': x.companyName ? x.companyName : '',

          };
        } );
        this.excelService.exportAsExcelFile( exportItems, 'LienHe' );
        this.loading = false;
      }, err => this.loading = false );
  }
  downTemplate() {
    this.downloadTemplate.downloadTemplate( 'contact' )
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

    // const item = this.listColumnSetting.find(i => i.id === id);
    // item.hidden = !item.hidden;
    // setTimeout(() => {
    //     const table = this.tablePin.nativeElement as HTMLElement;
    //     const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
    //     scrollBar.style.width = table.offsetWidth + 'px';
    // });
  }

  setColumnSetting( popup: any, toDefault = false ) {
    this.listColumnSetting = this.listColumnSettingTemp;
    this.dataService
      .setTableConfig(
        this.listColumnSetting,
        TableConfigType.ARCustomerContactsCRM,
        toDefault
      )
      .subscribe( data => {
        this.listColumnSetting = data;
        for ( var ind in data ) {
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

  isCancel( popup: any ) {
    popup.hide();
    this.listColumnSettingTemp.forEach( ( e, i ) => e.hidden = this.listColumnSetting[i].hidden );
    // this.listColumnSettingTemp.forEach((e, i) => (e.hidden = this.hiddenArr[i]));
  }

  chooseAllColumnSetting( popup: any ) {
    // this.listColumnSetting.forEach(e => (e.hidden = false));
    // this.setColumnSetting(popup);
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
    if ( this.isContactContactSummary || this.isContactViewContactDetail || this.isContactComments || this.isContactViewComments || this.isContactActivities || this.isContactHistories || this.isContactOpportunities ) {
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
