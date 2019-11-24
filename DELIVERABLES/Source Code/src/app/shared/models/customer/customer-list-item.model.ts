import { CheckboxSelection } from '../checkbox-selected.model';
import { Location } from '../location';
import { ContactModel } from '../contact/contact.model';
import { CustomerModel } from './customer.model';

export class CustomerListItem extends CheckboxSelection {
    id: string;
    customerName: string;
    website: string;
    customerPhone: string;
    email: string;
    business: string;
    group: string;
    rating: number;
    revenue: string;
    assignTo: string;
    assignToGroup: string;
    fax: string;
    taxNo: string;
    emailExtra: string;
    phoneNumberExtra: string;
    stockCode: string;
    customerType: string;
    city: string;
    country: string;
    address: string;
    district: string;
    description: string;
    lunarBirthday: string;
    dob: number;
    companyEstablishmentDay: number;
    isAssigned: boolean;
    location: Location;
    customerNumber: string;
    customerContactGroups: {
        contact: ContactModel;
        customer: CustomerModel
    }[];
    customerCategories: string;
    gender: string;
    lastInvoiceDate: number;
    totalAmount: number;
}
