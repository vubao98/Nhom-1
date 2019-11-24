import { CheckboxSelection } from "../checkbox-selected.model";
import { Proposal } from "../proposal.model";

export class OpportunityListItem extends CheckboxSelection  {
    id: number;
    opportunityName: string;
    customerName: string;
    customerObj?: any;
    prospectCustomerObj?: any;
    customerProspectName: string;
    contact: {
        salutation: string,
        firstName: string,
        lastName: string,
    };
    category: string;
    amount: number;
    phase: string;
    probability: number;
    assignTo: string;
    assignToGroup: string;
    expectedValue: number;
    tel1?: string;
    branch: string;
    customerResource: string;
    completionDate: number;
    campaignName: string;
    description: string;
    proposals: string;
    modelsStr: string;
}
