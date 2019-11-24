
import { Component, OnInit } from '@angular/core';
import { CampaignModel } from '../../../shared/models/campaign/campaign.model';
import * as moment from 'moment';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute } from '@angular/router';
import Utils from '../../../shared/helpers/utils.helper';
import { ProspectModel, CustomerModel, ContactModel } from '../../../shared/models';
@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.scss'],
  animations: [routerTransition()]
})
export class CampaignCreateComponent implements OnInit {
  campaignModel: CampaignModel = new CampaignModel();
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.campaignModel.relatedToType = Utils.capitalizeFirstLetter(params.moduleName);
      switch (params.moduleName) {
        case 'prospect':
          const prospectItem = new ProspectModel();
          prospectItem.id = params.moduleItemId;
          prospectItem.fullName = params.moduleItemFullName;
          prospectItem.email = params.moduleItemEmail;
          // prospectItem.phoneNumberCustomer = params.moduleItemPhone;
          prospectItem['customerPhone'] = params.moduleItemPhone;
          this.campaignModel.relatedList = [];
          this.campaignModel.relatedList.push({prospect: prospectItem});
          break;
        case 'customer':
          const customerItem = new CustomerModel();
          customerItem.id = params.moduleItemId;
          customerItem.name = params.moduleItemFullName;
          customerItem.email = params.moduleItemEmail;
          // customerItem.phoneNumberCustomer = params.moduleItemPhone;
          customerItem['customerPhone'] = params.moduleItemPhone;
          this.campaignModel.relatedList = [];
          this.campaignModel.relatedList.push({customer: customerItem});
          break;
        case 'contact':
          const contactItem = new ContactModel();
          contactItem.id = params.moduleItemId;
          contactItem.name = params.moduleItemFullName;
          contactItem.email = params.moduleItemEmail;
          // contactItem.phoneNumberCustomer = params.moduleItemPhone;
          contactItem['customerPhone'] = params.moduleItemPhone;
          this.campaignModel.relatedList = [];
          this.campaignModel.relatedList.push({contact: contactItem});
          break;
        default:
          break;
      }
      // this.eventModel.relatedToType = Utils.capitalizeFirstLetter(params.moduleName);
      // this.eventModel.specificRelated = {
      //   id: params.moduleItemId,
      //   name: params.moduleItemName,
      // };
    });
  }

}
