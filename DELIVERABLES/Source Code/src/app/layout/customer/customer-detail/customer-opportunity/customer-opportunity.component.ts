import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, SessionService } from '../../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-customer-opportunity',
  templateUrl: './customer-opportunity.component.html',
  styleUrls: ['./customer-opportunity.component.scss']
})
export class CustomerOpportunityComponent implements OnInit {
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
  get isCustomerOpportunities(): boolean {
    // view cơ hội
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CustomerOpportunities').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.customerService.view(this.id).subscribe(result => this.name = result.name);
      this.listPermission = this.sessionService.getSession().userGroupFunctions;
    });
  }

}
