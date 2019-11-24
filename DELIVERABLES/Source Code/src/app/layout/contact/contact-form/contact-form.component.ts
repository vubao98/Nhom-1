import { DictionaryItem } from '../../../shared/models/dictionary-item.model';
import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ChangeDetectorRef
} from '@angular/core';
import { routerTransition } from '../../../router.animations';
import {
    DataService,
    AlertService,
    ContactService,
    SessionService
} from '../../../shared/services/index';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactModel } from '../../../shared/models/index';
import { Router, ActivatedRoute } from '@angular/router';
import DateTimeConvertHelper from '../../../shared/helpers/datetime-convert-helper';
import CustomValidator from '../../../shared/helpers/custom-validator.helper';
import ValidationHelper from '../../../shared/helpers/validation.helper';
import { CURRENT_OPTIONS_CONFIG } from '../../../shared/configs/select-dropdown.config';
import { DATETIME_PICKER_CONFIG } from '../../../shared/configs/datepicker.config';
import { CustomerComponent } from '../../customer/customer.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactAvatarComponent } from './contact-avatar/contact-avatar.component';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Province } from '../../../shared/models/province';
const defaultAvatarSrc = 'assets/images/no-avatar.png';
const defaultCardVisitSrc = 'assets/images/id-card.svg';

@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {
    isCollapsedMain = false;
    isCollapsedAddress = false;
    isCollapsedDesc = false;
    isCollapseAvatar = false;
    isCollapseCardVisit = false;
    datePickerConfig = DATETIME_PICKER_CONFIG;
    employeeGroupList: Observable<DictionaryItem[]>;
    customersSearchResults: DictionaryItem[];
    employeeList: Observable<DictionaryItem[]>;
    customerList: Observable<DictionaryItem[]>;
    salutationList: Observable<DictionaryItem[]>;
    prospectSourceList: Observable<DictionaryItem[]>;
    lunarBirthdayList: Observable<DictionaryItem[]>;
    contactId: number;
    contactForm: FormGroup;
    @Input()
    contact: ContactModel;
    invalidMessages: string[];
    isSubmitted: boolean;
    formErrors = {
        name: '',
        email: '',
        mobilePhone: '',
        homePhone: '',
        companyPhone: '',
        extraPhone: '',
        assistantPhone: '',
        assignTo: ''
    };
    copyData = {
        companyPhone: '',
        mobilePhone: '',
        homePhone: '',
        extraPhone: '',
        address: '',
        city: '',
        district: '',
        country: '',
        otherAddress: '',
        otherDistrict: '',
        otherCity: '',
        otherCountry: ''
    };

    imageFile: Blob;
    cardVisitFile: Blob;
    provinceList: Province[];
    selectedProvince: Province;
    selectedOtherProvince: Province;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private sessionService: SessionService,
        private alertService: AlertService,
        private dataService: DataService,
        private contactService: ContactService,
        private modalService: NgbModal,
        private route: ActivatedRoute,
        private cdr: ChangeDetectorRef
    ) { }
    avatarSrc: string;
    cardVisitSrc: string;
    isOpenPopupImageType: string;

    get isDefaultAvatar(): boolean {
        // tslint:disable-next-line:triple-equals
        return this.avatarSrc == defaultAvatarSrc;
    }

    get isDefaultCardVisit(): boolean {
        // tslint:disable-next-line:triple-equals
        return this.cardVisitSrc == defaultCardVisitSrc;
    }

    ngOnInit() {

        this.cardVisitSrc = defaultCardVisitSrc;
        window.scrollTo(0, 0);
        this.route.params.subscribe(params => {
            this.contactId = params.customerItemId;
        });
        this.avatarSrc = defaultAvatarSrc;
        this.createForm();

        this.avatarSrc = this.contact.image
            ? this.contact.image
            : defaultAvatarSrc;
        this.cardVisitSrc = this.contact.cardVisit ? this.contact.cardVisit : defaultCardVisitSrc;
        this.salutationList = this.dataService.getSalutations();
        this.customerList = this.dataService.getCustomers();
        this.prospectSourceList = this.dataService.getProspectSources();
        this.employeeList = this.dataService.getEmployees();
        this.employeeGroupList = this.dataService.getEmployeeGroups();
        this.lunarBirthdayList = this.dataService.getlunarBirthday();

        this.dataService.getListProvince().subscribe(data => {
            this.provinceList = data;
            if (this.contact.city) {
              this.selectCity(this.contact.city, true);
            }
            if (this.contact.otherCity) {
              this.selectOtherCity(this.contact.otherCity, true);
            }
        });

        this.sessionService.getFileImage().subscribe(data => {
            // tslint:disable-next-line:triple-equals
            if (this.isOpenPopupImageType == 'avatar') {
                this.imageFile = data;
                // tslint:disable-next-line:triple-equals
            } else if (this.isOpenPopupImageType == 'cardVisit') {
                this.cardVisitFile = data;
            }
        });

        this.sessionService.getAvatarContact()
            .subscribe(result => {
                // tslint:disable-next-line:triple-equals
                if (this.isOpenPopupImageType == 'avatar') {
                    this.avatarSrc = result ? `data:image/jpeg;base64,${result}` : defaultAvatarSrc;
                    // tslint:disable-next-line:triple-equals
                } else if (this.isOpenPopupImageType == 'cardVisit') {
                    this.cardVisitSrc = result ? `data:image/jpeg;base64,${result}` : defaultCardVisitSrc;
                }
            });

    }
    ngOnDestroy() {
        window.localStorage['avatarContact'] = null;
    }

    createForm() {
        this.contactForm = this.fb.group({
            id: this.contact.id,
            salutation: this.contact.salutation,
            name: [this.contact.name, [CustomValidator.required, Validators.maxLength(100)]],
            dateOfBirth: DateTimeConvertHelper.fromTimestampToDtObject(
                this.contact.dateOfBirth
            ),
            prospectSource:
                this.contact.prospectSource && this.contact.prospectSource.id,
            jobTitle: this.contact.jobTitle,
            department: this.contact.department,
            companyPhone: [
                this.contact.companyPhone,
                CustomValidator.phoneNumber
            ],
            mobilePhone: [
                this.contact.mobilePhone,
                CustomValidator.phoneNumber
            ],
            homePhone: [this.contact.homePhone, CustomValidator.phoneNumber],
            extraPhone: [this.contact.extraPhone, CustomValidator.phoneNumber],
            email: [this.contact.email, CustomValidator.emailOrEmpty],
            assistant: this.contact.assistant,
            assistantPhone: [
                this.contact.assistantPhone,
                CustomValidator.phoneNumber
            ],
            assignTo: [
                (this.contact.assignTo && this.contact.assignTo.id) ||
                this.sessionService.currentUser.employeeId
            ],
            assignToGroup: [
                this.contact.assignToGroup && this.contact.assignToGroup.id
            ],
            address: this.contact.address,
            district: this.contact.district,
            city: this.contact.city,
            country: this.contact.country,
            otherAddress: this.contact.otherAddress,
            otherDistrict: this.contact.otherDistrict,
            otherCity: this.contact.otherCity,
            otherCountry: this.contact.otherCountry,
            description: this.contact.description,
            contactImageSrc: this.contact.contactImageSrc,
            image: this.contact.image,
            customer: {},
            gender: this.contact.gender,
            lunarBirthday: this.contact.lunarBirthday
        });
        this.contactForm.get('customer').patchValue(this.contact.customer);
        this.cdr.detectChanges();
        this.contactForm.valueChanges.subscribe(data =>
            this.onFormValueChanged(data)
        );
    }

    selectCity(data, onInit?) {
        // tslint:disable-next-line:triple-equals
        this.selectedProvince = this.provinceList.find(i => i.id == data);
        if (!onInit) {
          this.contactForm.get('district').patchValue(null);
        }
    }

    selectOtherCity(data, onInit?) {
        // tslint:disable-next-line:triple-equals
        this.selectedOtherProvince = this.provinceList.find(i => i.id == data);
        if (!onInit) {
          this.contactForm.get('otherDistrict').patchValue(null);
        }
    }

    onFormValueChanged(data?: any) {
        if (this.isSubmitted) {
            this.validateForm();
        }
    }

    validateForm() {
        this.invalidMessages = ValidationHelper.getInvalidMessages(
            this.contactForm,
            this.formErrors
        );
        if (!(this.contactForm.get('assignTo').value || this.contactForm.get('assignToGroup').value)) {
            this.formErrors.assignTo = 'Bạn cần nhập 1 trong 2 trường này';
            this.invalidMessages.push('Bạn cần nhập 1 trong 2 trường này');
          } else {
            this.formErrors.assignTo = '';
        }
        return this.invalidMessages.length === 0;
    }
    submitForm() {
        this.isSubmitted = true;
        if (this.validateForm()) {
            this.contactService
                .createOrUpdateFormData(this.contactForm.value, this.imageFile, this.cardVisitFile)
                .subscribe(result => {
                    const message = this.contact.id
                        ? 'Liên hệ đã được chỉnh sửa.'
                        : 'Liên hệ đã được tạo.';
                    if (this.contactId) {
                        this.router.navigate([
                            `/customer/detail/${this.contactId}`
                        ]);
                    } else {
                        this.router.navigate([`/contact/detail/${result.id}`]);
                    }
                    this.alertService.success(message);
                });
        }

    }

    searchCustomers(query) {
        this.dataService
            .searchCustomers(query)
            .subscribe(result => (this.customersSearchResults = result));
    }

    clearAvatar() {
        this.avatarSrc = defaultAvatarSrc;
        this.imageFile = null;
    }
    clearCardVisit() {
        this.cardVisitSrc = defaultCardVisitSrc;
        this.cardVisitFile = null;
    }

    openAvatarModal() {
        ContactAvatarComponent.defaultRatio = 1 / 1;
        ContactAvatarComponent.title = 'Cập nhật hình ảnh liên hệ';
        this.isOpenPopupImageType = 'avatar';
        const modaRef = this.modalService.open(ContactAvatarComponent);
    }

    openCardVisitModal() {
        ContactAvatarComponent.defaultRatio = 1.645 / 1;
        ContactAvatarComponent.title = 'Cập nhật hình ảnh card visit';
        this.isOpenPopupImageType = 'cardVisit';
        const modaRef = this.modalService.open(ContactAvatarComponent);
    }

    assignToGroupChange(groupId: string) {
        // lọc nhân viên theo nhóm
        if (groupId != '0: null') {
            this.employeeList = Observable.create(data => data.next([]));
            // this.filterModel.assignTo = null;
            this.contactForm.get('assignTo').patchValue(null);
            this.employeeList = this.dataService.getEmployees(groupId);
        }
    }

}
