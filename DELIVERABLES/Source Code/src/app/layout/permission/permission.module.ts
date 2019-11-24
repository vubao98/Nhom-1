import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionRoutingModule } from './permission-routing.module';
import { PermissionComponent } from './permission.component';
import { PermissionUserListComponent } from './permission-user-list/permission-user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UserGroupService } from '../../shared/services';

@NgModule({
  imports: [
    CommonModule,
    PermissionRoutingModule,
    SharedModule
  ],
  declarations: [PermissionComponent, PermissionUserListComponent],
  providers: [UserGroupService]
})
export class PermissionModule { }
