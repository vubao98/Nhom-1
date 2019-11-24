import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Subject, Observable } from 'rxjs/Rx';
import { ActivityModel } from '../../../../shared/models/index';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AlertService, ConfirmationService, ActivityService, SessionService } from '../../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html',
    styleUrls: ['./event-detail.component.scss'],
    animations: [routerTransition()]
})
export class EventDetailComponent implements OnInit {
    event$: Observable<ActivityModel>;
    isNotExist = false;

    listPermission: any[];
    userGroupRole = USER_GROUP_ROLE;

    get groupRole(): string {
        if (this.sessionService.currentSession) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }

    // Event
    get isActivityEditActivityEvent(): boolean {
        // sửa 
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'ActivityEditActivity' && i.category === 'Event').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isActivityDeleteActivityEvent(): boolean {
        // xóa các hoạt động
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'ActivityDeleteActivity' && i.category === 'Event').length > 0 ? true : false;
        } else {
            return false;
        }
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private confirmationService: ConfirmationService,
        private sessionService: SessionService,
        private activityService: ActivityService) { }

    ngOnInit(): void {
        this.event$ = this.route.paramMap.switchMap((params: ParamMap) =>
            this.activityService.view(params.get('id'), 'Event'));
        this.event$.subscribe(event => { },
            err => this.isNotExist = true
        );
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
    }

    delete(id) {
        const that = this;
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa sự kiện này?',
            () => {
                that.activityService.delete([{ id: id, activityType: 'event' }]).subscribe(_ => {
                    that.router.navigate(['/activity']);
                    that.alertService.success('Đã xóa sự kiện!', true);
                });
            });
    }

    refresh(id) {
        this.event$ = this.activityService.view(id, 'Event');
    }
}
