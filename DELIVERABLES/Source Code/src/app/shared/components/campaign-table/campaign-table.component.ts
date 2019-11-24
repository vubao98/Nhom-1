import { Component, OnInit, Input } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';
import { DictionaryItem, PagedResult } from '../../models';
import { DATATABLE_CONFIG } from '../../configs';
import { ActivityListItem } from '../../models/activity/activity-list-item.model';
import { ActivityService, AlertService, DataService, ConfirmationService, SessionService, CampaignService } from '../../services';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CampaignFilter } from '../../models/campaign/campaign-filter.model';

@Component({
  selector: 'app-campaign-table',
  templateUrl: './campaign-table.component.html',
  styleUrls: ['./campaign-table.component.scss']
})
export class CampaignTableComponent implements OnInit {

  @Input() moduleName: string;
  @Input() moduleItemId: string;
  @Input() moduleItemName: string;
  @Input() readOnly: boolean;
  @Input() fullName: string;
  @Input() email: string;
  @Input() phone: string;
  activityStatusList: Observable<DictionaryItem[]>;

  dtOptions: any = DATATABLE_CONFIG;
  dtTrigger: Subject<any> = new Subject();
  pagedResult: PagedResult<ActivityListItem> = new PagedResult<ActivityListItem>();
  filterModel = new CampaignFilter();
  campaignTypeList: Observable<DictionaryItem[]>;
  loading = true;

  constructor(
    private activityService: ActivityService,
    private alertService: AlertService,
    private dataService: DataService,
    private confirmationService: ConfirmationService,
    private sessionService: SessionService,
    private campaignService: CampaignService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
  }

  ngOnInit() {
    this.dtOptions = DATATABLE_CONFIG;
    this.campaignTypeList = this.dataService.getCampaignTypes();
    this.filter();
  }

  filter() {
    this.loading = true;
    this.campaignService.getListCampaignByModule(this.moduleName, Number(this.moduleItemId), 0, 10, this.filterModel)
    .subscribe(result => {
      this.rerender(result);
      this.loading = false;
    }, err => this.loading = false);
  }

  clearFilter() {
    this.filterModel = new CampaignFilter();
    this.filter();
  }

  pagedResultChange(pagedResult: any) {
    this.refresh();
  }

  delete(ids: any | any[], activityType?: string) {
    const that = this;
    let deleteIds = [];
    if (!(ids instanceof Array)) {
      deleteIds = [{ id: ids, activityType: activityType }];
    } else {
      deleteIds = ids;
    }

    this.confirmationService.confirm('Bạn có chắc chắn muốn xóa hoạt động này?',
      () => {
        that.activityService.delete(deleteIds).subscribe(_ => {
          if (this.pagedResult.items.length === deleteIds.length && +this.pagedResult.currentPage > 0) {
            this.pagedResult.currentPage = +this.pagedResult.currentPage - 1;
          }
          that.alertService.success('Đã xóa hoạt động!');
          that.refresh();
        });
      });
  }

  refresh(displayAlert: boolean = false): void {
    this.loading = true;
    this.activityService
      .getActivitiesByModuleItemId(this.moduleName, this.moduleItemId, this.pagedResult.currentPage, this.pagedResult.pageSize)
      .subscribe(result => {
        this.rerender(result);
        if (displayAlert) {
          this.alertService.success('Dữ liệu đã được cập nhật mới nhất');
        }
        this.loading = false;
      }, err => this.loading = false);
  }

  rerender(pagedResult: any) {
    this.pagedResult = pagedResult;
    this.dtTrigger.next();
  }

  gotoCreateCampaignPage() {
    this.sessionService.previousUrl = `${this.moduleName}/detail/${this.moduleItemId}/campaign`;
    this.router.navigate(['/campaign/create',
      {
        moduleName: this.moduleName,
        moduleItemId: this.moduleItemId,
        moduleItemName: this.moduleItemName,
        moduleItemFullName: this.fullName,
        moduleItemEmail: this.email,
        moduleItemPhone: this.phone
      }]);
  }

}
