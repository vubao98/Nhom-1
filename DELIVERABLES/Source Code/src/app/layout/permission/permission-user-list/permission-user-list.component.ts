import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { OpportunityService, AlertService, DataService, UserGroupService, ConfirmationService, SessionService } from '../../../shared/services';
// tslint:disable-next-line:import-blacklist
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { OpportunityFilter } from '../../../shared/models/opportunity/opportunity-filter.model';
import { OpportunityModel, PagedResult, DictionaryItem } from '../../../shared/models';
import { routerTransition } from '../../../router.animations';
import * as moment from 'moment';
import { DictionarySelectedItem } from '../../../shared/models/dictionary-selected-item';
import { UserGroupFilter } from '../../../shared/models/user/user-group-filter';
import { UserGroupResponse } from '../../../shared/models/api-response/user/user-group-response';
import { FormGroup, FormBuilder } from '@angular/forms';
import { COMMON_CONSTANTS, USER_GROUP_ROLE } from '../../../shared/configs/common.config';
import { NgxSpinnerService } from '../../../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-permission-user-list',
  templateUrl: './permission-user-list.component.html',
  styleUrls: ['./permission-user-list.component.scss'],
  animations: [routerTransition()]
})
export class PermissionUserListComponent implements OnInit {
  userGroupRole = USER_GROUP_ROLE;
  searchTerm$ = new BehaviorSubject<string>('');
  filterModel = new UserGroupFilter();
  @ViewChild('tablePin')
  tablePin: ElementRef;
  @ViewChild('fakeScrollBar')
  fakeScrollBar: ElementRef;
  pagedResult: PagedResult<UserGroupResponse> = new PagedResult<
    UserGroupResponse
    >();
  employeeList: DictionarySelectedItem[];
  employeeSearchList: DictionarySelectedItem[];
  employeeSelectedList: DictionarySelectedItem[] = [];
  userGroupCreate: UserGroupResponse = new UserGroupResponse();
  employeeSearchTerm$ = new BehaviorSubject<string>('');
  employeeViewSearchTerm$ = new BehaviorSubject<string>('');
  userGroupMemberViewList: any[];
  isSubmit = false;
  action = '';
  branches: Observable<DictionaryItem[]>;

  listPermission: any[];

  get checkboxSeclectAll(): boolean {
    if (this.pagedResult && this.pagedResult.items && this.pagedResult.items.length > 0) {
      if (this.pagedResult.items.every(i => i.checkboxSelected)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  set checkboxSeclectAll(value: boolean) {
    this.checkboxSeclectAll = value;
  }

  get isPmsViewGroupList(): boolean {
    // xem danh sách nhóm người dùng
    if (this.listPermission && this.listPermission.length > 0) {
        return this.listPermission.filter(i => i.functionWeb.no === 'PermissionViewUserGroupInformation').length > 0 ? true : false;
    } else {
        return false;
    }
  }

  get isPmsAddGroup(): boolean {
    // thêm nhóm người dùng
    if (this.listPermission && this.listPermission.length > 0) {
        return this.listPermission.filter(i => i.functionWeb.no === 'PermissionAddUserGroup').length > 0 ? true : false;
    } else {
        return false;
    }
  }

  get isPmsEditGroup(): boolean {
    // sửa nhóm người dùng
    if (this.listPermission && this.listPermission.length > 0) {
        return this.listPermission.filter(i => i.functionWeb.no === 'PermissionEditUserGroup').length > 0 ? true : false;
    } else {
        return false;
    }
  }

  get isPmsDeleteGroup(): boolean {
    // xóa nhóm người dùng
    if (this.listPermission && this.listPermission.length > 0) {
        return this.listPermission.filter(i => i.functionWeb.no === 'PermissionDeleteUserGroup').length > 0 ? true : false;
    } else {
        return false;
    }
  }

  get isPmsPermissionGroup(): boolean {
    // phân quyền nhóm người dùng
    if (this.listPermission && this.listPermission.length > 0) {
        return this.listPermission.filter(i => i.functionWeb.no === 'PermissionSetUserGroupPermissions').length > 0 ? true : false;
    } else {
        return false;
    }
  }

  get userLoginName(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.userName.toLowerCase();
    } else {
      return '';
    }
  }

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  loading: boolean;

  constructor(
    private userGroupService: UserGroupService,
    private alertService: AlertService,
    private dataService: DataService,
    private confirmationService: ConfirmationService,
    private spinner: NgxSpinnerService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    // this.spinner.show();
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    this.branches = this.dataService.getBranches();
    this.searchTerm$.debounceTime(COMMON_CONSTANTS.SearchDelayTimeInMs)
      .distinctUntilChanged()
      .subscribe(search => this.refresh());

    this.getEmployeeByBranch(1);

    this.employeeSearchTerm$.debounceTime(COMMON_CONSTANTS.SearchDelayTimeInMs)
      .distinctUntilChanged()
      .subscribe(search => {
        this.filterEmployee();
      });

    this.employeeViewSearchTerm$.debounceTime(COMMON_CONSTANTS.SearchDelayTimeInMs)
      .distinctUntilChanged()
      .subscribe(search => {
        this.filterViewEmployee();
      });
    this.userGroupCreate.branch.id = this.sessionService.branchId ? this.sessionService.branchId : 1;
  }

  onSelectAll(value: boolean) {
    this.pagedResult.items.forEach(x => (x.checkboxSelected = value && x.canBeModify == true));
  }

  filterViewEmployee() {
    if (this.userGroupCreate && this.userGroupCreate.employees && this.userGroupCreate.employees.length > 0) {
      this.userGroupMemberViewList = this.userGroupCreate.employees.filter(i => i.name.toLowerCase().includes(this.employeeViewSearchTerm$.value.toLowerCase().trim()));
    }
  }

  filterEmployee() {
    if (this.employeeList && this.employeeList.length > 0) {
      this.employeeSearchList = this.employeeList.filter(i => i.text.toLowerCase().includes(this.employeeSearchTerm$.value.toLowerCase().trim()));
    }
  }

  getEmployeeByBranch(branchId) {
    this.loading = true;
    this.employeeList = [];
    this.employeeSearchList = [];
    this.dataService.getEmployeeByBranch(branchId).subscribe(data => {
      this.loading = false;
      this.employeeList = data;
      this.employeeSearchList = data;
    }, err => {
      this.spinner.hide();
    });
  }

  rerender(pagedResult: any) {
    // this.checkboxSeclectAll = false;
    this.pagedResult = pagedResult;
    // this.dtTrigger.next();
    setTimeout(() => {
      if (this.tablePin && this.tablePin.nativeElement) {
          const table = this.tablePin.nativeElement as HTMLElement;
          const scrollBar = this.fakeScrollBar.nativeElement as HTMLElement;
          scrollBar.style.width = table.offsetWidth + 'px';
      }
  });
  }

  pagedResultChange(pagedResult: any) {
    this.refresh();
  }

  refresh(displayAlert: boolean = false): void {
    this.spinner.show();
    this.userGroupService
      .filter(
        this.searchTerm$.value,
        this.filterModel,
        this.pagedResult.currentPage,
        this.pagedResult.pageSize
      )
      .subscribe(result => {
        this.rerender(result);
        if (displayAlert) {
          this.alertService.success(
            'Dữ liệu đã được cập nhật mới nhất!'
          );
        }
        this.spinner.hide();
      }, err => {
        this.spinner.hide();
      });
  }

  syncScroll1(wrap1: HTMLElement, wrap2: HTMLElement) {
    wrap2.scrollLeft = wrap1.scrollLeft;
  }

  syncScroll2(wrap1: HTMLElement, wrap2: HTMLElement) {
    wrap1.scrollLeft = wrap2.scrollLeft;
  }

  transferAllSelectedData() {
    this.employeeList.forEach(i => {
      i.checkboxSelected = false;
      i.transfered = true;
      const item = JSON.parse(JSON.stringify(i));
      this.employeeSelectedList.push(item);
    });
  }

  transferSelectedData() {
    const selectedItem = this.employeeList.filter(i => i.checkboxSelected);
    selectedItem.forEach(i => {
      i.checkboxSelected = false;
      i.transfered = true;
      const item = JSON.parse(JSON.stringify(i));
      this.employeeSelectedList.push(item);
    });
  }

  unTransferSelectedData() {
    const selectedItem = this.employeeSelectedList.filter(i => i.checkboxSelected);
    selectedItem.forEach(i => {
      const selectedIdx = this.employeeSelectedList.findIndex(e => e.id === i.id);
      this.employeeSelectedList.splice(selectedIdx, 1);
      this.employeeList.find(e => e.id === i.id).transfered = false;
    });
  }

  unTransferAllSelectedData() {
    const selectedItem = this.employeeSelectedList.filter(i => i);
    selectedItem.forEach(i => {
      const selectedIdx = this.employeeSelectedList.findIndex(e => e.id === i.id);
      this.employeeSelectedList.splice(selectedIdx, 1);
      if (this.employeeList.find(e => e.id === i.id)) {
        this.employeeList.find(e => e.id === i.id).transfered = false;
      }
    });
  }

  createOrEditUserGroup(popup) {
    this.isSubmit = true;
    if (this.userGroupCreate.name && this.employeeSelectedList && this.employeeSelectedList.length > 0 && this.userGroupCreate.name.trim().length <= 50 && (this.userGroupCreate.description ? this.userGroupCreate.description.trim().length <= 200 : true)) {
      if (this.userGroupCreate.description && this.userGroupCreate.description.length <= 250) {
        this.userGroupCreate.employees = this.employeeSelectedList.map(i => {
          return {
            id: i.id
          };
        });
        // this.userGroupCreate.branch = {id : this.userGroupCreate.branch};
        this.spinner.show();
        this.userGroupService.createOrEdit(this.userGroupCreate).subscribe(sucess => {
          popup.hide();
          this.refresh();
          const mess = this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thành công!' : 'Tạo nhóm người dùng thành công!';
          this.alertService.success(mess);
        }, err => {
          this.spinner.hide();
          popup.hide();
          const error = JSON.parse(err.text());
          if (error.error_code == 'NAME_EXIST'){
            this.alertService.error('Tên nhóm phân quyền đã tồn tại, bạn vui lòng chọn tên khác');
          } else {
            const mess = this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thất bại!' : 'Tạo nhóm người dùng thất bại!';
            this.alertService.error(mess);
          }
        });
      } else {
        this.userGroupCreate.employees = this.employeeSelectedList.map(i => {
          return {
            id: i.id
          };
        });
        this.spinner.show();
        this.userGroupService.createOrEdit(this.userGroupCreate).subscribe(sucess => {
          popup.hide();
          this.refresh();
          const mess = this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thành công!' : 'Tạo nhóm người dùng thành công!';
          this.alertService.success(mess);
        }, err => {
          this.spinner.hide();
          popup.hide();
          const error = JSON.parse(err.text());
          if (error.error_code == 'NAME_EXIST'){
            this.alertService.error('Tên nhóm phân quyền đã tồn tại, bạn vui lòng chọn tên khác');
          } else {
            const mess = this.userGroupCreate.id ? 'Cập nhật nhóm người dùng thất bại!' : 'Tạo nhóm người dùng thất bại!';
            this.alertService.error(mess);
          }
        });
      }
    }
  }

  cancelPopup(popup) {
    this.isSubmit = false;
    this.userGroupCreate.name = '';
    this.userGroupCreate.description = '';
    this.unTransferAllSelectedData();
    this.employeeSearchList.forEach(i => i.checkboxSelected = false);
    // this.refresh();
    popup.hide();
  }

  modalHide() {
    this.isSubmit = false;
    this.userGroupCreate.name = '';
    this.userGroupCreate.description = '';
    this.unTransferAllSelectedData();
    this.employeeSearchList.forEach(i => i.checkboxSelected = false);
    // this.refresh();
  }

  openPopupCreate(modal) {
    this.action = 'create';
    this.userGroupCreate = new UserGroupResponse();
    modal.show();
  }

  viewUserGroup(id: number, modal) {
    this.spinner.show();
    this.userGroupService.view(id).subscribe(data => {
      this.action = 'view';
      this.userGroupCreate = data;
      this.userGroupMemberViewList = this.userGroupCreate.employees;
      this.spinner.hide();
      modal.show();
    }, err => {
      this.spinner.hide();
    });
  }

  editUserGroup(id?: number, modal?) {
    this.spinner.show();
    this.userGroupService.view(id ? id : this.userGroupCreate.id).subscribe(data => {
      this.action = 'edit';
      this.userGroupCreate = data;
      this.spinner.hide();
      if (modal) {
        modal.show();
      }
      this.employeeSelectedList = this.userGroupCreate.employees.map(i => {
        return {
          id: i.id,
          text: i.name,
          checkboxSelected: false
        };
      });
      this.employeeSelectedList.forEach(i => {
        if (this.employeeList.find(e => e.id === i.id)) {
          this.employeeList.find(e => e.id === i.id).transfered = true;
        }
      });
    }, err => {
      this.spinner.hide();
    });
  }

  delete(userGroupId: number) {
    this.confirmationService.confirm(
      'Bạn có chắc chắn muốn xóa nhóm người dùng này?',
      () => {
        this.userGroupService.delete(userGroupId).subscribe(_ => {
          this.alertService.success('Đã xóa nhóm người dùng!');
          this.refresh();
        });
      }
    );
  }

  multiDelete() {
    const deleteIds = this.pagedResult.items
        .filter(x => x.checkboxSelected)
        .map(x => +x.id);

    if (deleteIds.length === 0) {
        this.alertService.error(
            'Bạn phải chọn ít nhất một đối tượng để xóa!'
        );
    } else {
        this.confirmationService.confirm('Bạn có chắc chắn muốn xóa những nhóm người dùng này?', () => {
          this.userGroupService.multiDelete(deleteIds).subscribe(_ => {
            this.alertService.success('Đã xóa những nhóm người dùng đã chọn!');
            this.refresh();
          });
        });
    }
  }

  getPmsEditGroupByRole(role: string) {
    if (this.groupRole === USER_GROUP_ROLE.SuperAdmin || this.groupRole === USER_GROUP_ROLE.Admin) {
      return false;
    } else {
      return role === USER_GROUP_ROLE.SuperAdmin || role === USER_GROUP_ROLE.Admin ? true : this.isPmsEditGroup ? false : true;
    }
  }

  setAdmin() {
    this.userGroupCreate.role = this.userGroupCreate.role === USER_GROUP_ROLE.Admin ? USER_GROUP_ROLE.Normal : USER_GROUP_ROLE.Admin;
  }

}
