import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService, SessionService } from '../../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-contact-activity',
  templateUrl: './contact-activity.component.html',
  styleUrls: ['./contact-activity.component.scss']
})
export class ContactActivityComponent implements OnInit {

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
  get isContactActivities(): boolean {
    // xem hoạt động
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactActivities').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.contactService.view(this.id)
      .subscribe(result => this.name = `${result.name}`);
    });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
