import { DictionaryItem } from '../models/dictionary-item.model';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import Utils from '../helpers/utils.helper';
import { API_URL } from '../configs';
import { CustomerListItem, CustomerModel, PagedResult } from '../models';
import { ApiService, SessionService, InstantSearchService } from '../services';
import { CustomerFilter } from '../models/customer/customer-filter.model';
import { ResourceLoader } from '@angular/compiler';
import DateTimeConvertHelper from '../helpers/datetime-convert-helper';
import { InvoiceInfo } from '../models/invoice/invoice-info';
import { HomeSearchModel } from '../models/home-search-model';
import ConvertNumber from '../helpers/convert-number.helper';

@Injectable()
export class CustomerService {
    constructor(
        private apiService: ApiService,
        private sessionService: SessionService,
        private instantSearchService: InstantSearchService
    ) {}

    get employeeId() {
        return this.sessionService.currentUser.employeeId;
    }

    read(
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CustomerListItem>> {
        return this.apiService
            .get(`/employee/${this.employeeId}/customers/${page}/${pageSize}`)
            .map(response => {
                return {
                    currentPage: response.result.page,
                    pageSize: pageSize,
                    pageCount: response.result.pageCount,
                    total: response.result.recordCount,
                    items: response.result.data.map(this.toCustomerListItem)
                };
            })
            .share();
    }

    createOrUpdate(customer: any) {
        let url = `/employee/${this.employeeId}/customer`;
        url = customer.id ? url + '/edit' : url;
        const assignTo = Utils.parseAssignTo(customer.assignTo);

        const model = {
            id: customer.id,
            name: customer.name,
            website: customer.website,
            fax: customer.fax,
            tel1: customer.phoneNumberOfficial,
            tel2: customer.phoneNumberExtra,
            stockCode: customer.stockCode,
            taxNumber: customer.taxCode,
            email: customer.emailOfficial,
            email2: customer.emailExtra,
            business: customer.career,
            evaluate: customer.rating,
            classify: customer.type,
            group: customer.group,
            revenueDueYear: customer.revenue,
            address: customer.address,
            information: customer.description,
            district: customer.district,
            city: customer.city,
            country: customer.country,
            contacts:
                customer.contact && customer.contact.length > 0
                    ? customer.contact.map(x => ({ id: x.id }))
                    : null,
            customerType: customer.customerType,
            dob: DateTimeConvertHelper.fromDtObjectToTimestamp(customer.dob),
            companyEstablishmentDay: DateTimeConvertHelper.fromDtObjectToTimestamp(
                customer.companyEstablishmentDay
            ),
            gender: customer.gender,
            lunarBirthday: customer.lunarBirthday,
            employee:
                assignTo.assignToType === 'employee'
                    ? {
                        id: assignTo.assignToId
                    }
                    : null,
            employeeGroup:
                assignTo.assignToType === 'group'
                    ? {
                        id: assignTo.assignToId
                    }
                    : null
        };
        return this.apiService
            .post(url, model)
            .map(response => response.result);
    }

    createOrUpdateFormData(customer: any) {
        let url = `/employee/${this.employeeId}/customer`;
        url = customer.id ? url + '/edit' : url;
        const formData = new FormData();

        customer.id && formData.append('id', customer.id);
        formData.append('name', customer.name);
        customer.website && formData.append('website', customer.website.trim());
        customer.fax && formData.append('fax', customer.fax.trim());
        customer.phoneNumberOfficial && formData.append('tel1', customer.phoneNumberOfficial.trim());
        customer.phoneNumberExtra && formData.append('tel2', customer.phoneNumberExtra.trim());
        customer.stockCode && formData.append('stockCode', customer.stockCode.trim());
        customer.taxCode && formData.append('taxNumber', customer.taxCode.trim());
        customer.emailOfficial && formData.append('email', customer.emailOfficial.trim());
        customer.emailExtra && formData.append('email2', customer.emailExtra.trim());
        customer.career && formData.append('business', customer.career);
        customer.rating && formData.append('evaluate', customer.rating);
        customer.type && formData.append('classify', customer.type);
        customer.group && formData.append('group', customer.group);
        customer.revenue && formData.append('revenueDueYear', customer.revenue);
        customer.address && formData.append('address', customer.address.trim());
        customer.description && formData.append('information', customer.description.trim());
        if (customer.contact && customer.contact.length > 0) {
            customer.contact.forEach(x => formData.append('contactIds', x.id));
        }
        customer.customerType && formData.append('customerType', customer.customerType);
        customer.companyEstablishmentDay && formData.append('birthDayTimeStamp', DateTimeConvertHelper.fromDtObjectToTimestamp(customer.companyEstablishmentDay).toString());
        // tslint:disable-next-line:max-line-length
        customer.companyEstablishmentDay && formData.append('companyEstablishmentDayTimeStamp', DateTimeConvertHelper.fromDtObjectToTimestamp(customer.companyEstablishmentDay).toString());
        customer.gender && formData.append('gender', customer.gender);
        customer.lunarBirthday && formData.append('lunarBirthday', customer.lunarBirthday);
        customer.assignTo && formData.append('employeeId', customer.assignTo);
        customer.assignToGroup && formData.append('employeeGroupId', customer.assignToGroup);
        this.getLocation(customer) && formData.append('locationId', this.getLocation(customer));

        return this.apiService.postFile(url, formData).map(res => res.result);
    }

    getLocation(model) {
        // tslint:disable-next-line:triple-equals
        if (model.district && model.district != '0') {
            return model.district + '';
        // tslint:disable-next-line:triple-equals
        } else if (model.city && model.city != '0') {
            return model.city + '';
        // tslint:disable-next-line:triple-equals
        } else if (model.country && model.country != '0') {
            return model.country + '';
        } else {
            return null;
        }
    }

    view(customerId: number | string): Observable<CustomerModel> {
        const url = `/employee/${this.employeeId}/customer/${customerId}`;

        return this.apiService
            .get(url)
            .map(response => {
                const result = response.result;
                return {
                    id: result.id,
                    name: result.name,
                    emailOfficial: result.email,
                    website: result.website,
                    emailExtra: result.email2,
                    fax: result.fax,
                    career: result.business,
                    phoneNumberOfficial: result.tel1,
                    group: result.group,
                    stockCode: result.stockCode,
                    rating: result.evaluate ? result.evaluate : 0,
                    taxCode: result.taxNumber,
                    type: result.classify,
                    phoneNumberExtra: result.tel2,
                    revenue: result.revenueDueYear,
                    companyEstablishmentDay: result.companyEstablishmentDay,
                    dob: result.dob,
                    customerType: result.customerType,
                    assignTo: result.employee && {
                            id: result.employee.id,
                            name: result.employee.name
                        },
                    assignToGroup: result.employeeGroup && {
                            id: result.employeeGroup.id,
                            name: result.employeeGroup.name
                        },
                    address: result.address,
                    city: result.location && Utils.getLocationId(result.location, 'StateProvince').toString(),
                    country: result.location && Utils.getLocationId(result.location, 'Country').toString(),
                    district: result.location && Utils.getLocationId(result.location, 'District').toString(),
                    description: result.information,
                    createdDate: result.createdDate,
                    updatedDate: result.updatedDate,
                    prospect: result.prospect && {
                        id: result.prospect.id,
                        fullName: result.prospect.name
                    },
                    contact: result.customerContactGroups.map(x => ({
                        id: x.contact.id,
                        text: x.contact.name
                    })),
                    number: result.customerNumber,
                    creditLimit: result.creditLimit,
                    owing: result.owing,
                    customerGroup: result.customerGroup,
                    check: result.check,
                    desc: result.desc,
                    lunarBirthday: result.lunarBirthday,
                    gender: result.gender,
                    isAssigned: result.isAssigned,
                    location: result.location,
                    customerNumber: result.customerNumber,
                    lastInvoiceDate: result.lastInvoiceDate,
                    totalAmount: result.totalAmount ? ConvertNumber.scientificNotationtoNumber(result.totalAmount) : null,
                };
            })
            .share();
    }

    delete(ids: number[]) {
        const url = `/employee/${this.employeeId}/customers/delete`;
        return this.apiService.post(url, ids).map(response => response.result);
    }

    instantSearch(
        terms: Observable<string>,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CustomerListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/customers/search/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .search(searchUrl, terms)
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toCustomerListItem)
                };
            });
    }

    instantSearchWithFilter(
        terms: Observable<string>,
        filter: CustomerFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CustomerListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/customers/filter/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .searchWithFilter(
                searchUrl,
                terms,
                CustomerService.createFilterParams(filter)
            )
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toCustomerListItem)
                };
            });
    }
    filter(
        searchTerm: string,
        filter: CustomerFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CustomerListItem>> {
        const filterUrl = `/employee/${
            this.employeeId
            }/customers/filter/${page}/${pageSize}/`;

        const urlParams = CustomerService.createFilterParams(filter);
        urlParams.append('search', searchTerm);

        return this.apiService.get(filterUrl, urlParams).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toCustomerListItem),
                location: result.location,
            };
        });
    }

    // tslint:disable-next-line:member-ordering
    private static createFilterParams(filter: CustomerFilter): URLSearchParams {
        const urlFilterParams = new URLSearchParams();
        urlFilterParams.append('business', filter.business);
        urlFilterParams.append('group', filter.group);
        urlFilterParams.append('evaluate', filter.evaluate);
        urlFilterParams.append(
            'fromDate',
            filter.fromDate ? filter.fromDate.toString() : ''
        );
        urlFilterParams.append(
            'toDate',
            filter.toDate ? filter.toDate.toString() : ''
        );
        urlFilterParams.append('month', filter.month ? filter.month : null);
        filter.hasBirthday && urlFilterParams.append('hasBirthday',  'true');
        // if (filter.assignToGroup) {
        //     urlFilterParams.append('assignTo', filter.assignToGroup);
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo) {
        //     urlFilterParams.append('assignTo', filter.assignTo);
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
        if (filter.assignToGroup) {
            urlFilterParams.append('assignToEmployeeGroup', filter.assignToGroup);
        }
        if (filter.assignTo) {
            urlFilterParams.append('assignToEmployee', filter.assignTo);
        }

        return urlFilterParams;
    }

    search(
        searchString: string,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CustomerListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/customers/search/${page}/${pageSize}/?search=${searchString}`;

        return this.apiService.get(searchUrl).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toCustomerListItem)
            };
        });
    }

    toCustomerListItem(result: any): CustomerListItem {
        return {
            id: result.id,
            customerName: result.name,
            website: result.website,
            fax: result.fax,
            customerPhone: result.tel1,
            taxNo: result.taxNumber,
            email: result.email,
            business: result.business,
            group: result.group,
            rating: result.evaluate ? +result.evaluate : 0,
            revenue: result.revenueDueYear,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,
            stockCode: result.stockCode,
            phoneNumberExtra: result.tel2,
            emailExtra: result.email2,
            customerType: result.customerType,
            city: result.city,
            country: result.country,
            address: result.address,
            district: result.district,
            description: result.information,
            lunarBirthday: result.lunarBirthday,
            dob: result.dob,
            companyEstablishmentDay: result.companyEstablishmentDay,
            isAssigned: result.isAssigned,
            location: result.location,
            customerNumber : result.customerNumber,
            customerContactGroups: result.customerContactGroups,
            customerCategories: result.customerCategories,
            gender: result.gender,
            lastInvoiceDate: result.lastInvoiceDate,
            totalAmount: result.totalAmount ? ConvertNumber.scientificNotationtoNumber(result.totalAmount) : null,
        };
    }

    importFile(file: File) {
        const url = `/employee/${this.employeeId}/customers`;
        const formData = new FormData();
        formData.append('filePath', file);
        return this.apiService
            .postFile(url, formData)
            .map(response => {
                return response;
            })
            .share();
    }

    getContactList(customerId: number) {
        const url = `employee/${
            this.employeeId
            }/contacts/customer/${customerId}`;
        return this.apiService
            .get(url)
            .map(response => {
                return response.result ? response.result.map(x => {
                    return {
                        id: x.id,
                        name: x.name,
                        image: x.image
                            ? `http://demo.bys.vn:6868/mhb-crm/images/${x.image}`
                            : null,
                        cellularPhone: x.cellularPhone,
                        email: x.email
                    };
                }) : [];
            })
            .share();
    }

    getContactListByCustomer(customerId: number) {
        const url = `employee/${
            this.employeeId
            }/contacts/customer/${customerId}`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.id,
                        text: `${x.lastName} ${x.firstName}`
                    };
                })
            )
            .share();
    }

    getProductPriceListByCustomer(customerId: number): Observable<InvoiceInfo> {
        const url = `employee/${this.employeeId}/customerInfor/${customerId}`;
        return this.apiService.get(url).map(data => data.result);
    }

    searchProspectOrCustomer(searchStr: string): Observable<HomeSearchModel[]> {
        const url = `employee/${this.employeeId}/customer-prospect/search/0/10?search=${searchStr}`;
        return this.apiService.get(url).map(data => data.result.data);
    }
}
