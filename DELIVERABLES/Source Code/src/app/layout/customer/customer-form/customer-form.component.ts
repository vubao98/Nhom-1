import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DictionaryItem, CustomerModel } from '../../../shared/models/index';
import {
    AlertService,
    DataService,
    CustomerService,
    SessionService
} from '../../../shared/services/index';
import { Router } from '@angular/router';
import ValidationHelper from '../../../shared/helpers/validation.helper';
import CustomValidator from '../../../shared/helpers/custom-validator.helper';
import { DATETIME_PICKER_CONFIG } from '../../../shared/configs/datepicker.config';
import DateTimeConvertHelper from '../../../shared/helpers/datetime-convert-helper';
import * as moment from 'moment';
import AmLichHelper from '../../../shared/helpers/AmLich.helper';
import { Province } from '../../../shared/models/province';
import { SettingTypeComponent } from '../../../shared/components/setting-type/setting-type.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component( {
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.scss']
} )
export class CustomerFormComponent implements OnInit {
    isCollapsedMain = false;
    isCollapsedAddress = false;
    isCollapsedDesc = false;
    employeeGroupList: Observable<DictionaryItem[]>;
    employeeList: Observable<DictionaryItem[]>;
    customerGroupList: Observable<DictionaryItem[]>;
    lunarBirthdayList: Observable<DictionaryItem[]>;
    prospectSourceList: Observable<DictionaryItem[]>;
    businessList: Observable<DictionaryItem[]>;
    customerClassifyList: Observable<DictionaryItem[]>;
    statusList: Observable<DictionaryItem[]>;
    datePickerConfig = DATETIME_PICKER_CONFIG;
    contactsSearchResults: DictionaryItem[];
    rating: number;
    customerForm: FormGroup;
    @Input() customer: CustomerModel;
    provinceList: Province[];
    selectedProvince: Province;
    modalRef: BsModalRef;
    currentDate = new Date();

    isSubmitted: boolean;

    invalidMessages: string[];
    formErrors = {
        name: '',
        emailOfficial: '',
        emailExtra: '',
        website: '',
        fax: '',
        phoneNumberOfficial: '',
        phoneNumberExtra: '',
        stockCode: '',
        taxCode: '',
        customerType: '',
        address: '',
        city: '',
        description: '',
        assignTo: ''
    };
    copyData = {
        phone: '',
        address: '',
        city: '',
        district: '',
        country: ''
    };
    get groupRole(): string {
        if ( this.sessionService.currentSession ) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }

    userGroupRole = USER_GROUP_ROLE;
    // phân quyền
    listPermission: any[];
    // Sửa Cấu hình Nhóm
    get isCustomerConfigGroup(): boolean {
        if ( this.listPermission && this.listPermission.length > 0 ) {
            return this.listPermission.filter( i => i.functionWeb.no === 'CustomerConfigGroup' ).length > 0 ? true : false;
        } else {
            return false;
        }
    }

    constructor (
        private router: Router,
        private fb: FormBuilder,
        private sessionService: SessionService,
        private alertService: AlertService,
        private dataService: DataService,
        private customerService: CustomerService,
        private cdr: ChangeDetectorRef,
        private bModalService: BsModalService,
    ) { }

    ngOnInit() {
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        window.scrollTo( 0, 0 );
        this.createForm();
        this.lunarBirthdayList = this.dataService.getlunarBirthday();
        this.customerGroupList = this.dataService.getCustomerGroups();
        this.businessList = this.dataService.getBusiness();
        this.customerClassifyList = this.dataService.getCustomerClassifies();
        this.employeeList = this.dataService.getEmployees();
        this.employeeGroupList = this.dataService.getEmployeeGroups();
        this.customerForm.get( 'contact' ).patchValue( this.customer.contact );
        this.dataService.getListProvince().subscribe( data => {
            // tslint:disable-next-line:triple-equals
            this.provinceList = data;
            if ( this.customer.city ) {
                this.selectCity( this.customer.city, true );
            }
        } );
        this.dataService.updateSettingDataSubject.subscribe( data => this.customerGroupList = this.dataService.getCustomerGroups() );
    }

    createForm() {
        this.rating = this.customer.rating;
        this.customerForm = this.fb.group( {
            id: this.customer.id,
            name: [this.customer.name, [CustomValidator.required, Validators.maxLength( 256 )]],
            emailOfficial: [this.customer.emailOfficial, [CustomValidator.emailOrEmpty, Validators.maxLength( 50 )]],
            website: [this.customer.website, [CustomValidator.website, Validators.maxLength( 100 )]],
            emailExtra: [this.customer.emailExtra, [CustomValidator.emailOrEmpty, Validators.maxLength( 50 )]],
            fax: [this.customer.fax, CustomValidator.faxNumber],
            career: this.customer.career,
            phoneNumberOfficial: [
                this.customer.phoneNumberOfficial,
                [CustomValidator.phoneNumber, Validators.required]
            ],
            group: this.customer.group,
            stockCode: [this.customer.stockCode, Validators.maxLength( 500 )],
            rating: this.customer.rating,
            taxCode: [this.customer.taxCode, CustomValidator.taxNumber],
            type: this.customer.type,
            phoneNumberExtra: [
                this.customer.phoneNumberExtra,
                CustomValidator.phoneNumber
            ],
            revenue: this.customer.revenue,
            assignTo: [
                ( this.customer.assignTo && this.customer.assignTo.id )
            ],
            assignToGroup: [
                ( this.customer.assignToGroup && this.customer.assignToGroup.id )
            ],
            address: [this.customer.address, Validators.maxLength( 200 )],
            city: this.customer.city,
            country: this.customer.country,
            district: this.customer.district,
            description: [this.customer.description, Validators.maxLength( 512 )],
            companyEstablishmentDay: DateTimeConvertHelper.fromTimestampToDtObject(
                this.customer.companyEstablishmentDay
            ),
            dob: DateTimeConvertHelper.fromTimestampToDtObject(
                this.customer.dob
            ),
            customerType: [this.customer.customerType, Validators.required],
            contact: {},
            gender: [this.customer.gender || 'Male'],
            lunarBirthday: [this.customer.lunarBirthday]
        } );

        this.customerForm.valueChanges.subscribe( data =>
            this.onFormValueChanged( data )
        );
    }

    selectCity( data, onInit?) {
        // tslint:disable-next-line:triple-equals
        this.selectedProvince = this.provinceList.find( i => i.id == data );
        if ( !onInit ) {
            this.customerForm.get( 'district' ).patchValue( null );
        }
    }

    onFormValueChanged( data?: any ) {
        if ( this.isSubmitted ) {
            this.validateForm();
        }
    }

    validateForm() {
        this.invalidMessages = ValidationHelper.getInvalidMessages(
            this.customerForm,
            this.formErrors
        );
        if ( !( this.customerForm.get( 'assignTo' ).value || this.customerForm.get( 'assignToGroup' ).value ) ) {
            this.formErrors.assignTo = 'Bạn cần nhập 1 trong 2 trường này';
            this.invalidMessages.push( 'Bạn cần nhập 1 trong 2 trường này' );
        } else {
            this.formErrors.assignTo = '';
        }
        return this.invalidMessages.length === 0;
    }

    onRatingChange( $event ) {
        this.rating = $event.rating;
    }

    submitForm() {
        // rating component cannot using with reactive form, so manually set value
        this.customerForm.get( 'rating' ).patchValue( this.rating );
        this.isSubmitted = true;

        if ( this.validateForm() ) {
            this.customerService
                .createOrUpdateFormData( this.customerForm.value )
                .subscribe( result => {
                    const message = this.customer.id
                        ? 'Khách hàng đã được chỉnh sửa.'
                        : 'Khách hàng đã được tạo.';
                    this.router.navigate( [`/customer/detail/${ result.id }`] );
                    this.alertService.success( message );
                }, err => {
                    let message;
                    let messErrArr;
                    const error = JSON.parse( err.text() );
                    switch ( error.error_code ) {
                        case 'INVALID_VALUE':
                        case 'INVALID_COLUMN_VALUE':
                            messErrArr = error.error_message.split( ',' );
                            message = `Giá trị của cột ${
                                messErrArr[0]
                                } ở vị trí ${
                                messErrArr[1]
                                } không phù hợp, vui lòng kiểm tra lại!`;
                            break;
                        case 'EXIST_PHONE_NUMBER':
                            message = `Số điện thoại ${ error.error_message } đã tồn tại trong hệ thống, vui lòng kiểm tra lại!`;
                            break;
                        case 'DEPARTMENT_NOT_EXIST':
                            message = `Phòng ban không tồn tại, vui lòng kiểm tra lại!`;
                            break;
                        case 'EMPLOYEE_NOT_EXIST':
                            message = `Cá nhân không tồn tại, vui lòng kiểm tra lại!`;
                            break;
                        case 'CAMPAIGN_NOT_EXIST':
                            message = `Chiến dịch không tồn tại, vui lòng kiểm tra lại!`;
                            break;
                        case 'INVALID_MANDTORY_VALUE':
                            message = `${ error.error_message } là bắt buộc, vui lòng nhập đúng template!`;
                            break;
                        default:
                            message = `Bạn đã nhập dữ liệu thất bại, vui lòng nhập đúng template!`;
                            break;
                    }
                    this.alertService.error( message );
                } );
        }
    }
    searchContacts( query ) {
        this.dataService
            .searchContacts( query )
            .subscribe( result => ( this.contactsSearchResults = result ) );
    }

    onCloseClick() {
        const dob = moment( this.customerForm.value.companyEstablishmentDay );
        const date = {
            Day: +dob.get( 'date' ),
            Month: +dob.get( 'month' ) + 1,
            Year: +dob.get( 'year' )
        };
        const lunarYear = AmLichHelper.ConvertToLunarYear( AmLichHelper.SolarToLunar( date, 7 ).lunarYear );
        const obj = {
            id: lunarYear,
            text: lunarYear
        };
        this.customerForm.get( 'lunarBirthday' ).patchValue( obj.id );
    }

    onClearClick() {
        this.customerForm.get( 'lunarBirthday' ).patchValue( null );
    }

    openModal( type: string ) {
        const config = {
            type: type
        };
        this.modalRef = this.bModalService.show( SettingTypeComponent, { initialState: config } );
    }

    assignToGroupChange( groupId: string ) {
        // lọc nhân viên theo nhóm
        if ( groupId != '0: null' ) {
            this.employeeList = Observable.create( data => data.next( [] ) );
            // this.filterModel.assignTo = null;
            this.customerForm.get( 'assignTo' ).patchValue( null );
            this.employeeList = this.dataService.getEmployees( groupId );
        }
    }
}
