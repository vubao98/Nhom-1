import { CheckboxSelection } from '../checkbox-selected.model';
import { Location } from '../location';

export class ProspectListItem extends CheckboxSelection {
    id: string;
    salutation: string;
    firstName: string;
    lastName: string;
    fullName: string;
    evaluation: string;
    companyPhone: string;
    mobilePhone: string;
    customerPhone: string; // copy data
    email: string;
    companyName: string;
    source: string;
    business: string;
    assignTo: string;
    assignToGroup: string;
    gender: string;
    revenue: number;
    potentialStatus: string;
    website: string;
    city: string;
    country: string;
    address: string;
    district: string;
    description: string;
    lunarBirthday: string;
    dob: number;
    isAssigned: boolean;
    location: Location;
    campaign: {
        id: number;
        name: string;
    };
    rateText: string;
    handlerStr?: string;
    handler: string;
    date: number;
    socialLink: string;
    retails: string;
    models: string;
    dab: string;
    approachChannels: string;
    promotionCare: string;
    askShowroomAddress: boolean;
    onlineSaleOpportunity: boolean;
    adsID: string;
    result: string;
    approached: boolean;
}
