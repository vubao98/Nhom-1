import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpportunityService, SessionService } from '../../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-opportunity-activity',
  templateUrl: './opportunity-activity.component.html',
  styleUrls: ['./opportunity-activity.component.scss']
})
export class OpportunityActivityComponent implements OnInit {

  id: string;
  name: string;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
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

  constructor(
    private route: ActivatedRoute,
    private opportunityService: OpportunityService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.opportunityService.view(this.id)
      .subscribe(result => this.name = result.name);
    } );
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
