import { NgModule } from '@angular/core';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CrmChartComponent } from './components/crm-chart/crm-chart.component';
import { SharedModule } from '../../shared/shared.module';
import { TimelineItemComponent } from './components/timeline/timeline-item/timeline-item.component';
import {
    ActivityService,
    ProspectService,
    CustomerService,
    CampaignService,
    OpportunityService,
    ContactService
} from '../../shared/services/index';
import { ChartService } from '../../shared/services/chart.service';
import { ExcelService } from '../../shared/services/excel.service';

@NgModule({
    imports: [
        DashboardRoutingModule,
        SharedModule,
        Ng2Charts
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        CrmChartComponent,
        TimelineItemComponent,
    ],
    providers: [
        ActivityService,
        ChartService,
        ProspectService,
        CustomerService,
        CampaignService,
        OpportunityService,
        ContactService,
        ExcelService
    ]
})
export class DashboardModule { }
