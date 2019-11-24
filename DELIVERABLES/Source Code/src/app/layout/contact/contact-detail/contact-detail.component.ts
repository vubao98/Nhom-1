import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ContactService, AlertService, ConfirmationService, SessionService } from '../../../shared/services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactModel } from '../../../shared/models';
import { Observable } from 'rxjs/Observable';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.scss'],
    animations: [routerTransition()]
})
export class ContactDetailComponent implements OnInit {
    contact$: Observable<ContactModel>;
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
    get isContactEditContact(): boolean {
        // sửa liên hệ
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'ContactEditContact').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isContactSendEmail(): boolean {
        // email
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'ContactSendEmail').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isContactDeleteContact(): boolean {
        // xóa
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'ContactDeleteContact').length > 0 ? true : false;
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
        private contactService: ContactService) { }

    ngOnInit(): void {
        this.contact$ = this.route.paramMap.switchMap((params: ParamMap) =>
            this.contactService.view(params.get('id')));
        this.contact$.subscribe(contact => { }
            , err => {
                this.isNotExist = true;
            });
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
    }

    delete(id) {
        const that = this;
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa liên hệ này?',
            () => {
                that.contactService.delete([id]).subscribe(_ => {
                    that.router.navigate(['/contact']);
                    that.alertService.success('Đã xóa liên hệ!', true);
                });
            });

    }

    refresh(id) {
        this.contact$ = this.contactService.view(id);
        this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
    }
}
