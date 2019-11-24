import { Component, OnInit } from '@angular/core';
import { UserGroupPermission } from '../../../../shared/models/api-response/user/user-group-permission';
import { DictionaryItem } from '../../../../shared/models';
import { UserGroupService, DataService } from '../../../../shared/services';
import { PermissionUserComponent } from '../permission-user.component';

@Component( {
  selector: 'app-permission-user-customer',
  templateUrl: './permission-user-customer.component.html',
  styleUrls: ['./permission-user-customer.component.scss']
} )
export class PermissionUserCustomerComponent implements OnInit {

  static customerViewType;

  listPermission: UserGroupPermission[];
  // customerCategoryList: DictionaryItem[];
  isSelectAll = false;
  isViewInfo;
  viewAll;
  viewByCurrentUser;
  listPermissionData: any[] = [];

  get viewType(): boolean {
    if ( this.viewAll ) {
      PermissionUserCustomerComponent.customerViewType = true;
      return true;
    } else if ( this.viewByCurrentUser ) {
      PermissionUserCustomerComponent.customerViewType = false;
      return false;
    } else {
      PermissionUserCustomerComponent.customerViewType = null;
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

  get checkAllCustomerList(): boolean {
    let value = true;
    const listPms = ['CustomerAddCustomer', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms ) ) {
        value = false;
      }
    } );
    return value;
  }

  get checkAllCustomerInfo(): boolean {
    let value = true;
    const listPms = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities'];
    listPms.forEach( pms => {
      if ( !PermissionUserComponent.listPermissionData.find( i => i.functionWeb.no === pms ) ) {
        value = false;
      }
    } );
    return value;
  }
  //

  // static prospectViewType;
  // listPermission: UserGroupPermission[];
  // isSelectAll = false;
  // isViewInfo;
  // viewAll;
  // viewByCurrentUser;
  // listPermissionData: any[] = [];

  //
  constructor (
    private userGroupService: UserGroupService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    // this.dataService.getCustomerCategory().subscribe(data => {
    //   this.customerCategoryList = data.filter(i => i.id.toString() !== 'Other');
    // });
    this.getPermissionList( 'Customer' );
    this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Customer' ) );
    this.userGroupService.checkPermission().subscribe( data => {
      this.listPermissionData = PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Customer' ) );
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
    // PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Customer')).forEach(i => i.type = this.viewType);
    const listPms = ['CustomerAddCustomer', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerConfigGroup', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile',
      'CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities'];
    this.toggleList( listPms, value );
  }
  viewUserClick( value ) {
    this.viewByCurrentUser = value;
    PermissionUserComponent.listPermissionData.filter( i => i.functionWeb.no.startsWith( 'Customer' ) ).forEach( i => i.type = this.viewType );
  }

  toggleCustomerList( value ) {
    const listPms = ['CustomerAddCustomer', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerConfigGroup', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
    this.toggleList( listPms, value );
  }

  toggleCustomerInfo( value ) {
    const listPms = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities'];
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


//   getPermissionList(module: string) {
//     this.userGroupService.getListPermissionDefault(module).subscribe(data => {
//       this.listPermission = data;
//       this.checkViewType();
//     });
//   }

//   checkViewType() {
//     if (this.listPermissionData.length > 0) {
//       const pms = this.listPermissionData[0];
//       if (pms) {
//         if (pms.type === true) {
//           this.viewAll = true;
//           this.viewByCurrentUser = true;
//         } else if (pms.type === false) {
//           this.viewByCurrentUser = true;
//         }
//       } else {
//         this.viewAll = null;
//         this.viewByCurrentUser = null;
//       }
//     }
//   }

//   selectAll(permission: UserGroupPermission[]) {
//     permission.forEach(i => i.checkboxSelected = this.isSelectAll);
//   }

//   getCheckedPermission(no: string, category: string): boolean {
//     if (this.listPermission && this.listPermission.length > 0) {
//       // return this.listPermission.find(i => i.no === no) ? true : false;
//       return PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no && i.category === category) ? true : false;
//     } else {
//       return false;
//     }
//   }

//   getCheckedAllCustomerPermission(no: string): boolean {
//     let value = true;
//     const categoryArr = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     categoryArr.forEach(category => {
//       if (!this.getCheckedPermission(no, category)) {
//         value = false;
//       }
//     });
//     return value;
//   }

//   clickAllCustomerPermission(value: string, checked: boolean) {
//     const categoryArr = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     categoryArr.forEach(category => this.togglePermission(value, category, checked));
//   }

//   togglePermission(no: string, category: string, checked: boolean) {
//     const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === no && i.category === category);
//     if (checked) {
//       // push all item to list
//       if (!valueInListTotal) {
//           const pms = this.listPermission.find(i => i.no === no);
//           const valuePushToList = {
//             category: category,
//             functionWeb: pms,
//             type: this.viewType,
//             userGroup: null
//           };
//           PermissionUserComponent.listPermissionData.push(valuePushToList);
//         }
//     } else { // remove all item from total list
//         if (valueInListTotal) {
//           const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === no && i.category === category);
//           PermissionUserComponent.listPermissionData.splice(idx, 1);
//         }
//       }
//   }

//   clickPermission(value: string, category: string) {
//     const pms = this.listPermission.find(i => i.no === value);
//     const valueInListTotal = PermissionUserComponent.listPermissionData.find(i => i.functionWeb.no === pms.no && i.category === category);
//     if (valueInListTotal) {
//       const idx = PermissionUserComponent.listPermissionData.findIndex(i => i.functionWeb.no === pms.no && i.category === category);
//       PermissionUserComponent.listPermissionData.splice(idx, 1);
//     } else {
//       const valuePushToList = {
//         category: category,
//         functionWeb: pms,
//         type: this.viewType,
//         userGroup: null
//       };
//       PermissionUserComponent.listPermissionData.push(valuePushToList);
//     }
//   }

//   viewAllClick(value) {
//     this.viewAll = value;
//     this.viewByCurrentUser = value;
//     PermissionUserComponent.listPermissionData.filter(i => i.functionWeb.no.startsWith('Customer')).forEach(i => i.type = this.viewType);
//   }

//   clickAllParentCustomerPermission(checked: boolean) {
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       this.clickParentCustomerPermission(customerType, checked);
//     });
//   }

//   clickParentCustomerPermission(customerType: string, checked: boolean) {
//     const listNo = ['CustomerAddCustomer', 'CustomerSetClassify', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerCustomerSummary', 'CustomerFinanceInformation', 'CustomerCapacityEvaluation'
//                     , 'CustomerEditHBCOperation', 'CustomerProjectInformation', 'CustomerPaymentReportDowload', 'CustomerPaymentReportUpload', 'CustomerPaymentReportDelete', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
//     listNo.forEach(no => this.togglePermission(no, customerType, checked));
//   }

//   getCheckedAllParentCustomerPermission(): boolean {
//     let value = true;
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       if (!this.getCheckedParentCustomerPermission(customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }

//   getCheckedParentCustomerPermission(customerType: string): boolean {
//     let value = true;
//     const listNo = ['CustomerAddCustomer', 'CustomerSetClassify', 'CustomerViewCustomerInformation', 'CustomerEditCustomer', 'CustomerCustomerSummary', 'CustomerFinanceInformation', 'CustomerCapacityEvaluation'
//                     , 'CustomerEditHBCOperation', 'CustomerProjectInformation', 'CustomerPaymentReportDowload', 'CustomerPaymentReportUpload', 'CustomerPaymentReportDelete', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
//     listNo.forEach(no => {
//       if (!this.getCheckedPermission(no, customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }

//   clickAllParentCustomerInfoPermission(checked: boolean) {
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       this.clickParentCustomerInfoPermission(customerType, checked);
//     });
//   }

//   clickParentCustomerInfoPermission(customerType: string, checked: boolean) {
//     const listNo = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities', 'CustomerCustomerEvaluation'
//                     , 'CustomerEvaluationBasicInformation', 'CustomerEvaluationFinance', 'CustomerEvaluationEvaluationInformation', 'CustomerEvaluationHBCOperation', 'CustomerEvaluationContractInformation'];
//     listNo.forEach(no => this.togglePermission(no, customerType, checked));
//   }

//   getCheckedAllParentCustomerInfoPermission() {
//     let value = true;
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       if (!this.getCheckedParentCustomerInfoPermission(customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }

//   getCheckedParentCustomerInfoPermission(customerType: string): boolean {
//     let value = true;
//     const listNo = ['CustomerSummary', 'CustomerViewDetail', 'CustomerViewComments', 'CustomerAddComment', 'CustomerActivities', 'CustomerHistories', 'CustomerOpportunities', 'CustomerCustomerEvaluation'
//                     , 'CustomerEvaluationBasicInformation', 'CustomerEvaluationFinance', 'CustomerEvaluationEvaluationInformation', 'CustomerEvaluationHBCOperation', 'CustomerEvaluationContractInformation'];
//     listNo.forEach(no => {
//       if (!this.getCheckedPermission(no, customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }

//   toggleAllCheckbox(checked: boolean) {
//     this.clickAllParentCustomerPermission(checked);
//     this.clickAllParentCustomerInfoPermission(checked);
//   }

//   getCheckedAllCheckbox(): boolean {
//     let value = true;
//     const listCustomerType = ['Owner', 'ManagementTeam', 'PrimeContractor', 'JVContractor', 'SupplierBodyCorporate', 'Subcontractor'];
//     listCustomerType.forEach(customerType => {
//       if (!this.getCheckedParentCustomerPermission(customerType)) {
//         value = false;
//       }
//       if (!this.getCheckedParentCustomerInfoPermission(customerType)) {
//         value = false;
//       }
//     });
//     return value;
//   }

// }
