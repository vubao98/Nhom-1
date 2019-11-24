import { CustomerModel } from "../customer/customer.model";
import { ProspectModel } from "../prospect/prospect.model";
import { ContactModel } from "../contact/contact.model";

export class CampaignModel {
    id: number;
    name: string;
    status: string;
    category: string;
    marketingObject: string;
    assignTo: {
        id: string;
        name: string;
    };
    assignToGroup: {
        id: string;
        name: string;
    };
    campaignDateStart: number;
    campaignDateStop: number;
    donors: string;
    target: string;
    numberOfParticipants: number;
    budget: number;
    actualCost: number;
    expectedRevenue: number;
    actualRevenue: number;
    expectedInvestmentEfficiency: number;
    actualInvestmentEfficiency: number;
    description: string;
    createdDate: number;
    updatedDate: number;
    campaignNo?: string;
    relatedToType: string;
    relatedList: any[];
    approachChannels: any[];
    // prospects: ProspectModel[];
    // customers: CustomerModel[];
    // contacts: ContactModel[];

    get prospects(): ProspectModel[] {
        return this.relatedToType === 'Prospect' ? this.relatedList.map(i => i.prospect) : [];
    }

    get customers(): CustomerModel[] {
        return this.relatedToType === 'Customer' ? this.relatedList.map(i => i.customer) : [];
    }

    get contacts(): ContactModel[] {
        return this.relatedToType === 'Contact' ? this.relatedList.map(i => i.contact) : [];
    }

    get approachChannelStr(): string {
        return this.approachChannels && this.approachChannels.length > 0 ? this.approachChannels.map(i => i['name']).join(', ') : '';
    }
}
