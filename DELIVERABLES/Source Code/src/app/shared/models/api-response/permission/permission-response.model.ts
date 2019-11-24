import { FunctionWeb } from "./function-web.model";

export class PermissionResponse {
    id: number;
    type: boolean;
    category: string;
    branchId: number;
    functionWeb: FunctionWeb;
}
