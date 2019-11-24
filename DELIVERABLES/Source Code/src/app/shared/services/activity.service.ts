import { Injectable } from '@angular/core';
import { ApiService, SessionService } from './index';
import { Observable } from 'rxjs/Observable';
import { ActivityListItem } from '../models/activity/activity-list-item.model';
import { ActivityModel, CampaignListItem } from '../models/index';
import { PagedResult } from '../models';
import { InstantSearchService } from './instant-search.service';
import DateTimeConvertHelper from '../helpers/datetime-convert-helper';
import { ActivityFilter } from '../models/activity/activity-filter.model';
import { URLSearchParams } from '@angular/http';
import Utils from '../helpers/utils.helper';

@Injectable()
export class ActivityService {
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
    ): Observable<PagedResult<ActivityListItem>> {
        return this.apiService
            .get(`/employee/${this.employeeId}/activities/${page}/${pageSize}`)
            .map(response => {
                return {
                    currentPage: response.result.page,
                    pageSize: pageSize,
                    pageCount: response.result.pageCount,
                    total: response.result.recordCount,
                    items: response.result.data.map(
                        ActivityService.toActivityListItem
                    )
                };
            })
            .share();
    }

    // tslint:disable-next-line:member-ordering
    private static toActivityListItem(result: any): ActivityListItem {
        return {
            id: result.id,
            name: result.name,
            startDate: result.startDate,
            endDate: result.endDate,
            status: result.activityStatus,
            address: result.address,
            relatedToType: result.activityObjectType,
            specificRelated: {
                id: result.activityObjectTypeId,
                name: result.activityObjectTypeName
            },
            assignTo:
                (result.employee && result.employee.name) ||
                (result.employees && result.employees[0] && result.employees[0].name),
            assignToGroup:
                (result.employeeGroup && result.employeeGroup.name) ||
                (result.employeeGroups && result.employeeGroups[0] && result.employeeGroups[0].name),
            activityType: result.activityType ? result.activityType : 'Work',
            eventType: result.eventType,
            checkboxSelected: false,
            description: result.description,
        };
    }

    delete(ids: any[]) {
        if (ids.length === 1) {
            const url = `/employee/${this.employeeId}/activity/${
                ids[0].activityType
                }/${ids[0].id}/delete`;
            return this.apiService.post(url).map(response => response.result);
        } else {
            const url = `/employee/${this.employeeId}/activities/delete`;
            return this.apiService
                .post(url, ids)
                .map(response => response.result);
        }
    }

    view(
        activityId: number | string,
        activityType: string
    ): Observable<ActivityModel> {
        const url = `/employee/${
            this.employeeId
            }/activity/${activityType.toLowerCase()}/${activityId}`;

        return this.apiService
            .get(url)
            .map(response => {
                const result = response.result;
                if (activityType === 'Event') {
                    return {
                        id: result.id,
                        name: result.name,
                        activityType: result.activityType,
                        status: result.activityStatus,
                        startDate: result.startDate,
                        endDate: result.endDate,
                        address: result.address,
                        eventType: result.eventType,
                        specificRelated: {
                            id: result.activityObjectTypeId,
                            name: result.activityObjectTypeName
                        },
                        relatedToType: result.activityObjectType,
                        description: result.description,
                        assignTo:
                            result.employee && {
                                id: result.employee.id,
                                name: result.employee.name
                            },
                        assignToGroup:
                            result.employeeGroup && {
                                id: result.employeeGroup.id,
                                name: result.employeeGroup.name
                            },
                        createdDate: result.createdDate,
                        updatedDate: result.updatedDate,
                        branch: result.branch,
                        isShare: result.isShare
                    };
                }
                if (activityType === 'Work') {
                    return {
                        id: result.id,
                        name: result.name,
                        activityType: result.activityType,
                        status: result.activityStatus,
                        startDate: result.startDate,
                        endDate: result.endDate,
                        address: result.address,
                        eventType: result.eventType,
                        specificRelated: {
                            id: result.activityObjectTypeId,
                            name: result.activityObjectTypeName
                        },
                        relatedToType: result.activityObjectType,
                        description: result.description,
                        assignTo:
                            result.employees &&
                                result.employees.length > 0 && {
                                    id: result.employees[0].id,
                                    name: result.employees[0].name
                                },
                        assignToGroup:
                            result.employeeGroups && result.employeeGroups[0] && {
                                id: result.employeeGroups[0].id,
                                name: result.employeeGroups[0].name
                            },
                        createdDate: result.createdDate,
                        updatedDate: result.updatedDate,
                        branch: result.branch,
                        isShare: result.isShare
                    };
                }
            })
            .share();
    }

    createOrUpdate(formValue: any, activityType: string) {
        let url = `employee/${this.employeeId}/activity`;
        url = formValue.id ? url + `/${activityType.toLowerCase()}/edit` : url;
        let requestModel = {};
        if (activityType === 'Work') {
            requestModel = {
                id: formValue.id,
                name: formValue.name && formValue.name.trim(),
                startDate: DateTimeConvertHelper.fromDtObjectToTimestamp(
                    formValue.startDate
                ),
                endDate: DateTimeConvertHelper.fromDtObjectToTimestamp(
                    formValue.endDate
                ),
                address: formValue.address && formValue.address.trim(),
                activityStatus: formValue.status,
                description: formValue.description && formValue.description.trim(),
                activityType: activityType,
                activityObjectTypeId:
                    formValue.specificRelated && formValue.specificRelated.id,
                activityObjectTypeName:
                    formValue.specificRelated && formValue.specificRelated.text,
                activityObjectType: formValue.relatedToType,
                eventType: formValue.type,
                employees:
                    formValue.assignTo
                        ? [
                            {
                                id: formValue.assignTo
                            }
                        ]
                        : null,
                employeeGroups:
                    formValue.assignToGroup
                        ? [
                            {
                                id: formValue.assignToGroup
                            }
                        ]
                        : null,
                branch: {
                    id: this.sessionService.branchId
                },
                isShare: formValue.isShare ? formValue.isShare : false
            };
        }
        if (activityType === 'Event') {
            requestModel = {
                id: formValue.id,
                name: formValue.name && formValue.name.trim(),
                startDate: DateTimeConvertHelper.fromDtObjectToTimestamp(
                    formValue.startDate
                ),
                endDate: DateTimeConvertHelper.fromDtObjectToTimestamp(
                    formValue.endDate
                ),
                address: formValue.address && formValue.address.trim(),
                activityStatus: formValue.status,
                description: formValue.description && formValue.description.trim(),
                activityType: activityType,
                activityObjectTypeId:
                    formValue.specificRelated && formValue.specificRelated.id,
                activityObjectTypeName:
                    formValue.specificRelated && formValue.specificRelated.text,
                activityObjectType: formValue.relatedToType,
                eventType: formValue.type,
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
                branch: {
                    id: this.sessionService.branchId
                },
                isShare: formValue.isShare ? formValue.isShare : false
            };
        }

        return this.apiService
            .post(url, requestModel)
            .map(response => response.result);
    }

    instantSearch(
        terms: Observable<string>,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ActivityListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/activities/search/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .search(searchUrl, terms)
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(
                        ActivityService.toActivityListItem
                    )
                };
            });
    }

    instantSearchWithFilter(
        terms: Observable<string>,
        filter: ActivityFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ActivityListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/activities/filter/${page}/${pageSize}/?search=`;

        return this.instantSearchService
            .searchWithFilter(
                searchUrl,
                terms,
                ActivityService.createFilterParams(filter)
            )
            .map(result => {
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(
                        ActivityService.toActivityListItem
                    )
                };
            });
    }

    filter(
        searchTerm: string,
        filter: ActivityFilter,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<CampaignListItem>> {
        const filterUrl = `/employee/${
            this.employeeId
            }/activities/filter/${page}/${pageSize}/`;

        const urlParams = ActivityService.createFilterParams(filter);
        urlParams.append('search', searchTerm);

        return this.apiService.get(filterUrl, urlParams).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(
                    ActivityService.toActivityListItem
                )
            };
        });
    }

    // tslint:disable-next-line:member-ordering
    private static createFilterParams(filter: ActivityFilter): URLSearchParams {
        const urlFilterParams = new URLSearchParams();
        urlFilterParams.append('sort', 'startDate');
        urlFilterParams.append('direct', 'desc');
        // tslint:disable-next-line:no-unused-expression
        filter.activityType && urlFilterParams.append('activityType', filter.activityType);
        // tslint:disable-next-line:no-unused-expression
        filter.activityStatus && urlFilterParams.append('activityStatus', filter.activityStatus);
        // tslint:disable-next-line:no-unused-expression
        filter.createdUserId && urlFilterParams.append('createdUserId', `${filter.createdUserId}`);

      //  urlFilterParams.append('createdUserId', `${filter.createdUserId}`);
      // tslint:disable-next-line:no-unused-expression
        filter.fromDate && urlFilterParams.append('fromDate', filter.fromDate.toString());
        // tslint:disable-next-line:no-unused-expression
        filter.toDate && urlFilterParams.append('toDate', filter.toDate.toString());
        if (filter.assignmentEmployeeGroupId) {
            urlFilterParams.append('assignmentEmployeeGroupId', filter.assignmentEmployeeGroupId);
        }
        if (filter.assignmentEmployeeId) {
            urlFilterParams.append('assignmentEmployeeId', filter.assignmentEmployeeId);
        }
        return urlFilterParams;
    }

    search(
        term: string,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ActivityListItem>> {
        const searchUrl = `/employee/${
            this.employeeId
            }/activities/search/${page}/${pageSize}/?search=${term}`;

        return this.apiService.get(searchUrl).map(response => {
            const result = response.result;
            return {
                currentPage: result.page,
                pageSize: pageSize,
                pageCount: result.pageCount,
                total: result.recordCount,
                items: (result.data || []).map(
                    ActivityService.toActivityListItem
                )
            };
        });
    }

    getDashboardItems(
        activityType: string,
        page: number | string,
        pageSize: number | string
    ): Observable<ActivityListItem[]> {
        const url = `/employee/${
            this.employeeId
            }/activities/type/${activityType}/${page}/${pageSize}`;

        return this.apiService
            .get(url)
            .map(
                response =>
                    response.result.data &&
                    response.result.data.map(ActivityService.toActivityListItem)
            )
            .share();
    }

    getActivitiesByModuleItemId(
        moduleName: string,
        moduleItemId: number | string,
        page: number | string,
        pageSize: number | string
    ): Observable<PagedResult<ActivityListItem>> {
        const url = `/employee/${
            this.employeeId
            }/activities/${moduleName}/${moduleItemId}/${page}/${pageSize}`;

        return this.apiService
            .get(url)
            .map(response => {
                const result = response.result;
                return {
                    currentPage: result.page,
                    pageSize: pageSize,
                    pageCount: result.pageCount,
                    total: result.recordCount,
                    items: (result.data || []).map(
                        ActivityService.toActivityListItem
                    )
                };
            })
            .share();
    }

    importFile(file: File) {
        const url = `/employee/${this.employeeId}/activities`;
        const formData = new FormData();
        formData.append('filePath', file);
        return this.apiService
            .postFile(url, formData)
            .map(response => {
                return response;
            })
            .share();
    }
}
