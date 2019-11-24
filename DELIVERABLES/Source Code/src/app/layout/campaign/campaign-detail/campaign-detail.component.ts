import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Subject, Observable } from 'rxjs/Rx';
import { CampaignModel } from '../../../shared/models/index';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { AlertService, CampaignService, ConfirmationService, SessionService } from '../../../shared/services';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component({
    selector: 'app-campaign-detail',
    templateUrl: './campaign-detail.component.html',
    styleUrls: ['./campaign-detail.component.scss'],
    animations: [routerTransition()]
})
export class CampaignDetailComponent implements OnInit {
    campaign$: Observable<CampaignModel>;
    campaign: CampaignModel;
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
    get isCampaignEditCampaign(): boolean {
        //edit chiến dịch
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'CampaignEditCampaign').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isCampaignDeleteCampaign(): boolean {
        //xoa chiến dịch
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'CampaignDeleteCampaign').length > 0 ? true : false;
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
        private campaignService: CampaignService) { }

    ngOnInit(): void {
        this.campaign$ = this.route.paramMap.switchMap((params: ParamMap) =>
            this.campaignService.view(params.get('id')));
        this.campaign$.subscribe(campaign => { },
            err => this.isNotExist = true
        );
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
    }

    delete(id) {
        const that = this;
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa chiến dịch này?',
            () => {
                that.campaignService.delete([id]).subscribe(_ => {
                    that.router.navigate(['/campaign']);
                    that.alertService.success('Đã xóa chiến dịch!', true);
                });
            });
    }

    refresh(id) {
        this.campaign$ = this.campaignService.view(id);
        this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
    }
}
