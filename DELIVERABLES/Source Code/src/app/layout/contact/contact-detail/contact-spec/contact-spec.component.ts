import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Observable } from 'rxjs/Observable';
import { ContactModel } from '../../../../shared/models/index';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactService, SessionService } from '../../../../shared/services/index';
import { FengShuisInforComponent } from '../../../../shared/components/feng-shuis-infor/feng-shuis-infor.component';
import { DialogService } from '../../../../../../node_modules/@progress/kendo-angular-dialog';
import { FengShuisInforService } from '../../../../shared/services/feng-shuis-infor.service';
import Utils from '../../../../shared/helpers/utils.helper';
import { Location } from '../../../../shared/models/location';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';
const defaultAvatarSrc = 'assets/images/no-avatar.png';
const defaultCardVisitSrc = 'assets/images/id-card.svg';

@Component({
  selector: 'app-contact-spec',
  templateUrl: './contact-spec.component.html',
  styleUrls: ['./contact-spec.component.scss'],
  animations: [routerTransition()]
})
export class ContactSpecComponent implements OnInit {
  public isCollapsedMain = false;
  public isCollapsedAddress = false;
  public isCollapsedDesc = false;
  public isCollapsedPic = false;
  isCollapseCardVisit = false;
  public dialog;
  fengShuisInforModel;
  contact$: Observable<ContactModel>;
  avatarSrc: string;
  cardVisitUrl: string;
  cardVisitSrc: string;
  contactId;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  get isContactViewContactDetail(): boolean {
    // view detail
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no === 'ContactViewContactDetail').length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactService: ContactService,
    private dialogService: DialogService,
    private fengShuisInforService: FengShuisInforService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.avatarSrc = defaultAvatarSrc;
    this.cardVisitSrc = defaultCardVisitSrc;
    this.contact$ = this.route.parent.paramMap.switchMap((params: ParamMap) => {
      this.contactId = params.get('id');
      return this.contactService.view(params.get('id'));
    });
    this.contact$.subscribe(result => console.log(result));

  }

  goToDeitalCustomer(customerId) {
    this.router.navigate([`/customer/detail/${customerId}`]);
  }

  goToProspect(prospectId) {
    this.router.navigate([`/prospect/detail-history/${prospectId}`], { queryParams: { customerId: this.contactId, module: 'contact' } });
  }

  public showDialog() {
    this.dialog = this.dialogService.open({
      title: 'PHONG THỦY',
      content: FengShuisInforComponent,
      width: 750,
      height: 450,
      minWidth: 250,
    });
  }

  getLocation(data: Location, type: string): string {
    const result = data ? Utils.getLocation(data, type) : '';
    return result;
  }
}
