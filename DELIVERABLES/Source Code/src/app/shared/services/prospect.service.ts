import { DictionaryItem } from '../models/dictionary-item.model';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API_URL } from '../configs';
import {
    ProspectListItem,
    ProspectModel,
    PagedResult,
    ProspectFilter
} from '../models';
import { ApiService, SessionService, InstantSearchService } from '../services';
import { ProspectListComponent } from '../../layout/prospect/prospect-list/prospect-list.component';
import Utils from '../helpers/utils.helper';
import { Response } from '@angular/http/src/static_response';
import DateTimeConvertHelper from '../helpers/datetime-convert-helper';
import { OpportunityResponse } from '../models/api-response/opportunity/opportunity-response.model';

@Injectable()
export class ProspectService {
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
    ): Observable<PagedResult<ProspectListItem>> {
        const that = this;
        return that.apiService
            .get(`/employee/${this.employeeId}/prospects/${page}/${pageSize}`)
            .map(response => {
                return {
                    currentPage: response.result.page,
                    pageSize: pageSize,
                    pageCount: response.result.pageCount,
                    total: response.result.recordCount,
                    items: response.result.data.map(this.toProspectListItem)
                };
            })
            .share();
    }

    getLocation(model) {
        // tslint:disable-next-line:triple-equals
        if (model.district && model.district != '0') {
            return { id: model.district };
            // tslint:disable-next-line:triple-equals
        } else if (model.city && model.city != '0') {
            return { id: model.city };
            // tslint:disable-next-line:triple-equals
        } else if (model.country && model.country != '0') {
            return { id: model.country };
        } else {
            return null;
        }
    }

    createOrUpdate(prospectFromValue: any) {
        let url = `/employee/${this.employeeId}/prospect`;
        url = prospectFromValue.id ? url + '/edit' : url;
        const model = {
            id: prospectFromValue.id,
            title: prospectFromValue.name,
            potentialStatus: prospectFromValue.statusSource,
            firstName: prospectFromValue.firstName && prospectFromValue.firstName.trim(),
            lastName: prospectFromValue.lastName && prospectFromValue.lastName.trim(),
            name: prospectFromValue.fullName && prospectFromValue.fullName.trim(),
            phone: prospectFromValue.phoneNumberCustomer && prospectFromValue.phoneNumberCustomer.trim(),
            cellPhone: prospectFromValue.phoneNumberpersonal && prospectFromValue.phoneNumberpersonal.trim(),
            email: prospectFromValue.email && prospectFromValue.email.trim(),
            website: prospectFromValue.website && prospectFromValue.website.trim(),
            company: prospectFromValue.companyName && prospectFromValue.companyName.trim(),
            customerResource: prospectFromValue.source ? {
                id: prospectFromValue.source
            } : null,
            address: prospectFromValue.address,
            rate: prospectFromValue.comment,
            description: prospectFromValue.description && prospectFromValue.description.trim(),
            business: prospectFromValue.fieldOfAction,
            branch: {
                id: this.sessionService.branchId
            },
            objectType: prospectFromValue.campaign && prospectFromValue.campaign.id ? 'Campaign' : null,
            objectId: prospectFromValue.campaign ? prospectFromValue.campaign.id : null,
            // district: prospectFromValue.district,
            // city: prospectFromValue.city,
            // country: prospectFromValue.country,
            revenue: prospectFromValue.revenue,
            employee: prospectFromValue.assignTo ? {id: prospectFromValue.assignTo} : null,
            employeeGroup: prospectFromValue.assignToGroup ? {id: prospectFromValue.assignToGroup} : null,
            gender: prospectFromValue.gender,
            lunarBirthday: prospectFromValue.lunarBirthday,
            dob: DateTimeConvertHelper.fromDtObjectToTimestamp(prospectFromValue.dob),
            location: this.getLocation(prospectFromValue),
            handler: prospectFromValue.handler,
            date: DateTimeConvertHelper.fromDtObjectToTimestamp(prospectFromValue.date),
            socialLink: prospectFromValue.socialLink && prospectFromValue.socialLink.trim(),
            retails: prospectFromValue.retails && prospectFromValue.retails.length > 0 ? prospectFromValue.retails.map(i => {
                return {
                    productGroup: {
                        id: i.id
                    }
                };
            }) : null,
            models: prospectFromValue.models && prospectFromValue.models.length > 0 ? prospectFromValue.models.map(i => {
                return {
                    attributeValue: {
                        id: i.id
                    }
                };
            }) : null,
            approachChannels: prospectFromValue.approachChannels && prospectFromValue.approachChannels.length > 0 ? prospectFromValue.approachChannels.map(i => {
                return {
                    id: i.id ? i.id : i
                };
            }) : null,
            dabs: prospectFromValue.dab && prospectFromValue.dab.length > 0 ? prospectFromValue.dab.map(i => {
                return {
                    value: i.id
                };
            }) : null,
            promotionCare: prospectFromValue.promotionCare,
            askShowroomAddress: prospectFromValue.askShowroomAddress,
            onlineSaleOpportunity: prospectFromValue.onlineSaleOpportunity,
            adsID: prospectFromValue.adsID,
            result: prospectFromValue.result,
            approached: prospectFromValue.approached
        };
        return this.apiService
            .post(url, model)
            .map(response => response.result);
    }

    view(prospectId: number | string): Observable<ProspectModel> {
        const url = `/employee/${this.employeeId}/prospect/${prospectId}`;

        return this.apiService
            .get(url)
            .map(response => this.toProspectModel(response.result))
            .share();
    }

    toProspectModel(result): ProspectModel {
        const prospectModel = new ProspectModel();
        prospectModel.id = result.id;
        prospectModel.name = result.title || '';
        prospectModel.statusSource = result.potentialStatus;
        prospectModel.firstName = result.firstName;
        prospectModel.lastName = result.lastName;
        prospectModel.phoneNumberCustomer = result.phone;
        prospectModel.phoneNumberpersonal = result.cellPhone;
        prospectModel.email = result.email;
        prospectModel.website = result.website;
        prospectModel.companyName = result.company;
        prospectModel.source = result.customerResource;
        prospectModel.address = result.address;
        prospectModel.comment = result.rate;
        prospectModel.description = result.description;
        prospectModel.assignTo = result.employee && {
            id: result.employee.id,
            name: result.employee.name
        };
        prospectModel.assignToGroup = result.employeeGroup && {
            id: result.employeeGroup.id,
            name: result.employeeGroup.name
        };
        prospectModel.fieldOfAction = result.business;
        prospectModel.district = result.location && Utils.getLocationId(result.location, 'District').toString();
        prospectModel.city = result.location && Utils.getLocationId(result.location, 'StateProvince').toString();
        prospectModel.country = result.location && Utils.getLocationId(result.location, 'Country').toString();
        prospectModel.revenue = result.revenue;
        prospectModel.createdDate = result.createdDate;
        prospectModel.updatedDate = result.updatedDate;
        prospectModel.objectId = result.objectId;
        prospectModel.gender = result.gender;
        prospectModel.lunarBirthday = result.lunarBirthday;
        prospectModel.dob = result.dob;
        prospectModel.isAssigned = result.isAssigned;
        prospectModel.fullName = result.name;
        prospectModel.location = result.location;
        prospectModel.rateText = result.rateText;
        prospectModel.handler = result.handler;
        prospectModel.date = result.date;
        prospectModel.socialLink = result.socialLink;
        prospectModel.retails = result.retails;
        prospectModel.models = result.models;
        prospectModel.dab = result.dabs;
        prospectModel.promotionCare = result.promotionCare;
        prospectModel.askShowroomAddress = result.askShowroomAddress;
        prospectModel.onlineSaleOpportunity = result.onlineSaleOpportunity;
        prospectModel.adsID = result.adsID;
        prospectModel.result = result.result;
        prospectModel.approached = result.approached;
        prospectModel.approachChannels = result.approachChannels;
        return prospectModel;
    }

    viewHistory(prospectId: number | string): Observable<ProspectModel> {
        const url = `/employee/${
            this.employeeId
            }/deleted-prospect/${prospectId}`;

        return this.apiService
            .get(url)
            .map(response => this.toProspectModel(response.result))
            .share();
    }

    delete(ids: number[]) {
        const url = `/employee/${this.employeeId}/prospects/delete`;

        return this.apiService.post(url, ids).map(response => response.result);
    }

    instantSearch(
        terms: Observable<string>,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ProspectListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/prospects/search/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .search(searchUrl, terms)
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toProspectListItem)
                };
            });
    }

    instantSearchWithFilter(
        terms: Observable<string>,
        filter: ProspectFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ProspectListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/prospects/filter/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .searchWithFilter(
                searchUrl,
                terms,
                ProspectService.createFilterParams(filter)
            )
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toProspectListItem)
                };
            });
    }

    search(
        term: string,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ProspectListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/prospects/search/${page}/${pageSize}/?search=${term}`;

        return this.apiService.get(searchUrl).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toProspectListItem)
            };
        });
    }

    filter(
        searchTerm: string,
        filter: ProspectFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ProspectListItem>> {
        const filterUrl = `/employee/${
            this.employeeId
            }/prospects/filter/${page}/${pageSize}/`;

        const urlParams = ProspectService.createFilterParams(filter);
        urlParams.append('search', searchTerm);

        return this.apiService.get(filterUrl, urlParams).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toProspectListItem)
            };
        });
    }

    // tslint:disable-next-line:member-ordering
    private static createFilterParams(filter: ProspectFilter): URLSearchParams {
        const urlFilterParams = new URLSearchParams();
        urlFilterParams.append('rate', filter.rate);
        urlFilterParams.append('prospectSource', filter.prospectSource ? filter.prospectSource : null);
        urlFilterParams.append('business', filter.business);
        urlFilterParams.append('month', filter.month ? filter.month : null);

        filter.fromDate && urlFilterParams.append(
            'fromDate',
            filter.fromDate ? (+filter.fromDate).toString() : ''
        );
        filter.toDate && urlFilterParams.append(
            'toDate',
            filter.toDate ? (+filter.toDate).toString() : ''
        );
        filter.handler && urlFilterParams.append('handler', filter.handler);
        filter.approached != null && urlFilterParams.append('approached', filter.approached + '');
        filter.approachChannel && urlFilterParams.append('approachChannelId', filter.approachChannel);
        // if (filter.assignToGroup && filter.assignToGroup.toString() === '0') {
        //     urlFilterParams.append('assignTo', '0');
        //     urlFilterParams.append('isAssignToGroup', 'true');
        // }
        // if (filter.assignTo && filter.assignTo.toString() === '0') {
        //     urlFilterParams.append('assignTo', '0');
        //     urlFilterParams.append('isAssignToGroup', 'false');
        // }
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

        if (filter.potentialStatus === '') {
            urlFilterParams.append('potentialStatus', '');
        } else if (filter.potentialStatus) {
            urlFilterParams.append('potentialStatus', filter.potentialStatus);
        }
        return urlFilterParams;
    }

    convertProspect(convertProspectFormValue: any) {
        const url = `/employee/${this.employeeId}/prospect/change`;
        const assignTo = Utils.parseAssignTo(convertProspectFormValue.assignTo);
        const model = {
            id: convertProspectFormValue.id,
            createCustomer: convertProspectFormValue.isNewCustomer ? 1 : 0,
            customerName: convertProspectFormValue.customerName,
            customerType: 'Personal',
            createContact: convertProspectFormValue.isNewContact ? 1 : 0,
            business: null,
            title: convertProspectFormValue.contactSalutation,
            contactName: convertProspectFormValue.contactFullName,
            email: convertProspectFormValue.contactEmail,
            phone: convertProspectFormValue.customerPhone,
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

    toProspectListItem(result: any): ProspectListItem {
        return {
            id: result.id,
            salutation: result.title || '',
            firstName: result.firstName,
            lastName: result.lastName,
            evaluation: result.rate,
            companyPhone: result.phone,
            customerPhone: result.phone,
            mobilePhone: result.cellPhone,
            email: result.email,
            companyName: result.company,
            source: result.customerResource,
            business: result.business,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,
            gender: result.gender,
            revenue: result.revenue ? result.revenue : 0,
            potentialStatus: result.potentialStatus,
            website: result.website,
            city: result.city,
            country: result.country,
            address: result.address,
            district: result.district,
            description: result.description,
            lunarBirthday: result.lunarBirthday,
            dob: result.dob,
            isAssigned: result.isAssigned,
            fullName: result.name,
            location: result.location,
            campaign: result.campaign ? result.campaign : null,
            rateText: result.rateText,
            handlerStr: result.handlerStr,
            handler: result.handler,
            date: result.date,
            socialLink: result.socialLink,
            retails: result.retails && result.retails.length > 0 ? result.retails.map(i => i['productGroup']['name']).join(', ') : '',
            models: result.models && result.models.length > 0 ? result.models.map(i => i['attributeValue']['value']).join(', ') : '',
            dab: result.dabs && result.dabs.length > 0 ? result.dabs.map(i => i['text']).join(', ') : '',
            approachChannels: result.approachChannels && result.approachChannels.length > 0 ? result.approachChannels.map(i => i['name']).join(', ') : '',
            promotionCare: result.promotionCare,
            askShowroomAddress: result.askShowroomAddress,
            onlineSaleOpportunity: result.onlineSaleOpportunity,
            adsID: result.adsID,
            result: result.result,
            approached: result.approached
        };
    }

    importFile(file: File) {
        const url = `/employee/${this.employeeId}/prospects`;
        const formData = new FormData();
        formData.append('filePath', file, 'file xlsx');
        return this.apiService
            .postFile(url, formData)
            .map(response => {
                return response;
            })
            .share();
    }

    checkCustomerName(customerName: string) {
        const url = `employee/${
            this.employeeId
            }/customers/check-name?name=${customerName}`;
        return this.apiService
            .get(url)
            .map(response => {
                return response.result;
            })
            .share();
    }

    checkContactName(contactName: string) {
        const url = `employee/${
            this.employeeId
            }/contacts/check-name?name=${contactName}`;
        return this.apiService
            .get(url)
            .map(response => {
                return response.result;
            })
            .share();
    }

    getProbabilityOfProspectIs100(prospectId: number): Observable<any> {
        const url = `employee/${this.employeeId}/prospect/${prospectId}`;
        return this.apiService.get(url).map(response => response.result);
    }
}
