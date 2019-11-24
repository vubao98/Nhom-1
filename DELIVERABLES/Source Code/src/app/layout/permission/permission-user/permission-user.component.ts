import { Component, OnInit } from '@angular/core';
import { UserGroupService, DataService, AlertService, SessionService } from '../../../shared/services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { DictionaryItem } from '../../../shared/models';
import { UserGroupPermission } from '../../../shared/models/api-response/user/user-group-permission';
import { PermissionUserProspectComponent } from './permission-user-prospect/permission-user-prospect.component';
import { PermissionUserCustomerComponent } from './permission-user-customer/permission-user-customer.component';
import { PermissionUserContactComponent } from './permission-user-contact/permission-user-contact.component';
import { PermissionUserOpportunityComponent } from './permission-user-opportunity/permission-user-opportunity.component';
import { PermissionUserCampaignComponent } from './permission-user-campaign/permission-user-campaign.component';
import { PermissionUserActivityComponent } from './permission-user-activity/permission-user-activity.component';
import { PermissionUserStatisticsComponent } from './permission-user-statistics/permission-user-statistics.component';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component( {
  selector: 'app-permission-user',
  templateUrl: './permission-user.component.html',
  styleUrls: ['./permission-user.component.scss'],
  animations: [routerTransition()]
} )
export class PermissionUserComponent implements OnInit {

  static listPermissionData: any[] = [];
  userGroupId: number;
  action = 'edit';
  userGroupName: string;
  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if ( this.sessionService.currentSession ) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  get isPmsSetPermissionDashboard(): boolean {
    // set phân quyền trang chủ
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionHome' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSetPermissionProspect(): boolean {
    // set phân quyền tiềm năng
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionProspect' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSetPermissionCustomer(): boolean {
    // set phân quyền công ty
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionCustomer' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSetPermissionContact(): boolean {
    // set phân quyền cá nhân
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionContact' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSetPermissionOpportunity(): boolean {
    // set phân quyền cơ hội
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionOpportunity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSetPermissionCampaign(): boolean {
    // set phân quyền chiến dịch
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionCampaign' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSetPermissionActivity(): boolean {
    // set phân quyền hoạt động
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionActivity' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  get isPmsSetPermissionManagerPermission(): boolean {
    // set phân quyền quản lý phân quyền
    if ( this.listPermission && this.listPermission.length > 0 ) {
      return this.listPermission.filter( i => i.functionWeb.no === 'PermissionManagePermission' ).length > 0 ? true : false;
    } else {
      return false;
    }
  }

  constructor (
    private route: ActivatedRoute,
    private userGroupService: UserGroupService,
    private alertService: AlertService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
    this.route.params.subscribe( param => {
      this.userGroupId = Number( param.id );
      this.userGroupService.getUserGroupPermission( this.userGroupId ).subscribe( pms => {
        this.userGroupName = pms.userGroup && pms.userGroup.name;
        PermissionUserComponent.listPermissionData = pms.userGroupFunctions;
        this.userGroupService.updatePermission();
      } );
    } );
  }


  submitForm() {
    this.checkViewInfoPermission();
    const data = {
      userGroup: {
        id: this.userGroupId
      },
      userGroupFunctions: PermissionUserComponent.listPermissionData
    };
    this.userGroupService.createOrEditUserGroupPermission( data, this.action ).subscribe( res => {
      this.router.navigate( ['/permission/list'] );
      this.alertService.success( 'Phân quyền nhóm thành công!' );
    }, err => {
      this.alertService.error( 'Phân quyền nhóm thất bại!' );
    } );
  }

  checkViewInfoPermission() {
    this.checkTypeAndDeletePms( PermissionUserProspectComponent.prospectViewType, 'Prospect' );
    this.checkTypeAndDeletePms( PermissionUserCustomerComponent.customerViewType, 'Customer' );
    this.checkTypeAndDeletePms( PermissionUserContactComponent.contactViewType, 'Contact' );
    this.checkTypeAndDeletePms( PermissionUserOpportunityComponent.opportunityViewType, 'Opportunity' );
    this.checkTypeAndDeletePms( PermissionUserCampaignComponent.campaignViewType, 'Campaign' );
    this.checkTypeAndDeletePms( PermissionUserActivityComponent.activityViewTypeEvent, 'Activity', 'Event' );
    this.checkTypeAndDeletePms( PermissionUserActivityComponent.activityViewTypeWork, 'Activity', 'Work' );

    // this.checkTypeAndDeletePms(PermissionUserStatisticsComponent.userStatistics, 'Statistics');
    this.CheckModuleStatistics();

    this.checkByNoAndDeletePms( 'ProspectViewProspectInformation', ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories', 'ProspectChangeProspect'] );

    this.checkByNoAndDeletePms( 'ProspectEditProspect', ['ProspectConfigRate', 'ProspectConfigProspectResource', 'ProspectConfigHandler', 'ProspectConfigDB', 'ProspectConfigApproachChannel', 'ProspectEditApproached', 'ProspectEditSaleOpportunity',
      'ProspectEditPotentialStatus', 'ProspectEditResult'] );
    this.checkByNoAndDeletePms( 'ProspectViewProspectDetail', ['ProspectViewApproached', 'ProspectViewSaleOpportunity', 'ProspectViewPotentialStatus', 'ProspectViewResult'] );

    this.checkByNoAndDeletePms( 'CustomerEditCustomer', ['CustomerConfigGroup'] );

    this.checkByNoAndDeletePms( 'OpportunityEditOpportunity', ['OpportunityConfigCustomerResource', 'OpportunityConfigCustomerStep', 'OpportunityConfigApproachChannel'] );

    this.checkByNoAndDeletePms( 'CampaignEditCampaign', ['CampaignConfigApproachChannel', 'CampaignConfigType'] );

    this.checkByNoAndDeletePms( 'ActivityEditActivity', ['ActivityConfigEventType'], 'Event' );

    const listNoViewCustomer = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities', 'CustomerCustomerEvaluation'
      , 'CustomerEvaluationBasicInformation', 'CustomerEvaluationFinance', 'CustomerEvaluationEvaluationInformation', 'CustomerEvaluationHBCOperation', 'CustomerEvaluationContractInformation'];
    this.checkByNoAndDeletePms( 'CustomerViewCustomerInformation', listNoViewCustomer );
    this.checkByNoAndDeletePms( 'ContactViewInformation', ['ContactContactSummary', 'ContactViewContactDetail', 'ContactViewComments', 'ContactComments', 'ContactActivities', 'ContactHistories', 'ContactOpportunities'] );
    this.checkByNoAndDeletePms( 'OpportunityViewOpportunityInformation', ['OpportunityOpportunitySummary', 'OpportunityViewOpportunityDetail', 'OpportunityViewComments', 'OpportunityAddComment', 'OpportunityActivites', 'OpportunityHistories'] );
    this.checkByNoAndDeletePms( 'CampaignViewInformation', ['CampaignCampaignSummary', 'CampaignViewCampaignDetail', 'CampaignViewExpectedCampaign', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories'] );
    const listNoViewActivity = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
    this.checkByNoAndDeletePms( 'ActivityViewInformation', listNoViewActivity, 'Event' );
    this.checkByNoAndDeletePms( 'ActivityViewInformation', listNoViewActivity, 'Work' );
    // tslint:disable-next-line:max-line-length
    this.checkByNoAndDeletePms( 'PermissionSetUserGroupPermissions', ['PermissionSetPermissions', 'PermissionHome', 'PermissionProspect', 'PermissionCustomer', 'PermissionContact', 'PermissionOpportunity', 'PermissionCampaign', 'PermissionActivity', 'PermissionStatisticReport', 'PermissionManagePermission'] );
  }

  CheckModuleStatistics() {
    const listPms = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Statistics' ) );

    const ArrayCategory = PermissionUserComponent.listPermissionData.filter( i =>
      i.functionWeb.no.startsWith( 'Statistics' ) && ( i.type === false || i.type === null ) );
    ( ArrayCategory || [] ).forEach( itemArrayCategory => {
      listPms.forEach( pms => {
        const idx = PermissionUserComponent.listPermissionData.findIndex( i =>
          ( i.functionWeb.no === itemArrayCategory.functionWeb.no && i.category )
        );
        //  || (pms.functionWeb.no.startsWith('Statistics') && i.type === true && !i.category)
        if ( idx !== -1 ) {
        }
        // tslint:disable-next-line:no-unused-expression
        idx !== -1 && PermissionUserComponent.listPermissionData.splice( idx, 1 );
      } );
    } );
  }

  checkTypeAndDeletePms( type, moduleName: string, category?: string ) {
    if ( type === null ) {
      if ( !category ) {
        const listPms = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( moduleName ) );
        listPms.forEach( pms => {
          const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pms.functionWeb.no );
          // tslint:disable-next-line:no-unused-expression
          idx !== -1 && PermissionUserComponent.listPermissionData.splice( idx, 1 );
        } );
      } else {
        const listPmsByCategory = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( moduleName ) && i.category === category );
        listPmsByCategory.forEach( pms => {
          const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pms.functionWeb.no && i.category === pms.category );
          // tslint:disable-next-line:no-unused-expression
          idx !== -1 && PermissionUserComponent.listPermissionData.splice( idx, 1 );
        } );
      }
    }
  }

  checkByNoAndDeletePms( no: string, pmsNoArr: string[], category?: string ) {
    const pmsInList = PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === no );
    if ( !pmsInList ) {
      if ( !category ) {
        pmsNoArr.forEach( pmsNo => {
          const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pmsNo );
          // tslint:disable-next-line:no-unused-expression
          idx !== -1 && PermissionUserComponent.listPermissionData.splice( idx, 1 );
        } );
      } else {
        pmsNoArr.forEach( pmsNo => {
          const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pmsNo && i.category === category );
          // tslint:disable-next-line:no-unused-expression
          idx !== -1 && PermissionUserComponent.listPermissionData.splice( idx, 1 );
        } );
      }
    }
  }
}
