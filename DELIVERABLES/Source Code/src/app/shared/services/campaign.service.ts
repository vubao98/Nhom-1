import { Injectable } from '@angular/core';
import { SessionService, ApiService, InstantSearchService } from './index';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';
import { CampaignListItem, CampaignModel } from '../models/index';
import DateTimeConvertHelper from '../helpers/datetime-convert-helper';
import { PagedResult } from '../models';
import { CampaignFilter } from '../models/campaign/campaign-filter.model';
import { URLSearchParams } from '@angular/http';
import Utils from '../helpers/utils.helper';

@Injectable()
export class CampaignService {
    constructor(
        private sessionService: SessionService,
        private apiService: ApiService,
        private instantSearchService: InstantSearchService
    ) {}

    get employeeId() {
        return this.sessionService.currentUser.employeeId;
    }

    read(
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CampaignListItem>> {
        const url = `employee/${this.employeeId}/campaigns/${page}/${pageSize}`;
        return this.apiService
            .get(url)
            .map(response => {
                return {
                    currentPage: response.result.page,
                    pageSize: pageSize,
                    pageCount: response.result.pageCount,
                    total: response.result.recordCount,
                    items: response.result.data.map(this.toCampaignListItem)
                };
            })
            .share();
    }

    instantSearch(
        terms: Observable<string>,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CampaignListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
        }/campaigns/search/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .search(searchUrl, terms)
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toCampaignListItem)
                };
            });
    }

    instantSearchWithFilter(
        terms: Observable<string>,
        filter: CampaignFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CampaignListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
        }/campaigns/filter/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .searchWithFilter(
                searchUrl,
                terms,
                CampaignService.createFilterParams(filter)
            )
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(this.toCampaignListItem)
                };
            });
    }
    filter(
        searchTerm: string,
        filter: CampaignFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CampaignListItem>> {
        const filterUrl = `/employee/${
            this.employeeId
        }/campaigns/filter/${page}/${pageSize}/`;

        const urlParams = CampaignService.createFilterParams(filter);
        urlParams.append('search', searchTerm);

        return this.apiService.get(filterUrl, urlParams).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toCampaignListItem)
            };
        });
    }

    // tslint:disable-next-line:member-ordering
    private static createFilterParams(filter: CampaignFilter): URLSearchParams {
        const urlFilterParams = new URLSearchParams();
        urlFilterParams.append('type', filter.type);
        urlFilterParams.append('campaignStatus', filter.campaignStatus);
        urlFilterParams.append(
            'fromDate',
            filter.fromDate ? filter.fromDate.toString() : ''
        );
        urlFilterParams.append(
            'toDate',
            filter.toDate ? filter.toDate.toString() : ''
        );
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
    ): Observable<PagedResult<CampaignListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
        }/campaigns/search/${page}/${pageSize}/?search=${term}`;

        return this.apiService.get(searchUrl).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toCampaignListItem)
            };
        });
    }

    delete(ids: number[]) {
        const url = `/employee/${this.employeeId}/campaigns/delete`;
        return this.apiService.post(url, ids).map(response => response.result);
    }

    view(campaignId: number | string): Observable<CampaignModel> {
        const url = `/employee/${this.employeeId}/campaign/${campaignId}`;

        return this.apiService
            .get(url)
            .map(response => {
                const data = response.result;
                const result = new CampaignModel();
                result.id = data.id;
                result.name = data.name;
                result.status = data.campaignStatus;
                result.category = data.type;
                result.marketingObject = data.campaignObject;
                result.assignTo =
                        data.employee && {
                            id: data.employee.id,
                            name: data.employee.name
                        };
                result.assignToGroup =
                        data.employeeGroup && {
                            id: data.employeeGroup.id,
                            name: data.employeeGroup.name
                        };
                result.campaignDateStart = data.startDate;
                result.campaignDateStop = data.completionDate;
                result.donors = data.donor;
                result.target = data.goals;
                result.numberOfParticipants = data.expectedNumber;
                result.budget = data.budget;
                result.actualCost = data.costs;
                result.expectedRevenue = data.expectedRevenue;
                result.actualRevenue = data.actualRevenue;
                result.expectedInvestmentEfficiency = data.expectedResults;
                result.actualInvestmentEfficiency = data.actualResults;
                result.description = data.description;
                result.createdDate = data.createdDate;
                result.updatedDate = data.updatedDate;
                result.campaignNo = data.campaignNo;
                result.relatedToType = data.objectType;
                // result.prospects = data.prospects;
                // result.customers = data.customers;
                // result.contacts = data.contacts;
                result.relatedList = data.objects;
                result.approachChannels = data.approachChannels;
                return result;
            })
            .share();
    }

    createOrUpdate(formValue: any) {
        let url = `employee/${this.employeeId}/campaign`;
        url = formValue.id ? url + '/edit' : url;
        const requestModel = {
            id: formValue.id,
            name: formValue.name.trim(),
            type: formValue.category,
            campaignStatus: formValue.status,
            startDate: DateTimeConvertHelper.fromDtObjectToTimestamp(
                formValue.campaignDateStart
            ),
            completionDate: DateTimeConvertHelper.fromDtObjectToTimestamp(
                formValue.campaignDateStop
            ),
            goals: formValue.target && formValue.target.trim(),
            expectedNumber: formValue.numberOfParticipants,
            donor: formValue.donors,
            campaignObject: formValue.marketingObject && formValue.marketingObject.trim(),
            budget: formValue.budget,
            costs: formValue.actualCost,
            expectedRevenue: formValue.expectedRevenue,
            actualRevenue: formValue.actualRevenue,
            expectedResults: formValue.expectedInvestmentEfficiency,
            actualResults: formValue.actualInvestmentEfficiency,
            description: formValue.description && formValue.description.trim(),
            branch: {
                id: this.sessionService.branchId
            },
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
            objectType: formValue.relatedToType,
            objects: formValue.relatedList,
            approachChannels: formValue.approachChannels && formValue.approachChannels.length > 0 ? formValue.approachChannels.map(i => {
                return {
                    id: i.id ? i.id : i
                };
            }) : null,
        };
        return this.apiService
            .post(url, requestModel)
            .map(response => response.result);
    }

    toCampaignListItem(result: any): CampaignListItem {
        return {
            id: result.id,
            name: result.name,
            status: result.campaignStatus,
            category: result.type,
            marketingObject: result.campaignObject,
            assignTo: result.employee && result.employee.name,
            assignToGroup: result.employeeGroup && result.employeeGroup.name,
            campaignDateStart: result.startDate,
            campaignDateStop: result.completionDate,
            donors: result.donor,
            target: result.goals,
            numberOfParticipants: result.expectedNumber,
            budget: result.budget,
            actualCost: result.costs,
            expectedRevenue: result.expectedRevenue,
            actualRevenue: result.actualRevenue,
            expectedInvestmentEfficiency: result.expectedResults,
            actualInvestmentEfficiency: result.actualResults,
            description: result.description,
            checkboxSelected: false,
            campaignNo: result.campaignNo,
            createdDate: result.createdDate,
            updatedDate: result.updatedDate,
        };
    }

    getListCampaignByModule(moduleName: string, itemId: number, page: number, pageSize: number, filter: CampaignFilter): Observable<PagedResult<CampaignListItem>> {
        const url = `employee/${this.employeeId}/${moduleName}/${itemId}/campaigns/${page}/${pageSize}`;
        const urlFilterParams = new URLSearchParams();
        if (filter.type) {
            urlFilterParams.append('type', filter.type);
        }
        return this.apiService.get(url, urlFilterParams).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(this.toCampaignListItem)
            };
        });
    }
}
