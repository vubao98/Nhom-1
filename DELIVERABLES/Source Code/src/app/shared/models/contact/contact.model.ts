import { Location } from '../location';

export class ContactModel {
    id: number;
    salutation: string;
    name: string;
    dateOfBirth: number;
    customer: any;
    prospectSource: any;
    jobTitle: string;
    department: string;
    companyPhone: string;
    mobilePhone: string;
    homePhone: string;
    extraPhone: string;
    email: string;
    assistant: string;
    assistantPhone: string;
    assignTo: {
        id: string,
        name: string,
    };
    assignToGroup: {
        id: string,
        name: string,
    };
    address: string;
    district: string;
    city: string;
    country: string;
    otherAddress: string;
    otherDistrict: string;
    otherCity: string;
    otherCountry: string;
    description: string;
    contactImageSrc: string;
    createdDate: number;
    updatedDate: number;
    image: string;
    cardVisit: string;
    gender: string;
    lunarBirthday: string;
    isAssigned: boolean;
    location: Location;
    locationOther: Location;
    phoneNumberCustomer?: string; //copy data
}
