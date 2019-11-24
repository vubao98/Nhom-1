import { routerTransition } from '../../../../router.animations';
import { Component, OnInit } from '@angular/core';
import { OpportunityModel } from '../../../../shared/models/index';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlertService, OpportunityService, SessionService } from '../../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-opportunity-overview',
  templateUrl: './opportunity-overview.component.html',
  styleUrls: ['./opportunity-overview.component.scss'],
  animations: [routerTransition()]
})
export class OpportunityOverviewComponent implements OnInit {
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;
  opportunity$: Observable<OpportunityModel>;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isOpportunityOpportunitySummary(): boolean {
    // so luoc cơ hội
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityOpportunitySummary').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityViewOpportunityDetail(): boolean {
    // chi tiet cơ hội
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityViewOpportunityDetail').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityViewComments(): boolean {
    // xem binh luan cơ hội
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityViewComments').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityAddComment(): boolean {
    // dang binh luan cơ hội
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityAddComment').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityActivites(): boolean {
    // cac hoat dong
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityActivites').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityHistories(): boolean {
    //  cap nhat
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityHistories').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private sessionService: SessionService,
    private opportunityService: OpportunityService) { }

  ngOnInit(): void {
    this.opportunity$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.opportunityService.view(params.get('id')));
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }
  goToDeitalContact(contactId) {
    this.router.navigate([`/contact/detail/${contactId}`]);
  }


}
