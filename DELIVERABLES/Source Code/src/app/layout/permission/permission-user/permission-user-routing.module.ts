import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionUserComponent } from './permission-user.component';
import { PermissionUserHomeComponent } from './permission-user-home/permission-user-home.component';
import { PermissionUserProspectComponent } from './permission-user-prospect/permission-user-prospect.component';
import { PermissionUserCustomerComponent } from './permission-user-customer/permission-user-customer.component';
import { PermissionUserContactComponent } from './permission-user-contact/permission-user-contact.component';
import { PermissionUserOpportunityComponent } from './permission-user-opportunity/permission-user-opportunity.component';
import { PermissionUserCampaignComponent } from './permission-user-campaign/permission-user-campaign.component';
import { PermissionUserActivityComponent } from './permission-user-activity/permission-user-activity.component';
import { PermissionUserStatisticsComponent } from './permission-user-statistics/permission-user-statistics.component';
import { PermissionUserPermissionComponent } from './permission-user-permission/permission-user-permission.component';

const routes: Routes = [
  {
    path: '',
    component: PermissionUserComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: PermissionUserHomeComponent
      },
      {
        path: 'prospect',
        component: PermissionUserProspectComponent
      },
      {
        path: 'customer',
        component: PermissionUserCustomerComponent
      },
      {
        path: 'contact',
        component: PermissionUserContactComponent
      },
      {
        path: 'opportunity',
        component: PermissionUserOpportunityComponent
      },
      {
        path: 'campaign',
        component: PermissionUserCampaignComponent
      },
      {
        path: 'activity',
        component: PermissionUserActivityComponent
      },
      // {
      //   path: 'statistics',
      //   component: PermissionUserStatisticsComponent
      // },
      {
        path: 'permission',
        component: PermissionUserPermissionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionUserRoutingModule { }
