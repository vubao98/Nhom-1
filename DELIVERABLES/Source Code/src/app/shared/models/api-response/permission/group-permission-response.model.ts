import { PermissionResponse } from './permission-response.model';

export class GroupPermissionResponse {
    id: number;
    name: string;
    funtions: PermissionResponse[];
}
