import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { OpportunityResponse } from '../models/api-response/opportunity/opportunity-response.model';
import { DictionaryItem } from '../models/dictionary-item.model';
import { OpportunityRequest } from '../models/api-request/opportunity/opportunity-request.model';
import { OpportunityListItem } from '../models/opportunity/opportunity-list-item.model';
import { InstantSearchService } from './index';
import { TranslateService } from '@ngx-translate/core';
import { OpportunityModel } from '../models/index';
import DateTimeConvertHelper from '../helpers/datetime-convert-helper';
import { PagedResult } from '../models';
import { URLSearchParams } from '@angular/http';
import Utils from '../helpers/utils.helper';
import { OpportunityFilter } from '../models/opportunity/opportunity-filter.model';
@Injectable()
export class OpportunityService {
    constructor(
        private sessionService: SessionService,
        private apiService: ApiService,
        private instantSearchService: InstantSearchService,
        private translateService: TranslateService
    ) { }

    get employeeId() {
        return this.sessionService.currentUser.employeeId;
    }

    read(
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<OpportunityListItem>> {
        const url = `/employee/${
            this.employeeId
            }/opportunities/${page}/${pageSize}`;
        return this.apiService
            .get(url)
            .map(response => {
                return {
                    currentPage: response.result.page,
                    pageSize: pageSize,
                    pageCount: response.result.pageCount,
                    total: response.result.recordCount,
                    items: response.result.data.map(this.toOpportunityListItem)
                };
            })
            .share();
    }

    instantSearch(
        terms: Observable<string>,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<OpportunityListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/opportunities/search/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .search(searchUrl, terms)
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toOpportunityListItem)
                };
            });
    }

    instantSearchWithFilter(
        terms: Observable<string>,
        filter: OpportunityFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<OpportunityListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/opportunities/filter/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .searchWithFilter(
                searchUrl,
                terms,
                OpportunityService.createFilterParams(filter)
            )
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toOpportunityListItem)
                };
            });
    }
    filter(
        searchTerm: string,
        filter: OpportunityFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<OpportunityListItem>> {
        const filterUrl = `/employee/${
            this.employeeId
            }/opportunities/filter/${page}/${pageSize}/`;

        const urlParams = OpportunityService.createFilterParams(filter);
        urlParams.append('search', searchTerm);

        return this.apiService.get(filterUrl, urlParams).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toOpportunityListItem)
            };
        });
    }

    // tslint:disable-next-line:member-ordering
    private static createFilterParams(
        filter: OpportunityFilter
    ): URLSearchParams {
        const urlFilterParams = new URLSearchParams();
        urlFilterParams.append('classify', filter.classify);
        urlFilterParams.append('step', filter.step);
        filter.opportunityResourceId && urlFilterParams.append('opportunityResourceId', filter.opportunityResourceId);
        // tslint:disable-next-line:no-unused-expression
        filter.fromDate && urlFilterParams.append('fromDate', filter.fromDate.toString());
        // tslint:disable-next-line:no-unused-expression
        filter.toDate && urlFilterParams.append('toDate', filter.toDate.toString());
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
        term: string,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<OpportunityListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/opportunities/search/${page}/${pageSize}/?search=${term}`;

        return this.apiService.get(searchUrl).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toOpportunityListItem)
            };
        });
    }

    delete(ids: number[]) {
        const url = `/employee/${this.employeeId}/opportunities/delete`;
        return this.apiService.post(url, ids).map(response => response.result);
    }

    view(opportunityId: number | string): Observable<OpportunityModel> {
        const url = `/employee/${this.employeeId}/opportunity/${opportunityId}`;

        return this.apiService
            .get(url)
            .map(response => {
                const result = response.result;
                const resultModel = new OpportunityModel();
                resultModel.id = result.id;
                resultModel.name = result.name;
                resultModel.opportunityDateStop = result.completionDate;
                resultModel.customer = result.customer && result.customer.id ? {
                    id: result.customer.id,
                    name: result.customer.name
                } : null;
                resultModel.prospectCustomer = result.prospectCustomer && result.prospectCustomer.id ? {
                    id: result.prospectCustomer.id,
                    name: result.prospectCustomer.name
                } : null;
                resultModel.contact = result.customerContact && {
                    id: result.customerContact.id,
                    salutation: result.customerContact.title || '',
                    firstName: result.customerContact.firstName,
                    lastName: result.customerContact.lastName
                };
                resultModel.contacts = result.opportunityContactGroups.map(x => ({
                    id: x.contact.id,
                    text: x.contact.name
                }));
                resultModel.category = result.classify ? result.classify : null;
                resultModel.prospectSource = result.customerResource && result.customerResource.id ? result.customerResource : null;
                resultModel.amount = result.amount;
                resultModel.phase = result.step;
                resultModel.probability = result.probability;
                resultModel.campaign = result.campaign && result.campaign.id ? {
                    id: result.campaign.id,
                    name: result.campaign.name
                } : null;
                resultModel.assignTo = result.employee && {
                        id: result.employee.id,
                        name: result.employee.name
                    };
                resultModel.assignToGroup = result.employeeGroup && {
                    id: result.employeeGroup.id,
                    name: result.employeeGroup.name
                };
                resultModel.description = result.description;
                resultModel.expectedValue = result.expectedValue;
                resultModel.createdDate = result.createdDate;
                resultModel.updatedDate = result.updatedDate;
                resultModel.isShare = result.isShare;
                resultModel.branch = result.branch;
                resultModel.approachChannels = result.approachChannels;
                resultModel.proposals = result.proposals;
                resultModel.models = result.models;
                return resultModel;
            })
            .share();
    }

    createOrUpdate(formValue: any) {
        let url = `employee/${this.employeeId}/opportunity`;
        url = formValue.id ? url + '/edit' : url;

        const requestModel = {
            id: formValue.id,
            name: formValue.name && formValue.name.trim(),
            classify: formValue.category ? formValue.category : null,
            potentialSources: formValue.prospectSource,
            amount: formValue.amount,
            completionDate: DateTimeConvertHelper.fromDtObjectToTimestamp(
                formValue.opportunityDateStop
            ),
            campaign: formValue.campaign && formValue.campaign.id ? {
                id: formValue.campaign.id
            } : null,
            customerResource: formValue.prospectSource ? {
                id: formValue.prospectSource
            } : null,
            prospectCustomer: formValue.prospectCustomer && formValue.prospectCustomer.id ? {
                id: formValue.prospectCustomer.id
            } : null,
            step: formValue.phase,
            probability: formValue.probability,
            strategy: formValue.campaignName,
            expectedValue: formValue.expectedValue,
            description: formValue.description && formValue.description.trim(),
            // branch: {
            //     id: this.sessionService.branchId
            // },
            customer: formValue.customer && formValue.customer.id ? {
                id: formValue.customer.id
            } : null,
            contacts:
                formValue.contact && formValue.contact.length > 0
                    ? formValue.contact.map(x => ({ id: x.id }))
                    : null,
            employee:
                formValue.assignTo
                    ? {
                        id: formValue.assignTo
                    }
                    : null,
            employeeGroup:
                formValue.assignToGroup
                    ? {
                        id: formValue.assignToGroup
                    }
                    : null,
            isShare: formValue.isShare ? formValue.isShare : false,
            branch: {
                id: formValue.branch
            },
            approachChannels: formValue.approachChannels && formValue.approachChannels.length > 0 ? formValue.approachChannels.map(i => {
                return {
                    id: i.id ? i.id : i
                };
            }) : null,
            models: formValue.models && formValue.models.length > 0 ? formValue.models.map(i => {
                return {
                    attributeValue: {
                        id: i.id
                    }
                };
            }) : null,
        };
        return this.apiService
            .post(url, requestModel)
            .map(response => response.result);
    }

    toOpportunityListItem(result: any): OpportunityListItem {
        return {
            id: result.id,
            opportunityName: result.name,
            customerName: result.customer && result.customer.name,
            customerProspectName: result.prospectCustomer && result.prospectCustomer.name,
            customerObj: result.customer,
            prospectCustomerObj: result.prospectCustomer,
            tel1: result.customer && result.customer.tel1,
            // tslint:disable-next-line:max-line-length
            contact: result.opportunityContactGroups.map(i => i.contact.name).sort((one, two) => (one > two ? -1 : 1)).join(', '),
            category: result.classify,
            probability: result.probability,
            amount: result.amount,
            phase: result.step,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            checkboxSelected: false,
            expectedValue: result.expectedValue,
            branch: result.branch && result.branch.name,
            customerResource: result.customerResource ? result.customerResource.name : '',
            completionDate: result.completionDate,
            campaignName: result.campaign && result.campaign.name,
            description: result.description,
            proposals: result.proposals.map(i => i.no).join(','),
            modelsStr: result.models && result.models.length > 0 ? result.models.map(i => i.attributeValue.value).join(', ') : ''
        };
    }

    getOpportunitiesByModuleItemId(
        moduleName: string,
        moduleItemId: number | string,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<OpportunityListItem>> {
        const url = `employee/${
            this.employeeId
            }/opportunities/${moduleName}/${moduleItemId}/${page}/${pageSize}`;
        return this.apiService
            .get(url)
            .map(response => {
                const result = response.result;
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toOpportunityListItem)
                };
            })
            .share();
    }
}
