import { Component, OnInit } from '@angular/core';
import { UserGroupPermission } from '../../../../shared/models/api-response/user/user-group-permission';
import { UserGroupService } from '../../../../shared/services';
import { PermissionUserComponent } from '../permission-user.component';

@Component({
  selector: 'app-permission-user-home',
  templateUrl: './permission-user-home.component.html',
  styleUrls: ['./permission-user-home.component.scss']
})
export class PermissionUserHomeComponent implements OnInit {

  listPermission: UserGroupPermission[];
  isSelectAll = false;
  isViewInfo;
  viewAll;
  viewByCurrentUser;
  listPermissionData: any[] = [];

  get viewType(): boolean {
    if (this.viewAll) {
      return true;
    } else if (this.viewByCurrentUser) {
      return false;
    } else {
      return null;
    }
  }

  get disabledPms(): boolean {
    if (this.viewType == null) {
      return true;
    } else {
      return false;
    }
  }

  get checkAllContactListByAll(): boolean {
    let value = true;
    const listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign'];
    listPms.forEach(pms => {
      if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms && i.type)) {
        value = false;
      }
    });
    return value;
  }

  get checkAllContactListByCurrent(): boolean {
    let value = true;
    const listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign'];
    listPms.forEach(pms => {
      if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms)) {
        value = false;
      }
    });
    return value;
  }

  get checkAllCheckboxByAll(): boolean {
    let value = true;
    const listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign', 'HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
    listPms.forEach(pms => {
      if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms && i.type)) {
        value = false;
      }
    });
    return value;
  }

  get checkAllCheckboxByCurrent(): boolean {
    let value = true;
    const listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign', 'HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
    // const listPms = ['HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
    listPms.forEach(pms => {
      if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms)) {
        value = false;
      }
    });
    return value;
  }

  // get checkAllContactInfo(): boolean {
  //   let value = true;
  //   const listPms = ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'];
  //   // const listPms = ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'];
  //   listPms.forEach(pms => {
  //     if (!PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms)) {
  //       value = false;
  //     }
  //   });
  //   return value;
  // }

  constructor(
    private userGroupService: UserGroupService,
  ) { }

  ngOnInit() {
    this.getPermissionList('Home');
    this.listPermissionData = PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Home'));
    this.userGroupService.checkPermission().subscribe(data => {
      this.listPermissionData = PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Home'));
      this.checkViewType();
    });
  }

  getPermissionList(module: string) {
    this.userGroupService.getListPermissionDefault(module).subscribe(data => {
      this.listPermission = data;
      this.checkViewType();
    });
  }

  checkViewType() {
    if (this.listPermissionData.length > 0) {
      const pms = this.listPermissionData[0];
      if (pms) {
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
    }
  }

  selectAll(permission: UserGroupPermission[]) {
    permission.forEach(i => i.checkboxSelected = this.isSelectAll);
  }

  getCheckedPermission(no: string, type: boolean): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      // return this.listPermission.find(i => i.no === no) ? true : false;
      return PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no && i.type === type) ? true : false;
    } else {
      return false;
    }
  }

  clickPermission(value: string, checked: boolean, type: boolean, inputAll: HTMLInputElement, inputCurrent: HTMLInputElement) {
    const pms = this.listPermission.find(i => i.no === value);
    const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms.no);
    if (valueInListTotal) {
      if (checked) {
        valueInListTotal.type = type;
        if (type) {
          inputCurrent.checked = true;
        }
      } else {
        const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === pms.no);
        PermissionUserComponent.listPermissionData.splice(idx, 1);
        if (type) {
          inputCurrent.checked = false;
        }
      }
    } else {
      if (type) {
        inputCurrent.checked = true;
      }
      const valuePushToList = {
        category: null,
        functionWeb: pms,
        type: type,
        userGroup: null
      };
      PermissionUserComponent.listPermissionData.push(valuePushToList);
    }
  }

  viewAllClick(value) {
    this.viewAll = value;
    this.viewByCurrentUser = value;
  }

  toggleContactList(checked: boolean, type: boolean) {
    const listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign'];
    this.toggleCheckboxList(listPms, checked, type);
  }

  toggleSelectAll(checked: boolean, type: boolean) {
    const listPms = ['StatisticsProspect', 'HomeCustomer', 'HomeContact', 'HomeOpportunity', 'HomeCampaign', 'HomeViewTask', 'HomeViewEvent', 'HomeViewAudit'];
    this.toggleCheckboxList(listPms, checked, type);
  }

  toggleCheckboxList(listPms: any[], checked: boolean, type: boolean) {
    listPms.forEach(pmsItem => {
      const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pmsItem);
      if (checked) { // push all item to total list
        if (!valueInListTotal) {
          const pms = this.listPermission.find(i => i.no === pmsItem);
          const valuePushToList = {
            category: null,
            functionWeb: pms,
            type: type,
            userGroup: null
          };
          PermissionUserComponent.listPermissionData.push(valuePushToList);
        } else {
          valueInListTotal.type = type;
        }
      } else { // remove all item from total list
        if (valueInListTotal) {
          const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === pmsItem);
          PermissionUserComponent.listPermissionData.splice(idx, 1);
        }
      }
    });
  }

}
