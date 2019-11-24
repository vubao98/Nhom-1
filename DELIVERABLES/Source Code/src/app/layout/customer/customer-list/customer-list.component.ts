import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DATATABLE_CONFIG } from '../../../shared/configs';
import { CustomerListItem, DictionaryItem, PagedResult, ProspectFilter } from '../../../shared/models';
import { Subject, Observable, BehaviorSubject, Subscription } from 'rxjs';
import { AlertService, DataService, CustomerService, ConfirmationService, SessionService } from '../../../shared/services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerFilter } from '../../../shared/models/customer/customer-filter.model';
import { TranslateService } from '@ngx-translate/core';
import { ExcelService } from '../../../shared/services/excel.service';
import { DownloadTemplateService } from '../../../shared/services/download-template.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { EmailRecipientModel } from '../../../shared/models/email-recipient-model';
import { EmailEditorComponent } from '../../../shared/components/email-editor/email-editor.component';
import { DialogService } from '../../../../../node_modules/@progress/kendo-angular-dialog';
import Utils from '../../../shared/helpers/utils.helper';
import { CustomerModule } from '../customer.module';
import { COMMON_CONSTANTS, USER_GROUP_ROLE } from '../../../shared/configs/common.config';
import { Location } from '../../../shared/models/location';
import * as moment from 'moment';
import { TableColumnConfig } from '../../../shared/models/table-column-config';
import { TableConfigType } from '../../../shared/constants/table-config-type.enum';

@Component( {
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  animations: [routerTransition()]
} )

export class CustomerListComponent implements OnInit {
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  ratingRange = [1, 2, 3, 4, 5];
  checkboxSeclectAll: boolean;
  businessList: Observable<DictionaryItem[]>;
  customerGroupList: Observable<DictionaryItem[]>;
  employeeList: Observable<DictionaryItem[]>;
  employeeGroupList: Observable<DictionaryItem[]>;
  pagedResult: PagedResult<CustomerListItem> = new PagedResult<CustomerListItem>();
  filterModel = new CustomerFilter();
  searchTerm$ = new BehaviorSubject<string>( CustomerModule.searchTerm );
  month: string;
  display: boolean = null;
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

  get disableSendEmail(): boolean {
    if ( this.pagedResult.items && this.pagedResult.items.filter( x => x.checkboxSelected ).length > 0 ) {
      return false;
    } else {
      return true;
    }
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

  get isPmsViewList(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerViewCustomerInformation' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsEditCustomer(): boolean {
    // sửa thông tin cơ bản
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerEditCustomer' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isPmsDeleteCustomer(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerDeleteCustomer' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get listPmsCreateCustomer(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerAddCustomer' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSendEmailCustomer(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerSendEmail' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsUploadDownloadTemplateCustomer(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerImportDownloadCustomerTemplate' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsExportFileCustomer(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerExportFile' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewInfoSummaryCustomer(): boolean {
    // xem sơ lược
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerSummary' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewInfoDetailCustomer(): boolean {
    // xem chi tiết
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerViewDetail' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewCommentCustomer(): boolean {
    // xem bình luận
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerViewComments' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsAddCommentCustomer(): boolean {
    // đăng bình luận
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerAddComment' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewActivityCustomer(): boolean {
    // các hoạt động
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerActivities' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewHistoryCustomer(): boolean {
    // các cập nhật
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerHistories' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewOpportunityCustomer(): boolean {
    // cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CustomerOpportunities' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isEysVisible(): boolean {
    // tslint:disable-next-line:max-line-length
    if ( this.isPmsViewInfoSummaryCustomer || this.isPmsViewInfoDetailCustomer || this.isPmsAddCommentCustomer || this.isPmsViewCommentCustomer || this.isPmsViewActivityCustomer || this.isPmsViewHistoryCustomer || this.isPmsViewOpportunityCustomer ) {
      return true;
    } else {
      return false;
    }
  }
  get isCongCu(): boolean {
    // tslint:disable-next-line:max-line-length
    if ( this.isPmsDeleteCustomer || this.isPmsSendEmailCustomer || this.isPmsUploadDownloadTemplateCustomer || this.isPmsExportFileCustomer ) {
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
    private dataService: DataService,
    private confirmationService: ConfirmationService,
    private customerService: CustomerService,
    private translateService: TranslateService,
    private excelService: ExcelService,
    private downloadTemplate: DownloadTemplateService,
    private spinner: NgxSpinnerService,
    private dialogService: DialogService,
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {
  }

  ngOnInit() {
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    this.month = ( moment().month() + 1 ).toString();
    window.scrollTo( 0, 0 );

    this.dtOptions = DATATABLE_CONFIG;
    this.filterModel = CustomerModule.filterModel;

    this.employeeList = this.dataService.getEmployeesFilter();
    this.employeeGroupList = this.dataService.getEmployeeGroupsFilter();
    this.businessList = this.dataService.getBusiness();
    this.customerGroupList = this.dataService.getCustomerGroups();

    this.searchTerm$.debounceTime( COMMON_CONSTANTS.SearchDelayTimeInMs )
      .distinctUntilChanged().subscribe( search => {
        CustomerModule.searchTerm = search;
        this.filter();
      } );
    this.route.queryParams.subscribe( params => {
      if ( params.hasUpcomingBirthday ) {
        this.filterModel.hasBirthday = true;
        this.display = true;
      } else {
        this.filterModel.hasBirthday = false;
        this.display = false;
      }
    } );

    this.dataService
      .getDefaultTableConfig( TableConfigType.ARCustomersCRM )
      .subscribe( data => {
        this.listColumnSetting = data;
        // tslint:disable-next-line:forin
        for ( const i in data ) {
          this.listColumnSettingTemp[i] = JSON.parse( JSON.stringify( data[i] ) );
        }
      } );

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

    this.confirmationService.confirm( 'Bạn có chắc chắn muốn xóa khách hàng này?',
      () => {
        that.customerService.delete( deleteIds ).subscribe( _ => {
          if ( this.pagedResult.items.length === deleteIds.length && +this.pagedResult.currentPage > 0 ) {
            this.pagedResult.currentPage = +this.pagedResult.currentPage - 1;
          }
          that.alertService.success( 'Đã xóa khách hàng!' );
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

  refresh( displayAlert: boolean = false ): void {
    this.loading = true;
    CustomerModule.currentPage = this.pagedResult.currentPage;
    CustomerModule.pageSize = this.pagedResult.pageSize;
    this.customerService
      .filter( this.searchTerm$.value,
        this.filterModel,
        CustomerModule.currentPage,
        this.pagedResult.pageSize )
      .subscribe( data => {
        this.rerender( data );
        if ( displayAlert ) {
          this.alertService.success( 'Dữ liệu đã được cập nhật mới nhất!' );
        }
        this.loading = false;
      }, err => this.loading = false );
  }

  filter() {
    this.loading = true;
    this.customerService
      .filter( this.searchTerm$.value,
        this.filterModel,
        CustomerModule.currentPage,
        this.pagedResult.pageSize )
      .subscribe( result => {
        CustomerModule.filterModel = this.filterModel;
        this.rerender( result );
        this.loading = false;
      }, err => this.spinner.hide() );
  }

  clearFilter() {
    this.filterModel = new CustomerFilter();
    this.filter();

  }

  fileChange( event ) {
    const fileList: FileList = event.target.files;
    const that = this;
    if ( fileList.length > 0 ) {
      const file = fileList[0];
      this.customerService.importFile( file )
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
    this.customerService
      .filter( this.searchTerm$.value,
        this.filterModel,
        0,
        999999999 )
      .subscribe( result => {
        const exportItems = result.items.map( x => {
          return {
            // 'Mã khách hàng': x.customerNumber ? x.customerNumber : '',
            'Tên khách hàng': x.customerName ? x.customerName : '',
            'Website': x.website ? x.website : '',
            'Fax': x.fax || '',
            'Điện thoại chính': x.customerPhone ? x.customerPhone : '',
            'Điện thoại phụ': x.phoneNumberExtra || '',
            'Mã chứng khoán': x.stockCode ? x.stockCode : '',
            'Mã số thuế': x.taxNo ? x.taxNo : '',
            'Email chính': x.email ? x.email : '',
            'Email phụ': x.emailExtra ? x.emailExtra : '',
            'Nhóm': this.translateService.instant( x.group || 'null' ),
            'Đánh giá': x.rating ? x.rating : 0,
            'Doanh thu/năm': x.revenue ? x.revenue : 0,
            'Loại khách hàng': this.translateService.instant( x.customerType || 'null' ),
            // 'Ngày thành lập công ty/Ngày sinh nhật': '',
            // 'Năm sinh âm': '',
            'Giới tính': this.translateService.instant( x.gender || 'null' ),

            'Người phụ trách': x.assignTo ? x.assignTo : '',
            'Nhóm phụ trách': x.assignToGroup || '',


            'Địa chỉ': x.address ? x.address : '',
            'Quận/huyện': x.location ? this.getLocation( x.location, 'District' ) : '',
            'Tỉnh/Thành phố': x.location ? this.getLocation( x.location, 'StateProvince' ) : '',
            'Quốc gia': x.location ? this.getLocation( x.location, 'Country' ) : '',
            'Mô tả chi tiết': x.description ? x.description : '',
          };
        } );
        this.excelService.exportAsExcelFile( exportItems, 'KhachHang' );
        this.loading = false;
      }, err => this.spinner.hide() );
  }

  getLocation( data: Location, type: string ): string {
    const result = data ? Utils.getLocation( data, type ) : '';
    return result;
  }

  downTemplate() {
    this.downloadTemplate.downloadTemplate( 'customer' )
      .subscribe( result => result );
  }

  openEmailEditor() {
    let listSelected = this.pagedResult.items.filter( x => x.checkboxSelected );
    const noEmailCount = listSelected.filter( x => !x.email ).length;
    if ( noEmailCount === listSelected.length ) {
      this.confirmationService.openConfirmationPopup( { text: 'Vui lòng chọn ít nhất một khách hàng có địa chỉ email' } );
    } else if ( noEmailCount === 0 ) {
      this.openMultiEmailEditor( listSelected );
    } else {
      const listNoEmail = listSelected.filter( i => !i.email ).map( i => i.customerName ).join( ', ' );
      this.confirmationService.confirm( `Khách hàng ${ listNoEmail } không có email, bạn có muốn tiếp tục không?`,
        () => {
          listSelected = listSelected.filter( i => i.email );
          this.openMultiEmailEditor( listSelected );
        } );
    }
  }

  openMultiEmailEditor( listSelected ) {
    const dialogRef = this.dialogService.open( {
      title: 'Email',
      content: EmailEditorComponent,
      width: window.screen.availWidth * 80 / 100
    } );
    const paramRef = dialogRef.content.instance;
    paramRef.emailList = listSelected.map( i => {
      const recipient = new EmailRecipientModel();
      recipient.email = i.email;
      recipient.id = Number( i.id );
      recipient.name = i.customerName;
      return recipient;
    } );
  }

  openSingleEmailEditor( email, id, customerName ) {
    if ( email ) {
      const dialogRef = this.dialogService.open( {
        title: 'Email',
        content: EmailEditorComponent,
        width: window.screen.availWidth * 80 / 100
      } );
      const paramRef = dialogRef.content.instance;
      const recipientList = [];
      const recipient = new EmailRecipientModel();
      recipient.email = email;
      recipient.id = Number( id );
      recipient.name = customerName;
      recipientList.push( recipient );
      paramRef.emailList = recipientList;
    }
  }
  columnSettingClick( id: number ) {
    const item = this.listColumnSettingTemp.find( i => i.id === id );
    item.hidden = !item.hidden;
    setTimeout( () => {
      if ( this.tablePin && this.tablePin.nativeElement ) {
        const table = this.tablePin.nativeElement as HTMLElement;
        const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
        scrollBar.style.width = table.offsetWidth + 100 + 'px';
      }
    } );
  }

  setColumnSetting( popup: any, toDefault = false ) {
    if ( toDefault ) {
      this.dataService
        .setTableConfig(
          this.listColumnSetting,
          TableConfigType.ARCustomersCRM,
          toDefault
        )
        .subscribe( data => {
          this.listColumnSettingTemp = data;
          this.listColumnSetting.forEach( ( e, i ) => e.hidden = this.listColumnSettingTemp[i].hidden );
          setTimeout( () => {
            if ( this.tablePin && this.tablePin.nativeElement ) {
              const table = this.tablePin.nativeElement as HTMLElement;
              const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
              scrollBar.style.width = table.offsetWidth + 100 + 'px';
            }
          } );
        } );

      popup.hide();
    } else {
      this.listColumnSetting.forEach( ( e, i ) => e.hidden = this.listColumnSettingTemp[i].hidden );
      this.dataService
        .setTableConfig(
          this.listColumnSetting,
          TableConfigType.ARCustomersCRM,
          toDefault
        )
        .subscribe( data => {
          this.listColumnSetting = data;
          setTimeout( () => {
            if ( this.tablePin && this.tablePin.nativeElement ) {
              const table = this.tablePin.nativeElement as HTMLElement;
              const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
              scrollBar.style.width = table.offsetWidth + 100 + 'px';
            }
          } );
        } );
      popup.hide();
    }
  }

  chooseAllColumnSetting( popup: any ) {
    this.listColumnSettingTemp.forEach( e => ( e.hidden = false ) );
    // this.setColumnSetting(popup);
  }

  getColumnShow( name: string ): boolean {
    if ( this.listColumnSetting && this.listColumnSetting.find( i => i.fieldName === name ) ) {
      return this.listColumnSetting.find( i => i.fieldName === name ).hidden;
    } else {
      return false;
    }
  }
  goToDeitalContact( contactId ) {
    this.router.navigate( [`/contact/detail/${ contactId }`] );
  }
  syncScroll1() {
    this.wrap2.scrollLeft = this.wrap1.scrollLeft;
  }

  syncScroll2() {
    this.wrap1.scrollLeft = this.wrap2.scrollLeft;
  }
  sethuy( popup: any ) {
    this.listColumnSettingTemp.forEach( ( e, i ) => e.hidden = this.listColumnSetting[i].hidden );
    popup.hide();
  }

  assignToGroupChange( groupId: string ) {
    // lọc nhân viên theo nhóm
    // if ( groupId != '0: null' ) {
    //   this.employeeList = Observable.create( data => data.next( [] ) );
    //   this.filterModel.assignTo = null;
    //   this.employeeList = this.dataService.getEmployeesFilter( groupId );
    // }

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
