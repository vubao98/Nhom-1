import { Proposal } from "../proposal.model";

export class OpportunityModel {
    id: number;
    name: string;
    opportunityDateStop: number;
    customer: {
        id: string,
        name: string,
    };
    prospectCustomer: {
        id: string,
        name: string
    };
    contact: any;
    contacts: any;
    category: string;
    prospectSource: any;
    amount: number;
    phase: string;
    probability: number;
    campaign: {
        id: number,
        name: string;
    };
    assignTo: {
        id: string,
        name: string,
    };
    assignToGroup: {
        id: string,
        name: string,
    };
    description: string;
    expectedValue: number;
    createdDate: number;
    updatedDate: number;
    isShare: boolean;
    branch: {
        id: string,
        name: string
    };
    approachChannels: any[];
    proposals: Proposal[];
    models: any[];

    get approachChannelStr(): string {
        return this.approachChannels && this.approachChannels.length > 0 ? this.approachChannels.map(i => i['name']).join(', ') : '';
    }

    get proposalStr(): string {
        return this.proposals.map(i => i.no).join(',');
    }

    get modelsStr(): string {
        return this.models && this.models.length > 0 ? this.models.map(i => i['attributeValue']['value']).join(', ') : '';
    }
}
