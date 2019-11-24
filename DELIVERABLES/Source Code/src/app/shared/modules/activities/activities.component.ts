import { Component, OnInit, Input } from '@angular/core';
import { ActivityListItem } from '../../models/activity/activity-list-item.model';
import { ActivityService, DataService, SessionService } from '../../services/index';
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';
import { USER_GROUP_ROLE } from '../../configs/common.config';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  @Input() moduleName: string;
  @Input() moduleItemId: number;
  @Input() moduleItemName: string;
  @Input() readOnly: boolean;
  @Input() viewActivities: boolean;
  activities: ActivityListItem[];

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
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Event').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isActivityAddActivityWork(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityAddActivity' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private activityService: ActivityService,
    private dataService: DataService,
    private sessionService: SessionService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activityService
      .getActivitiesByModuleItemId(this.moduleName, this.moduleItemId, 0, 5)
      .subscribe(pagedResult => {
        this.activities = pagedResult.items;
        this.activities.forEach(i => {
          if (i.eventType) {
            this.dataService.getSettingTypeItem('event-types', i.eventType).subscribe(d => i.eventTypeStr = d.text);
          }
        });
      });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }


  gotoCreateTaskPage() {
    this.router.navigate(['/activity/task/create',
      {
        moduleName: this.moduleName,
        moduleItemId: this.moduleItemId,
        moduleItemName: this.moduleItemName,
      }]);
  }

  gotoCreateEventPage() {
    this.router.navigate(['/activity/event/create',
      {
        moduleName: this.moduleName,
        moduleItemId: this.moduleItemId,
        moduleItemName: this.moduleItemName,
      }]);
  }

}
