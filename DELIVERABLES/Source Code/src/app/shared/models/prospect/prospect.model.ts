import { Location } from '../location';

export class ProspectModel {
    id: number;
    name: string;
    revenue: number;
    firstName: string;
    phoneNumberCustomer: string;
    lastName: string;
    fullName: string;
    phoneNumberpersonal: string;
    comment: string;
    email: string;
    companyName: string;
    website: string;
    source: any;
    statusSource: string;
    fieldOfAction: string;
    assignTo: {
        id: string;
        name: string;
    };
    assignToGroup: {
        id: string;
        name: string;
    };
    address: string;
    city: string;
    country: string;
    district: string;
    description: string;
    createdDate: number;
    updatedDate: number;
    campaign: {
        id: number;
        name: string;
    };
    objectId: number;
    objectType: string;
    gender: string;
    lunarBirthday: string;
    dob: number;
    isAssigned: boolean;
    location: Location;
    rateText: string;
    handler: string;
    date: number;
    socialLink: string;
    retails: any[];
    models: any[];
    dab: any[];
    promotionCare: string;
    askShowroomAddress: boolean;
    onlineSaleOpportunity: boolean;
    adsID: string;
    result: string;
    approached: boolean;
    approachChannels: any[];
    handlerStr?: string;

    get retailsStr(): string {
        return this.retails && this.retails.length > 0 ? this.retails.map(i => i['productGroup']['name']).join(', ') : '';
    }

    get modelsStr(): string {
        return this.models && this.models.length > 0 ? this.models.map(i => i['attributeValue']['value']).join(', ') : '';
    }

    get dabStr(): string {
        return this.dab && this.dab.length > 0 ? this.dab.map(i => i['text']).join(', ') : '';
    }

    get approachChannelStr(): string {
        return this.approachChannels && this.approachChannels.length > 0 ? this.approachChannels.map(i => i['name']).join(', ') : '';
    }
}
