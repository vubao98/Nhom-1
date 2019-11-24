import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ChangeDetectorRef
} from '@angular/core';
import * as moment from 'moment';
import {
    FormGroup,
    FormBuilder,
    AbstractControl,
    Validators
} from '@angular/forms';
import { ActivityModel } from '../../../../shared/models';
import {
    SessionService,
    AlertService,
    DataService,
    ActivityService,
    UserNotificationService,
    OpportunityService
} from '../../../../shared/services/';
import { Observable } from 'rxjs/Observable';
import { DictionaryItem } from '../../../../shared/models/dictionary-item.model';
import { EventRequest } from '../../../../shared/models/api-request/activity/event/event-request.model';
import { Router, ActivatedRoute } from '@angular/router';
import ValidationHelper from '../../../../shared/helpers/validation.helper';
import { DATETIME_PICKER_CONFIG } from '../../../../shared/configs/datepicker.config';
import DateTimeConvertHelper from '../../../../shared/helpers/datetime-convert-helper';
import CustomValidator from '../../../../shared/helpers/custom-validator.helper';
import { SettingTypeComponent } from '../../../../shared/components/setting-type/setting-type.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component( {
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.scss']
} )
export class EventFormComponent implements OnInit {
    @Input() event: ActivityModel;

    eventForm: FormGroup;
    invalidMessages: string[];
    formErrors = {
        name: '',
        startDate: '',
        endDate: '',
        status: '',
        branch: '',
        address: '',
        description: '',
        assignTo: ''
    };

    searchResults: DictionaryItem[];
    eventTypeList: Observable<DictionaryItem[]>;
    activityTypeList: Observable<DictionaryItem[]>;
    employeeList: DictionaryItem[];
    activityStatusList: Observable<DictionaryItem[]>;
    branches: Observable<DictionaryItem[]>;
    modalRef: BsModalRef;

    selectedSpecificRelated: DictionaryItem;

    isCollapsedMain = false;
    isCollapsedAddress = false;
    isCollapsedDesc = false;
    isSubmitted: boolean;

    datePickerConfig = DATETIME_PICKER_CONFIG;
    employeeGroupList: DictionaryItem[];
    constructor (
        private fb: FormBuilder,
        private activityService: ActivityService,
        private sessionService: SessionService,
        private alertService: AlertService,
        private dataService: DataService,
        private router: Router,
        private route: ActivatedRoute,
        private userNotificationService: UserNotificationService,
        private opportunityService: OpportunityService,
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
    // Cấu hình Loại sự kiện
    get isActivityConfigEventType(): boolean {
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'ActivityConfigEventType' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }

    ngOnInit() {
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        this.createForm();
        this.dataService.getEmployeeGroups().subscribe( data => {
            this.employeeGroupList = data;
            // if ( this.event.assignTo && this.event.assignTo.id ) {
            //     const groupId = this.event.assignTo.id.toString();
            //     if ( !this.employeeGroupList.find( i => i.id.toString() === groupId ) ) {
            //         this.employeeGroupList.push( { id: +groupId, text: this.event.assignTo.name } );
            //     }
            // }
        } );
        this.dataService.getEmployees().subscribe( data => {
            this.employeeList = data;
            // if ( this.event.assignTo && this.event.assignTo.id ) {
            //     const groupId = this.event.assignTo.id.toString();
            //     if ( !this.employeeList.find( i => i.id.toString() === groupId ) ) {
            //         this.employeeList.push( { id: +groupId, text: this.event.assignTo.name } );
            //     }
            // }
        } );
        this.activityStatusList = this.dataService.getActivityStatus();
        this.activityTypeList = this.dataService.getActivityTypes();
        this.eventTypeList = this.dataService.getEventTypes();
        this.branches = this.dataService.getBranches();
        this.dataService.updateSettingDataSubject.subscribe( data => this.eventTypeList = this.dataService.getEventTypes() );
    }

    createForm() {
        this.eventForm = this.fb.group( {
            id: this.event.id,
            name: [this.event.name, [CustomValidator.required, Validators.maxLength( 256 )]],
            status: [this.event.status, Validators.required],
            startDate: [
                DateTimeConvertHelper.fromTimestampToDtObject(
                    this.event.startDate
                ),
                Validators.required
            ],
            endDate: [
                DateTimeConvertHelper.fromTimestampToDtObject(
                    this.event.endDate
                ),
                Validators.required
            ],
            address: [this.event.address, Validators.maxLength( 200 )],
            type: this.event.eventType,
            specificRelated: {
                value: this.event.specificRelated && {
                    id: this.event.specificRelated.id,
                    text: this.event.specificRelated.name
                },
                disabled: !this.event.relatedToType
            },
            relatedToType: this.event.relatedToType,
            description: [this.event.description, Validators.maxLength( 512 )],
            assignTo: [
                ( this.event.assignTo && this.event.assignTo.id ) ||
                this.sessionService.currentUser.employeeId
            ],
            assignToGroup: this.event.assignToGroup && this.event.assignToGroup.id,
            branch: [this.event.branch && this.event.branch.id],
            isShare: this.event.isShare,
        } );
        this.cdr.detectChanges();
        this.eventForm.valueChanges.subscribe( data =>
            this.onFormValueChanged( data )
        );
        if ( this.event.id ) {
            this.opportunityService.view( this.event.specificRelated.id )
                .subscribe( data => {
                    this.selectedSpecificRelated = {
                        id: data.id,
                        text: data.customer.name,
                        extra: data.customer.name
                    };
                } );
        }
    }

    onFormValueChanged( data?: any ) {
        if ( this.isSubmitted ) {
            this.validateForm();
        }
    }

    validateForm() {
        this.invalidMessages = ValidationHelper.getInvalidMessages(
            this.eventForm,
            this.formErrors
        );
        if ( !( this.eventForm.get( 'assignTo' ).value || this.eventForm.get( 'assignToGroup' ).value ) ) {
            this.formErrors.assignTo = 'Bạn cần nhập 1 trong 2 trường này';
            this.invalidMessages.push( 'Bạn cần nhập 1 trong 2 trường này' );
        } else {
            this.formErrors.assignTo = '';
        }
        return this.invalidMessages.length === 0;
    }

    onSelectSpecificRelated( data ) {
        this.selectedSpecificRelated = data;
    }

    onRelatedToTypeChange() {
        const relatedToTypeControl = this.eventForm.get( 'relatedToType' );
        const specificRelatedControl = this.eventForm.get( 'specificRelated' );
        specificRelatedControl.reset();

        if ( relatedToTypeControl.value ) {
            specificRelatedControl.enable();
        } else {
            specificRelatedControl.disable();
        }
    }

    submitForm() {
        this.isSubmitted = true;
        if ( this.validateForm() ) {
            this.activityService
                .createOrUpdate( this.eventForm.value, 'Event' )
                .subscribe( result => {
                    const message = this.event.id
                        ? 'Sự kiện đã được chỉnh sửa.'
                        : 'Sự kiện đã được tạo.';
                    this.route.params.subscribe( params => {
                        if ( params.moduleName && params.moduleItemId ) {
                            this.router.navigate( [
                                `/${ params.moduleName }/detail/${
                                params.moduleItemId
                                }`
                            ] );
                        } else {
                            this.router.navigate( [
                                `/activity/event/detail/${ result.id }`
                            ] );
                        }
                        this.alertService.success( message );
                        this.userNotificationService
                            .listNoticationsReminder( 0, 100 )
                            .subscribe( notifi => {
                                this.sessionService.saveNotificationList(
                                    notifi.items
                                );
                            } );
                    } );
                } );
        }
    }

    search( query ) {
        this.dataService
            .searchAllByModuleName(
                this.eventForm.get( 'relatedToType' ).value,
                query
            )
            .subscribe( result => {
                this.searchResults = result;
            }, err => { } );
    }

    openModal( type: string ) {
        const config = {
            type: type
        };
        this.modalRef = this.bModalService.show( SettingTypeComponent, { initialState: config } );
    }

    assignToGroupChange( groupIdStr: string ) {
        // lọc nhân viên theo nhóm
        if ( groupIdStr != '0: null' ) {
            this.employeeList = [];
            // this.filterModel.assignTo = null;
            this.eventForm.get( 'assignTo' ).patchValue( null );
            this.dataService.getEmployees().subscribe( data => {
                this.employeeList = data;
                if ( this.event.assignTo && this.event.assignTo.id ) {
                    const groupId = this.event.assignTo.id.toString();
                    if ( !this.employeeList.find( i => i.id.toString() === groupId ) ) {
                        this.employeeList.push( { id: +groupId, text: this.event.assignTo.name } );
                    }
                }
            } );
        }
    }
}
