import { Component, OnInit, Input } from '@angular/core';
import { DATATABLE_CONFIG } from '../../configs/index';
import { Observable } from 'rxjs/Observable';
import { DictionaryItem, PagedResult } from '../../models/index';
import { ActivityListItem } from '../../models/activity/activity-list-item.model';
// tslint:disable-next-line:import-blacklist
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { ActivityService, AlertService, DataService, ConfirmationService, SessionService } from '../../services/index';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { USER_GROUP_ROLE } from '../../configs/common.config';

@Component({
  selector: 'app-activity-table',
  templateUrl: './activity-table.component.html',
  styleUrls: ['./activity-table.component.scss']
})
export class ActivityTableComponent implements OnInit {

  @Input() moduleName: string;
  @Input() moduleItemId: string;
  @Input() moduleItemName: string;
  @Input() readOnly: boolean;
  activityStatusList: Observable<DictionaryItem[]>;

  dtOptions: any = DATATABLE_CONFIG;
  dtTrigger: Subject<any> = new Subject();
  pagedResult: PagedResult<ActivityListItem> = new PagedResult<ActivityListItem>();
  loading = true;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isActivityAddActivityEvent(): boolean {
    // create event
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isActivityAddActivityWork(): boolean {
    // create work
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  // detail Event
  get isActivityViewActivityDetailEvent(): boolean {
    // xem chi tiết
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityViewActivityDetail' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityAddCommentEvent(): boolean {
    // add comment 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityAddComment' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityViewCommentsEvent(): boolean {
    // view comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityViewComments' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityHistoriesEvent(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityHistories' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityEditActivityEvent(): boolean {
    // sửa 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityEditActivity' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityDeleteActivityEvent(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityDeleteActivity' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  // detail work


  get isActivityViewActivityDetailWork(): boolean {
    // xem chi tiết
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityViewActivityDetail' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityAddCommentWork(): boolean {
    // add comment 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityAddComment' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityViewCommentsWork(): boolean {
    // view comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityViewComments' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityHistoriesWork(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityHistories' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityEditActivityWork(): boolean {
    // sửa 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityEditActivity' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isActivityDeleteActivityWork(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityDeleteActivity' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private activityService: ActivityService,
    private alertService: AlertService,
    private dataService: DataService,
    private confirmationService: ConfirmationService,
    private sessionService: SessionService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.dtTrigger.next();
    this.dtOptions = DATATABLE_CONFIG;

    this.activityStatusList = this.dataService.getActivityStatus();

    this.loading = true;
    this.activityService
      .getActivitiesByModuleItemId(this.moduleName, this.moduleItemId, 0, 10)
      .subscribe(result => {
        this.rerender(result);
        this.loading = false;
      }, err => this.loading = false);

    this.listPermission = this.sessionService.getSession().userGroupFunctions;

  }

  pagedResultChange(pagedResult: any) {
    this.refresh();
  }

  delete(ids: any | any[], activityType?: string) {
    const that = this;
    let deleteIds = [];
    if (!(ids instanceof Array)) {
      deleteIds = [{ id: ids, activityType: activityType }];
    } else {
      deleteIds = ids;
    }

    this.confirmationService.confirm('Bạn có chắc chắn muốn xóa hoạt động này?',
      () => {
        that.activityService.delete(deleteIds).subscribe(_ => {
          if (this.pagedResult.items.length === deleteIds.length && +this.pagedResult.currentPage > 0) {
            this.pagedResult.currentPage = +this.pagedResult.currentPage - 1;
          }
          that.alertService.success('Đã xóa hoạt động!');
          that.refresh();
        });
      });
  }

  refresh(displayAlert: boolean = false): void {
    this.spinner.show();
    this.activityService
      .getActivitiesByModuleItemId(this.moduleName, this.moduleItemId, this.pagedResult.currentPage, this.pagedResult.pageSize)
      .subscribe(result => {
        this.rerender(result);
        if (displayAlert) {
          this.alertService.success('Dữ liệu đã được cập nhật mới nhất');
        }
        this.spinner.hide();
      }, err => this.spinner.hide());
  }

  rerender(pagedResult: any) {
    this.pagedResult = pagedResult;
    this.dtTrigger.next();
  }

  gotoCreateTaskPage() {
    this.sessionService.previousUrl = `${this.moduleName}/detail/${this.moduleItemId}/activity`;
    this.router.navigate(['/activity/task/create',
      {
        moduleName: this.moduleName,
        moduleItemId: this.moduleItemId,
        moduleItemName: this.moduleItemName,
      }]);
  }

  gotoCreateEventPage() {
    this.sessionService.previousUrl = `${this.moduleName}/detail/${this.moduleItemId}/activity`;
    this.router.navigate(['/activity/event/create',
      {
        moduleName: this.moduleName,
        moduleItemId: this.moduleItemId,
        moduleItemName: this.moduleItemName,
      }]);
  }

}
