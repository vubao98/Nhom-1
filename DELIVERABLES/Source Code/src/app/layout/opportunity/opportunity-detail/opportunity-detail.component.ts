import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Subject, Observable } from 'rxjs/Rx';
import { OpportunityModel } from '../../../shared/models/index';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { OpportunityService } from '../../../shared/services/opportunity.service';
import { AlertService, ConfirmationService, SessionService } from '../../../shared/services/index';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component({
    selector: 'app-opportunity-detail',
    templateUrl: './opportunity-detail.component.html',
    styleUrls: ['./opportunity-detail.component.scss'],
    animations: [routerTransition()]
})
export class OpportunityDetailComponent implements OnInit {
    opportunity$: Observable<OpportunityModel>;
    opportunity: OpportunityModel;
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
    get isOpportunityEditOpportunity(): boolean {
        // sua cơ hội
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityEditOpportunity').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isOpportunityDeleteOpportunity(): boolean {
        // xoa cơ hội
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityDeleteOpportunity').length > 0 ? true : false;
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
        private opportunityService: OpportunityService) { }

    ngOnInit(): void {
        this.opportunity$ = this.route.paramMap.switchMap((params: ParamMap) =>
            this.opportunityService.view(params.get('id')));
        this.opportunity$.subscribe(opportunity => { },
            err => this.isNotExist = true);
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
    }

    delete(id) {
        const that = this;
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa cơ hội này?',
            () => {
                that.opportunityService.delete([id]).subscribe(_ => {
                    that.router.navigate(['/opportunity']);
                    that.alertService.success('Đã xóa cơ hội!', true);
                });
            });
    }

    refresh(id) {
        this.opportunity$ = this.opportunityService.view(id);
        this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
    }
}
