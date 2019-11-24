import { API_URL } from '../configs/api-url.config';
import { DictionaryItem } from '../models/dictionary-item.model';
import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { SessionService } from './index';
import { SelectItemWithType } from '../models/select-item-with-type';
import { Province } from '../models/province';
import { TableColumnConfig } from '../models/table-column-config';
import { Subject } from 'rxjs';
import { SettingItemModel } from '../models/setting-item-model';
import { DictionarySelectedItem } from '../models/dictionary-selected-item';


const MODULE_NAMES = {
    prospect: 'prospect',
    customer: 'customer',
    contact: 'contact',
    opportunity: 'opportunity',
    campaign: 'campaign'
};

@Injectable()
export class DataService {

    private updateSettingDataSubject$ = new Subject<any>();
    updateSettingDataSubject = this.updateSettingDataSubject$.asObservable();

    private static createFilterParams(filter: string): URLSearchParams {
        const urlFilterParams = new URLSearchParams();
        filter && urlFilterParams.append('groupId', filter);
        return urlFilterParams;
    }

    constructor(
        private apiService: ApiService,
        private sessionService: SessionService
    ) {}

    updateSettingData() {
        this.updateSettingDataSubject$.next();
    }

    getAllBranchs(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_BRANCHES)
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

    getBranches(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(`employee/${
                this.sessionService.currentUser.employeeId
            }${API_URL.GET_BRANCHES}`)
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

    getSalutations(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_SALUTATIONS)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getProspectSources(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_CUSTOMER_RESROURCE)
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

    getBusiness(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_BUSINESS)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getProspectEvaluations(): Observable<any[]> {
        return this.apiService
            .get(API_URL.GET_PROSPECT_EVALUATIONS)
            .map(response =>
                response.result.map(x => {
                    return {
                        value: x.value,
                        id: x.id,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getProductFunitureGroups(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_PRODUCT_FUNITURE_GROUP)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.id,
                        text: x.name
                    };
                })
            )
            .share();
    }

    getProductFunitureModel(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_PRODUCT_FUNITURE_MODEL)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.id,
                        text: x.value
                    };
                })
            )
            .share();
    }

    getApproachChanels(objType: string): Observable<DictionaryItem[]> {
        const url = `/employee/${this.sessionService.currentUser.employeeId}/approachChannels?objectType=${objType}`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.id,
                        text: x.name
                    };
                })
            )
            .share();
    }

    getDBs(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_DBS)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: x.text
                    };
                })
            )
            .share();
    }

    getConfigTypeData(type: string): Observable<any[]> {
        return this.apiService
            .get(`/list/${type}`)
            .map(response =>
                response.result.map(x => {
                    return {
                        value: x.value,
                        id: x.id,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getSettingTypeData(url: string): Observable<any[]> {
        return this.apiService.get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        value: x.value,
                        id: x.id,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getProspectStatus(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_PROSPECT_STATUS)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getProspectHandlers(): Observable<DictionaryItem[]> {
        return this.apiService
            .get(API_URL.GET_PROSPECT_HANDLER)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getCustomers(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/customers`;
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

    getlunarBirthday(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/lunar-years`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x,
                        text: `${x}`
                    };
                })
            )
            .share();
    }

    searchCustomers(query: string): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/customers/?customerName=${query}`;
        return this.apiService
            .get(url)
            .map(response => {
                if (response.result && response.result.length > 0) {
                    return response.result.map(x => {
                        return {
                            id: x.id,
                            text: x.tel1 ? `${x.name} - ${x.tel1}` : `${x.name}`
                        };
                    });
                } else {
                    return [];
                }
            })
            .share();
    }

    searchContacts(query: string): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/contacts/?contactName=${query}`;
        return this.apiService
            .get(url)
            .map(response => {
                if (response.result && response.result.length > 0) {
                    return response.result.map(x => {
                        return {
                            id: x.id,
                            text: x.name
                        };
                    });
                } else {
                    return [];
                }
            })
            .share();
    }

    searchProspects(query: string): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/prospects/?prospectName=${query}`;
        return this.apiService
            .get(url)
            .map(response => {
                if (response.result && response.result.length > 0) {
                    return response.result.map(x => {
                        return {
                            id: x.id,
                            text: x.name
                        };
                    });
                } else {
                    return [];
                }
            })
            .share();
    }

    searchCampaigns(query: string): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/campaigns/?campaignName=${query}`;
        return this.apiService
            .get(url)
            .map(response => {
                if (response.result && response.result.length > 0) {
                    return response.result.map(x => {
                        return {
                            id: x.id,
                            text: `${x.name}`
                        };
                    });
                } else {
                    return [];
                }
            })
            .share();
    }

    searchOpportunities(query: string): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/opportunities/?opportunityName=${query}`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.id,
                        text: `${x.name}`,
                        extra: x.customer && x.customer.name
                    };
                })
            )
            .share();
    }

    getContacts(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/contacts`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.id,
                        text: `${x.firstName} ${x.lastName}`
                    };
                })
            )
            .share();
    }

    getProspects(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/prospects`;
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

    getOpportunities(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/opportunities`;
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

    getCampaigns(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/campaigns`;
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

    getEmployees(groupId?): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/employees/assignable`;
        const filterParam = DataService.createFilterParams(groupId);
        return this.apiService
            .get(url, filterParam)
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
    getEmployeesFilter(groupId?): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/employees`;
        const filterParam = DataService.createFilterParams(groupId);
        console.log('filterParam', filterParam);
        return this.apiService
            .get(url, filterParam)
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
    getAssignToItems(): Observable<DictionaryItem[]> {
        const employees$ = this.getEmployees().map(employees =>
            employees.map(employee => {
                return {
                    id: `employee_${employee.id}`,
                    text: employee.text
                };
            })
        );

        const groups$ = this.getEmployeeGroups().map(groups =>
            groups.map(group => {
                return {
                    id: `group_${group.id}`,
                    text: group.text
                };
            })
        );

        return Observable.forkJoin(employees$, groups$).map(items =>
            [].concat.apply([], items)
        );
    }

    getEmployeeGroups(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/employee-groups`;
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
    getEmployeeGroupsFilter(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/groups`;
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

    getCustomerGroups(): Observable<DictionaryItem[]> {
        const url = `/list/customer-groups`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getCustomerClassifies(): Observable<DictionaryItem[]> {
        const url = `/list/customer-classifies`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getOpportunitySteps(): Observable<DictionaryItem[]> {
        const url = `/list/opportunity-steps`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getOpportunityClassifies(): Observable<DictionaryItem[]> {
        const url = `/list/opportunity-classifies`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getCampaignStatus(): Observable<DictionaryItem[]> {
        const url = `/list/campaign-status`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getActivityStatus(): Observable<DictionaryItem[]> {
        const url = `/list/task-status`;
        return this.apiService
            .get(url)
            .map(data =>
                data.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getActivityTypes(): Observable<DictionaryItem[]> {
        const url = `/list/activity-types`;
        return this.apiService
            .get(url)
            .map(data =>
                data.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getEventTypes(): Observable<DictionaryItem[]> {
        const url = `/list/event-types`;
        return this.apiService
            .get(url)
            .map(data =>
                data.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getCampaignTypes(): Observable<DictionaryItem[]> {
        const url = `/list/campaign-types`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getAllByModuleName(moduleName: string): Observable<DictionaryItem[]> {
        switch ((moduleName || '').toLowerCase()) {
            case MODULE_NAMES.customer:
                return this.getCustomers();

            case MODULE_NAMES.contact:
                return this.getContacts();

            case MODULE_NAMES.prospect:
                return this.getProspects();

            case MODULE_NAMES.opportunity:
                return this.getOpportunities();

            case MODULE_NAMES.campaign:
                return this.getCampaigns();
            default:
                break;
        }
    }

    searchAllByModuleName(
        moduleName: string,
        searchTerm: string
    ): Observable<DictionaryItem[]> {
        switch ((moduleName || '').toLowerCase()) {
            case MODULE_NAMES.customer:
                return this.searchCustomers(searchTerm);

            case MODULE_NAMES.contact:
                return this.searchContacts(searchTerm);

            case MODULE_NAMES.prospect:
                return this.searchProspects(searchTerm);

            case MODULE_NAMES.opportunity:
                return this.searchOpportunities(searchTerm);

            case MODULE_NAMES.campaign:
                return this.searchCampaigns(searchTerm);
            default:
                break;
        }
    }

    downloadFile() {
        const url = `/downloadFile`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.key,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getListProduct(): Observable<DictionaryItem[]> {
        const url = `/employee/${
            this.sessionService.currentUser.employeeId
        }/products`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.productNo,
                        text: `${x.productName}`
                    };
                })
            )
            .share();
    }

    getListInvoiceStatus(): Observable<DictionaryItem[]> {
        const url = `list/invoice-status`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getListCoordinatorStatus(): Observable<DictionaryItem[]> {
        const url = `list/coordinator-status`;
        return this.apiService
            .get(url)
            .map(response =>
                response.result.map(x => {
                    return {
                        id: x.value,
                        text: `${x.text}`
                    };
                })
            )
            .share();
    }

    getListProvince(): Observable<Province[]> {
        const url = `employee/${this.sessionService.currentUser.employeeId}/provinces`;
        return this.apiService.get(url)
            .map(response => response.result)
            .share();
    }
    createOrUpdateEvaluations(data, type: string) {
        // /employee/158/config/prospect-evaluations
        // /employee/158/config/prospect-evaluations/2593/edit
        let url = `/employee/${this.sessionService.currentUser.employeeId}/config/${type}`;
        if (data.id) {
            url += `/${data.id}/edit`;
        }
        // else {
        //     url += 'create';
        // }
        return this.apiService.post(url, {
            'text': data.text.trim()
        }).map(res => res.result);
    }

    deleteEvaluations(id: number, type: string) {
        // /employee/158/config/prospect-evaluations/2593/delete
        const url = `/employee/${this.sessionService.currentUser.employeeId}/config/${type}/${id}/delete`;
        return this.apiService.post(url).map(res => res.result);
    }

    getDefaultTableConfig(type: string): Observable<TableColumnConfig[]> {
        const url = `employee/${this.sessionService.currentUser.employeeId}/fieldconfig/${type}`;
        return this.apiService.get(url)
            .map(res => res.result.columnAlias).share();
    }

    setTableConfig(columns: TableColumnConfig[], type: string, toDefault = false): Observable<TableColumnConfig[]> {
        const url = `employee/${this.sessionService.currentUser.employeeId}/fieldconfig`;
        const data = {
            userFieldConfigType: type,
            columnAlias: toDefault ? null : columns
        };
        return this.apiService.post(url, data)
            .map(res => res.result.columnAlias).share();

    }

    createOrUpdateApproachChannel(data: DictionaryItem, objType: string): Observable<any> {
        const formData = {
            name: data.text.trim(),
            description: data.text.trim(),
            objectType: objType
        };
        let url = `employee/${this.sessionService.currentUser.employeeId}/approachChannel/`;
        url += data.id ? 'edit' : 'create';
        formData['id'] = data.id ? data.id : null;
        return this.apiService.post(url, formData)
            .map(res => res.result).share();
    }

    createOrUpdateSettingTypeItem(type: string, data: DictionaryItem): Observable<any> {
        const formData = new FormData();
        formData.append('name', data.text.trim());
        formData.append('desc', data.text.trim());
        let url = `employee/${this.sessionService.currentUser.employeeId}/customer-resources/`;
        url += data.id ? `${data.id}/edit` : 'create';
        return this.apiService.postFile(url, formData)
            .map(res => res.result).share();
    }

    deleteSettingTypeItem(id: number, type: string) {
        // /employee/158/config/prospect-evaluations/2593/delete
        const url = `/employee/${this.sessionService.currentUser.employeeId}/customer-resources/${id}/delete`;
        return this.apiService.post(url).map(res => res.result);
    }

    deleteApproachChanel(id: number) {
        const url = `employee/${this.sessionService.currentUser.employeeId}/approachChannels/delete`;
        const data = [id];
        return this.apiService.post(url, data).map(res => res.result);
    }

    getSettingTypeItem(type: string, key: string): Observable<SettingItemModel> {
        const url = `employee/${this.sessionService.currentUser.employeeId}/config/${type}/${key}`;
        return this.apiService.get(url).map(res => res.result);
    }

    getEmployeeByBranch(branchId: number): Observable<DictionarySelectedItem[]> {
        const url = `/employee/${this.sessionService.currentUser.employeeId}/employees/branch/${branchId}`;
        return this.apiService.get(url)
            .map(response => response.result.map(x => {
                return {
                    id: x.id,
                    text: `${x.name}`,
                };
            }))
            .share();
    }
}
