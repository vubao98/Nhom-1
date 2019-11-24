import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionComponent } from './permission.component';
import { PermissionUserListComponent } from './permission-user-list/permission-user-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: PermissionUserListComponent
  },
  {
    path: 'setting/:id',
    loadChildren: './permission-user/permission-user.module#PermissionUserModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
