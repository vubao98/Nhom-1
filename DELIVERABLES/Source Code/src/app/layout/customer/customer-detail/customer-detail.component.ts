import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Subject } from 'rxjs/Rx';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CustomerModel } from '../../../shared/models';
import { CustomerService, AlertService, ConfirmationService, SessionService } from '../../../shared/services/index';
import { DialogService } from '../../../../../node_modules/@progress/kendo-angular-dialog';
import { FengShuisInforComponent } from '../../../shared/components/feng-shuis-infor/feng-shuis-infor.component';
import { CustomerModule } from '../customer.module';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.scss'],
    animations: [routerTransition()]
})
export class CustomerDetailComponent implements OnInit {
    customer$: Observable<CustomerModel>;
    isNotExist = false;
    dialog;
    isBirthDay: boolean;

    listPermission: any[];
    userGroupRole = USER_GROUP_ROLE;

    get groupRole(): string {
        if (this.sessionService.currentSession) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }

    get isPmsEditCustomer(): boolean {
        // sửa thông tin cơ bản
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'CustomerEditCustomer').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isPmsDeleteCustomer(): boolean {
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'CustomerDeleteCustomer').length > 0 ? true : false;
        } else {
            return false;
        }
    }

    get isPmsSendEmailCustomer(): boolean {
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'CustomerSendEmail').length > 0 ? true : false;
        } else {
            return false;
        }
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private confirmationService: ConfirmationService,
        private customerService: CustomerService,
        private sessionService: SessionService
    ) { }

    ngOnInit(): void {
        this.isBirthDay = CustomerModule.filterModel.hasBirthday;
        window.scrollTo(0, 0);
        this.customer$ = this.route.paramMap.switchMap((params: ParamMap) =>
            this.customerService.view(params.get('id')));
        this.customer$.subscribe(customer => { },
            err => {
                this.isNotExist = true;
            });
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
    }

    delete(id) {
        const that = this;
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa khách hàng này?',
            () => {

                that.customerService.delete([id]).subscribe(_ => {
                    that.router.navigate(['/customer']);
                    that.alertService.success('Đã xóa khách hàng!');
                });
            });

    }

    refresh(id) {
        this.customer$ = this.customerService.view(id);
        this.alertService.success('Dữ liệu đã được cập nhật mới nhất');
    }
}
