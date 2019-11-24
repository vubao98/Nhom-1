import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../../router.animations';
import { Observable } from "rxjs/Observable";
import { ActivityModel, DictionaryItem } from '../../../../../shared/models/index';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ActivityService, OpportunityService, SessionService } from '../../../../../shared/services/index';
import { Router } from '@angular/router';
import { USER_GROUP_ROLE } from '../../../../../shared/configs/common.config';

@Component({
  selector: 'app-task-spec',
  templateUrl: './task-spec.component.html',
  styleUrls: ['./task-spec.component.scss'],
  animations: [routerTransition()]
})
export class TaskSpecComponent implements OnInit {
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;
  task$: Observable<ActivityModel>;
  selectedSpecificRelated: DictionaryItem;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  // Work
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
    // các cap nhat
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ActivityHistories' && i.category === 'Work').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private opportunityService: OpportunityService,
    private sessionService: SessionService,
    private router: Router) { }

  ngOnInit(): void {
    this.task$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.activityService.view(params.get('id'), 'Work'));
    this.task$.subscribe(activiti => {
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
