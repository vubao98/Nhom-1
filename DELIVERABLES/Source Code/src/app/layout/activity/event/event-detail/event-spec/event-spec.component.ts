import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../../router.animations';
import { Observable } from 'rxjs/Observable';
import { ActivityModel, DictionaryItem } from '../../../../../shared/models/index';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { ActivityService, OpportunityService, DataService, SessionService } from '../../../../../shared/services/index';
import { SettingItemModel } from '../../../../../shared/models/setting-item-model';
import { USER_GROUP_ROLE } from '../../../../../shared/configs/common.config';

@Component({
  selector: 'app-event-spec',
  templateUrl: './event-spec.component.html',
  styleUrls: ['./event-spec.component.scss'],
  animations: [routerTransition()]
})
export class EventSpecComponent implements OnInit {
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;
  event$: Observable<ActivityModel>;
  selectedSpecificRelated: DictionaryItem;
  eventTypeSettingItem: SettingItemModel;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
      if (this.sessionService.currentSession) {
        return this.sessionService.currentSession.role + '';
      } else {
        return '';
      }
  }

  // Event
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

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private dataService: DataService,
    private router: Router,
    private opportunityService: OpportunityService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.event$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.activityService.view(params.get('id'), 'Event'));
    this.event$.subscribe(activiti => {
      if (activiti.eventType) {
        this.dataService.getSettingTypeItem('event-types', activiti.eventType).subscribe(d => this.eventTypeSettingItem = d);
      }
      this.opportunityService.view(activiti.specificRelated.id)
            .subscribe(data => {
                this.selectedSpecificRelated = {
                    id: data.id,
                    text: data.customer && data.customer.name,
                    extra: data.customer && data.customer.name
                };
            });
    });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }
  onClick(moduleName, moduleItemId) {
    this.router.navigate([`/${moduleName.toLowerCase()}/detail/${moduleItemId}`]);

  }
}
