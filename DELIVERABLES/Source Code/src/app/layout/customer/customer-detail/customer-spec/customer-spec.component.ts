import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CustomerService, DataService, SessionService } from '../../../../shared/services/index';
import { CustomerModel } from '../../../../shared/models/index';
import { Observable } from 'rxjs/Observable';
import { DialogService } from '../../../../../../node_modules/@progress/kendo-angular-dialog';
import { FengShuisInforComponent } from '../../../../shared/components/feng-shuis-infor/feng-shuis-infor.component';
import { FengShuisInforService } from '../../../../shared/services/feng-shuis-infor.service';
import Utils from '../../../../shared/helpers/utils.helper';
import { Location } from '../../../../shared/models/location';
import { SettingItemModel } from '../../../../shared/models/setting-item-model';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component({
  selector: 'app-customer-spec',
  templateUrl: './customer-spec.component.html',
  styleUrls: ['./customer-spec.component.scss'],
  animations: [routerTransition()]
})
export class CustomerSpecComponent implements OnInit {
  customer$: Observable<CustomerModel>;
  public isCollapsedMain = false;
  public isCollapsedAddress = false;
  public isCollapsedDesc = false;
  groupItem: SettingItemModel;

  public dialog;
  gender;
  lunarBirthday;
  fengShuisInforModel;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isPmsViewInfoDetailCustomer(): boolean {
    // xem chi tiết
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'CustomerViewDetail').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private dialogService: DialogService,
    private dataService: DataService,
    private fengShuisInforService: FengShuisInforService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.customer$ = this.route.parent.paramMap.switchMap((params: ParamMap) =>
      this.customerService.view(params.get('id')));
    this.customer$.subscribe(result => {
      if (result.group) {
        this.dataService.getSettingTypeItem('customer-groups', result.group).subscribe(d => this.groupItem = d);
      }
      this.gender = result.gender;
      this.lunarBirthday = result.lunarBirthday;
      if (result.lunarBirthday && result.gender) {
        this.fengShuisInforService.getFengShuisInfo(result.lunarBirthday, result.gender).subscribe(res => {
          this.fengShuisInforModel = res;
        });
      }
    });
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

  goToHistotyProspectDetail(prospectId, customerId) {
    this.router.navigate([`/prospect/detail-history/${prospectId}`], { queryParams: { customerId: customerId, module: 'customer' } });
  }

  goToDeitalContact(contactId) {
    this.router.navigate([`/contact/detail/${contactId}`]);
  }

  public showDialog() {
    this.dialog = this.dialogService.open({
      title: 'PHONG THỦY',
      content: FengShuisInforComponent,
      width: 750,
      height: 450,
      minWidth: 250,
    });
    const model = this.dialog.content.instance;
    model.gender = this.gender;
    model.lunarBirthday = this.lunarBirthday;
  }

  getLocation(data: Location, type: string): string {
    const result = data ? Utils.getLocation(data, type) : '';
    return result;
  }

}
