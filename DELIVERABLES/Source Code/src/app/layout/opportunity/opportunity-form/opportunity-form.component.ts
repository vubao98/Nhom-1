import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OpportunityModel } from '../../../shared/models/opportunity/opportunity.model';
import { Observable } from 'rxjs/Observable';
import { DictionaryItem, ProspectModel } from '../../../shared/models';
import {
  DataService, SessionService, AlertService, OpportunityService, CustomerService,
  ConfirmationService, ProspectService
} from '../../../shared/services';
import { CURRENT_OPTIONS_CONFIG } from '../../../shared/configs/select-dropdown.config';
import * as moment from 'moment';
import { Router } from '@angular/router';
import ValidationHelper from '../../../shared/helpers/validation.helper';
import { DATETIME_PICKER_CONFIG } from '../../../shared/configs/datepicker.config';
import DateTimeConvertHelper from '../../../shared/helpers/datetime-convert-helper';
import CustomValidator from '../../../shared/helpers/custom-validator.helper';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConvertProspect2Component } from '../../../shared/components/convert-prospect2/convert-prospect2.component';
import { SettingTypeComponent } from '../../../shared/components/setting-type/setting-type.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';
@Component({
  selector: 'app-opportunity-form',
  templateUrl: './opportunity-form.component.html',
  styleUrls: ['./opportunity-form.component.scss'],
})
export class OpportunityFormComponent implements OnInit {
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;

  activeModalRef: NgbModalRef;

  // branches: Observable<DictionaryItem[]>;
  prospectsSearchResults: DictionaryItem[];
  customersSearchResults: DictionaryItem[];
  contactsSearchResults: DictionaryItem[];
  campaignsSearchResults: DictionaryItem[];
  employeeGroupList: Observable<DictionaryItem[]>;
  contactList: Observable<DictionaryItem[]>;
  customerList: Observable<DictionaryItem[]>;
  employeeList: Observable<DictionaryItem[]>;
  prospectList: Observable<DictionaryItem[]>;
  opportunityStepList: Observable<DictionaryItem[]>;
  opportunityClassifyList: Observable<DictionaryItem[]>;
  approachChanelList: DictionaryItem[];
  currentOptionsConfig = CURRENT_OPTIONS_CONFIG;
  datePickerConfig = DATETIME_PICKER_CONFIG;
  modalRef: BsModalRef;
  modelList: DictionaryItem[];
  modelSearchList: DictionaryItem[];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private opportunityService: OpportunityService,
    private sessionService: SessionService,
    private prospectService: ProspectService,
    private router: Router,
    private alertService: AlertService,
    private customerService: CustomerService,
    private confirmationService: ConfirmationService,
    private modalService: NgbModal,
    private bModalService: BsModalService,
  ) { }

  opportunityForm: FormGroup;
  @Input() opportunity: OpportunityModel;

  isSubmitted: boolean;
  invalidMessages: string[];
  formErrors = {
    name: '',
    probability: '',
    expectedValue: '',
    assignTo: '',
    description: '',
    approachChannels: '',
    models: ''
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
  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  userGroupRole = USER_GROUP_ROLE;
  // Phân quyền
  listPermission: any[];
  // Cấu hình nguồn cơ hội
  get isOpportunityConfigCustomerResource(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityConfigCustomerResource').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Cấu hình Giai đoạn
  get isOpportunityConfigCustomerStep(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityConfigCustomerStep').length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Cấu hình Kênh tiếp cận
  get isOpportunityConfigApproachChannel(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'OpportunityConfigApproachChannel').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    this.createForm();
    this.employeeGroupList = this.dataService.getEmployeeGroups();
    this.contactList = this.dataService.getContacts();
    this.customerList = this.dataService.getCustomers();
    this.employeeList = this.dataService.getEmployees();
    this.prospectList = this.dataService.getProspectSources();
    this.opportunityStepList = this.dataService.getOpportunitySteps();
    this.opportunityClassifyList = this.dataService.getOpportunityClassifies();
    this.opportunityForm.get('contact').patchValue(this.opportunity.contacts);
    this.dataService.getApproachChanels('Opportunity').subscribe(data => {
      this.approachChanelList = data;
    });
    this.dataService.getProductFunitureModel().subscribe(data => {
      this.modelList = data;
      this.modelSearchList = data;
    });
    // this.branches = this.dataService.getBranches();
    this.dataService.updateSettingDataSubject.subscribe(data => {
      this.opportunityStepList = this.dataService.getOpportunitySteps();
      this.prospectList = this.dataService.getProspectSources();
      this.dataService.getApproachChanels('Opportunity').subscribe(data => {
        this.approachChanelList = data;
      });
    });
  }

  createForm() {
    const approachChannelValue = this.opportunity.approachChannels && this.opportunity.approachChannels.length > 0 ? this.opportunity.approachChannels.map(i => {
      return {
        id: i.id,
        text: i.name
      };
    }) : [];
    const modelValue = this.opportunity.models && this.opportunity.models.length > 0 ? this.opportunity.models.map(i => {
      return {
        id: i.attributeValue.id,
        text: i.attributeValue.value
      };
    }) : [];
    console.log(approachChannelValue);
    this.opportunityForm = this.fb.group({
      id: this.opportunity.id,
      name: [this.opportunity.name, [CustomValidator.required, Validators.maxLength(256)]],
      opportunityDateStop: DateTimeConvertHelper.fromTimestampToDtObject(this.opportunity.opportunityDateStop),
      customer: this.opportunity.customer && {
        id: this.opportunity.customer.id,
        text: this.opportunity.customer.name,
      },
      prospectCustomer: this.opportunity.prospectCustomer && {
        id: this.opportunity.prospectCustomer.id,
        text: this.opportunity.prospectCustomer.name
      },
      contact: {},
      category: this.opportunity.category,
      prospectSource: this.opportunity.prospectSource && this.opportunity.prospectSource.id,
      phase: this.opportunity.phase,
      probability: [this.opportunity.probability, CustomValidator.probability],
      campaign: this.opportunity.campaign && {
        id: this.opportunity.campaign.id,
        text: this.opportunity.campaign.name,
      },
      assignTo: this.opportunity.assignTo && this.opportunity.assignTo.id,
      assignToGroup: this.opportunity.assignToGroup && this.opportunity.assignToGroup.id,
      description: [this.opportunity.description, Validators.maxLength(512)],
      expectedValue: [this.opportunity.expectedValue, Validators.required],
      isShare: this.opportunity.isShare,
      branch: this.sessionService.branchId,
      opportunityFrom: this.opportunity.prospectCustomer ? 'prospect' : 'customer',
      approachChannels: [approachChannelValue, CustomValidator.requiredArray], // kênh tiếp cận
      models: [modelValue, CustomValidator.requiredArray]
    });
    this.opportunityForm.valueChanges
      .subscribe(data => this.onFormValueChanged(data));
  }

  onFormValueChanged(data?: any) {
    if (this.isSubmitted) {
      this.validateForm();
    }
  }

  validateForm() {
    this.invalidMessages = ValidationHelper.getInvalidMessages(this.opportunityForm, this.formErrors);
    // if ( !( this.opportunityForm.get( 'assignTo' ).value || this.opportunityForm.get( 'assignToGroup' ).value ) ) {
    //   this.formErrors.assignTo = 'Bạn cần nhập 1 trong 2 trường này';
    //   this.invalidMessages.push( 'Bạn cần nhập 1 trong 2 trường này' );
    // } else {
    //   this.formErrors.assignTo = '';
    // }
    return this.invalidMessages.length === 0;
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.validateForm()) {
      // tslint:disable-next-line:triple-equals
      if (this.opportunityForm.get('opportunityFrom').value == 'customer') {
        this.opportunityForm.get('prospectCustomer').patchValue(null);
        // tslint:disable-next-line:triple-equals
      } else if (this.opportunityForm.get('opportunityFrom').value == 'prospect') {
        this.opportunityForm.get('customer').patchValue(null);
      }
      this.opportunityService.createOrUpdate(this.opportunityForm.value).subscribe(result => {
        const message = this.opportunity.id
          ? 'Cơ hội đã được chỉnh sửa.'
          : 'Cơ hội đã được tạo.';
        this.router.navigate([`/opportunity/detail/${result.id}`]);
        this.alertService.success(message);
        // tslint:disable-next-line:triple-equals
        if (this.opportunityForm.get('phase').value == 'Success' && this.opportunityForm.get('prospectCustomer').value) {
          // get service here
          this.confirmationService.confirm('Cơ hội này đang ở Giai đoạn Thành công 100%. Bạn có muốn tạo Khách hàng mới?', () => {
            this.prospectService.view(this.opportunityForm.get('prospectCustomer').value.id).subscribe(data => {
              this.activeModalRef = this.modalService.open(ConvertProspect2Component);
              this.activeModalRef.componentInstance.prospect = data;
            });
          });
        } else {
          // this.router.navigate([`/opportunity/detail/${result.id}`]);
        }
      });
    }
  }

  searchCustomers(query) {
    this.dataService.searchCustomers(query).subscribe(result => this.customersSearchResults = result);
  }

  searchContacts(query) {
    this.dataService.searchContacts(query).subscribe(result => this.contactsSearchResults = result);
  }

  searchCampaigns(query) {
    this.dataService.searchCampaigns(query).subscribe(result => this.campaignsSearchResults = result);
  }

  searchProspects(query) {
    this.dataService.searchProspects(query).subscribe(result => this.prospectsSearchResults = result);
  }

  selectCustomer() {
    const customer = this.opportunityForm.value.customer;
    const listContactOfCustomer = [];
    this.customerService.getContactListByCustomer(customer.id)
      .subscribe(result => {
        this.opportunityForm.get('contact').patchValue(result);
      });
  }

  openModal(type: string) {
    const config = {
      type: type,
      objName: 'Opportunity'
    };
    this.modalRef = this.bModalService.show(SettingTypeComponent, { initialState: config });
  }

  assignToGroupChange(groupId: string) {
    // lọc nhân viên theo nhóm
    if (groupId != '0: null') {
      this.employeeList = Observable.create(data => data.next([]));
      // this.filterModel.assignTo = null;
      this.opportunityForm.get('assignTo').patchValue(null);
      this.employeeList = this.dataService.getEmployees(groupId);
    }
  }

  searchModel(searchKey: string) {
    this.modelSearchList = this.modelList.filter(i => i.text.toLowerCase().includes(searchKey.toLowerCase()));
  }
}
