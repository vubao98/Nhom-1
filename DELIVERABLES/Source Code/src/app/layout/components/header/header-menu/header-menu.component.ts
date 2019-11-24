import { Component, OnInit } from '@angular/core';
import { USER_GROUP_ROLE } from '../../../../shared/configs/common.config';
import { SessionService } from '../../../../shared/services';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  listPermission: any[];
  userGroupRole = USER_GROUP_ROLE;

  get isViewPermissionMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no.startsWith('Permission')).length === 0 ? false : true;
    } else {
      return false;
    }
  }

  get isViewProspectMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      if (this.listPermission.filter(i => i.functionWeb.no.startsWith('Prospect')).length > 0) {
        const listActivityPms = this.listPermission.filter(i => i.functionWeb.no.startsWith('Prospect'));
        const arrPms = ['ProspectAddProspect', 'ProspectViewProspectInformation', 'ProspectSendEmail', 'ProspectDeleteProspect', 'ProspectImportDownloadProspectTemplate', 'ProspectExportFile'];
        return arrPms.some(i => listActivityPms.find(item => item.functionWeb.no === i));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get isViewCustomerMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      if (this.listPermission.filter(i => i.functionWeb.no.startsWith('Customer')).length > 0) {
        const listActivityPms = this.listPermission.filter(i => i.functionWeb.no.startsWith('Customer'));
        const arrPms = ['CustomerAddCustomer', 'CustomerViewCustomerInformation', 'CustomerCustomerSummary', 'CustomerSendEmail', 'CustomerDeleteCustomer', 'CustomerImportDownloadCustomerTemplate', 'CustomerExportFile'];
        return arrPms.some(i => listActivityPms.find(item => item.functionWeb.no === i));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get isViewContactMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      if (this.listPermission.filter(i => i.functionWeb.no.startsWith('Contact')).length > 0) {
        const listActivityPms = this.listPermission.filter(i => i.functionWeb.no.startsWith('Contact'));
        const arrPms = ['ContactAddContact', 'ContactViewInformation', 'ContactSendEmail', 'ContactDeleteContact', 'ContactImportDownloadTemplate', 'ContactExportFile'];
        return arrPms.some(i => listActivityPms.find(item => item.functionWeb.no === i));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get isViewOpportunityMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      if (this.listPermission.filter(i => i.functionWeb.no.startsWith('Opportunity')).length > 0) {
        const listActivityPms = this.listPermission.filter(i => i.functionWeb.no.startsWith('Opportunity'));
        const arrPms = ['OpportunityAddOpportunity', 'OpportunityViewOpportunityInformation', 'OpportunitySendEmail', 'OpportunityDeleteOpportunity', 'OpportunityExportFile'];
        return arrPms.some(i => listActivityPms.find(item => item.functionWeb.no === i));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get isViewCampaignMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      if (this.listPermission.filter(i => i.functionWeb.no.startsWith('Campaign')).length > 0) {
        const listActivityPms = this.listPermission.filter(i => i.functionWeb.no.startsWith('Campaign'));
        const arrPms = ['CampaignAddCampaign', 'CampaignViewInformation', 'CampaignDeleteCampaign', 'CampaignExportFile'];
        return arrPms.some(i => listActivityPms.find(item => item.functionWeb.no === i));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get isViewActivityMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      if (this.listPermission.filter(i => i.functionWeb.no.startsWith('Activity')).length > 0) {
        const listActivityPms = this.listPermission.filter(i => i.functionWeb.no.startsWith('Activity'));
        const arrPms = ['ActivityAddActivity', 'ActivityViewInformation', 'ActivityDeleteActivity', 'ActivityExportFile'];
        return arrPms.some(i => listActivityPms.find(item => item.functionWeb.no === i && item.category !== null));
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get isViewDashboardMenu(): boolean {
    if (this.listPermission && this.listPermission.length > 0) {
      return this.listPermission.filter(i => i.functionWeb.no.startsWith('Home')).length === 0 ? false : true;
    } else {
      return false;
    }
  }

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }


  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.listPermission = this.sessionService.getSession().userGroupFunctions;
  }

}
