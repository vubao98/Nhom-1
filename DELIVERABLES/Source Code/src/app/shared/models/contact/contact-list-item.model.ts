import { CheckboxSelection } from '../checkbox-selected.model';
import { Location } from '../location';

export class ContactListItem extends CheckboxSelection {
    id: string;
    salutation: string;
    firstName: string;
    lastName: string;
    name: string;
    companyPhone: string;
    mobilePhone: string;
    email: string;
    companyName: string;
    source: string;
    assignTo: string;
    assignToGroup: string;
    jobTitle: string;

    city: string;
    city2: string;
    country: string;
    country2: string;
    address: string;
    address2: string;
    district: string;
    district2: string;
    assistant: string;
    department: string;
    description: string;
    phone: string;
    homePhone: string;
    secondaryPhone: string;
    assistantPhone: string;
    customerResource: string;
    isAssigned: boolean;
    location: Location;
    locationOther: Location;
    contactNumber: string;
    dob: number;
    updatedDate: number;
    customerPhone?: string;
}

