import * as moment from 'moment';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { EditorComponent } from './editor/editor.component';
import { CommentModel } from './comment.model';
import { Observable } from 'rxjs/Observable';
import { CommentService } from '../../services/comment.service';
import { SessionService } from '../../services/index';
import { Router } from '@angular/router';
import { PagedResult } from '../../models/index';
import { UserModel } from '../../models/user/user.model';
import { USER_GROUP_ROLE } from '../../configs/common.config';
const defaultAvatarSrc = 'assets/images/no-avatar.png';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() viewMode: string;
  @Input() moduleName: string;
  @Input() moduleItemId: number;
  @Input() readOnly: boolean;
  @Input() addComment: boolean;
  @Input() viewComment: boolean;
  // A list of comment objects
  comments: CommentModel[] = [];
  avatars = [];
  avatarSrc: string;
  private userProfile: UserModel;
  // Event when the list of comments have been updated
  @Output() commentsUpdated = new EventEmitter();
  // We are usinwg an editor for adding new comments and control it 
  // directly using a reference
  @ViewChild(EditorComponent) newCommentEditor;
  public showLoadMore = false;
  public init = false;
  public deleteComment = true;
  private comments$: Observable<CommentModel[]>;
  public pagedResult: PagedResult<CommentModel>;
  public showButtonViewAll = false;
  public showButtonLoadMore = false;
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  constructor(
    private router: Router,
    private sessionService: SessionService,
    private commentService: CommentService,
  ) {
  }

  ngOnInit() {
    this.userProfile = this.sessionService.userInfo;
    this.avatarSrc = this.userProfile.avatar ? `data:image/jpeg;base64,${this.userProfile.avatar}` : defaultAvatarSrc;
    this.showButtonViewAll = this.viewMode !== 'all';
    this.showButtonLoadMore = this.viewMode === 'all';
    this.loadComment();
  }

  loadComment() {
    this.commentService
      .read(this.moduleName, this.moduleItemId, 0, 5)
      .subscribe(pagedResult => {
        this.pagedResult = pagedResult;
        this.comments = pagedResult.items;
        this.showButtonLoadMore = (pagedResult.pageCount !== 1) && (this.viewMode === 'all');
      }, err => {
        this.init = true;
      });
  }

  onLoadMore() {
    this.deleteComment = false;
    if (this.init) {
      this.commentService.read(this.moduleName, this.moduleItemId, 0, 10)
        .subscribe(pagedResult => {
          this.pagedResult = pagedResult;
          this.comments = pagedResult.items;
          if (pagedResult.items.length < 10) {
            this.showButtonLoadMore = false;
          }
          if ((pagedResult.items.length > 0) && (+pagedResult.currentPage + 1 < pagedResult.pageCount)) {
            this.init = false;
          }
        });
    } else {
      this.commentService.read(this.moduleName, this.moduleItemId, +this.pagedResult.currentPage + 1,
        +this.pagedResult.pageSize)
        .subscribe(pagedResult => {
          this.showButtonLoadMore = (pagedResult.items.length > 0) && (+pagedResult.currentPage + 1 < pagedResult.pageCount);
          this.pagedResult = pagedResult;
          this.comments = this.comments.concat(pagedResult.items);
        });
    }

  }

  // We use input change tracking to prevent dealing with
  // undefined comment list
  // ngOnChanges(changes) {
  //   if (changes.comments &&
  //     changes.comments.currentValue === undefined) {
  //     this.comments = [];
  //   }
  // }

  // Adding a new comment from the newCommentContent field that is
  // bound to the editor content
  add(event) {
    if (this.newCommentEditor.getEditableContent().trim().length === 0) {
      event.preventDefault();
      event.stopPropagation();
      return;
    } else { this.addNewComment(); }
  }

  addNewComment() {
    const commentNew: String = this.newCommentEditor.getEditableContent().trim();
    if (commentNew.length > 0) {
      this.comments = this.comments.slice();
      const newComment = {
        id: 0,
        parentId: 0,
        user: {
          userId: this.sessionService.currentUser.employeeId,
          userName: this.sessionService.userInfo.fullName,
        },
        time: +moment(),
        avatar: this.avatarSrc,
        content: this.newCommentEditor.getEditableContent(),
        replyComments: [],
      };
      // this.comments.splice(0, 0, newComment);
      // this.comments.splice(0, 0, newComment);
      this.commentService
        .create(this.moduleName, this.moduleItemId, newComment)
        .subscribe(result => {
          // this.comments[0].id = result.id;
          this.loadComment();
        });
      // Emit event so the updated comment list can be persisted
      // outside the component
      // if (this.deleteComment) {
      //   this.comments.splice(5, 1);
      // }
      this.commentsUpdated.next(this.comments);
      // We reset the content of the editor
      this.newCommentEditor.setEditableContent('');
      // this.showButtonLoadMore = this.comments.length > 5 ? true : false;
    }
  }

  // // This method deals with edited comments
  // onCommentEdited(comment, content) {
  //   const comments = this.comments.slice();
  //   // If the comment was edited with e zero length content, we 
  //   // will delete the comment from the list
  //   if (content.length === 0) {
  //     comments.splice(comments.indexOf(comment), 1);
  //   } else {
  //     // Otherwise we're replacing the existing comment
  //     comments.splice(comments.indexOf(comment), 1, {
  //       id: 0,
  //       user: comment.user,
  //       time: comment.time,
  //       content,
  //       replyComments: [],
  //     });
  //   }
  //   // Emit event so the updated comment list can be persisted
  //   // outside the component
  //   this.commentsUpdated.next(comments);
  // }

  onViewModeClick() {
    switch (this.viewMode) {
      case 'partial':
        this.router.navigate([`/${this.moduleName}/detail/${this.moduleItemId}/comment`]);
        break;
      case 'partialEvent':
        this.router.navigate([`/activity/event/detail/${this.moduleItemId}/comment`]);
        break;
      case 'partialTask':
        this.router.navigate([`/activity/task/detail/${this.moduleItemId}/comment`]);
        break;
      case 'all':
    }
  }


}
