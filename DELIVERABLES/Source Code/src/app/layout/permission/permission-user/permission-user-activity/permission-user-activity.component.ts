import { Component, OnInit } from '@angular/core';
import { UserGroupPermission } from '../../../../shared/models/api-response/user/user-group-permission';
import { DictionaryItem } from '../../../../shared/models';
import { UserGroupService, DataService } from '../../../../shared/services';
import { PermissionUserComponent } from '../permission-user.component';

@Component( {
  selector: 'app-permission-user-activity',
  templateUrl: './permission-user-activity.component.html',
  styleUrls: ['./permission-user-activity.component.scss']
} )
export class PermissionUserActivityComponent implements OnInit {

  static activityViewTypeEvent;
  static activityViewTypeWork;

  listPermission: UserGroupPermission[];
  isSelectAll = false;
  isViewInfo;
  viewAllEvent;
  viewEventByCurrentUser;
  viewAllActivity;
  viewActivityByCurrentUser;
  listPermissionData: any[] = [];
  listPmsEvent: any[] = [];
  listPmsActivity: any[] = [];

  get viewTypeEvent(): boolean {
    if ( this.viewAllEvent ) {
      PermissionUserActivityComponent.activityViewTypeEvent = true;
      return true;
    } else if ( this.viewEventByCurrentUser ) {
      PermissionUserActivityComponent.activityViewTypeEvent = false;
      return false;
    } else {
      PermissionUserActivityComponent.activityViewTypeEvent = null;
      return null;
    }
  }

  get viewTypeActivity(): boolean {
    if ( this.viewAllActivity ) {
      PermissionUserActivityComponent.activityViewTypeWork = true;
      return true;
    } else if ( this.viewActivityByCurrentUser ) {
      PermissionUserActivityComponent.activityViewTypeWork = false;
      return false;
    } else {
      PermissionUserActivityComponent.activityViewTypeWork = null;
      return null;
    }
  }

  get disabledPmsEvent(): boolean {
    if ( this.viewTypeEvent == null ) {
      return true;
    } else {
      return false;
    }
  }

  get disabledPmsActivity(): boolean {
    if ( this.viewTypeActivity == null ) {
      return true;
    } else {
      return false;
    }
  }

  get checkAllEventList(): boolean {
    let value = true;
    // tslint:disable-next-line:max-line-length
    const listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms && i.category === 'Event' ) ) {
        value = false;
      }
    } );
    return value;
  }

  get checkAllActivityList(): boolean {
    let value = true;
    // tslint:disable-next-line:max-line-length
    const listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms && i.category === 'Work' ) ) {
        value = false;
      }
    } );
    return value;
  }

  get checkAllEventInfo(): boolean {
    let value = true;
    const listPms = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms && i.category === 'Event' ) ) {
        value = false;
      }
    } );
    return value;
  }

  get checkAllActivityInfo(): boolean {
    let value = true;
    const listPms = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms && i.category === 'Work' ) ) {
        value = false;
      }
    } );
    return value;
  }

  constructor (
    private userGroupService: UserGroupService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.getPermissionList( 'Activity' );
    this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Activity' ) );
    this.userGroupService.checkPermission().subscribe( data => {
      this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Activity' ) );
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
      this.listPmsEvent = this.listPermissionData.filter( i => i.category === 'Event' );
      this.listPmsActivity = this.listPermissionData.filter( i => i.category === 'Work' );
      if ( this.listPmsEvent.length > 0 ) {
        const pmsEvent = this.listPmsEvent[0];
        if ( pmsEvent.type === true ) {
          this.viewAllEvent = true;
          this.viewEventByCurrentUser = true;
        } else if ( pmsEvent.type === false ) {
          this.viewEventByCurrentUser = true;
        }
      } else {
        this.viewAllEvent = null;
        this.viewEventByCurrentUser = null;
      }
      if ( this.listPmsActivity.length > 0 ) {
        const pmsCategory = this.listPmsActivity[0];
        if ( pmsCategory.type === true ) {
          this.viewAllActivity = true;
          this.viewActivityByCurrentUser = true;
        } else if ( pmsCategory.type === false ) {
          this.viewActivityByCurrentUser = true;
        }
      } else {
        this.viewAllActivity = null;
        this.viewActivityByCurrentUser = null;
      }
    }
  }

  selectAll( permission: UserGroupPermission[] ) {
    permission.forEach( i => i.checkboxSelected = this.isSelectAll );
  }

  getCheckedPermission( no: string, category: string ): boolean {
    if ( this.listPermission && this.listPermission.length > 0 ) {
      // return this.listPermission.find(i => i.no === no) ? true : false;
      return PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === no && i.category === category ) ? true : false;
    } else {
      return false;
    }
  }

  clickPermission( value: string, category: string ) {
    const pms = this.listPermission.find( i => i.no === value );
    const valueInListTotal = PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms.no && i.category === category );
    if ( valueInListTotal ) {
      const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pms.no && i.category === category );
      PermissionUserComponent.listPermissionData.splice( idx, 1 );
    } else {
      const valuePushToList = {
        category: category,
        functionWeb: pms,
        type: category === 'Event' ? this.viewTypeEvent : this.viewTypeActivity,
        userGroup: null
      };
      PermissionUserComponent.listPermissionData.push( valuePushToList );
    }
  }

  viewAllEventClick( value ) {
    this.viewAllEvent = value;
    this.viewEventByCurrentUser = value;
    // // tslint:disable-next-line:max-line-length
    // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Activity') && i.category === 'Event').forEach(i => i.type = this.viewTypeEvent);
    const listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityConfigEventType', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate',
      'ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
    this.toggleList( listPms, value, 'Event' );
  }

  viewUserEventClick( value ) {
    this.viewEventByCurrentUser = value;
    // tslint:disable-next-line:max-line-length
    PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Activity' ) && i.category === 'Event' ).forEach( i => i.type = this.viewTypeEvent );
  }

  viewAllActivityClick( value ) {
    // this.viewAllActivity = value;
    // this.viewActivityByCurrentUser = value;
    // // tslint:disable-next-line:max-line-length
    // PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Activity' ) && i.category === 'Work' ).forEach( i => i.type = this.viewTypeActivity );
    const listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate',
      'ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
    this.toggleList( listPms, value, 'Work' );
  }

  viewUserActivityClick( value ) {
    this.viewActivityByCurrentUser = value;
    // tslint:disable-next-line:max-line-length
    PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Activity' ) && i.category === 'Work' ).forEach( i => i.type = this.viewTypeActivity );
  }

  toggleProspectList( value, category: string ) {
    // tslint:disable-next-line:max-line-length
    const listPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityEditActivity', 'ActivityConfigEventType', 'ActivityDeleteActivity', 'ActivityExportFile', 'ActivityImportDownloadActivityTemplate'];
    this.toggleList( listPms, value, category );
  }

  toggleProspectInfo( value, category: string ) {
    const listPms = ['ActivityViewActivityDetail', 'ActivityViewComments', 'ActivityAddComment', 'ActivityHistories'];
    this.toggleList( listPms, value, category );
  }

  toggleList( pmsArr, value, category: string ) {
    pmsArr.forEach( pmsItem => {
      // tslint:disable-next-line:max-line-length
      const valueInListTotal = PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pmsItem && i.category === category );
      if ( value ) { // push all item to total list
        if ( !valueInListTotal ) {
          const pms = this.listPermission.find( i => i.no === pmsItem );
          const valuePushToList = {
            category: category,
            functionWeb: pms,
            type: category === 'Event' ? this.viewTypeEvent : this.viewTypeActivity,
            userGroup: null
          };
          PermissionUserComponent.listPermissionData.push( valuePushToList );
        }
      } else { // remove all item from total list
        if ( valueInListTotal ) {
          const idx = PermissionUserComponent.listPermissionData.findIndex( i => i.functionWeb.no === pmsItem && i.category === category );
          PermissionUserComponent.listPermissionData.splice( idx, 1 );
        }
      }
    } );
  }

}
