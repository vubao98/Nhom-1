import { DataTableDirective } from 'angular-datatables';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DATATABLE_CONFIG } from '../../../shared/configs';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { SessionService, AlertService, DataService, ConfirmationService } from '../../../shared/services/index';
import { OpportunityService } from '../../../shared/services/opportunity.service';
import { OpportunityListItem } from '../../../shared/models/opportunity/opportunity-list-item.model';
import { DictionaryItem, ProspectFilter } from '../../../shared/models/index';
import { Router } from '@angular/router';
import { PagedResult } from '../../../shared/models';
import { Subscription } from 'rxjs/Subscription';
import { OpportunityFilter } from '../../../shared/models/opportunity/opportunity-filter.model';
import { ExcelService } from '../../../shared/services/excel.service';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { OpportunityModule } from '../opportunity.module';
import { COMMON_CONSTANTS, USER_GROUP_ROLE } from '../../../shared/configs/common.config';
import { TableColumnConfig } from '../../../shared/models/table-column-config';
import { TableConfigType } from '../../../shared/constants/table-config-type.enum';
import { CustomerModule } from '../../customer/customer.module';
import { CustomerFilter } from '../../../shared/models/customer/customer-filter.model';
import { ProspectModule } from '../../prospect/prospect.module';
import { ContactModule } from '../../contact/contact.module';
import { ContactFilter } from '../../../shared/models/contact/contact-filter.model';
import { CampaignModule } from '../../campaign/campaign.module';
import { CampaignFilter } from '../../../shared/models/campaign/campaign-filter.model';
import { ActivityModule } from '../../activity/activity.module';
import { ActivityFilter } from '../../../shared/models/activity/activity-filter.model';

@Component( {
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss'],
  animations: [routerTransition()]
} )

export class OpportunityListComponent implements OnInit {
  @ViewChild( DataTableDirective )
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  ratingRange = [1, 2, 3, 4, 5];
  pagedResult: PagedResult<OpportunityListItem> = new PagedResult<OpportunityListItem>();
  filterModel = new OpportunityFilter();
  opportunityClassifyList: Observable<DictionaryItem[]>;
  opportunityStepList: Observable<DictionaryItem[]>;
  employeeList: Observable<DictionaryItem[]>;
  employeeGroupList: Observable<DictionaryItem[]>;
  prospectList: Observable<DictionaryItem[]>;
  checkboxSeclectAll: boolean;
  searchTerm$ = new BehaviorSubject<string>( OpportunityModule.searchTerm );
  isLeader = false;
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

  get isOpportunityAddOpportunity(): boolean {
    // create cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityAddOpportunity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityViewOpportunityInformation(): boolean {
    //  xem thong tin cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityViewOpportunityInformation' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityEditOpportunity(): boolean {
    // sua cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityEditOpportunity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityDeleteOpportunity(): boolean {
    // xoa cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityDeleteOpportunity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityExportFile(): boolean {
    // xuat file cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityExportFile' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityOpportunitySummary(): boolean {
    // so luoc cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityOpportunitySummary' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityViewOpportunityDetail(): boolean {
    // chi tiet cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityViewOpportunityDetail' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityViewComments(): boolean {
    // xem binh luan cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityViewComments' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityAddComment(): boolean {
    // dang binh luan cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityAddComment' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityActivites(): boolean {
    // cac hoat dong
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityActivites' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityHistories(): boolean {
    //  cap nhat
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'OpportunityHistories' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isEyeVisible(): boolean {
    //  hyperlink
    // tslint:disable-next-line:max-line-length
    if ( this.isOpportunityOpportunitySummary || this.isOpportunityViewOpportunityDetail || this.isOpportunityAddComment || this.isOpportunityViewComments || this.isOpportunityActivites || this.isOpportunityHistories ) {
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
    private opportunityService: OpportunityService,
    private excelService: ExcelService,
    private translateService: TranslateService,
    private spinner: NgxSpinnerService,
    private sessionService: SessionService
  ) {
  }

  ngOnInit() {
    window.scrollTo( 0, 0 );

    this.dtOptions = DATATABLE_CONFIG;
    this.filterModel = OpportunityModule.filterModel;

    this.opportunityClassifyList = this.dataService.getOpportunityClassifies();
    this.opportunityStepList = this.dataService.getOpportunitySteps();
    this.employeeList = this.dataService.getEmployeesFilter();
    this.employeeGroupList = this.dataService.getEmployeeGroupsFilter();
    this.prospectList = this.dataService.getProspectSources();

    this.searchTerm$.debounceTime( COMMON_CONSTANTS.SearchDelayTimeInMs )
      .distinctUntilChanged().subscribe( search => {
        OpportunityModule.searchTerm = search;
        this.filter();
      } );

    const session = this.sessionService.getSession();
    const leaders = session.isLeaders;
    if ( leaders && leaders.length > 0 ) {
      this.isLeader = leaders.some( x => x.isLeader === true );
    }
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    this.dataService
      .getDefaultTableConfig( TableConfigType.AROpportunitysCRM )
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

    this.confirmationService.confirm( 'Bạn có chắc chắn muốn xóa cơ hội này?',
      () => {
        that.opportunityService.delete( deleteIds ).subscribe( _ => {
          if ( this.pagedResult.items.length === deleteIds.length && +this.pagedResult.currentPage > 0 ) {
            this.pagedResult.currentPage = +this.pagedResult.currentPage - 1;
          }
          that.alertService.success( 'Đã xóa cơ hội!' );
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
    OpportunityModule.currentPage = this.pagedResult.currentPage;
    OpportunityModule.pageSize = this.pagedResult.pageSize;
    this.opportunityService
      .filter( this.searchTerm$.value, this.filterModel, OpportunityModule.currentPage, this.pagedResult.pageSize )
      .subscribe( result => {
        this.rerender( result );
        if ( displayAlert ) {
          this.alertService.success( 'Dữ liệu đã được cập nhật mới nhất!' );
        }
        this.loading = false;
      }, err => this.loading = false );
  }

  filter() {
    OpportunityModule.filterModel = this.filterModel;
    this.loading = true;
    this.opportunityService
      .filter( this.searchTerm$.value, this.filterModel, OpportunityModule.currentPage, this.pagedResult.pageSize )
      .subscribe( result => {
        this.rerender( result );
        this.loading = false;
      }, err => this.loading = false );
  }

  clearFilter() {
    this.filterModel = new OpportunityFilter();
    this.filter();
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
    this.opportunityService
      .filter( this.searchTerm$.value, this.filterModel, 0, 999999999 )
      .subscribe( result => {
        const exportItems = result.items.map( x => {
          return {
            'Tên cơ hội': x.opportunityName ? x.opportunityName : '',
            'Khách hàng': x.customerName ? x.customerName : '',
            'Số điện thoại': x.tel1 ? x.tel1 : '',
            'Liên hệ': x.contact || '',
            'Phân loại': this.translateService.instant( x.category || 'null' ),
            'Giá trị dự kiến': x.expectedValue ? x.expectedValue : 0,
            'Giai đoạn': this.translateService.instant( x.phase || 'null' ),
            'Xác suất': x.probability ? x.probability : 'Không có',

            'Người phụ trách': x.assignTo ? x.assignTo : '',
            'Nhóm phụ trách': x.assignToGroup || '',
          };
        } );
        this.excelService.exportAsExcelFile( exportItems, 'CoHoi' );
        this.loading = false;
      }, err => this.loading = false );
  }
  columnSettingClick( id: number ) {
    const item = this.listColumnSetting.find( i => i.id === id );
    item.hidden = !item.hidden;
  }

  setColumnSetting( popup: any, toDefault = false ) {
    if ( toDefault ) {
      this.dataService
        .setTableConfig(
          this.listColumnSetting,
          TableConfigType.AROpportunitysCRM,
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
          TableConfigType.AROpportunitysCRM,
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
  sethuy( popup: any ) {
    this.listColumnSettingTemp.forEach( ( e, i ) => e.hidden = this.listColumnSetting[i].hidden );
    popup.hide();
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


