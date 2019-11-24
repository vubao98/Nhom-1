import { Component, OnInit } from '@angular/core';
import { UserGroupPermission } from '../../../../shared/models/api-response/user/user-group-permission';
import { DictionaryItem } from '../../../../shared/models';
import { UserGroupService, DataService } from '../../../../shared/services';
import { PermissionUserComponent } from '../permission-user.component';

@Component( {
  selector: 'app-permission-user-campaign',
  templateUrl: './permission-user-campaign.component.html',
  styleUrls: ['./permission-user-campaign.component.scss']
} )
export class PermissionUserCampaignComponent implements OnInit {

  static campaignViewType;

  listPermission: UserGroupPermission[];
  isSelectAll = false;
  isViewInfo;
  viewAll;
  viewByCurrentUser;
  listPermissionData: any[] = [];

  get viewType(): boolean {
    if ( this.viewAll ) {
      PermissionUserCampaignComponent.campaignViewType = true;
      return true;
    } else if ( this.viewByCurrentUser ) {
      PermissionUserCampaignComponent.campaignViewType = false;
      return false;
    } else {
      PermissionUserCampaignComponent.campaignViewType = null;
      return null;
    }
  }

  get disabledPms(): boolean {
    if ( this.viewType == null ) {
      return true;
    } else {
      return false;
    }
  }

  get checkAllProspectList(): boolean {
    let value = true;
    const listPms = ['CampaignAddCampaign', 'CampaignViewInformation', 'CampaignEditCampaign', 'CampaignDeleteCampaign', 'CampaignExportFile'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms ) ) {
        value = false;
      }
    } );
    return value;
  }

  get checkAllProspectInfo(): boolean {
    let value = true;
    const listPms = ['CampaignCampaignSummary', 'CampaignViewCampaignDetail', 'CampaignViewExpectedCampaign', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms ) ) {
        value = false;
      }
    } );
    return value;
  }

  constructor (
    private userGroupService: UserGroupService,
  ) { }

  ngOnInit() {
    this.getPermissionList( 'Campaign' );
    this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Campaign' ) );
    this.userGroupService.checkPermission().subscribe( data => {
      this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Campaign' ) );
      this.checkViewType();
    } );
  }

  getPermissionList( module: string ) {
    this.userGroupService.getListPermissionDefault( module ).subscribe( data => {
      this.listPermission = data;
      this.checkViewType();
    } );
  }

  checkViewType() {
    if ( this.listPermissionData.length > 0 ) {
      const pms = this.listPermissionData[0];
      if ( pms ) {
        if ( pms.type === true ) {
          this.viewAll = true;
          this.viewByCurrentUser = true;
        } else if ( pms.type === false ) {
          this.viewByCurrentUser = true;
        }
      } else {
        this.viewAll = null;
        this.viewByCurrentUser = null;
      }
    }
  }

  selectAll( permission: UserGroupPermission[] ) {
    permission.forEach( i => i.checkboxSelected = this.isSelectAll );
  }

  getCheckedPermission( no: string ): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      // return this.listPermission.find(i => i.no === no) ? true : false;
      return PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === no ) ? true : false;
    } else {
      return false;
    }
  }

  clickPermission( value: string ) {
    const pms = this.listPermission.find( i => i.no === value );
    const valueInListTotal = PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms.no );
    if ( valueInListTotal ) {
      const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pms.no );
      PermissionUserComponent.listPermissionData.splice( idx, 1 );
    } else {
      const valuePushToList = {
        category: null,
        functionWeb: pms,
        type: this.viewType,
        userGroup: null
      };
      PermissionUserComponent.listPermissionData.push( valuePushToList );
    }
  }

  viewAllClick( value ) {
    this.viewAll = value;
    this.viewByCurrentUser = value;
    // PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Campaign' ) ).forEach( i => i.type = this.viewType );
    const listPms = ['CampaignAddCampaign', 'CampaignViewInformation', 'CampaignEditCampaign',
      'CampaignConfigApproachChannel', 'CampaignConfigType',
      'CampaignDeleteCampaign', 'CampaignExportFile',
      'CampaignViewCampaignDetail', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories'];
    this.toggleList( listPms, value );
  }

  viewUserClick( value ) {
    this.viewByCurrentUser = value;
    PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Campaign' ) ).forEach( i => i.type = this.viewType );
  }

  toggleProspectList( value ) {
    const listPms = ['CampaignAddCampaign', 'CampaignViewInformation', 'CampaignEditCampaign',
      'CampaignConfigApproachChannel', 'CampaignConfigType',
      'CampaignDeleteCampaign', 'CampaignExportFile'];
    this.toggleList( listPms, value );
  }

  toggleProspectInfo( value ) {
    const listPms = ['CampaignCampaignSummary', 'CampaignViewCampaignDetail', 'CampaignViewExpectedCampaign', 'CampaignViewComments', 'CampaignAddComment', 'CampaignActivities', 'CampaignHistories'];
    this.toggleList( listPms, value );
  }

  toggleList( pmsArr, value ) {
    pmsArr.forEach( pmsItem => {
      const valueInListTotal = PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pmsItem );
      if ( value ) { // push all item to total list
        if ( !valueInListTotal ) {
          const pms = this.listPermission.find( i => i.no === pmsItem );
          const valuePushToList = {
            category: null,
            functionWeb: pms,
            type: this.viewType,
            userGroup: null
          };
          PermissionUserComponent.listPermissionData.push( valuePushToList );
        }
      } else { // remove all item from total list
        if ( valueInListTotal ) {
          const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pmsItem );
          PermissionUserComponent.listPermissionData.splice( idx, 1 );
        }
      }
    } );
  }

}
