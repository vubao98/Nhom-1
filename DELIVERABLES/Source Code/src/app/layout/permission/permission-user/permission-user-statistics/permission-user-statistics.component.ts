import { Component, OnInit } from '@angular/core';
import { UserGroupPermission } from '../../../../shared/models/api-response/user/user-group-permission';
import { DictionaryItem, CampaignListItem } from '../../../../shared/models';
import { UserGroupService, DataService, CampaignService } from '../../../../shared/services';
import { PermissionUserComponent } from '../permission-user.component';
import { CampaignFilter } from '../../../../shared/models/campaign/campaign-filter.model';
import { NgxSpinnerService } from '../../../../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-permission-user-statistics',
  templateUrl: './permission-user-statistics.component.html',
  styleUrls: ['./permission-user-statistics.component.scss']
})
export class PermissionUserStatisticsComponent implements OnInit {

  static userStatistics;

  checkTest = 1;

  listPermission: UserGroupPermission[];
  isSelectAll = false;
  isViewInfo;
  viewAll;
  viewByCurrentUser;
  listPermissionData: any[] = [];
  branchesList = [];

  get viewType(): boolean {
    if (this.viewAll) {
      PermissionUserStatisticsComponent.userStatistics = true;
      return true;
    } else if (this.viewByCurrentUser) {
      PermissionUserStatisticsComponent.userStatistics = false;
      return false;
    } else {
      PermissionUserStatisticsComponent.userStatistics = null;
      return null;
    }
  }

  get disabledPms(): boolean {
    // this.listPermissionData.length === 0 && 
    if (this.viewType == null) {
      return true;
    } else {
      return false;
    }
  }

  get checkAllProspectList(): boolean {
    let value = true;
    const listPms = ['ProspectAddProspect', 'ProspectProspectInformation', 'ProspectEditProspect', 'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
    listPms.forEach(pms => {
      if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms)) {
        value = false;
      }
    });
    return value;
  }

  get checkAllProspectInfo(): boolean {
    let value = true;
    const listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories'];
    listPms.forEach(pms => {
      if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms)) {
        value = false;
      }
    });
    return value;
  }

  constructor(
    private userGroupService: UserGroupService,
    private dataService: DataService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.getPermissionList('Statistics');
    // this.listPermissionData = PermissionUserComponent.listPermissionData;
    this.listPermissionData = PermissionUserComponent.listPermissionData.filter(i => i.functionWeb
      && i.functionWeb.no && i.functionWeb.no.startsWith('Statistics'));
    this.userGroupService.checkPermission().subscribe(data => {
      this.listPermissionData = PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Statistics'));
      this.checkViewType();
    });

    // call API danh sách chi nhánh
    this.dataService.getBranches().subscribe(data => {
      this.branchesList = data;
      // this.branchesList.forEach(item => item.id = item.id.toString());
      this.checkViewType();
      this.spinner.hide();
    });

  }

  getPermissionList(module: string) {
    this.userGroupService.getListPermissionDefault(module).subscribe(data => {
      this.listPermission = data;
      // if (this.listPermissionData.length > 0) {
      //   const pms = this.listPermissionData.find(i => i.functionWeb.no === this.listPermission[1].no);
      //   if (pms) {
      //     if (pms.type === true) {
      //       this.viewAll = true;
      //       this.viewByCurrentUser = true;
      //     } else if (pms.type === false) {
      //       this.viewByCurrentUser = true;
      //     }
      //   } else {
      //     this.viewAll = null;
      //     this.viewByCurrentUser = null;
      //   }
      // }
    });
  }

  checkViewType() {
    if (this.listPermissionData.length > 0 && this.branchesList.length > 0) {
      const branchesListCategory = this.branchesList.map(item => item.id);
      const arrayPermission = this.listPermissionData.find(itemPerData => branchesListCategory.includes(+itemPerData.category));
      if (arrayPermission) {
        const pms = arrayPermission;
        if (pms.type === true) {
          this.viewAll = true;
          this.viewByCurrentUser = true;
        } else if (pms.type === false) {
          this.viewByCurrentUser = true;
        }
      } else {
        this.viewAll = null;
        this.viewByCurrentUser = null;
      }
      PermissionUserStatisticsComponent.userStatistics = this.viewType;
    }
  }

  selectAll(permission: UserGroupPermission[]) {
    permission.forEach(i => i.checkboxSelected = this.isSelectAll);
  }

  clickPermission(value: string, category: string) {
    const pms = this.listPermission.find(i => i.no === value);
    const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms.no && +i.category === +category);
    if (valueInListTotal) {
      const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === pms.no && +i.category === +category);
      PermissionUserComponent.listPermissionData.splice(idx, 1);
    } else {
      const valuePushToList = {
        category: category,
        functionWeb: pms,
        // type: this.viewType,
        type: true,
        userGroup: null,
      };
      PermissionUserComponent.listPermissionData.push(valuePushToList);
    }
  }

  viewAllClick(value) {
    this.viewAll = value;
    this.viewByCurrentUser = value;
    // tslint:disable-next-line:max-line-length
    PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Statistics')).forEach(i => i.type = this.viewType);
  }

  viewByCurrentUserClick(value) {
    if (value) {
      this.viewAll = false;
      this.viewByCurrentUser = true;
      // tslint:disable-next-line:max-line-length
      PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Statistics')).forEach(i => i.type = this.viewType);
    }
  }

  toggleProspectList(value) {
    const listPms = ['ProspectAddProspect', 'ProspectProspectInformation', 'ProspectEditProspect', 'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
    this.toggleList(listPms, value);
  }

  toggleProspectInfo(value) {
    const listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories'];
    this.toggleList(listPms, value);
  }

  toggleList(pmsArr, value) {
    pmsArr.forEach(pmsItem => {
      const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pmsItem);
      if (value) { // push all item to total list
        if (!valueInListTotal) {
          const pms = this.listPermission.find(i => i.no === pmsItem);
          const valuePushToList = {
            category: null,
            functionWeb: pms,
            // type: this.viewType,
            type: true,
            userGroup: null
          };
          PermissionUserComponent.listPermissionData.push(valuePushToList);
        }
      } else { // remove all item from total list
        if (valueInListTotal) {
          const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === pmsItem);
          PermissionUserComponent.listPermissionData.splice(idx, 1);
        }
      }
    });
  }

  clickAllStatistics(value: string, checked: boolean) {
    const categoryArr = this.branchesList.map(i => i.id.toString());
    categoryArr.forEach(category => this.togglePermission(value, category, checked));
  }

  togglePermission(no: string, category: string, checked: boolean) {
    const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no && +i.category === +category);
    if (checked) {
      // push all item to list
      if (!valueInListTotal) {
        const pms = this.listPermission.find(i => i.no === no);
        const valuePushToList = {
          category: category,
          functionWeb: pms,
          // type: this.viewType,
          type: true,
          userGroup: null
        };
        PermissionUserComponent.listPermissionData.push(valuePushToList);
      }
    } else { // remove all item from total list
      if (valueInListTotal) {
        const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === no && +i.category === +category);
        PermissionUserComponent.listPermissionData.splice(idx, 1);
      }
    }
  }

  getCheckedAllStatistics(no: string): boolean {
    let value = true;
    const categoryArr = this.branchesList.map(i => i.id.toString());
    categoryArr.forEach(category => {
      if (!this.getCheckedPermission(no, category)) {
        value = false;
      }
    });
    return value;
  }

  getCheckedPermission(no: string, branch: string): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      // tslint:disable-next-line:max-line-length
      return PermissionUserComponent.listPermissionData.find(i => (i.category && (+i.category === +branch) && (i.functionWeb.no === no))) ? true : false;
    } else {
      return false;
    }
  }

  clickParentUserStatisPermission(itemBranchID: string, checked: boolean) {
    // const listNo = ['StatisticsProspect', 'StatisticsCustomer', 'StatisticsContact', 'StatisticsOpportunity',
    //   'StatisticsCampaign', 'StatisticsReport', 'StatisticsOpportunityProspectCustomer', 'StatisticsActivityNVBH',
    //   'StatisticsCustomerProspect', 'StatisticsProspectSource', 'StatisticsActivity'];
    const listNo = this.listPermission.map(item => item.no);
    listNo.forEach(no => this.togglePermission(no, itemBranchID.toString(), checked));
  }

  getCheckedParentUserStatisPermission(itemBranchID: string): boolean {
    let value = true;
    // const listNo = ['StatisticsProspect', 'StatisticsCustomer', 'StatisticsContact', 'StatisticsOpportunity',
    //   'StatisticsCampaign', 'StatisticsReport', 'StatisticsOpportunityProspectCustomer', 'StatisticsActivityNVBH',
    //   'StatisticsCustomerProspect', 'StatisticsProspectSource', 'StatisticsActivity'];
    const listNo = this.listPermission.map(item => item.no);
    listNo.forEach(no => {
      if (!this.getCheckedPermission(no, itemBranchID.toString())) {
        value = false;
      }
    });
    return value;
  }

  clickAllParentUserStatisPermission(checked: boolean) {
    this.branchesList.forEach(itemBranch => {
      this.clickParentUserStatisPermission(itemBranch.id.toString(), checked);
    });
  }

  getCheckedAllParentUserStatisPermission(): boolean {
    let value = true;
    this.branchesList.forEach(itemBranch => {
      if (!this.getCheckedParentUserStatisPermission(itemBranch.id.toString())) {
        value = false;
      }
    });
    return value;
  }

  clickAccordingToUser(no: string, value: boolean) {
    // const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no);
    if (value) {
      const pms = this.listPermission.find(i => i.no === no);
      const valuePushToList = {
        category: null,
        functionWeb: pms,
        type: false,
        userGroup: null,
      };
      PermissionUserComponent.listPermissionData.push(valuePushToList);
    } else {
      const idx = PermissionUserComponent.listPermissionData.findIndex(i =>
        i.functionWeb.no === no && i.category === null && i.type === false);
      PermissionUserComponent.listPermissionData.splice(idx, 1);
    }
  }

  getAccordingToUser(no: string): boolean {
    const isItemToUser = PermissionUserComponent.listPermissionData.find(i =>
      i.functionWeb.no === no && i.type === false);
    if (isItemToUser) {
      return true;
    } else {
      return false;
    }
  }

}
