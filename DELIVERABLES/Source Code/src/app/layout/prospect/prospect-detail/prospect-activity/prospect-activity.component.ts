import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService, SessionService } from '../../../../shared/services/index';
import { Observable } from "rxjs/Observable";
import { ProspectModel } from '../../../../shared/models/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-prospect-activity',
  templateUrl: './prospect-activity.component.html',
  styleUrls: ['./prospect-activity.component.scss']
})
export class ProspectActivityComponent implements OnInit {

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
  get isProspectActivities(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectActivities').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private prospectService: ProspectService,
    private sessionService: SessionService
  ) { }
  prospect$: Observable<ProspectModel>;
  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.prospectService.view(this.id).subscribe(result => {
        this.name = result.fullName;
      });
    });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
