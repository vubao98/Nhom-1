import { Injectable } from '@angular/core';
import { SessionService } from './session.service';
import { ApiService } from './api.service';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';
import { UserGroupResponse } from '../models/api-response/user/user-group-response';
import { PagedResult } from '../models';
import { UserGroupFilter } from '../models/user/user-group-filter';
import { InstantSearchService } from './instant-search.service';
import { URLSearchParams } from '@angular/http';
import { UserGroupPermission } from '../models/api-response/user/user-group-permission';
import { GroupPermissionResponse } from '../models/api-response/permission/group-permission-response.model';

@Injectable()
export class UserGroupService {

  get employeeId() {
    return this.sessionService.currentUser.employeeId;
  }

  get branchId() {
    return this.sessionService.branchId;
  }
  private permissionSubject = new Subject<any>();
  constructor(
    private sessionService: SessionService,
    private apiService: ApiService,
    private instantSearchService: InstantSearchService,
  ) { }

  private static createFilterParams(
    filter: UserGroupFilter
  ): URLSearchParams {
    const urlFilterParams = new URLSearchParams();
    if (filter.search) {
      urlFilterParams.append('search', filter.search);
    }
    return urlFilterParams;
  }

  instantSearchWithFilter(
    terms: Observable<string>,
    filter: UserGroupFilter,
    page: number | string,
    pageSize: number | string
  ): Observable<PagedResult<UserGroupResponse>> {
    const searchUrl = `/employee/${
      this.employeeId
      }/usergroup/search/${page}/${pageSize}/?search=`;

    return this.instantSearchService
      .searchWithFilter(
        searchUrl,
        terms,
        UserGroupService.createFilterParams(filter)
      )
      .map(result => {
        return {
          currentPage: result.page,
          pageSize: pageSize,
          pageCount: result.pageCount,
          total: result.recordCount,
          items: (result.data || [])
        };
      });
  }

  filter(
    searchTerm: string,
    filter: UserGroupFilter,
    page: number | string,
    pageSize: number | string
  ): Observable<PagedResult<UserGroupResponse>> {
    const filterUrl = `/employee/${
      this.employeeId
      }/usergroup/search/${page}/${pageSize}/`;

    const urlParams = UserGroupService.createFilterParams(filter);
    urlParams.append('search', searchTerm);

    return this.apiService.get(filterUrl, urlParams).map(response => {
      const result = response.result;
      return {
        currentPage: result.page,
        pageSize: pageSize,
        pageCount: result.pageCount,
        total: result.recordCount,
        items: (result.data || [])
      };
    });
  }

  createOrEdit(data: UserGroupResponse): Observable<any> {
    let url = `employee/${this.employeeId}/usergroup/`;
    url += data.id ? 'edit' : 'create';
    return this.apiService.post(url, data);
  }

  view(userGroupId: number): Observable<UserGroupResponse> {
    const url = `employee/${this.employeeId}/usergroup/${userGroupId}`;
    return this.apiService.get(url).map(response => response.result);
  }

  delete(userGroupId: number): Observable<any> {
    const url = `employee/${this.employeeId}/usergroup/${userGroupId}/delete`;
    return this.apiService.post(url).map(response => response.result);
  }

  multiDelete(idx: number[]): Observable<any> {
    const url = `employee/${this.employeeId}/usergroup/delete`;
    return this.apiService.post(url, idx).map(response => response.result);
  }

  getListPermissionDefault(module: string): Observable<UserGroupPermission[]> {
    const url = `employee/${this.employeeId}/function/list/${module}`;
    return this.apiService.get(url).map(response => response.result);
  }

  getUserGroupPermission(groupId: number): Observable<any> {
    const url = `employee/${this.employeeId}/group/${groupId}/usergroupfunction`;
    return this.apiService.get(url).map(response => response.result);
  }

  createOrEditUserGroupPermission(data, action) {
    const url = `employee/${this.employeeId}/usergroupfunction/${action}`;
    return this.apiService.post(url, data);
  }

  checkPermission() {
    return this.permissionSubject.asObservable();
  }

  updatePermission() {
    return this.permissionSubject.next();
  }

}
