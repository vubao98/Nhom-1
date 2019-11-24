import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import {
    CustomerListItem,
    PagedResult,
    DictionaryItem,
    CustomerModel,
    ProspectFilter,
    ContactListItem,
    ProspectListItem
} from '../../../shared/models';
import { CustomerService, DataService, AlertService, ProspectService, ContactService } from '../../../shared/services';
// tslint:disable-next-line:import-blacklist
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { CustomerRelatedFilter } from '../../../shared/models/customer/customer-related-filter.model';
// import { CustomerActivityGroupItem } from '../../../shared/models/customer/customer-activity-group-item.model';
import { CustomerFilter } from '../../../shared/models/customer/customer-filter.model';
import { CustomerModule } from '../../customer/customer.module';
import { ContactFilter } from '../../../shared/models/contact/contact-filter.model';
import { COMMON_CONSTANTS } from '../../../shared/configs/common.config';

@Component({
    selector: 'app-select-data-list',
    templateUrl: './select-data-list.component.html',
    styleUrls: ['./select-data-list.component.scss']
})
export class SelectDataListComponent implements OnInit, OnChanges {
    @Output() listDataOut: EventEmitter<(CustomerListItem | ContactListItem | ProspectListItem)[]> = new EventEmitter();
    @Input() viewMode = false;
    @Input() type: DictionaryItem;
    @Input() activityType: string;
    @Input() listDataIn: any[];
    loading = false;
    contactSignificantType = [
        {
            id: 'SignificantTypeA',
            text: 'A',
        },
        {
            id: 'SignificantTypeB',
            text: 'B',
        },
        {
            id: 'SignificantTypeC',
            text: 'C',
        },
        {
            id: 'SignificantTypeD',
            text: 'D',
        }
    ];
    // tslint:disable-next-line:max-line-length
    listCustomerRelated: PagedResult<CustomerListItem | ContactListItem | ProspectListItem> = new PagedResult<CustomerListItem | ContactListItem | ProspectListItem>();
    // tslint:disable-next-line:max-line-length
    listCustomerSelected: PagedResult<CustomerListItem | ContactListItem | ProspectListItem> = new PagedResult<CustomerListItem | ContactListItem | ProspectListItem>();
    // tslint:disable-next-line:max-line-length
    listCustomerSelectedFilter: PagedResult<CustomerListItem | ContactListItem | ProspectListItem> = new PagedResult<CustomerListItem | ContactListItem | ProspectListItem>();
    // tslint:disable-next-line:max-line-length
    pagedResult: PagedResult<CustomerListItem | ContactListItem | ProspectListItem> = new PagedResult<CustomerListItem | ContactListItem | ProspectListItem>();
    checkboxSeclectAllleft = false;
    checkboxSeclectAllright = false;
    busy: Subscription;
    filterModel: CustomerFilter = new CustomerFilter();
    prospectFilterModel: ProspectFilter = new ProspectFilter();
    contactFilterModel: ContactFilter = new ContactFilter();
    customerCategoryList: Observable<DictionaryItem[]>;
    customerGroupList: Observable<DictionaryItem[]>;
    businessList: Observable<DictionaryItem[]>;
    customerRelatedFilter: CustomerRelatedFilter = new CustomerRelatedFilter();
    searchTerm$ = new BehaviorSubject<string>('');
    searchTermJointActivity$ = new BehaviorSubject<string>('');
    customersSearchResults: DictionaryItem[];
    prospectSourceList: Observable<DictionaryItem[]>;
    evaluationList: Observable<DictionaryItem[]>;
    employeeList: Observable<DictionaryItem[]>;
    employeeGroupList: Observable<DictionaryItem[]>;
    constructor(
        private alertService: AlertService,
        private customerService: CustomerService,
        private prospectService: ProspectService,
        private contactService: ContactService,
        private dataService: DataService
    ) { }

    ngOnChanges() {
        if (this.type) {
            if (this.listDataIn && this.listDataIn.length > 0) {
                switch (this.type.id.toString()) {
                    case 'Prospect':
                        this.listDataIn = this.listDataIn.map(i => i.prospect);
                        break;
                    case 'Customer':
                        this.listDataIn = this.listDataIn.map(i => i.customer);
                        break;
                    case 'Contact':
                        this.listDataIn = this.listDataIn.map(i => i.contact);
                        break;
                    default:
                        break;
                }
            }
            if (this.listDataIn) {
                this.listDataIn = this.listDataIn.every(i => i === undefined) ? [] : this.listDataIn;
            }
            this.listCustomerSelected.items = [];
            this.listCustomerSelectedFilter.items = [];
            this.filter();
        }
    }

    ngOnInit() {
        // this.filterModel = CustomerModule.filterModel;
        // this.customerCategoryList = this.dataService.getCustomerCategory();
        this.customerGroupList = this.dataService.getCustomerGroups();
        // this.businessList = this.dataService.getCustomerBusiness();
        this.prospectSourceList = this.dataService.getProspectSources();
        this.evaluationList = this.dataService.getProspectEvaluations();
        this.employeeList = this.dataService.getEmployees();
        this.employeeGroupList = this.dataService.getEmployeeGroups();
        this.listCustomerSelected.items = [];
        this.searchTerm$.debounceTime(COMMON_CONSTANTS.SearchDelayTimeInMs)
            .distinctUntilChanged().subscribe(search => {
                this.filter();
            });
        this.searchTermJointActivity$.debounceTime(COMMON_CONSTANTS.SearchDelayTimeInMs)
            .distinctUntilChanged().subscribe(search => {
                this.filterListJointActivity();
            });
        if (this.listDataIn) {
            this.listDataIn.forEach((i) => {
                this.listCustomerSelected.items.push(JSON.parse(JSON.stringify(i)));
            });
            this.listDataOut.emit(this.listCustomerSelected.items);
        }
    }

    onSelectAllleft(value: boolean) {
        this.listCustomerRelated.items
            .filter(x => !x.transfered).map(i => {
                i.checkboxSelected = value;
                return i;
            });

    }

    onSelectAllright(value: boolean) {
        // this.listCustomerRelated.items.forEach(x => (x.checkboxSelected = value));
        this.listCustomerSelectedFilter.items
            .forEach(i => i.checkboxSelected = value);
    }

    pagedResultChange(pagedResult: any) {
        this.refresh();
    }
    btnrefersh() {
        this.loading = true;
        this.listCustomerSelected.items = [];
        this.listCustomerSelectedFilter.items = [];
        this.listDataOut.emit(this.listCustomerSelectedFilter.items);
        // this.refresh();
        this.listCustomerRelated.items.forEach(i => {
            i.checkboxSelected = false;
            i.transfered = false;
        });
        this.checkboxSeclectAllleft = false;
        this.checkboxSeclectAllright = false;
    }
    refresh(displayAlert: boolean = false): void {
        if (this.type && this.type.id.toString() === 'Customer') {
            this.busy = this.customerService
                .filter(
                    this.searchTerm$.value,
                    this.filterModel,
                    this.listCustomerRelated.currentPage,
                    this.pagedResult.pageSize
                )
                .subscribe(data => {
                    this.rerender(data);
                    if (displayAlert) {
                        this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
                    }
                });
        }
        if (this.type && this.type.id.toString() === 'Prospect') {
            this.busy = this.prospectService
                .filter(this.searchTerm$.value,
                    this.prospectFilterModel,
                    this.listCustomerRelated.currentPage,
                    this.pagedResult.pageSize)
                .subscribe(data => {
                    this.rerender(data);
                    if (displayAlert) {
                        this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
                    }
                });
        }
        if (this.type && this.type.id.toString() === 'Contact') {
            this.busy = this.contactService
                .filter(this.searchTerm$.value,
                    this.contactFilterModel,
                    this.listCustomerRelated.currentPage,
                    this.pagedResult.pageSize)
                .subscribe(data => {
                    this.rerender(data);
                    if (displayAlert) {
                        this.alertService.success('Dữ liệu đã được cập nhật mới nhất!');
                    }
                });
        }
    }
    toCustomerListItem(data): CustomerListItem {
        const result = new CustomerListItem();
        result.customerName = data.name;
        result.customerPhone = data.tel1;
        result.email = data.email1;
        result.customerCategories = data.customerCategories;
        return result;
    }

    listCustomerRelatedChange() { }

    rerender(data) {
        this.listCustomerRelated = data;
        this.loading = false;
        if (this.listDataIn && this.listDataIn.length > 0) {
            this.listDataIn.forEach(i => {
                if (this.listCustomerRelated.items.find(e => e.id.toString() === i.id.toString())) {
                    this.listCustomerRelated.items.find(e => e.id.toString() === i.id.toString()).transfered = true;
                }
            });
        }
        if (this.listCustomerSelectedFilter.items && this.listCustomerSelectedFilter.items.length > 0) {
            this.listCustomerSelectedFilter.items.forEach(i => {
                if (this.listCustomerRelated.items.find(e => e.id.toString() === i.id.toString())) {
                    this.listCustomerRelated.items.find(e => e.id.toString() === i.id.toString()).transfered = true;
                }
            });
        }
        this.listDataOut.emit(this.listCustomerSelected.items);
    }
    filter() {
        if (this.type && this.type.id.toString() === 'Customer') {
            this.busy = this.customerService
                .filter(
                    this.searchTerm$.value,
                    this.filterModel,
                    0,
                    this.pagedResult.pageSize
                )
                .subscribe(result => {
                    this.rerender(result);
                }, err => {
                    if (err.error_code === 'PERMISSION_DENIED') {
                        this.pagedResult.currentPage = 0;
                        this.pagedResult.pageSize = 0;
                        this.pagedResult.pageCount = 0;
                        this.pagedResult.total = 0;
                        this.pagedResult.items = [];
                        this.listCustomerRelated.items = [];
                        this.rerender(this.pagedResult);
                    }
                });
        }
        if (this.type && this.type.id.toString() === 'Prospect') {
            this.busy = this.prospectService
                .filter(this.searchTerm$.value,
                    this.prospectFilterModel,
                    0,
                    this.pagedResult.pageSize)
                .subscribe(res => {
                    this.rerender(res);
                }, err => {
                    if (err.error_code === 'PERMISSION_DENIED') {
                        this.pagedResult.currentPage = 0;
                        this.pagedResult.pageSize = 0;
                        this.pagedResult.pageCount = 0;
                        this.pagedResult.total = 0;
                        this.pagedResult.items = [];
                        this.listCustomerRelated.items = [];
                        this.rerender(this.pagedResult);
                    }
                });
        }
        if (this.type && this.type.id.toString() === 'Contact') {
            this.busy = this.contactService
                .filter(this.searchTerm$.value,
                    this.contactFilterModel,
                    0,
                    this.pagedResult.pageSize)
                .subscribe(res => {
                    this.rerender(res);
                }, err => {
                    if (err.error_code === 'PERMISSION_DENIED') {
                        this.pagedResult.currentPage = 0;
                        this.pagedResult.pageSize = 0;
                        this.pagedResult.pageCount = 0;
                        this.pagedResult.total = 0;
                        this.pagedResult.items = [];
                        this.listCustomerRelated.items = [];
                        this.rerender(this.pagedResult);
                    }
                });
        }
    }

    filterListJointActivity() {
        if (this.type && this.type.id.toString() === 'Customer') {
            // tslint:disable-next-line:max-line-length
            this.listCustomerSelectedFilter.items = this.listCustomerSelected.items.filter(i => (i['customerName'] && i['customerName'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['name'] && i['name'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['customerPhone'] && i['customerPhone'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['tel1'] && i['tel1'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['email'] && i['email'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())));
        }
        if (this.type && this.type.id.toString() === 'Prospect') {
            // tslint:disable-next-line:max-line-length
            this.listCustomerSelectedFilter.items = this.listCustomerSelected.items.filter(i => (i['fullName'] && i['fullName'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['name'] && i['name'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['mobilePhone'] && i['mobilePhone'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['customerPhone'] && i['customerPhone'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['email'] && i['email'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())));
        }
        if (this.type && this.type.id.toString() === 'Contact') {
            // tslint:disable-next-line:max-line-length
            this.listCustomerSelectedFilter.items = this.listCustomerSelected.items.filter(i => i['name'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim()) || (i['customerPhone'] && i['customerPhone'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())) || (i['email'] && i['email'].toLowerCase().includes(this.searchTermJointActivity$.value.toLowerCase().trim())));
        }
    }

    clearFilter() {
        this.filterModel = new CustomerFilter();
        this.contactFilterModel = new ContactFilter();
        this.prospectFilterModel = new ProspectFilter();
        this.filter();
    }

    transferData() {
        const selectedItems = this.listCustomerRelated.items
            .filter(x => x.checkboxSelected).map(i => {
                i.checkboxSelected = false;
                i.transfered = true;
                return i;
            });
        selectedItems.forEach(i => {
            this.listCustomerSelected.items.push(JSON.parse(JSON.stringify(i)));
        });
        this.listCustomerSelectedFilter.items = this.listCustomerSelected.items;
        this.listDataOut.emit(this.listCustomerSelected.items);
        this.checkboxSeclectAllleft = false;
    }

    transferDataBack() {
        const selectedItems = this.listCustomerSelected.items.filter(x => x.checkboxSelected)
            .map(x => +x.id);
        selectedItems.forEach(e => {
            // tslint:disable-next-line:triple-equals
            if (this.listCustomerRelated.items.find(i => i.id == e.toString())) {
                // tslint:disable-next-line:triple-equals
                this.listCustomerRelated.items.find(i => i.id == e.toString()).transfered = false;
            }
            // tslint:disable-next-line:triple-equals
            const idx = this.listCustomerSelected.items.findIndex(i => i.id == e.toString());
            this.listCustomerSelected.items.splice(idx, 1);
        });
        this.listCustomerSelectedFilter.items = this.listCustomerSelected.items;
        this.listDataOut.emit(this.listCustomerSelected.items);
        this.checkboxSeclectAllright = false;
    }

    searchCustomers(query) {
        this.dataService.searchCustomers(query).subscribe(result => this.customersSearchResults = result);
    }
}
