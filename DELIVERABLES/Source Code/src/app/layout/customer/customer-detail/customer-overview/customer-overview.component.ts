import { routerTransition } from '../../../../router.animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService, SessionService } from '../../../../shared/services/index';
import { CustomerModel } from '../../../../shared/models/index';
import { Observable } from 'rxjs/Observable';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-customer-overview',
  templateUrl: './customer-overview.component.html',
  styleUrls: ['./customer-overview.component.scss'],
  animations: [routerTransition()]
})
export class CustomerOverviewComponent implements OnInit {
  customer$: Observable<CustomerModel>;
  public isCollapsedMain = false;
  public isCollapsedAddress = false;
  public isCollapsedDesc = false;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  get isPmsViewInfoSummaryCustomer(): boolean {
    // xem sơ lược
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CustomerSummary').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewCommentCustomer(): boolean {
    // xem bình luận
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CustomerViewComments').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsAddCommentCustomer(): boolean {
    // đăng bình luận
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CustomerAddComment').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsViewActivityCustomer(): boolean {
    // các hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CustomerActivities').length > 0 ? true : false;
    } else {
      return false;
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
    private customerService: CustomerService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.customer$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.customerService.view(params.get('id')));
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
