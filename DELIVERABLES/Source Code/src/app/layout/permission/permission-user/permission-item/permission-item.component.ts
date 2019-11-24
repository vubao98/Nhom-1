import { Component, OnInit, Input } from '@angular/core';
import { UserGroupPermission } from '../../../../shared/models/api-response/user/user-group-permission';
import { PermissionUserComponent } from '../permission-user.component';

@Component({
  selector: 'app-permission-item',
  templateUrl: './permission-item.component.html',
  styleUrls: ['./permission-item.component.scss']
})
export class PermissionItemComponent implements OnInit {
  @Input() item: UserGroupPermission;
  @Input() isDisabled: boolean;
  @Input() viewType: boolean;
  constructor() { }

  ngOnInit() {
  }

  clickPermission() {
    // const pms = this.listPermission.find(i => i.no === value);
    const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === this.item.no);
    if (valueInListTotal) {
      const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === this.item.no);
      PermissionUserComponent.listPermissionData.splice(idx, 1);
    } else {
      const valuePushToList = {
        category: null,
        functionWeb: this.item,
        type: this.viewType,
        userGroup: null
      };
      PermissionUserComponent.listPermissionData.push(valuePushToList);
    }
  }

  getCheckedPermission(no: string): boolean {
    // if (this.listPermission && this.listPermission.length > 0) {
    // return this.listPermission.find(i => i.no === no) ? true : false;
    return PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no) ? true : false;
    // } else {
    //   return false;
    // }
  }
}
