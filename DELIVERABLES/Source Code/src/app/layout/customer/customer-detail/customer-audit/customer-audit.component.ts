import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';
import { SessionService } from '../../../../shared/services';

@Component({
  selector: 'app-customer-audit',
  templateUrl: './customer-audit.component.html',
  styleUrls: ['./customer-audit.component.scss']
})
export class CustomerAuditComponent implements OnInit {

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

  get isPmsViewHistoryCustomer(): boolean {
    // các cập nhật
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CustomerHistories').length > 0 ? true : false;
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
