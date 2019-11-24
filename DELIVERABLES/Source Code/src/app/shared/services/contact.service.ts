import { DictionaryItem } from '../models/dictionary-item.model';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import Utils from '../helpers/utils.helper';
import { API_URL } from '../configs';
import { ContactListItem, ContactModel, PagedResult } from '../models';
import { ApiService, SessionService, InstantSearchService } from '../services';
import DateTimeConvertHelper from '../helpers/datetime-convert-helper';
import { ContactFilter } from '../models/contact/contact-filter.model';
import { Location } from '../models/location';
import { environment } from '../../../environments/environment';

@Injectable()
export class ContactService {
    constructor(
        private apiService: ApiService,
        private sessionService: SessionService,
        private instantSearchService: InstantSearchService
    ) { }

    get employeeId() {
        return this.sessionService.currentUser.employeeId;
    }

    read(
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ContactListItem>> {
        return this.apiService
            .get(`/employee/${this.employeeId}/contacts/${page}/${pageSize}`)
            .map(response => {
                return {
                    currentPage: response.result.page,
                    pageSize: pageSize,
                    pageCount: response.result.pageCount,
                    total: response.result.recordCount,
                    items: response.result.data.map(this.toContactListItem)
                };
            })
            .share();
    }

    createOrUpdate(contactFormValue: any, avatar: string) {
        let url = `/employee/${this.employeeId}/contact`;
        url = contactFormValue.id ? url + '/edit' : url;
        const assignTo = Utils.parseAssignTo(contactFormValue.assignTo);
        const requestModel = {
            id: contactFormValue.id,
            title: contactFormValue.salutation,
            birthday: DateTimeConvertHelper.fromDtObjectToTimestamp(
                contactFormValue.dateOfBirth
            ),
            firstName: contactFormValue.firstName,
            lastName: contactFormValue.lastName,
            customers:
                contactFormValue.customer &&
                    contactFormValue.customer.length > 0
                    ? contactFormValue.customer.map(x => ({ id: x.id }))
                    : null,
            email: contactFormValue.email,
            potentialSource: null,
            customerResource: {
                id: contactFormValue.prospectSource
            },
            jobTitle: contactFormValue.jobTitle,
            department: contactFormValue.department,
            phone: contactFormValue.companyPhone,
            cellularPhone: contactFormValue.mobilePhone,
            homePhone: contactFormValue.homePhone,
            secondaryPhone: contactFormValue.extraPhone,
            assistant: contactFormValue.assistant,
            assistantPhone: contactFormValue.assistantPhone,
            information: contactFormValue.description,
            address: contactFormValue.address,
            district: contactFormValue.district,
            city: contactFormValue.city,
            country: contactFormValue.country,
            address2: contactFormValue.otherAddress,
            district2: contactFormValue.otherDistrict,
            city2: contactFormValue.otherCity,
            country2: contactFormValue.otherCountry,
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
                    : null,
            image: avatar,
            gender: contactFormValue.gender,
            lunarBirthday: contactFormValue.lunarBirthday
        };
        return this.apiService
            .post(url, requestModel)
            .map(response => response.result);
    }

    createOrUpdateFormData(contactFormValue: any, avatar: Blob, visitCard: Blob) {
        let url = `employee/${this.employeeId}/contact`;
        url = contactFormValue.id ? url + '/edit' : url;
        const formData = new FormData();
        // tslint:disable-next-line:no-unused-expression
        contactFormValue.id && formData.append('id', contactFormValue.id);
        contactFormValue.salutation && formData.append('title', contactFormValue.salutation);
        // tslint:disable-next-line:max-line-length
        contactFormValue.dateOfBirth && formData.append('birthdayTimeStamp', DateTimeConvertHelper.fromDtObjectToTimestamp(contactFormValue.dateOfBirth) + '');
        contactFormValue.name && formData.append('name', contactFormValue.name.trim());
        formData.append('branchId', this.sessionService.branchId.toString());
        contactFormValue.assignTo && formData.append('employeeId', contactFormValue.assignTo);
        contactFormValue.assignToGroup && formData.append('employeeGroupId', contactFormValue.assignToGroup);
        if (contactFormValue.customer && contactFormValue.customer.length > 0) {
            contactFormValue.customer.forEach(x => formData.append('customerIds', x.id));
        }
        contactFormValue.email && formData.append('email', contactFormValue.email.trim());
        contactFormValue.prospectSource && formData.append('customerResourceId', contactFormValue.prospectSource);
        contactFormValue.jobTitle && formData.append('jobTitle', contactFormValue.jobTitle.trim());
        contactFormValue.department && formData.append('department', contactFormValue.department.trim());
        contactFormValue.companyPhone && formData.append('phone', contactFormValue.companyPhone.trim());
        contactFormValue.mobilePhone && formData.append('cellularPhone', contactFormValue.mobilePhone.trim());
        contactFormValue.homePhone && formData.append('homePhone', contactFormValue.homePhone.trim());
        contactFormValue.extraPhone && formData.append('secondaryPhone', contactFormValue.extraPhone.trim());
        contactFormValue.assistant && formData.append('assistant', contactFormValue.assistant.trim());
        contactFormValue.assistantPhone && formData.append('assistantPhone', contactFormValue.assistantPhone.trim());
        contactFormValue.description && formData.append('information', contactFormValue.description.trim());
        contactFormValue.address && formData.append('address', contactFormValue.address.trim());
        contactFormValue.otherAddress && formData.append('address2', contactFormValue.otherAddress.trim());
        contactFormValue.gender && formData.append('gender', contactFormValue.gender);
        contactFormValue.lunarBirthday && formData.append('lunarBirthday', contactFormValue.lunarBirthday);

        avatar && formData.append('imageFile', avatar);
        visitCard && formData.append('visitCardFile', visitCard);

        this.getLocation(contactFormValue) && formData.append('locationId', this.getLocation(contactFormValue));
        this.getOtherLocation(contactFormValue) && formData.append('locationOtherId', this.getOtherLocation(contactFormValue));

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

    getOtherLocation(model) {
        // tslint:disable-next-line:triple-equals
        if (model.otherDistrict && model.otherDistrict != '0') {
            return model.otherDistrict + '';
        // tslint:disable-next-line:triple-equals
        } else if (model.otherCity && model.otherCity != '0') {
            return model.otherCity + '';
        // tslint:disable-next-line:triple-equals
        } else if (model.otherCountry && model.otherCountry != '0') {
            return model.otherCountry + '';
        } else {
            return null;
        }
    }

    view(contactId: number | string): Observable<ContactModel> {
        const url = `/employee/${this.employeeId}/contact/${contactId}`;

        return this.apiService
            .get(url)
            .map(response => {
                const result = response.result;
                return {
                    id: result.id,
                    salutation: result.title || '',
                    name: result.name,
                    dateOfBirth: result.birthday,
                    customer: result.customerContactGroups.map(x => ({
                        id: x.customer.id,
                        text: x.customer.name
                    })),
                    prospectSource: result.customerResource,
                    jobTitle: result.jobTitle,
                    department: result.department,
                    companyPhone: result.phone,
                    mobilePhone: result.cellularPhone,
                    homePhone: result.homePhone,
                    extraPhone: result.secondaryPhone,
                    email: result.email,
                    assistant: result.assistant,
                    assistantPhone: result.assistantPhone,
                    assignTo:
                        result.employee && {
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
                    otherAddress: result.address2,
                    otherDistrict: result.locationOther && Utils.getLocationId(result.locationOther, 'District').toString(),
                    otherCity: result.locationOther && Utils.getLocationId(result.locationOther, 'StateProvince').toString(),
                    otherCountry: result.locationOther && Utils.getLocationId(result.locationOther, 'Country').toString(),
                    description: result.information,
                    contactImageSrc: result.id,
                    createdDate: result.createdDate,
                    updatedDate: result.updatedDate,
                    prospect: result.prospect && {
                        id: result.prospect.id,
                        fullName: result.prospect.name
                    },
                    image: result.image ? `${environment.api_endpoint}images/${result.image}` : '',
                    cardVisit: result.visitCard ? `${environment.api_endpoint}images/${result.visitCard}` : '',
                    gender: result.gender,
                    lunarBirthday: result.lunarBirthday,
                    isAssigned: result.isAssigned,
                    location: result.location,
                    locationOther: result.locationOther,
                    contactNumber: result.contactNumber,
                };
            })
            .share();
    }

    delete(ids: number[]) {
        const url = `/employee/${this.employeeId}/contacts/delete`;
        return this.apiService.post(url, ids).map(response => response.result);
    }

    instantSearch(
        terms: Observable<string>,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ContactListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/contacts/search/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .search(searchUrl, terms)
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toContactListItem)
                };
            });
    }
    instantSearchWithFilter(
        terms: Observable<string>,
        filter: ContactFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ContactListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/contacts/filter/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .searchWithFilter(
                searchUrl,
                terms,
                ContactService.createFilterParams(filter)
            )
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toContactListItem)
                };
            });
    }
    filter(
        searchTerm: string,
        filter: ContactFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ContactListItem>> {
        const filterUrl = `/employee/${
            this.employeeId
            }/contacts/filter/${page}/${pageSize}/`;

        const urlParams = ContactService.createFilterParams(filter);
        urlParams.append('search', searchTerm);

        return this.apiService.get(filterUrl, urlParams).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toContactListItem)
            };
        });
    }

    // tslint:disable-next-line:member-ordering
    private static createFilterParams(filter: ContactFilter): URLSearchParams {
        const urlFilterParams = new URLSearchParams();
        urlFilterParams.append('prospectSource', filter.prospectSource);
        urlFilterParams.append('jobTitle', filter.jobTitle);
        urlFilterParams.append(
            'fromDate',
            filter.fromDate ? filter.fromDate.toString() : ''
        );
        urlFilterParams.append(
            'toDate',
            filter.toDate ? filter.toDate.toString() : ''
        );
        urlFilterParams.append('month', filter.month ? filter.month : null);
        // tslint:disable-next-line:no-unused-expression
        filter.customerId && urlFilterParams.append('customerId', filter.customerId['id']);
        // tslint:disable-next-line:no-unused-expression
        filter.bussiness && urlFilterParams.append('bussiness', filter.bussiness);
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

        // tslint:disable-next-line:no-unused-expression
        filter.hasUpcomingBirthday && urlFilterParams.append('hasUpcomingBirthday', 'true');
        return urlFilterParams;
    }
    search(
        term: string,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ContactListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/contacts/search/${page}/${pageSize}/?search=${term}`;

        return this.apiService.get(searchUrl).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toContactListItem)
            };
        });
    }

    toContactListItem(result: any): ContactListItem {
        return {
            id: result.id,
            salutation: result.title || '',
            firstName: result.firstName,
            lastName: result.lastName,
            name: result.name,
            companyPhone: result.phone,
            mobilePhone: result.cellularPhone,
            email: result.email,
            companyName: result.customerContactGroups && result.customerContactGroups.length > 0 ?
                result.customerContactGroups.map(i => i.customer.name).join(', ') : null,
            source: result.potentialSource,
            jobTitle: result.jobTitle,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,

            city: result.city,
            country: result.country,
            address: result.address,
            district: result.district,
            city2: result.city2,
            country2: result.country2,
            address2: result.address2,
            district2: result.district2,
            description: result.information,
            assistant: result.assistant,
            department: result.department,
            homePhone: result.homePhone,
            secondaryPhone: result.secondaryPhone,
            assistantPhone: result.assistantPhone,
            customerResource: result.customerResource && result.customerResource.name,
            isAssigned: result.isAssigned,
            location: result.location,
            locationOther: result.locationOther,
            contactNumber: result.contactNumber,
            dob: result.birthday,
            phone: result.phone,
            updatedDate: result.updatedDate,
            customerPhone: result.phone
        };
    }

    importFile(file: File) {
        const url = `/employee/${this.employeeId}/contacts`;
        const formData = new FormData();
        formData.append('filePath', file);
        return this.apiService
            .postFile(url, formData)
            .map(response => {
                return response;
            })
            .share();
    }

    getCustomerListByContact(contactId: number) {
        const url = `employee/${
            this.employeeId
            }/customers/contact/${contactId}`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.id,
                        text: `${x.name}`
                    };
                })
            )
            .share();
    }
}
