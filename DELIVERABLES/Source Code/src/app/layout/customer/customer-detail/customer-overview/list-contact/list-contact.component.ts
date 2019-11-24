import { Component, OnInit, Input } from '@angular/core';
import { CustomerService, SessionService } from '../../../../../shared/services';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { USER_GROUP_ROLE } from '../../../../../shared/configs/common.config';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  @Input() customerId: number;
  @Input() customerName: string;

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
  get isContactAddContact(): boolean {
    // thêm mới lien hệ
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactAddContact').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  public contacts: any[];

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private sessionService: SessionService
  ) { }
  ngOnInit() {
    this.customerService.getContactList(this.customerId)
      .subscribe(result => {
        this.contacts = result;
      });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

  addContact() {
    this.router.navigate(['/contact/create',
      {
        moduleName: 'customer',
        moduleItemId: this.customerId,
        moduleItemName: this.customerName,
      }]);
  }
}
