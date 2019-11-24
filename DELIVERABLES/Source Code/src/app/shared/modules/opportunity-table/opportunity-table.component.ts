import { Component, OnInit, Input } from '@angular/core';
import { DATATABLE_CONFIG } from '../../configs/index';
import { OpportunityService, AlertService, ConfirmationService, SessionService } from '../../services/index';
import { Subscription, Subject } from 'rxjs';
import { PagedResult } from '../../models/index';
import { OpportunityListItem } from '../../models/opportunity/opportunity-list-item.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { USER_GROUP_ROLE } from '../../configs/common.config';


@Component({
  selector: 'app-opportunity-table',
  templateUrl: './opportunity-table.component.html',
  styleUrls: ['./opportunity-table.component.scss']
})
export class OpportunityTableComponent implements OnInit {

  @Input() moduleName: string;
  @Input() moduleItemId: string;
  @Input() moduleItemName: string;
  @Input() moduleItemLastName: string;
  @Input() moduleItemFirstName: string;

  dtOptions: any = DATATABLE_CONFIG;
  dtTrigger: Subject<any> = new Subject();
  pagedResult: PagedResult<OpportunityListItem> = new PagedResult<OpportunityListItem>();
  isLeader = false;
  loading = true;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  get isOpportunityAddOpportunity(): boolean {
    // create new oppotunity
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityAddOpportunity').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityEditOpportunity(): boolean {
    // edit cohoi
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityEditOpportunity').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityDeleteOpportunity(): boolean {
    // del oppotunity
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityDeleteOpportunity').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityOpportunitySummary(): boolean {
    //
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityOpportunitySummary').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityViewOpportunityDetail(): boolean {
    // 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityViewOpportunityDetail').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityViewComments(): boolean {
    // 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityViewComments').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityAddComment(): boolean {
    // 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityAddComment').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityActivites(): boolean {
    //
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityActivites').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  get isOpportunityHistories(): boolean {
    // 
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityHistories').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private opportunityService: OpportunityService,
    private alertService: AlertService,
    private sessionService: SessionService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.dtOptions = DATATABLE_CONFIG;
    this.loading = true;
    this.opportunityService
      .getOpportunitiesByModuleItemId(this.moduleName, this.moduleItemId, 0, 10)
      .subscribe(result => {
        this.rerender(result);
      }, err => {
        this.loading = false;
      });
    const session = this.sessionService.getSession();
    const leaders = session.isLeaders;
    if (leaders && leaders.length > 0) {
      this.isLeader = leaders.some(x => x.isLeader === true);
    }

  }

  pagedResultChange(pagedResult: any) {
    this.refresh();
  }

  refresh(displayAlert: boolean = false): void {
    this.opportunityService
      .getOpportunitiesByModuleItemId(this.moduleName, this.moduleItemId, this.pagedResult.currentPage, this.pagedResult.pageSize)
      .subscribe(result => {
        this.rerender(result);
        if (displayAlert) {
          this.alertService.success('Dữ liệu đã được cập nhật mới nhất');
        }
      });
  }

  rerender(pagedResult: any) {
    this.loading = false;
    this.pagedResult = pagedResult;
    this.dtTrigger.next();
  }

  gotoCreateOpportunity() {
    this.router.navigate(['/opportunity/create', {
      moduleName: this.moduleName,
      moduleItemId: this.moduleItemId,
      moduleItemName: this.moduleItemName,
      moduleItemLastName: this.moduleItemLastName,
      moduleItemFirstName: this.moduleItemFirstName
    }]);
  }

  delete(id) {
    const that = this;
    that.confirmationService.confirm('Bạn có chắc chắn muốn xóa cơ hội này?',
      () => {
        that.opportunityService.delete([id]).subscribe(_ => {
          // that.router.navigate([`/${this.moduleName}/detail/${this.moduleItemId}/opportunity`]);
          that.alertService.success('Đã xóa cơ hội!', true);
          that.refresh();
        });
      });
  }

  isEyeVisible(){
    if(this.isOpportunityOpportunitySummary || this.isOpportunityViewOpportunityDetail || this.isOpportunityAddComment || this.isOpportunityViewComments || this.isOpportunityActivites || this.isOpportunityHistories){
      return true;
    }else {
      return false;
    }
  }

}
