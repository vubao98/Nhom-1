import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskRequest } from '../../../../shared/models/api-request/activity/task/task-request.model';
import { Observable } from 'rxjs/Observable';
import { DictionaryItem } from '../../../../shared/models/dictionary-item.model';
import { AlertService, DataService, SessionService, ActivityService,
  UserNotificationService, OpportunityService } from '../../../../shared/services/index';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import ValidationHelper from '../../../../shared/helpers/validation.helper';
import { ActivityModel } from '../../../../shared/models/index';
import { DATETIME_PICKER_CONFIG } from '../../../../shared/configs/datepicker.config';
import DateTimeConvertHelper from '../../../../shared/helpers/datetime-convert-helper';
import CustomValidator from '../../../../shared/helpers/custom-validator.helper';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  animations: [routerTransition()]
})
export class TaskFormComponent implements OnInit {

  @Input() task: ActivityModel;

  searchResults: DictionaryItem[];
  activityTypeList: Observable<DictionaryItem[]>;
  activityStatusList: Observable<DictionaryItem[]>;
  employeeList: DictionaryItem[];
  employeeGroupList: DictionaryItem[];
  branches: Observable<DictionaryItem[]>;

  taskForm: FormGroup;
  invalidMessages: any;
  isSubmitted: boolean;
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;

  datePickerConfig = DATETIME_PICKER_CONFIG;
  selectedSpecificRelated: DictionaryItem;

  formErrors = {
    name: '',
    startDate: '',
    endDate: '',
    status: '',
    branch: '',
    address: '',
    description: '',
    assignTo: ''
  };
  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private dataService: DataService,
    private sessionService: SessionService,
    private router: Router,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private userNotificationService: UserNotificationService,
    private opportunityService: OpportunityService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.createForm();
    this.dataService.getEmployeeGroups().subscribe(data => {
      this.employeeGroupList = data;
      // if (this.task.assignTo && this.task.assignTo.id.toString().startsWith('group_')) {
      //     const groupId = this.task.assignTo.id.toString().replace('group_', '');
      //     if (!this.employeeGroupList.find(i => i.id.toString() === groupId)) {
      //         this.employeeGroupList.push({id: +groupId, text: this.task.assignTo.name});
      //     }
      // }
  });
  this.dataService.getEmployees().subscribe(data => {
      this.employeeList = data;
      // if (this.task.assignTo && this.task.assignTo.id.toString().startsWith('employee_')) {
      //     const groupId = this.task.assignTo.id.toString().replace('employee_', '');
      //     if (!this.employeeList.find(i => i.id.toString() === groupId)) {
      //         this.employeeList.push({id: +groupId, text: this.task.assignTo.name});
      //     }
      // }
  });
    this.activityStatusList = this.dataService.getActivityStatus();
    this.activityTypeList = this.dataService.getActivityTypes();
    this.branches = this.dataService.getBranches();
  }

  createForm() {
    this.taskForm = this.fb.group({
      id: this.task.id,
      name: [this.task.name, [CustomValidator.required, Validators.maxLength(256)]],
      status: [this.task.status, Validators.required],
      startDate: [DateTimeConvertHelper.fromTimestampToDtObject(this.task.startDate), Validators.required],
      endDate: [DateTimeConvertHelper.fromTimestampToDtObject(this.task.endDate), Validators.required],
      address: [this.task.address, Validators.maxLength(200)],
      specificRelated: {
        value: this.task.specificRelated && {
          id: this.task.specificRelated.id,
          text: this.task.specificRelated.name,
        },
        disabled: !this.task.relatedToType
      },
      relatedToType: this.task.relatedToType,
      description: [this.task.description, Validators.maxLength(512)],
      assignTo: (this.task.assignTo && this.task.assignTo.id) || this.sessionService.currentUser.employeeId,
      assignToGroup: this.task.assignToGroup && this.task.assignToGroup.id,
      branch: '1',
      isShare: this.task.isShare,
    });
    this.cdr.detectChanges();
    this.taskForm.valueChanges
      .subscribe(data => this.onFormValueChanged(data));
      if (this.task.id) {
        this.opportunityService.view(this.task.specificRelated.id)
        .subscribe(data => {
            this.selectedSpecificRelated = {
                id: data.id,
                text: data.customer && data.customer.name,
                extra: data.customer && data.customer.name
            };
        });
    }
  }

  onFormValueChanged(data?: any) {
    if (this.isSubmitted) {
      this.validateForm();
    }
  }

onSelectSpecificRelated(data) {
  this.selectedSpecificRelated = data;
}

  validateForm() {
    this.invalidMessages = ValidationHelper.getInvalidMessages(this.taskForm, this.formErrors);
    if (!(this.taskForm.get('assignTo').value || this.taskForm.get('assignToGroup').value)) {
      this.formErrors.assignTo = 'Bạn cần nhập 1 trong 2 trường này';
      this.invalidMessages.push('Bạn cần nhập 1 trong 2 trường này');
    } else {
      this.formErrors.assignTo = '';
    }
    return this.invalidMessages.length === 0;
  }

  onRelatedToTypeChange() {
    const relatedToTypeControl = this.taskForm.get('relatedToType');
    const specificRelatedControl = this.taskForm.get('specificRelated');
    specificRelatedControl.reset();

    if (relatedToTypeControl.value) {
      specificRelatedControl.enable();
    } else {
      specificRelatedControl.disable();
    }
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.validateForm()) {
      this.activityService.createOrUpdate(this.taskForm.value, 'Work').subscribe(result => {
        const message = this.task.id
          ? 'Công việc đã được chỉnh sửa.'
          : 'Công việc đã được tạo.';
        this.alertService.success(message);
        this.route.params.subscribe(params => {
          if (params.moduleName && params.moduleItemId) {
            this.router.navigate([`/${params.moduleName}/detail/${params.moduleItemId}`]);
          } else {
            this.router.navigate([`/activity/task/detail/${result.id}`]);
          }
          this.alertService.success(message);
          this.userNotificationService
            .listNoticationsReminder(0, 100)
            .subscribe(notifi => {
              this.sessionService.saveNotificationList(
                notifi.items
              );
            });
        });
      });
    }
  }

  search(query) {
    this.dataService
      .searchAllByModuleName(this.taskForm.get('relatedToType').value, query)
      .subscribe(result => this.searchResults = result);
  }

  assignToGroupChange(groupIdStr: string) {
    // lọc nhân viên theo nhóm
    if (groupIdStr != '0: null') {
        this.employeeList = [];
        // this.filterModel.assignTo = null;
        this.taskForm.get('assignTo').patchValue(null);
        this.dataService.getEmployees().subscribe(data => {
            this.employeeList = data;
            if (this.task.assignTo && this.task.assignTo.id) {
                const groupId = this.task.assignTo.id.toString();
                if (!this.employeeList.find(i => i.id.toString() === groupId)) {
                    this.employeeList.push({id: +groupId, text: this.task.assignTo.name});
                }
            }
        });
    }
}
}
