import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';
import { SessionService } from '../../../../shared/services';

@Component({
  selector: 'app-opportunity-audit',
  templateUrl: './opportunity-audit.component.html',
  styleUrls: ['./opportunity-audit.component.scss']
})
export class OpportunityAuditComponent implements OnInit {

  id: string;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
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
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => this.id = value.id);
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
