import { CheckboxSelection } from '../../checkbox-selected.model';

export class UserGroupPermission extends CheckboxSelection {
    id: number;
    name: string;
    no: string;
    type: boolean;
    functions: UserGroupPermission[];
    category: string;
    canBeModify : boolean;
}
