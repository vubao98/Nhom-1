
import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { ConvertProspectModalComponent } from './convert-prospect-modal/convert-prospect-modal.component';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProspectService, AlertService, ConfirmationService, CampaignService, SessionService } from '../../../shared/services/index';
import { Observable } from 'rxjs/Observable';
import { ProspectModel } from '../../../shared/models/index';
import 'rxjs/add/operator/pluck';
import { ISubscription, Subscription } from 'rxjs/Subscription';
import { ConvertProspect2Component } from '../../../shared/components/convert-prospect2/convert-prospect2.component';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component({
  selector: 'app-prospect-detail',
  templateUrl: './prospect-detail.component.html',
  styleUrls: ['./prospect-detail.component.scss'],
  animations: [routerTransition()]
})
export class ProspectDetailComponent implements OnInit, OnDestroy {
  prospect$: Observable<ProspectModel>;
  prospect: ProspectModel;
  activeModalRef: NgbModalRef;
  prospectId: number;

  /* Phân quyền */
  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isProspectSendEmail(): boolean {
    // gởi mail
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectSendEmail').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isProspectEditProspect(): boolean {
    // sửa tiềm năng
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectEditProspect').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isProspectDeleteProspect(): boolean {
    // xóa tiềm năng
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectDeleteProspect').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isProspectChangeProspect(): boolean {
    // chuyển đổi tiềm năng
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ProspectChangeProspect').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    public activeModal: NgbActiveModal,
    private alertService: AlertService,
    private confirmationService: ConfirmationService,
    private prospectService: ProspectService,
    private sessionService: SessionService
  ) { }
  isNotExist = false;
  openConvertProspectModal() {
    // if (!this.activeModalRef) {
      this.prospectService.getProbabilityOfProspectIs100(this.prospectId).subscribe(data => {
        const opportunities = data.opportunities;
        // tslint:disable-next-line:triple-equals
        if (opportunities.length > 0 && opportunities.find(i => i.step == 'Success')) {
          this.activeModalRef = this.modalService.open(ConvertProspect2Component);
          this.activeModalRef.componentInstance.prospect = this.prospect;
        } else {
          // tslint:disable-next-line:max-line-length
          this.confirmationService.confirm('Chỉ những Tiềm năng có Cơ hội ở giai đoạn Thành công (100%) mới có thể chuyển đổi. Bạn có muốn tạo Cơ hội cho Tiềm năng này?', () => {
            this.router.navigate(['/opportunity/create',
            {
              prospectName: data.name,
              prospectId: data.id,
              step: 'Success',
              moduleName: 'prospect'
            }]);
          }, 'Tạo cơ hội');
        }
      });
    // }
  }

  ngOnInit() {
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    const that = this;
    this.prospect$ = this.route.paramMap.switchMap((params: ParamMap) => {
      this.prospectId = Number(params.get('id'));
      return this.prospectService.view(params.get('id'));
    });
    this.prospect$.subscribe(prospect => {
      this.prospect = prospect;
      that.route.params.subscribe(params => {
        if (params.isPopUpConvert) {
          that.openConvertProspectModal();
        }
      });
    },
      err => {
        this.router.navigate(['/prospect/detail-history', this.prospectId]);
        this.isNotExist = true;
      });
  }

  delete(id) {
    const that = this;
    this.confirmationService.confirm('Bạn có chắc chắn muốn xóa tiềm năng này?',
      () => {
        that.prospectService.delete([id]).subscribe(_ => {
          that.router.navigate(['/prospect']);
          that.alertService.success('Đã xóa tiềm năng!');
        });
      });

  }
  refresh(id) {
    this.prospect$ = this.prospectService.view(id);
    this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
  }
  ngOnDestroy(): void {

  }

}



