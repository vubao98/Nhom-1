import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService, ContactService, SessionService } from '../../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-contact-opportunity',
  templateUrl: './contact-opportunity.component.html',
  styleUrls: ['./contact-opportunity.component.scss']
})
export class ContactOpportunityComponent implements OnInit {
  id: string;
  name: string;
  firstName: string;
  lastName: string;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isContactOpportunities(): boolean {
    // view cơ hội
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactOpportunities').length > 0 ? true : false;
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
    let arr;
    this.route.parent.params.subscribe(value => {
      this.id = value.id;
      this.contactService.view(this.id).subscribe(result => {
        this.name = result.name;
        arr = this.name.split(' ');
        if (arr.length === 1) {
          this.firstName = this.name;
        } else {
          this.firstName = arr[arr.length - 1];
          arr.pop();
          this.lastName = arr.join(' ');
        }
      });
    });
  }

}
