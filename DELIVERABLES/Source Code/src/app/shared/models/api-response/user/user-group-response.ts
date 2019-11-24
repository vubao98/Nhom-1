import { CheckboxSelection } from '../../checkbox-selected.model';

export class UserGroupResponse extends CheckboxSelection {
    id: number;
    name: string;
    description: string;
    employees: any;
    userGroupMembers: any[];
    canBeModify: boolean;
    branch = {id: 1};
    role: string;
    // isManager = false;
}
