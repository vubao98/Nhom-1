import { routerTransition } from '../../../../router.animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProspectService, CampaignService, DataService, SessionService } from '../../../../shared/services';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProspectModel } from '../../../../shared/models/index';
import { FengShuisInforService } from '../../../../shared/services/feng-shuis-infor.service';
import { DialogService } from '../../../../../../node_modules/@progress/kendo-angular-dialog';
import { FengShuisInforComponent } from '../../../../shared/components/feng-shuis-infor/feng-shuis-infor.component';
import Utils from '../../../../shared/helpers/utils.helper';
import { Location } from '../../../../shared/models/location';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';

@Component( {
  selector: 'app-prospect-spec',
  templateUrl: './prospect-spec.component.html',
  styleUrls: ['./prospect-spec.component.scss'],
  animations: [routerTransition()]
} )
export class ProspectSpecComponent implements OnInit {
  prospect$: Observable<ProspectModel>;
  isCollapsedMain = false;
  isCollapsedAddress = false;
  isCollapsedDesc = false;
  fengShuisInforModel;
  campaign;
  gender;
  lunarBirthday;
  handlerStr: string;
  public dialog;

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if ( this.sessionService.currentSession ) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }
  get isProspectViewProspectDetail(): boolean {
    // xem chi tiết
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewProspectDetail' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  // Xem Đã tiếp cận
  get isProspectViewApproached(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewApproached' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Xem Cơ hội bán hàng
  get isProspectViewSaleOpportunity(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewSaleOpportunity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Xem Tình trạng
  get isProspectViewPotentialStatus(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewPotentialStatus' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }
  // Xem kết quả
  get isProspectViewResult(): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'ProspectViewResult' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor (
    private route: ActivatedRoute,
    private prospectService: ProspectService,
    private fengShuisInforService: FengShuisInforService,
    private campaignService: CampaignService,
    private dataService: DataService,
    private dialogService: DialogService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.prospect$ = this.route.parent.paramMap.switchMap( ( params: ParamMap ) =>
      this.prospectService.view( params.get( 'id' ) ) );
    this.prospect$.subscribe( result => {
      this.gender = result.gender;
      if ( result.handler ) {
        this.dataService.getSettingTypeItem( 'prospect-handler', result.handler ).subscribe( data => this.handlerStr = data.text );
      }
      this.lunarBirthday = result.lunarBirthday;
      if ( result.lunarBirthday && result.gender ) {
        this.fengShuisInforService.getFengShuisInfo( result.lunarBirthday, result.gender ).subscribe( res => {
          this.fengShuisInforModel = res;
        } );
      }
      if ( result && result.id && result.objectId ) {
        this.campaignService.view( result.objectId ).subscribe( res => {
          this.campaign = {
            id: res.id,
            text: res.name
          };
        } );
      }
    } );
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

  public showDialog() {
    this.dialog = this.dialogService.open( {
      title: 'PHONG THỦY',
      content: FengShuisInforComponent,
      width: 750,
      height: 450,
      minWidth: 250,
    } );
    const model = this.dialog.content.instance;
    model.gender = this.gender;
    model.lunarBirthday = this.lunarBirthday;
  }

  getLocation( data: Location, type: string ): string {
    const result = data ? Utils.getLocation( data, type ) : '';
    return result;
  }

  getConfigByTypeValue( type: string, value: string ) {
    this.dataService.getSettingTypeItem( type, value ).subscribe( data => {
      return data.text;
    } );
  }

}
