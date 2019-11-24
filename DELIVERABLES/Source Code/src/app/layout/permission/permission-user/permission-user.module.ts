import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionUserRoutingModule } from './permission-user-routing.module';
import { PermissionUserComponent } from './permission-user.component';
import { SharedModule } from '../../../shared/shared.module';
import { PermissionUserHomeComponent } from './permission-user-home/permission-user-home.component';
import { PermissionUserProspectComponent } from './permission-user-prospect/permission-user-prospect.component';
import { PermissionUserCustomerComponent } from './permission-user-customer/permission-user-customer.component';
import { PermissionUserContactComponent } from './permission-user-contact/permission-user-contact.component';
import { PermissionUserOpportunityComponent } from './permission-user-opportunity/permission-user-opportunity.component';
import { PermissionUserCampaignComponent } from './permission-user-campaign/permission-user-campaign.component';
import { PermissionUserActivityComponent } from './permission-user-activity/permission-user-activity.component';
import { PermissionUserStatisticsComponent } from './permission-user-statistics/permission-user-statistics.component';
import { PermissionUserPermissionComponent } from './permission-user-permission/permission-user-permission.component';
import { PermissionItemComponent } from './permission-item/permission-item.component';

@NgModule({
  imports: [
    CommonModule,
    PermissionUserRoutingModule,
    SharedModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [PermissionUserComponent, PermissionUserHomeComponent, PermissionUserProspectComponent, PermissionUserCustomerComponent, PermissionUserContactComponent, PermissionUserOpportunityComponent, PermissionUserCampaignComponent, PermissionUserActivityComponent, PermissionUserStatisticsComponent, PermissionUserPermissionComponent, PermissionItemComponent]
})
export class PermissionUserModule { }
