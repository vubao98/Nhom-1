import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CampaignModel } from '../../../shared/models/campaign/campaign.model';
import * as moment from 'moment';
import {
    DataService,
    SessionService,
    UserNotificationService
} from '../../../shared/services/index';
import { CampaignService } from '../../../shared/services/campaign.service';
import { Observable } from 'rxjs/Observable';
import { DictionaryItem } from '../../../shared/models/dictionary-item.model';
import { Router } from '@angular/router';
import { CampaignRequest } from '../../../shared/models/api-request/campaign/campaign-request.model';
import { AlertService } from '../../../shared/services/alert.service';
import ValidationHelper from '../../../shared/helpers/validation.helper';
import { routerTransition } from '../../../router.animations';
import DateTimeConvertHelper from '../../../shared/helpers/datetime-convert-helper';
import { DATETIME_PICKER_CONFIG } from '../../../shared/configs/datepicker.config';
import CustomValidator from '../../../shared/helpers/custom-validator.helper';
import { CustomerListItem } from '../../../shared/models';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { SettingTypeComponent } from '../../../shared/components/setting-type/setting-type.component';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';
@Component( {
    selector: 'app-campaign-form',
    templateUrl: './campaign-form.component.html',
    styleUrls: ['./campaign-form.component.scss'],
    animations: [routerTransition()]
} )
export class CampaignFormComponent implements OnInit {
    @Input() campaign: CampaignModel;
    listReleated: any[];

    isCollapsedMain = false;
    isCollapsedAddress = false;
    isCollapsedDesc = false;

    datePickerConfig = DATETIME_PICKER_CONFIG;
    employeeGroupList: Observable<DictionaryItem[]>;
    employeeList: Observable<DictionaryItem[]>;
    campaignStatus: Observable<DictionaryItem[]>;
    campaignTypes: Observable<DictionaryItem[]>;
    activityTypeList: DictionaryItem[];
    releatedTypeItem: DictionaryItem;
    approachChanelList: DictionaryItem[];
    modalRef: BsModalRef;

    campaignForm: FormGroup;
    isSubmitted: boolean;

    invalidMessages: string[];
    formErrors = {
        name: '',
        numberOfParticipants: '',
        donors: '',
        target: '',
        marketingObject: '',
        description: '',
        assignTo: ''
    };

    dropdownSettings = {
        singleSelection: false,
        idField: 'id',
        textField: 'text',
        selectAllText: 'Chọn tất cả',
        unSelectAllText: 'Bỏ chọn tất cả',
        searchPlaceholderText: 'Tìm theo tên',
        itemsShowLimit: 1,
        allowSearchFilter: true
    };

    constructor (
        private fb: FormBuilder,
        private dataService: DataService,
        private sessionService: SessionService,
        private campaignService: CampaignService,
        private router: Router,
        private alertService: AlertService,
        private userNotificationService: UserNotificationService,
        private cdr: ChangeDetectorRef,
        private bModalService: BsModalService,
    ) { }

    get groupRole(): string {
        if ( this.sessionService.currentSession ) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }
      userGroupRole = USER_GROUP_ROLE;
    // Phân quyền
    listPermission: any[];
    // Cấu hình Nguồn chiến dịch
    get isCampaignConfigApproachChannel(): boolean {
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'CampaignConfigApproachChannel' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }
    // Cấu hình Loại chiến dịch
    get isCampaignConfigType(): boolean {
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'CampaignConfigType' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }

    ngOnInit() {
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        this.createForm();
        this.employeeGroupList = this.dataService.getEmployeeGroups();
        this.employeeList = this.dataService.getEmployees();
        this.campaignStatus = this.dataService.getCampaignStatus();
        this.campaignTypes = this.dataService.getCampaignTypes();
        this.dataService.getApproachChanels( 'Campaign' ).subscribe( data => {
            this.approachChanelList = data;
        } );
        this.dataService.getActivityTypes().subscribe( data => {
            this.activityTypeList = data.filter( i => i.id.toString() !== 'Opportunity' && i.id.toString() !== 'Campaign' );
            if ( this.campaign.relatedToType ) {
                // tslint:disable-next-line:triple-equals
                this.releatedTypeItem = this.activityTypeList.find( i => i.id.toString() == this.campaign.relatedToType );
                this.listReleated = this.campaign.relatedList;
                // switch (this.campaign.relatedToType) {
                //     case 'Contact':
                //         this.listReleated = this.campaign.contacts;
                //         break;
                //     case 'Customer':
                //         this.listReleated = this.campaign.customers;
                //         break;
                //     case 'Prospect':
                //         this.listReleated = this.campaign.prospects;
                //         break;
                // }
                // if (this.listReleated && this.listReleated.length > 0) {
                //     const listCustomer = this.listReleated.map(i => i.id);
                //     this.campaignForm.get('customers').patchValue(listCustomer);
                // }
            }
        } );
        this.dataService.updateSettingDataSubject.subscribe( data => {
            this.campaignTypes = this.dataService.getCampaignTypes();
            this.dataService.getApproachChanels( 'Campaign' ).subscribe( data => {
                this.approachChanelList = data;
            } );
        } );
    }
    createForm() {
        this.campaignForm = this.fb.group( {
            id: this.campaign.id,
            name: [this.campaign.name, [CustomValidator.required, Validators.maxLength( 256 )]],
            status: this.campaign.status,
            category: this.campaign.category,
            marketingObject: [this.campaign.marketingObject, Validators.maxLength( 200 )],
            assignTo: ( this.campaign.assignTo && this.campaign.assignTo.id ) ||
                this.sessionService.currentUser.employeeId,
            assignToGroup: this.campaign.assignToGroup && this.campaign.assignToGroup.id,
            campaignDateStart: DateTimeConvertHelper.fromTimestampToDtObject(
                this.campaign.campaignDateStart
            ),
            campaignDateStop: DateTimeConvertHelper.fromTimestampToDtObject(
                this.campaign.campaignDateStop
            ),
            donors: [this.campaign.donors, Validators.maxLength( 100 )],
            target: [this.campaign.target, Validators.maxLength( 200 )],
            numberOfParticipants: [
                this.campaign.numberOfParticipants,
                CustomValidator.probability
            ],
            budget: this.campaign.budget,
            actualCost: this.campaign.actualCost,
            expectedRevenue: this.campaign.expectedRevenue,
            actualRevenue: this.campaign.actualRevenue,
            expectedInvestmentEfficiency: this.campaign
                .expectedInvestmentEfficiency,
            actualInvestmentEfficiency: this.campaign
                .actualInvestmentEfficiency,
            description: [this.campaign.description, Validators.maxLength( 512 )],
            relatedToType: this.campaign.relatedToType,
            relatedList: this.campaign.relatedList,
            customers: this.campaign.customers,
            approachChannels: this.campaign.approachChannels && this.campaign.approachChannels.length > 0 ? [this.campaign.approachChannels.map( i => {
                return {
                    id: i.value,
                    text: i.text
                };
            } )] : [], // kênh tiếp cận
        } );
        this.cdr.detectChanges();
        this.campaignForm.valueChanges.subscribe( data =>
            this.onFormValueChanged( data )
        );
    }

    onRelatedToTypeChange() {
        const relatedToTypeControl = this.campaignForm.get( 'relatedToType' );
        // const specificRelatedControl = this.campaignForm.get('specificRelated');
        // tslint:disable-next-line:triple-equals
        this.releatedTypeItem = this.activityTypeList.find( i => i.id == relatedToTypeControl.value );
        // specificRelatedControl.reset();

        // if (relatedToTypeControl.value) {
        //     specificRelatedControl.enable();
        // } else {
        //     specificRelatedControl.disable();
        // }
    }

    onFormValueChanged( data?: any ) {
        if ( this.isSubmitted ) {
            this.validateForm();
        }
    }

    validateForm() {
        this.invalidMessages = ValidationHelper.getInvalidMessages(
            this.campaignForm,
            this.formErrors
        );
        if ( !( this.campaignForm.get( 'assignTo' ).value || this.campaignForm.get( 'assignToGroup' ).value ) ) {
            this.formErrors.assignTo = 'Bạn cần nhập 1 trong 2 trường này';
            this.invalidMessages.push( 'Bạn cần nhập 1 trong 2 trường này' );
        } else {
            this.formErrors.assignTo = '';
        }
        return this.invalidMessages.length === 0;
    }

    submitForm() {
        this.isSubmitted = true;
        if ( this.validateForm() ) {
            this.campaignService
                .createOrUpdate( this.campaignForm.value )
                .subscribe( result => {
                    const message = this.campaign.id
                        ? 'Chiến dịch đã được chỉnh sửa.'
                        : 'Chiến dịch đã được tạo.';
                    this.router.navigate( [`/campaign/detail/${ result.id }`] );
                    this.alertService.success( message );
                    this.userNotificationService
                        .listNoticationsReminder( 0, 100 )
                        .subscribe( notifi => {
                            this.sessionService.saveNotificationList(
                                notifi.items
                            );
                        } );
                } );
        }
    }

    getListDataOut( data: CustomerListItem[] ) {
        let relatedList = [];
        switch ( this.campaignForm.get( 'relatedToType' ).value ) {
            case 'Prospect':
                relatedList = data.map( i => {
                    return {
                        customer: null,
                        contact: null,
                        prospect: {
                            id: i.id
                        }
                    };
                } );
                break;
            case 'Customer':
                relatedList = data.map( i => {
                    return {
                        customer: {
                            id: i.id
                        },
                        contact: null,
                        prospect: null
                    };
                } );
                break;
            case 'Contact':
                relatedList = data.map( i => {
                    return {
                        customer: null,
                        contact: {
                            id: i.id
                        },
                        prospect: null
                    };
                } );
                break;
            default:
                break;
        }
        this.campaignForm.get( 'relatedList' ).patchValue( relatedList );
    }

    openModal( type: string ) {
        const config = {
            type: type,
            objName: 'Campaign'
        };
        this.modalRef = this.bModalService.show( SettingTypeComponent, { initialState: config } );
    }

    assignToGroupChange( groupId: string ) {
        // lọc nhân viên theo nhóm
        if ( groupId != '0: null' ) {
            this.employeeList = Observable.create( data => data.next( [] ) );
            // this.filterModel.assignTo = null;
            this.campaignForm.get( 'assignTo' ).patchValue( null );
            this.employeeList = this.dataService.getEmployees( groupId );
        }
    }
}
