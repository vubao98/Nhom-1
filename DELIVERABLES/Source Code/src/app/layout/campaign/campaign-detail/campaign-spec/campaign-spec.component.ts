import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Observable } from "rxjs/Observable";
import { CampaignModel } from '../../../../shared/models/index';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlertService, CampaignService, DataService, SessionService } from '../../../../shared/services/index';
import { SettingItemModel } from '../../../../shared/models/setting-item-model';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-campaign-spec',
  templateUrl: './campaign-spec.component.html',
  styleUrls: ['./campaign-spec.component.scss'],
  animations: [routerTransition()]
})
export class CampaignSpecComponent implements OnInit {
  public isCollapsedMain = false;
  public isCollapsedAddress = false;
  public isCollapsedDesc = false;
  campaign$: Observable<CampaignModel>;
  categorySettingItem: SettingItemModel;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isCampaignViewCampaignDetail(): boolean {
    //detail chiến dịch
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CampaignViewCampaignDetail').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignHistories(): boolean {
    //cap nhat chiến dịch
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CampaignHistories').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignAddComment(): boolean {
    //add binh luan chiến dịch
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CampaignAddComment').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isCampaignViewComments(): boolean {
    //xem binh luan chiến dịch
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CampaignViewComments').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private dataService: DataService,
    private sessionService: SessionService,
    private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaign$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.campaignService.view(params.get('id')));
    this.campaign$.subscribe(data => {
      if (data.category) {
        this.dataService.getSettingTypeItem('campaign-types', data.category).subscribe(d => this.categorySettingItem = d);
      }
    });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
