import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignService, SessionService } from '../../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-campaign-activity',
  templateUrl: './campaign-activity.component.html',
  styleUrls: ['./campaign-activity.component.scss']
})
export class CampaignActivityComponent implements OnInit {

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
  get isCampaignActivities(): boolean {
    //hoat dong chiến dịch
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CampaignActivities').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private campaignService: CampaignService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.campaignService.view(this.id)
        .subscribe(result => this.name = result.name);
    });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
