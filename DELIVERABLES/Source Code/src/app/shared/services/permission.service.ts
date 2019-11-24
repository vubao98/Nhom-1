import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { GroupPermissionResponse } from '../models/api-response/permission/group-permission-response.model';
import { PermissionResponse } from '../models/api-response/permission/permission-response.model';
import { Permission } from '../constants/permission.enum';

@Injectable()
export class PermissionService {

  get groupPermissionList(): GroupPermissionResponse[] {
    if (this.sessionService.getSession() && (this.sessionService.getSession().branches as Array<any>).length) {
      return this.sessionService.getSession().branches;
    } else {
      return [];
    }
  }

  get permissionList(): PermissionResponse[] {
    if (this.groupPermissionList.length) {
      const group = this.groupPermissionList.find(i => i.id == this.sessionService.branchId);
      if (group) {
        return group.funtions;
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  constructor(
    private sessionService: SessionService
  ) { }

  // xem thông tin tiềm năng
  viewProspectInfo(): boolean {
    return this.permissionList.length && this.permissionList.find(i => i.functionWeb.no === Permission.ViewProspectInfo) ? true : false;
  }


}
