import { routerTransition } from '../../../../router.animations';
import { Component, OnInit } from '@angular/core';
import { ProspectModel } from '../../../../shared/models';
import { ProspectService, SessionService } from '../../../../shared/services';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location } from '../../../../shared/models/location';
import Utils from '../../../../shared/helpers/utils.helper';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-prospect-overview',
  templateUrl: './prospect-overview.component.html',
  styleUrls: ['./prospect-overview.component.scss'],
  animations: [routerTransition()]
})
export class ProspectOverviewComponent implements OnInit {
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;
  prospect$: Observable<ProspectModel>;

  listPermission: any[];

  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  get isProspectProspectSummary(): boolean {
    // sơ lược
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectProspectSummary').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isProspectAddComment(): boolean {
    // add comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectAddComment').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isProspectViewComments(): boolean {
    // view comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectViewComments').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isProspectActivities(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectActivities').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isProspectHistories(): boolean {
    // các cập nhật
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectHistories').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private prospectService: ProspectService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.prospect$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.prospectService.view(params.get('id')));
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

  getLocation(data: Location, type: string): string {
    const result = data ? Utils.getLocation(data, type) : '';
    return result;
  }
}
