import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ChangeListComponent } from './change-list/change-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'branch', loadChildren: './branch-selection/branch-selection.module#BranchSelectionModule' },
            { path: 'prospect', loadChildren: './prospect/prospect.module#ProspectModule' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' },
            { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
            { path: 'opportunity', loadChildren: './opportunity/opportunity.module#OpportunityModule' },
            { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule' },
            { path: 'activity', loadChildren: './activity/activity.module#ActivityModule' },
            { path: 'change-list', component: ChangeListComponent},
            { path: 'notification-list', component: NotificationListComponent},
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'revenue', loadChildren: './revenue-detail/revenue-detail.module#RevenueDetailModule'},
            { path: 'delivery', loadChildren: './delivery/delivery.module#DeliveryModule'},
            { path: 'permission', loadChildren: './permission/permission.module#PermissionModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
