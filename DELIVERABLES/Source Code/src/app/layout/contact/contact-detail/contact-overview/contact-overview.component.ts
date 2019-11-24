import { routerTransition } from '../../../../router.animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ContactModel } from '../../../../shared/models/index';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactService, SessionService } from '../../../../shared/services/index';
import Utils from '../../../../shared/helpers/utils.helper';
import { Location } from '../../../../shared/models/location';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-contact-overview',
  templateUrl: './contact-overview.component.html',
  styleUrls: ['./contact-overview.component.scss'],
  animations: [routerTransition()]
})
export class ContactOverviewComponent implements OnInit {
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;

  contact$: Observable<ContactModel>;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  get isContactContactSummary(): boolean {
    // sơ lược
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactContactSummary').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactHistories(): boolean {
    // xem cập nhật
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactHistories').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactActivities(): boolean {
    // xem hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactActivities').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactViewComments(): boolean {
    // xem comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactViewComments').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isContactComments(): boolean {
    // đăng comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactComments').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.contactService.view(params.get('id')));
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

  goToDeitalCustomer(customerId) {
    this.router.navigate([`/customer/detail/${customerId}`]);
  }

  getLocation(data: Location, type: string): string {
    const result = data ? Utils.getLocation(data, type) : '';
    return result;
  }
}
