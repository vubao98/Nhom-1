import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { DATATABLE_CONFIG } from '../../../shared/configs';
import {
    AlertService,
    ConfirmationService,
    DataService,
    SessionService
} from '../../../shared/services/';
// tslint:disable-next-line:import-blacklist
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { ActivityListItem } from '../../../shared/models/activity/activity-list-item.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../../shared/services/activity.service';
import { PagedResult, DictionaryItem, ProspectFilter } from '../../../shared/models';
import { ActivityFilter } from '../../../shared/models/activity/activity-filter.model';
import { ExcelService } from '../../../shared/services/excel.service';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { DATETIME_PICKER_CONFIG } from '../../../shared/configs/datepicker.config';
import { DownloadTemplateService } from '../../../shared/services/download-template.service';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import ValidationHelper from '../../../shared/helpers/validation.helper';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivityModule } from '../activity.module';
import { COMMON_CONSTANTS, USER_GROUP_ROLE } from '../../../shared/configs/common.config';
import { TableColumnConfig } from '../../../shared/models/table-column-config';
import { TableConfigType } from '../../../shared/constants/table-config-type.enum';
import DateTimeConvertHelper from '../../../shared/helpers/datetime-convert-helper';
@Component( {
    selector: 'app-activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss'],
    animations: [routerTransition()]
} )
export class ActivityListComponent implements OnInit {
    activityStatusList: Observable<DictionaryItem[]>;
    checkboxSeclectAll: boolean;
    dtOptions: any = DATATABLE_CONFIG;
    dtTrigger: Subject<any> = new Subject();
    filterModel = new ActivityFilter();
    pagedResult: PagedResult<ActivityListItem> = new PagedResult<
        ActivityListItem
        >();
    employeeList: Observable<DictionaryItem[]>;
    employeeGroupList: Observable<DictionaryItem[]>;
    datePickerConfig = DATETIME_PICKER_CONFIG;
    activityForm: FormGroup;
    formErrors = {
        startDate: '',
        endDate: ''
    };
    date = {
        Day: 23,
        Month: 5,
        Year: 2018
    };
    isSubmitted: boolean;
    invalidMessages: string[];
    today;
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
    // Event
    get isActivityAddActivityEvent(): boolean {
        // create event
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityViewInformationEvent(): boolean {
        // xem thong tin
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityViewInformation' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityEditActivityEvent(): boolean {
        // sửa
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityEditActivity' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityDeleteActivityEvent(): boolean {
        // xóa các hoạt động
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityDeleteActivity' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityExportFileEvent(): boolean {
        // xuat file
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityExportFile' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityViewActivityDetailEvent(): boolean {
        // xem chi tiết
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityViewActivityDetail' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityAddCommentEvent(): boolean {
        // add comment 
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityAddComment' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityViewCommentsEvent(): boolean {
        // view comment
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityViewComments' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityHistoriesEvent(): boolean {
        // các hoạt động
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityHistories' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityImportDownloadTemplateEvent(): boolean {
        // nhập file và tải template
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityImportDownloadActivityTemplate' && i.category === 'Event' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }


    // Work
    get isActivityAddActivityWork(): boolean {
        // create work
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityViewInformationWork(): boolean {
        // xem thong tin
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityViewInformation' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityEditActivityWork(): boolean {
        // sửa
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityEditActivity' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityDeleteActivityWork(): boolean {
        // xoa hoạt động
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityDeleteActivity' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityExportFileWork(): boolean {
        // xuat file
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityExportFile' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityViewActivityDetailWork(): boolean {
        // xem chi tiết
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityViewActivityDetail' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityAddCommentWork(): boolean {
        // add comment
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityAddComment' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityViewCommentsWork(): boolean {
        // view comment
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityViewComments' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityHistoriesWork(): boolean {
        // các hoạt động
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityHistories' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityImportDownloadTemplateWork(): boolean {
        // nhập file và tải tempalte
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityImportDownloadActivityTemplate' && i.category === 'Work' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isCongCu(): boolean {
        if ( this.isActivityDeleteActivityEvent || this.isActivityExportFileEvent || this.isActivityDeleteActivityWork || this.isActivityExportFileWork ) {
            return true;
        } else {
            return false;
        }
    }

    wrap1: HTMLElement;
    wrap2: HTMLElement;

    constructor (
        private activityService: ActivityService,
        private alertService: AlertService,
        private dataService: DataService,
        private confirmationService: ConfirmationService,
        private router: Router,
        private excelService: ExcelService,
        private translateService: TranslateService,
        private downloadTemplate: DownloadTemplateService,
        private fb: FormBuilder,
        private spinner: NgxSpinnerService,
        private sessionService: SessionService,
        private activatedRoute: ActivatedRoute,
    ) {
        this.today = moment().unix() * 1000;
    }

    searchTerm$ = new BehaviorSubject<string>( ActivityModule.searchTerm );

    ngOnInit() {
        window.scrollTo( 0, 0 );
        this.employeeList = this.dataService.getEmployeesFilter();
        this.employeeGroupList = this.dataService.getEmployeeGroupsFilter();
        this.dtOptions = DATATABLE_CONFIG;
        this.createForm();

        // mapping filterModel khi xem tab hoạt động từ email công việc hằng ngày
        const startDateQueryParam = this.activatedRoute.snapshot.queryParamMap.get( 'startDate' );
        if ( startDateQueryParam ) {
            ActivityModule.filterModel.fromDate = +startDateQueryParam;
            this.activityForm.get( 'startDate' ).patchValue( DateTimeConvertHelper.fromTimestampToDtObject( +startDateQueryParam ) );
        }
        const endDateQueryParam = this.activatedRoute.snapshot.queryParamMap.get( 'endDate' );
        if ( endDateQueryParam ) {
            ActivityModule.filterModel.toDate = +endDateQueryParam;
            this.activityForm.get( 'endDate' ).patchValue( DateTimeConvertHelper.fromTimestampToDtObject( +startDateQueryParam ) );
        }
        if ( startDateQueryParam && endDateQueryParam ) {
            const userInfo = this.sessionService.currentSession;
            ActivityModule.filterModel.assignmentEmployeeId = userInfo.objectId.toString();
        }

        this.filterModel = ActivityModule.filterModel;

        this.activityStatusList = this.dataService.getActivityStatus();

        this.searchTerm$.debounceTime( COMMON_CONSTANTS.SearchDelayTimeInMs )
            .distinctUntilChanged().subscribe( search => {
                ActivityModule.searchTerm = search;
                this.filter();
            } );
        this.dataService
            .getDefaultTableConfig( TableConfigType.ARActivitysCRM )
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
    createForm() {
        this.activityForm = this.fb.group( {
            // startDate: [
            //     DateTimeConvertHelper.fromTimestampToDtObject(
            //         moment().valueOf()
            //     ),
            //     Validators.required
            // ],
            startDate: [''],
            endDate: ['']
        } );
        this.activityForm.valueChanges.subscribe( data =>
            this.onFormValueChanged( data )
        );
    }
    onFormValueChanged( data?: any ) {
        if ( this.isSubmitted ) {
            this.validateForm();
        }
    }

    validateForm() {
        this.invalidMessages = ValidationHelper.getInvalidMessages(
            this.activityForm,
            this.formErrors
        );
        return this.invalidMessages.length === 0;
    }

    onClick( moduleName, moduleItemId ) {
        this.router.navigate( [
            `/${ moduleName.toLowerCase() }/detail/${ moduleItemId }`
        ] );
    }
    pagedResultChange( pagedResult: any ) {
        this.refresh();
    }

    delete( ids: any | any[], activityType?: string ) {
        const that = this;
        let deleteIds = [];
        if ( !( ids instanceof Array ) ) {
            deleteIds = [{ id: ids, activityType: activityType }];
        } else {
            deleteIds = ids;
        }

        this.confirmationService.confirm(
            'Bạn có chắc chắn muốn xóa hoạt động này?',
            () => {
                that.activityService.delete( deleteIds ).subscribe( _ => {
                    if (
                        this.pagedResult.items.length === deleteIds.length &&
                        +this.pagedResult.currentPage > 0
                    ) {
                        this.pagedResult.currentPage =
                            +this.pagedResult.currentPage - 1;
                    }
                    that.alertService.success( 'Đã xóa hoạt động!' );
                    that.refresh();
                } );
            }
        );
    }

    multiDelete() {
        const deleteIds = this.pagedResult.items
            .filter( x => x.checkboxSelected )
            .map( x => {
                return {
                    id: +x.id,
                    activityType: x.activityType ? x.activityType.toLowerCase() : ''
                };
            } );
        if ( deleteIds.length === 0 ) {
            this.alertService.error(
                'Bạn phải chọn ít nhất một đối tượng để xóa!'
            );
        } else {
            this.delete( deleteIds );
        }
    }

    filter( clear: boolean = false ) {
        ActivityModule.filterModel = this.filterModel;
        if ( clear ) {
            this.loading = true;
            this.activityService
                .filter(
                    this.searchTerm$.value,
                    this.filterModel,
                    ActivityModule.currentPage,
                    this.pagedResult.pageSize
                )
                .subscribe( result => {
                    this.rerender( result );
                    this.loading = false;
                }, err => {
                    this.loading = false;
                } );
            this.createForm();
        }
        const today = new Date(
            moment( this.activityForm.value.startDate ).unix() * 1000
        );
        const h = today.getHours();
        const m = today.getMinutes();
        const s = today.getSeconds();
        this.filterModel.fromDate =
            ( moment( this.activityForm.value.startDate ).unix() -
                h * 60 * 60 -
                m * 60 -
                s ) *
            1000;
        this.filterModel.toDate =
            ( moment( this.activityForm.value.endDate ).unix() +
                24 * 60 * 60 -
                1 ) *
            1000;
        this.loading = true;
        this.activityService
            .filter(
                this.searchTerm$.value,
                this.filterModel,
                0,
                this.pagedResult.pageSize
            )
            .subscribe( result => {
                this.rerender( result );
                this.loading = false;
            }, err => {
                this.loading = false;
            } );
    }

    clearFilter() {
        this.filterModel = new ActivityFilter();
        this.filter( true );
    }

    fileChange( event ) {
        const fileList: FileList = event.target.files;
        const that = this;
        if ( fileList.length > 0 ) {
            const file = fileList[0];
            this.activityService.importFile( file ).subscribe(
                result => {
                    that.refresh();
                    this.alertService.success(
                        'Bạn đã nhập dữ liệu thành công!'
                    );
                    event.target.value = null;
                },
                err => {
                    // this.alertService.error(
                    //     'Bạn đã nhập dữ liệu thất bại, vui lòng nhập đúng template!'
                    // );
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

    refresh( displayAlert: boolean = false ): void {
        this.loading = true;
        ActivityModule.currentPage = this.pagedResult.currentPage;
        ActivityModule.pageSize = this.pagedResult.pageSize;
        this.activityService
            .filter(
                this.searchTerm$.value,
                this.filterModel,
                ActivityModule.currentPage,
                this.pagedResult.pageSize
            )
            .subscribe( result => {
                this.rerender( result );
                this.loading = false;
                if ( displayAlert ) {
                    this.alertService.success(
                        'Dữ liệu đã được cập nhật mới nhất'
                    );
                }
            }, err => this.loading = false );
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
        this.pagedResult.items.forEach( x => ( x.checkboxSelected = value ) );
    }

    exportFileExcel() {
        this.activityService
            .filter(
                this.searchTerm$.value,
                this.filterModel,
                0,
                999999999
            )
            .subscribe( result => {
                this.exportExcel( result );
                this.loading = false;
            }, err => {
                this.loading = false;
            } );
    }

    exportExcel( result: any ) {
        const exportItems = result.items.map( x => {
            return {
                'Tiêu đề': x.name ? x.name : '',
                Loại: this.translateService.instant( x.activityType || 'null' ),
                'Ngày giờ bắt đầu': `${ moment( x.startDate ).format(
                    'L'
                ) } ${ moment( x.startDate ).format( 'LT' ) }`,
                'Ngày giờ kết thúc': `${ moment( x.endDate ).format( 'L' ) } ${ moment(
                    x.endDate
                ).format( 'LT' ) }`,
                'Trạng thái': ( x.status && x.status === 'New' ) ? 'Sẽ thực hiện' : this.translateService.instant( x.status || 'null' ),
                'Vị trí': x.address ? x.address : '',
                'Liên quan đến loại': this.translateService.instant(
                    x.relatedToType || 'null'
                ),
                'Cụ thể liên quan': x.specificRelated
                    ? `${ x.specificRelated.name ? x.specificRelated.name : '' }`
                    : '',


                'Người phụ trách': x.assignTo ? x.assignTo : '',
                'Nhóm phụ trách': x.assignToGroup || '',
            };
        } );
        this.excelService.exportAsExcelFile( exportItems, 'HoatDong' );
    }

    downTemplate() {
        this.downloadTemplate
            .downloadTemplate( 'activity' )
            .subscribe( result => result );
    }

    goToReleatedToType( moduleName, moduleItemId ) {
        this.router.navigate( [`/${ moduleName.toLowerCase() }/detail/${ moduleItemId }`] );
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
                TableConfigType.ARActivitysCRM,
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
            .getDefaultTableConfig( TableConfigType.ARActivitysCRM )
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
            this.filterModel.assignmentEmployeeGroupId = null;
        }
        // lọc nhân viên theo nhóm
        if ( groupId !== 'null' ) {
            this.employeeList = Observable.create( data => data.next( [] ) );
            this.filterModel.assignmentEmployeeId = null;
            this.employeeList = this.dataService.getEmployeesFilter( groupId && groupId !== '0' ? groupId : null );
        }
    }
}
