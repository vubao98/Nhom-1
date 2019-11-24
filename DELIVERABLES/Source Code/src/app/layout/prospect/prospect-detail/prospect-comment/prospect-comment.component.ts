import { ParamMap, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';
import { SessionService } from '../../../../shared/services';

@Component({
  selector: 'app-prospect-comment',
  templateUrl: './prospect-comment.component.html',
  styleUrls: ['./prospect-comment.component.scss'],
  animations: [routerTransition()]
})
export class ProspectCommentComponent implements OnInit {

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
  get isProspectAddComment(): boolean {
    // add comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectAddComment').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isProspectViewComments(): boolean {
    // view comment
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectViewComments').length > 0 ? true : false;
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
