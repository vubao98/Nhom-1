import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Observable } from "rxjs/Observable";
import { OpportunityModel } from '../../../../shared/models/index';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlertService, OpportunityService, DataService, SessionService } from '../../../../shared/services/index';
import { SettingItemModel } from '../../../../shared/models/setting-item-model';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-opportunity-spec',
  templateUrl: './opportunity-spec.component.html',
  styleUrls: ['./opportunity-spec.component.scss'],
  animations: [routerTransition()]
})
export class OpportunitySpecComponent implements OnInit {
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;
  opportunity$: Observable<OpportunityModel>;
  stepItem: SettingItemModel;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private dataService: DataService,
    private sessionService: SessionService,
    private opportunityService: OpportunityService) { }

  ngOnInit(): void {
    this.opportunity$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.opportunityService.view(params.get('id')));
    this.opportunity$.subscribe(data => {
      if (data.phase) {
        this.dataService.getSettingTypeItem('opportunity-steps', data.phase).subscribe(d => this.stepItem = d);
      }
    });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }
  goToDeitalContact(contactId) {
    this.router.navigate([`/contact/detail/${contactId}`]);
  }

}
