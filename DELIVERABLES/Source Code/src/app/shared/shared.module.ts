import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { SharedComponentsModule } from './components/shared-components.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { CommentsModule } from './modules/comments/comments.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgbCollapseModule, NgbAlertModule, NgbDropdownModule, NgbModalModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AutoCompleteModule, DropdownModule } from 'primeng/primeng';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { AuthGuard, ApiService, DataService, UserService } from './services/index';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap/tooltip/tooltip.module';
import { MomentModule } from 'angular2-moment';
import { ActivitiesModule } from './modules/activities/activities.module';
import { AuditsModule } from './modules/audits/audits.module';
import { RouterModule } from '@angular/router';
import { FormInputModule } from './modules/form-input/form-input.module';
import { AuditsListModule } from './modules/audits-list/audits-list.module';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { WindowService } from './services/window.service';
import { FengShuisInforService } from './services/feng-shuis-infor.service';
import { DialogService, DialogCloseResult, DialogModule } from '@progress/kendo-angular-dialog';
import { EmailEditorComponent } from './components/email-editor/email-editor.component';
import { EmailService } from './services/email.service';
import { ImageCropperModule } from './modules/image-cropper/image-cropper.module';
import { ModalModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { PermissionService } from './services/permission.service';

@NgModule({
    imports: [
        AuditsListModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        MomentModule,
        NgbCarouselModule.forRoot(),
        NgbDropdownModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbCollapseModule.forRoot(),
        NgbModalModule.forRoot(),
        NgbTooltipModule.forRoot(),
        NgMultiSelectDropDownModule.forRoot(),
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0)',
            backdropBorderRadius: '3px',
            primaryColour: '#00a0e3',
            secondaryColour: '#00a0e3',
            tertiaryColour: '#00a0e3'
        }),
        AutoCompleteModule,
        DropdownModule,
        DataTablesModule,
        DateTimePickerModule,
        CommentsModule,
        ActivitiesModule,
        AuditsModule,
        FormInputModule,
        SharedComponentsModule,
        SharedPipesModule,
        SharedDirectivesModule,
        ButtonsModule,
        DialogsModule,
        GridModule,
        DialogModule,
        ImageCropperModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        NgbCarouselModule,
        NgbDropdownModule,
        NgMultiSelectDropDownModule,
        NgbAlertModule,
        NgbCollapseModule,
        NgbModalModule,
        NgbTooltipModule,
        TranslateModule,
        DataTablesModule,
        AutoCompleteModule,
        DropdownModule,
        DateTimePickerModule,
        CommentsModule,
        ActivitiesModule,
        AuditsModule,
        FormInputModule,
        SharedComponentsModule,
        SharedPipesModule,
        SharedDirectivesModule,
        ButtonsModule,
        DialogsModule,
        GridModule,
        DialogModule,
        ImageCropperModule,
        ModalModule,
        BsDropdownModule,
        NgxLoadingModule
    ],
    providers: [
        TranslateService,
        AuthGuard,
        ApiService,
        DataService,
        UserService,
        WindowService,
        FengShuisInforService,
        DialogService,
        EmailService,
        PermissionService
    ],
    entryComponents: [
        EmailEditorComponent
    ]
})
export class SharedModule { }
