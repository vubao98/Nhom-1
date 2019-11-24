import { Component, OnInit, Input, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DictionaryItem, ProspectModel } from '../../../shared/models';
import {
  DataService, AlertService, ProspectService, SessionService,
  CampaignService, ConfirmationService
} from '../../../shared/services/index';
import { Router } from '@angular/router';
import ValidationHelper from '../../../shared/helpers/validation.helper';
import CustomValidator from '../../../shared/helpers/custom-validator.helper';
import { SelectItemWithType } from '../../../shared/models/select-item-with-type';
import DateTimeConvertHelper from '../../../shared/helpers/datetime-convert-helper';
import { DATETIME_PICKER_CONFIG } from '../../../shared/configs/datepicker.config';
import * as moment from 'moment';
import AmLichHelper from '../../../shared/helpers/AmLich.helper';
import { Province } from '../../../shared/models/province';
import { DictionaryEditItem } from '../../../shared/models/dictionary-edit-item';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SettingTypeComponent } from '../../../shared/components/setting-type/setting-type.component';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';


@Component( {
  selector: 'app-prospect-form',
  templateUrl: './prospect-form.component.html',
  styleUrls: ['./prospect-form.component.scss']
} )
export class ProspectFormComponent implements OnInit {
  employeeList: Observable<DictionaryItem[]>;
  employeeGroupList: Observable<DictionaryItem[]>;
  assignToList: Observable<DictionaryItem[]>;
  salutationList: Observable<DictionaryItem[]>;
  prospectSourceList: Observable<DictionaryItem[]>;
  businessList: Observable<DictionaryItem[]>;
  evaluationList: Observable<DictionaryItem[]>;
  statusList: Observable<DictionaryItem[]>;
  prospectHandlerList: Observable<DictionaryItem[]>;
  campaignsSearchResults: DictionaryItem[];
  lunarBirthdayList: Observable<DictionaryItem[]>;
  datePickerConfig = DATETIME_PICKER_CONFIG;
  provinceList: Province[];
  selectedProvince: Province;
  prospectEvaluationSettingList: DictionaryEditItem[];
  modalRef: BsModalRef;
  retailList: DictionaryItem[];
  retailSearchList: DictionaryItem[];
  modelList: DictionaryItem[];
  modelSearchList: DictionaryItem[];
  dbList: DictionaryItem[];
  dbSearchList: DictionaryItem[];
  approachChanelList: DictionaryItem[];

  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;
  isCollapseChanel = false;
  isAddMoreEvaluation = true;
  isZeroLength = false;
  evaluationName: string;
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

  @Input() prospect: ProspectModel;

  prospectForm: FormGroup;
  isSubmitted: boolean;
  invalidMessages: string[];
  formErrors = {
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    website: '',
    phoneNumberCustomer: '',
    phoneNumberpersonal: '',
    companyName: '',
    address: '',
    city: '',
    country: '',
    district: '',
    description: '',
    socialLink: '',
    promotionCare: '',
    adsID: '',
    result: '',
    phoneEmailSocial: '',
    statusSource: '',
    approachChannels: ''
  };
  /* Phân quyền */
  listPermission: any[];
  // Cấu hình Đánh giá
  get isProspectConfigRate(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectConfigRate' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Cấu hình Nguồn tiềm năng
  get isProspectConfigProspectResource(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectConfigProspectResource' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Cấu hình cần xử lý bởi
  get isProspectConfigHandler(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectConfigHandler' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Cấu hình D&B
  get isProspectConfigDB(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectConfigDB' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Cấu hình Kênh tiếp cận
  get isProspectConfigApproachChannel(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectConfigApproachChannel' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Sửa Đã tiếp cận
  get isProspectEditApproached(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectEditApproached' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Sửa Cơ hội bán hàng
  get isProspectEditSaleOpportunity(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectEditSaleOpportunity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Sửa Tình trạng
  get isProspectEditPotentialStatus(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectEditPotentialStatus' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Sửa Kết quả
  get isProspectEditResult(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectEditResult' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  // Xem Đã tiếp cận
  get isProspectViewApproached(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewApproached' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Xem Cơ hội bán hàng
  get isProspectViewSaleOpportunity(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewSaleOpportunity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Xem Tình trạng
  get isProspectViewPotentialStatus(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewPotentialStatus' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Xem Kết quả
  get isProspectViewResult(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewResult' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get groupRole(): string {
    if ( this.sessionService.currentSession ) {
        return this.sessionService.currentSession.role + '';
    } else {
        return '';
    }
}

  userGroupRole = USER_GROUP_ROLE;

  constructor (
    private fb: FormBuilder,
    private router: Router,
    private sessionService: SessionService,
    private alertService: AlertService,
    private dataService: DataService,
    private prospectService: ProspectService,
    private cdr: ChangeDetectorRef,
    private campaignService: CampaignService,
    private bModalService: BsModalService,
    private confirmService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    this.createForm();
    this.salutationList = this.dataService.getSalutations();
    this.prospectSourceList = this.dataService.getProspectSources();
    this.businessList = this.dataService.getBusiness();
    this.statusList = this.dataService.getProspectStatus();
    this.employeeList = this.dataService.getEmployees();
    this.employeeGroupList = this.dataService.getEmployeeGroups();
    this.lunarBirthdayList = this.dataService.getlunarBirthday();
    this.evaluationList = this.dataService.getProspectEvaluations();
    this.prospectHandlerList = this.dataService.getProspectHandlers();
    this.dataService.getListProvince().subscribe( data => {
      // tslint:disable-next-line:triple-equals
      this.provinceList = data;
      if ( this.prospect.city ) {
        this.selectCity( this.prospect.city, true );
      }
    } );
    this.dataService.updateSettingDataSubject.subscribe( data => {
      this.evaluationList = this.dataService.getProspectEvaluations();
      this.prospectSourceList = this.dataService.getProspectSources();
      this.prospectHandlerList = this.dataService.getProspectHandlers();
      this.getApproachChanelAndDab();
    } );

    this.assignToList = this.dataService.getAssignToItems();
    if ( this.prospect && this.prospect.id && this.prospect.objectId ) {
      this.campaignService.view( this.prospect.objectId ).subscribe( result => {
        this.prospectForm.get( 'campaign' ).patchValue( {
          id: this.prospect.objectId,
          text: result.name
        } );
      } );
    }
    this.dataService.getProductFunitureGroups().subscribe( data => {
      this.retailList = data;
      this.retailSearchList = data;
    } );
    this.dataService.getProductFunitureModel().subscribe( data => {
      this.modelList = data;
      this.modelSearchList = data;
    } );
    this.getApproachChanelAndDab();
  }

  getApproachChanelAndDab() {
    this.dataService.getDBs().subscribe( data => {
      this.dbList = data;
      this.dbSearchList = data;
    } );
    this.dataService.getApproachChanels( 'Prospect' ).subscribe( data => {
      this.approachChanelList = data;
    } );
  }

  searchRetail( searchKey: string ) {
    this.retailSearchList = this.retailList.filter( i => i.text.toLowerCase().includes( searchKey.toLowerCase() ) );
  }

  searchModel( searchKey: string ) {
    this.modelSearchList = this.modelList.filter( i => i.text.toLowerCase().includes( searchKey.toLowerCase() ) );
  }

  searchDbs( searchKey: string ) {
    this.dbSearchList = this.dbList.filter( i => i.text.toLowerCase().includes( searchKey.toLowerCase() ) );
  }

  createForm() {
    const approachChannels = (this.prospect.approachChannels && this.prospect.approachChannels.length > 0 ? this.prospect.approachChannels.map( i => {
      return {
        id: i.id,
        text: i.name
      };
    } ) : []);
    this.prospectForm = this.fb.group( {
      id: this.prospect.id,
      name: this.prospect.name,
      revenue: this.prospect.revenue,
      fullName: [this.prospect.fullName, [CustomValidator.required, Validators.maxLength( 256 )]],
      phoneNumberCustomer: [this.prospect.phoneNumberCustomer, CustomValidator.phoneNumber],
      phoneNumberpersonal: [this.prospect.phoneNumberpersonal, CustomValidator.phoneNumber],
      comment: this.prospect.comment,
      email: [this.prospect.email, [CustomValidator.emailOrEmpty, Validators.maxLength( 50 )]],
      companyName: [this.prospect.companyName, Validators.maxLength( 200 )],
      website: [this.prospect.website, [CustomValidator.website, Validators.maxLength( 50 )]],
      source: this.prospect.source && this.prospect.source.id,
      statusSource: [this.prospect.statusSource, Validators.required],
      fieldOfAction: this.prospect.fieldOfAction,
      assignTo: ( this.prospect.assignTo && this.prospect.assignTo.id ), // phân công cho nhân viên
      // || this.sessionService.currentUser.employeeId
      assignToGroup: this.prospect.assignToGroup && this.prospect.assignToGroup.id || null, // phân công cho nhóm
      address: [this.prospect.address, Validators.maxLength( 200 )],
      city: this.prospect.city,
      country: this.prospect.country,
      district: this.prospect.district,
      description: [this.prospect.description, Validators.maxLength( 512 )],
      campaign: this.prospect.campaign && {
        id: this.prospect.campaign.id,
        name: this.prospect.campaign.name
      },
      dob: DateTimeConvertHelper.fromTimestampToDtObject(
        this.prospect.dob
      ),
      gender: this.prospect.gender,
      lunarBirthday: this.prospect.lunarBirthday,
      handler: this.prospect.handler, // cần xử lý bởi
      date: DateTimeConvertHelper.fromTimestampToDtObject( this.prospect.date ), // ngày phát sinh tiềm năng
      socialLink: [this.prospect.socialLink, Validators.maxLength( 255 )], // social link
      retails: [],
      models: [],
      dab: [],
      promotionCare: [this.prospect.promotionCare, Validators.maxLength( 512 )], // CTKM quan tâm
      askShowroomAddress: this.prospect.askShowroomAddress, // Hỏi địa chỉ showroom
      onlineSaleOpportunity: this.prospect.onlineSaleOpportunity, // Cơ hội bán hàng
      adsID: [this.prospect.adsID, Validators.maxLength( 128 )], // ads
      result: [this.prospect.result, [Validators.required, Validators.maxLength( 512 )]], // kết quả
      approached: this.prospect.approached, // đã tiếp cận
      // approachChannels: approachChannels
      approachChannels: [approachChannels, CustomValidator.requiredArray]
      // [approachChannels, CustomValidator.requiredArray ]// kênh tiếp cận
      // // , [CustomValidator.isRequiredArray]
    } );
    if ( this.prospect.retails && this.prospect.retails.length > 0 ) {
      const retails = this.prospect.retails.map( i => {
        return {
          id: i.productGroup.id,
          text: i.productGroup.name
        };
      } );
      this.prospectForm.get( 'retails' ).patchValue( retails );
    }
    if ( this.prospect.models && this.prospect.models.length > 0 ) {
      const models = this.prospect.models.map( i => {
        return {
          id: i.attributeValue.id,
          text: i.attributeValue.value
        };
      } );
      this.prospectForm.get( 'models' ).patchValue( models );
    }
    if ( this.prospect.dab && this.prospect.dab.length > 0 ) {
      const dabs = this.prospect.dab.map( i => {
        return {
          id: i.value,
          text: i.text
        };
      } );
      this.prospectForm.get( 'dab' ).patchValue( dabs );
    }
    this.cdr.detectChanges();
    this.prospectForm.valueChanges
      .subscribe( data => this.onFormValueChanged( data ) );
  }

  selectCity( data, onInit?) {
    // tslint:disable-next-line:triple-equals
    this.selectedProvince = this.provinceList.find( i => i.id == data );
    if ( !onInit ) {
      this.prospectForm.get( 'district' ).patchValue( null );
    }
  }

  onFormValueChanged( data?: any ) {
    if ( this.isSubmitted ) {
      this.validateForm();
    }
  }

  validateForm() {
    this.invalidMessages = ValidationHelper.getInvalidMessages( this.prospectForm, this.formErrors );
    if ( !( this.prospectForm.get( 'phoneNumberCustomer' ).value || this.prospectForm.get( 'email' ).value || this.prospectForm.get( 'socialLink' ).value ) ) {
      this.formErrors.phoneEmailSocial = 'Bạn cần nhập 1 trong 3 trường này';
      this.invalidMessages.push( 'Bạn cần nhập 1 trong 3 trường này' );
    } else {
      this.formErrors.phoneEmailSocial = '';
    }
    return this.invalidMessages.length === 0;
  }

  submitForm() {
    this.isSubmitted = true;
    if ( this.validateForm() ) {
      this.prospectService.createOrUpdate( this.prospectForm.value ).subscribe( result => {
        const message = this.prospect.id
          ? 'Tiềm năng đã được chỉnh sửa.'
          : 'Tiềm năng đã được tạo.';
        this.router.navigate( [`/prospect/detail/${ result.id }`] );
        this.alertService.success( message );
      }, err => {
        const errors = JSON.parse( err._body );
        switch ( errors.error_code ) {
          case 'EXIST_PHONE_NUMBER':
            this.alertService.error( 'Số điện thoại này đã tồn tại trong hệ thống, vui lòng nhập số khác!' );
            break;
          case 'EMAIL_EXIST':
            this.alertService.error( 'Email này đã tồn tại trong hệ thống, vui lòng nhập Email khác!' );
            break;
          case 'SOCIAL_LINK_EXIST':
            this.alertService.error( 'Social link này đã tồn tại trong hệ thống, vui lòng nhập Social link khác!' );
            break;

          default:
            this.alertService.error( 'Đã có lỗi xảy ra, vui lòng thử lại!' );
            break;
        }
      } );
    }
  }

  searchCampaigns( query ) {
    this.dataService.searchCampaigns( query ).subscribe( result => this.campaignsSearchResults = result );
  }

  onCloseClick() {
    const dob = moment( this.prospectForm.value.dob );
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
    if ( obj.id.toString() !== 'undefined undefined' ) {
      this.prospectForm.get( 'lunarBirthday' ).patchValue( obj.id );
    }
  }

  onClearClick() {
    this.prospectForm.get( 'lunarBirthday' ).patchValue( null );
  }

  openModal( type: string ) {
    const config = {
      type: type,
      objName: 'Prospect'
    };
    this.modalRef = this.bModalService.show( SettingTypeComponent, { initialState: config } );
  }

  assignToGroupChange( groupId: string ) {
    // lọc nhân viên theo nhóm
    if ( groupId != '0: null' ) {
      this.employeeList = Observable.create( data => data.next( [] ) );
      // this.filterModel.assignTo = null;
      this.prospectForm.get( 'assignTo' ).patchValue( null );
      this.employeeList = this.dataService.getEmployees( groupId );
    }
  }

}
