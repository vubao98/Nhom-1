import { Component, OnInit } from '@angular/core';
import { UserGroupPermission } from '../../../../shared/models/api-response/user/user-group-permission';
import { UserGroupService } from '../../../../shared/services';
import { PermissionUserComponent } from '../permission-user.component';

@Component( {
  selector: 'app-permission-user-prospect',
  templateUrl: './permission-user-prospect.component.html',
  styleUrls: ['./permission-user-prospect.component.scss']
} )
export class PermissionUserProspectComponent implements OnInit {

  static prospectViewType;
  listPermission: UserGroupPermission[];
  isSelectAll = false;
  isViewInfo;
  viewAll;
  viewByCurrentUser;
  listPermissionData: any[] = [];

  get viewType(): boolean {
    if ( this.viewAll ) {
      PermissionUserProspectComponent.prospectViewType = true;
      return true;
    } else if ( this.viewByCurrentUser ) {
      PermissionUserProspectComponent.prospectViewType = false;
      return false;
    } else {
      PermissionUserProspectComponent.prospectViewType = null;
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
    const listPms = ['ProspectAddProspect', 'ProspectViewProspectInformation', 'ProspectEditProspect', 'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms ) ) {
        value = false;
      }
    } );
    return value;
  }

  get checkAllProspectInfo(): boolean {
    let value = true;
    const listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories', 'ProspectChangeProspect'];
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
    this.getPermissionList( 'Prospect' );
    this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Prospect' ) );
    this.userGroupService.checkPermission().subscribe( data => {
      this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Prospect' ) );
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
    // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Prospect')).forEach(i => i.type = this.viewType);


    const listPms = ['ProspectAddProspect', 'ProspectViewProspectInformation', 'ProspectEditProspect',
      'ProspectConfigRate', 'ProspectConfigProspectResource', 'ProspectConfigHandler', 'ProspectConfigDB', 'ProspectConfigApproachChannel', 'ProspectEditApproached', 'ProspectEditSaleOpportunity', 'ProspectEditPotentialStatus', 'ProspectEditResult',
      'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile',
      'ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewApproached', 'ProspectViewSaleOpportunity', 'ProspectViewPotentialStatus', 'ProspectViewResult', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities',
      'ProspectHistories', 'ProspectChangeProspect'];
    this.toggleList( listPms, value );
  }
  viewUserClick( value ) {
    this.viewByCurrentUser = value;
    PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Prospect' ) ).forEach( i => i.type = this.viewType );
  }
  toggleProspectList( value ) {
    const listPms = ['ProspectAddProspect', 'ProspectViewProspectInformation', 'ProspectEditProspect',
    'ProspectConfigRate', 'ProspectConfigProspectResource', 'ProspectConfigHandler', 'ProspectConfigDB', 'ProspectConfigApproachChannel', 'ProspectEditApproached', 'ProspectEditSaleOpportunity', 'ProspectEditPotentialStatus', 'ProspectEditResult',
    'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
    this.toggleList( listPms, value );
  }

  toggleProspectInfo( value ) {
    const listPms = ['ProspectProspectSummary', 'ProspectViewProspectDetail', 'ProspectViewComments', 'ProspectAddComment', 'ProspectActivities', 'ProspectHistories', 'ProspectChangeProspect'];
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
