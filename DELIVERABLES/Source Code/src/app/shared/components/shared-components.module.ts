import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationSummaryComponent } from './validation-summary/validation-summary.component';
import { ListErrorsComponent } from './list-errors/index';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { AlertComponent } from './alert/alert.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';
import { ConvertProspect2Component } from './convert-prospect2/convert-prospect2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbAlertModule, NgbModalModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupCallAwayComponent } from './confirmation-popup-call-away/confirmation-popup-call-away.component';
import { FengShuisInforComponent } from './feng-shuis-infor/feng-shuis-infor.component';
import { EmailEditorComponent } from './email-editor/email-editor.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { TagInputModule } from 'ngx-chips';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationRoutingPopupComponent } from './confirmation-routing-popup/confirmation-routing-popup.component';
import { CampaignTableComponent } from './campaign-table/campaign-table.component';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { SettingTypeComponent } from './setting-type/setting-type.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        SharedPipesModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbCollapseModule.forRoot(),
        NgbModalModule.forRoot(),
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0)',
            backdropBorderRadius: '3px',
            primaryColour: '#00a0e3',
            secondaryColour: '#00a0e3',
            tertiaryColour: '#00a0e3'
        }),
        CKEditorModule,
        TagInputModule,
        NgxSpinnerModule,
        DataTablesModule,
        RouterModule
    ],
    declarations: [
        // AlertComponent,
        ValidationSummaryComponent,
        ListErrorsComponent,
        ConfirmationPopupComponent,
        PaginationComponent,
        FooterCopyrightComponent,
        ConvertProspect2Component,
        ConfirmationPopupCallAwayComponent,
        FengShuisInforComponent,
        EmailEditorComponent,
        ConfirmationRoutingPopupComponent,
        CampaignTableComponent,
        SettingTypeComponent,
    ],
    exports: [
        // AlertComponent,
        ValidationSummaryComponent,
        ListErrorsComponent,
        ConfirmationPopupComponent,
        PaginationComponent,
        FooterCopyrightComponent,
        ConvertProspect2Component,
        ConfirmationPopupCallAwayComponent,
        CKEditorModule,
        TagInputModule,
        NgxSpinnerModule,
        CampaignTableComponent,
        SettingTypeComponent
    ],
    entryComponents: [
        ConfirmationPopupComponent,
        ConfirmationRoutingPopupComponent,
        ConvertProspect2Component,
        ConfirmationPopupCallAwayComponent,
        FengShuisInforComponent,
        SettingTypeComponent
    ]
})
export class SharedComponentsModule { }
