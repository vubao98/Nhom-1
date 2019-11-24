import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule }   from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactMenuComponent } from './contact-detail/contact-menu/contact-menu.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactOverviewComponent } from './contact-detail/contact-overview/contact-overview.component';
import { ContactSpecComponent } from './contact-detail/contact-spec/contact-spec.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService, CampaignService } from '../../shared/services/index';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactCommentComponent } from './contact-detail/contact-comment/contact-comment.component';
import { ContactAuditComponent } from './contact-detail/contact-audit/contact-audit.component';
import { ContactActivityComponent } from './contact-detail/contact-activity/contact-activity.component';
import { ActivityTableModule } from '../../shared/modules/activity-table/activity-table.module';
import { AuditsListModule } from '../../shared/modules/audits-list/audits-list.module';
import { ExcelService } from '../../shared/services/excel.service';
import { ContactOpportunityComponent } from './contact-detail/contact-opportunity/contact-opportunity.component';
import { OpportunityTableModule } from '../../shared/modules/opportunity-table/opportunity-table.module';
import { DownloadTemplateService } from '../../shared/services/download-template.service';
import { ContactAvatarComponent } from './contact-form/contact-avatar/contact-avatar.component';
import { ContactFilter } from '../../shared/models/contact/contact-filter.model';
import { ContactCampaignComponent } from './contact-detail/contact-campaign/contact-campaign.component';
// import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
    imports: [
        SharedModule,
        ContactRoutingModule,
        ActivityTableModule,
        AuditsListModule,
        OpportunityTableModule,
        // ImageCropperModule,
        FormsModule
    ],
    declarations: [
        ContactComponent,
        ContactListComponent,
        ContactMenuComponent,
        ContactCreateComponent,
        ContactDetailComponent,
        ContactOverviewComponent,
        ContactSpecComponent,
        ContactFormComponent,
        ContactEditComponent,
        ContactCommentComponent,
        ContactAuditComponent,
        ContactActivityComponent,
        ContactOpportunityComponent,
        ContactAvatarComponent,
        ContactCampaignComponent,
    ],
    entryComponents: [
        ContactAvatarComponent
    ],
    providers: [
        ContactService,
        ExcelService,
        CampaignService,
        DownloadTemplateService,
    ]
})
export class ContactModule {
    static searchTerm = '';
    static filterModel = new ContactFilter();
    static currentPage: number | string = 0;
    static pageSize: number | string = 10;
}
