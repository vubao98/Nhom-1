import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../../shared/services';

@Component({
  selector: 'app-customer-comment',
  templateUrl: './customer-comment.component.html',
  styleUrls: ['./customer-comment.component.scss']
})
export class CustomerCommentComponent implements OnInit {

  id: string;

  listPermission: any[];

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

  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(value => this.id = value.id);
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
