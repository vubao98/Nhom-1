import { Component, OnInit } from '@angular/core';
import { DataService, ConfirmationService, AlertService } from '../../services';
import { DictionaryItem } from '../../models';
import { DictionaryEditItem } from '../../models/dictionary-edit-item';
import { BsModalRef } from 'ngx-bootstrap';
import { API_URL } from '../../configs';

@Component({
  selector: 'app-setting-type',
  templateUrl: './setting-type.component.html',
  styleUrls: ['./setting-type.component.scss']
})
export class SettingTypeComponent implements OnInit {

  evaluationList: DictionaryItem[];
  prospectEvaluationSettingList: DictionaryEditItem[];
  isAddMoreEvaluation = true;
  evaluationModel: DictionaryEditItem;
  evaluationName: string;
  type: string;
  objName: string;
  isSubmit = false;

  get typeStr(): string {
    switch (this.type) {
      case 'prospect-evaluations':
        return 'đánh giá';
      case 'opportunity-steps':
        return 'giai đoạn';
      case 'customer-groups':
        return 'nhóm';
      case 'campaign-types':
        return 'loại chiến dịch';
      case 'event-types':
        return 'loại chiến dịch';
      case 'prospectSource':
        return 'nguồn tiềm năng';
      case 'opportunitySource':
        return 'nguồn cơ hội';
      case 'prospect-handler':
        return 'cần xử lý bởi';
      case 'prospect-db':
        return 'D&B';
      case 'prospect-approach-channel':
        return 'kênh tiếp cận';
      case 'campaign-approach-channel':
        return 'nguồn chiến dịch';
      default:
        break;
    }
  }

  constructor(
    private dataService: DataService,
    private modalRef: BsModalRef,
    private confirmService: ConfirmationService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.getListEvaluations();
  }

  getListEvaluations() {
    switch (this.type) {
      case 'opportunitySource':
      case 'prospectSource':
        this.dataService.getProspectSources().subscribe(data => {
          this.setListData(data);
        });
        break;
      case 'prospect-evaluations':
      case 'opportunity-steps':
      case 'customer-groups':
      case 'campaign-types':
      case 'event-types':
      case 'prospect-handler':
      case 'prospect-db':
        this.dataService.getConfigTypeData(this.type).subscribe(data => {
          this.setListData(data);
        });
        break;
      case 'prospect-approach-channel':
      case 'campaign-approach-channel':
        this.dataService.getApproachChanels(this.objName).subscribe(data => {
          this.setListData(data);
        });
        break;
      default:
        break;
    }

  }

  setListData(data) {
    this.evaluationList = data.map(i => {
      return {
        id: i.value,
        text: i.text,
      };
    });
    this.prospectEvaluationSettingList = data.map(i => {
      return {
        id: i.id,
        text: i.text,
        edit: false,
        extra: i.value
      };
    });
  }

  addEvaluationType() {
    this.isAddMoreEvaluation = false;
    this.prospectEvaluationSettingList.forEach(i => i.edit = false);
    this.evaluationModel = {
      id: null,
      text: '',
      edit: true
    };
    this.prospectEvaluationSettingList.push(this.evaluationModel);
  }

  editEvaluationType(type) {
    this.prospectEvaluationSettingList.forEach(i => i.edit = false);
    type.edit = true;
    this.evaluationModel = type;
    this.evaluationName = type.text;
  }

  deleteEvaluationType(settingType) {
    switch (this.type) {
      case 'opportunity-steps':
      case 'customer-groups':
      case 'campaign-types':
      case 'event-types':
      case 'prospect-evaluations':
      case 'prospect-handler':
      case 'prospect-db':
        this.confirmService.confirm(`Bạn có chắc chắn muốn xóa ${this.typeStr} này?`, () => {
          if (settingType.id) {
            this.dataService.deleteEvaluations(settingType.id, this.type).subscribe(data => {
              this.deleteSettingTypeSuccess();
            }, err => {
              this.alertService.error(`Bạn không thể xóa một ${this.typeStr} đang được sử dụng!`);
            });
          } else {
            this.prospectEvaluationSettingList.pop();
            this.isAddMoreEvaluation = true;
          }
        });
        break;
      case 'opportunitySource':
      case 'prospectSource':
        // tslint:disable-next-line:max-line-length
        this.confirmService.confirm(`Bạn có chắc chắn muốn xóa ${this.typeStr} này?`, () => {
          if (settingType.id) {
            this.dataService.deleteSettingTypeItem(settingType.id, this.type).subscribe(data => {
              this.deleteSettingTypeSuccess();
            }, err => {
              // tslint:disable-next-line:max-line-length
              this.alertService.error(`Bạn không thể xóa một ${this.typeStr} đang được sử dụng!`);
            });
          } else {
            this.prospectEvaluationSettingList.pop();
            this.isAddMoreEvaluation = true;
          }
        });
        break;
      case 'prospect-approach-channel':
      case 'campaign-approach-channel':
        this.confirmService.confirm(`Bạn có chắc chắn muốn xóa ${this.typeStr} này?`, () => {
          if (settingType.id) {
            this.dataService.deleteApproachChanel(settingType.id).subscribe(data => {
              this.deleteSettingTypeSuccess();
            }, err => {
              // tslint:disable-next-line:max-line-length
              this.alertService.error(`Bạn không thể xóa một ${this.typeStr} đang được sử dụng!`);
            });
          } else {
            this.prospectEvaluationSettingList.pop();
            this.isAddMoreEvaluation = true;
          }
        });
        break;
      default:
        break;
    }
  }



  createOrUpdateEvaluationType(settingType) {
    this.isSubmit = true;
    if (settingType.text) {
      switch (this.type) {
        case 'opportunity-steps':
        case 'customer-groups':
        case 'campaign-types':
        case 'event-types':
        case 'prospect-evaluations':
        case 'prospect-handler':
        case 'prospect-db':
          this.dataService.createOrUpdateEvaluations(settingType, this.type).subscribe(data => {
            this.createSettingTypeSuccess(settingType);
          }, err => {
            this.createSettingTypeErr(err, settingType);
          });
          break;
        case 'opportunitySource':
        case 'prospectSource':
          this.dataService.createOrUpdateSettingTypeItem('', settingType).subscribe(data => {
            this.createSettingTypeSuccess(settingType);
          }, err => {
            this.createSettingTypeErr(err, settingType);
          });
          break;
        case 'prospect-approach-channel':
        case 'campaign-approach-channel':
          this.dataService.createOrUpdateApproachChannel(settingType, this.objName).subscribe(data => {
            this.createSettingTypeSuccess(settingType);
          }, err => {
            this.createSettingTypeErr(err, settingType);
          });
          break;
        default:
          break;
      }
    }
  }

  createSettingTypeSuccess(settingType) {
    this.isSubmit = false;
    this.isAddMoreEvaluation = true;
    if (settingType.id) {
      this.alertService.success(`Cập nhật ${this.typeStr} thành công!`);
    } else {
      this.alertService.success(`Tạo mới ${this.typeStr} thành công!`);
    }
    settingType.edit = !settingType.edit;
    this.dataService.updateSettingData();
    this.getListEvaluations();
  }

  createSettingTypeErr(err, settingType) {
    const errors = JSON.parse(err._body);
    if (errors.error_message.includes('exists') && (settingType.text === this.evaluationName)) {
      settingType.edit = !settingType.edit;
    } else {
      if (errors.error_message.includes('exists')) {
        // tslint:disable-next-line:max-line-length
        this.alertService.error(`Tên ${this.typeStr} đã tồn tại, vui lòng tạo tên khác!`);
      }
    }
  }

  deleteSettingTypeSuccess() {
    this.alertService.success(`Xóa ${this.typeStr} thành công!`);
    this.dataService.updateSettingData();
    this.getListEvaluations();
    this.isAddMoreEvaluation = true;
  }

  closeModal() {
    this.modalRef.hide();
  }

}
