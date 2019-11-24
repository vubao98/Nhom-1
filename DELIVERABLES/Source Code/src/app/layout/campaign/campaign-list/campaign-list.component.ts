import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DATATABLE_CONFIG } from '../../../shared/configs';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { CampaignService } from '../../../shared/services/campaign.service';
import { SessionService } from '../../../shared/services/session.service';
import { AlertService } from '../../../shared/services/alert.service';
import { CampaignModel, DictionaryItem, CampaignListItem, ProspectFilter } from '../../../shared/models/index';
import { DataService, ConfirmationService } from '../../../shared/services/index';
import { Router } from '@angular/router';
import { PagedResult } from '../../../shared/models';
import { Subscription } from 'rxjs/Subscription';
import { CampaignFilter } from '../../../shared/models/campaign/campaign-filter.model';
import { ExcelService } from '../../../shared/services/excel.service';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { CampaignModule } from '../campaign.module';
import { COMMON_CONSTANTS, USER_GROUP_ROLE } from '../../../shared/configs/common.config';
import { TableColumnConfig } from '../../../shared/models/table-column-config';
import { TableConfigType } from '../../../shared/constants/table-config-type.enum';
import { ProspectModule } from '../../prospect/prospect.module';
import { CustomerModule } from '../../customer/customer.module';
import { CustomerFilter } from '../../../shared/models/customer/customer-filter.model';
import { ContactModule } from '../../contact/contact.module';
import { ContactFilter } from '../../../shared/models/contact/contact-filter.model';
import { OpportunityModule } from '../../opportunity/opportunity.module';
import { OpportunityFilter } from '../../../shared/models/opportunity/opportunity-filter.model';
import { ActivityModule } from '../../activity/activity.module';
import { ActivityFilter } from '../../../shared/models/activity/activity-filter.model';
@Component( {
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss'],
  animations: [routerTransition()]
} )

export class CampaignListComponent implements OnInit {
  @ViewChild( DataTableDirective )
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  pagedResult: PagedResult<CampaignListItem> = new PagedResult<CampaignListItem>();
  checkboxSeclectAll: boolean;
  campaignStatusList: Observable<DictionaryItem[]>;
  campaignTypeList: Observable<DictionaryItem[]>;
  employeeList: Observable<DictionaryItem[]>;
  employeeGroupList: Observable<DictionaryItem[]>;
  filterModel = new CampaignFilter();
  searchTerm$ = new BehaviorSubject<string>( CampaignModule.searchTerm );

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
  get isCampaignAddCampaign(): boolean {
    //create chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignAddCampaign' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignViewInformation(): boolean {
    //xem thong tin chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignViewInformation' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignEditCampaign(): boolean {
    //edit chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignEditCampaign' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignDeleteCampaign(): boolean {
    //create chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignDeleteCampaign' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignExportFile(): boolean {
    //exuat file chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignExportFile' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignViewCampaignDetail(): boolean {
    //detail chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignViewCampaignDetail' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignHistories(): boolean {
    //cap nhat chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignHistories' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignAddComment(): boolean {
    //add binh luan chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignAddComment' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignViewComments(): boolean {
    //xem binh luan chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignViewComments' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignActivities(): boolean {
    //hoat dong chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'CampaignActivities' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // hyperlink
  get isEyeVisible(): boolean {
    if ( this.isCampaignViewCampaignDetail || this.isCampaignAddComment || this.isCampaignViewComments || this.isCampaignHistories || this.isCampaignActivities ) {
      return true;
    } else {
      return false;
    }
  }

  wrap1: HTMLElement;
  wrap2: HTMLElement;

  constructor (
    private alertService: AlertService,
    private confirmationService: ConfirmationService,
    private dataService: DataService,
    private campaignService: CampaignService,
    private excelService: ExcelService,
    private translateService: TranslateService,
    private spinner: NgxSpinnerService,
    private sessionService: SessionService
  ) {
  }

  ngOnInit() {
    window.scrollTo( 0, 0 );

    this.dtOptions = DATATABLE_CONFIG;
    this.filterModel = CampaignModule.filterModel;

    this.employeeList = this.dataService.getEmployeesFilter();
    this.employeeGroupList = this.dataService.getEmployeeGroupsFilter();
    this.campaignStatusList = this.dataService.getCampaignStatus();
    this.campaignTypeList = this.dataService.getCampaignTypes();

    this.searchTerm$.debounceTime( COMMON_CONSTANTS.SearchDelayTimeInMs )
      .distinctUntilChanged().subscribe( search => {
        CampaignModule.searchTerm = search;
        this.filter();
      } );
    this.dataService
      .getDefaultTableConfig( TableConfigType.ARCampaignsCRM )
      .subscribe( data => {
        this.listColumnSetting = data;
        // tslint:disable-next-line:forin
        for ( const ind in data ) {
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

    this.confirmationService.confirm( 'Bạn có chắc chắn muốn xóa chiến dịch này?',
      () => {
        that.campaignService.delete( deleteIds ).subscribe( _ => {
          if ( this.pagedResult.items.length === deleteIds.length && +this.pagedResult.currentPage > 0 ) {
            this.pagedResult.currentPage = +this.pagedResult.currentPage - 1;
          }
          that.alertService.success( 'Đã xóa chiến dịch!' );
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
  filter() {
    this.loading = true;
    CampaignModule.filterModel = this.filterModel;
    this.campaignService
      .filter( this.searchTerm$.value, this.filterModel, CampaignModule.currentPage, this.pagedResult.pageSize )
      .subscribe( result => {
        this.rerender( result );
        this.loading = false;
      }, err => this.loading = false );
  }

  clearFilter() {
    this.filterModel = new CampaignFilter();
    this.filter();

  }
  refresh( displayAlert: boolean = false ): void {
    this.loading = true;
    CampaignModule.currentPage = this.pagedResult.currentPage;
    CampaignModule.pageSize = this.pagedResult.pageSize;
    this.campaignService
      .filter( this.searchTerm$.value, this.filterModel, CampaignModule.currentPage, this.pagedResult.pageSize )
      .subscribe( result => {
        this.rerender( result );
        if ( displayAlert ) {
          this.alertService.success( 'Dữ liệu đã được cập nhật mới nhất!' );
        }
        this.loading = false;
      }, err => this.loading = false );
  }

  rerender( pagedResult: any ) {
    this.checkboxSeclectAll = false;
    this.pagedResult = pagedResult;
    this.pagedResult.items.forEach( i => {
      if ( i.category ) {
        this.dataService.getSettingTypeItem( 'campaign-types', i.category ).subscribe( data => i.categoryStr = data.text );
      }
    } )
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
    this.campaignService
      .filter( this.searchTerm$.value, this.filterModel, 0, 999999999 )
      .subscribe( result => {
        const exportItems = result.items.map( x => {
          return {
            'Mã chiến dịch': x.campaignNo || 'null',
            'Tên chiến dịch': x.name || 'null' ,
            'Trạng thái': this.translateService.instant( x.status || 'null' ),
            'Loại chiến dịch': this.translateService.instant( x.category || 'null' ),
            'Đối tượng tiếp thị': x.marketingObject ? x.marketingObject : '',
            'Thời gian tạo': moment( x.createdDate ).format( 'L' ),
            'Thời gian sửa đổi':  moment( x.updatedDate ).format( 'L' ),
            'Ngày bắt đầu': moment( x.campaignDateStart ).format( 'L' ),
            'Dự kiến xong': moment( x.campaignDateStop ).format( 'L' ),
            'Nhà tài trợ': x.donors ? x.donors : '',
            'Mục tiêu chiến dịch': x.target ? x.target : '',
            'KPI': (x.numberOfParticipants && x.numberOfParticipants + '%') || '',
            'Người phụ trách': x.assignTo ? x.assignTo : '',
            'Nhóm phụ trách': x.assignToGroup || '',
            'Mô tả': x.description ? x.description : '',

            // 'Số lượng': x.numberOfParticipants ? x.numberOfParticipants : 0,
            // 'Ngân sách': x.budget ? x.budget : '',
            // 'Hiệu quả đầu tư dự kiến': x.expectedInvestmentEfficiency ? x.expectedInvestmentEfficiency : '',
            // 'Doanh thu dự kiến': x.expectedRevenue ? x.expectedRevenue : '',
            // 'Chi phí thực tế': x.actualCost ? x.actualCost : '',
            // 'Hiệu quả đầu tư thực tế': x.actualInvestmentEfficiency ? x.actualInvestmentEfficiency : '',
            // 'Doanh thu thực tế': x.actualRevenue ? x.actualRevenue : '',
          };
        } );
        this.excelService.exportAsExcelFile( exportItems, 'ChienDich' );
        this.loading = false;
      }, err => this.loading = false );
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
        TableConfigType.ARCampaignsCRM,
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
      .getDefaultTableConfig( TableConfigType.ARCampaignsCRM )
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
    this.listColumnSettingTemp.forEach( ( e, i ) => ( e.hidden = this.hiddenArr[i] ) );
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
