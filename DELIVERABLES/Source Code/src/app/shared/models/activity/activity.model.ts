export class ActivityModel {
    id: number;
    name: string;
    status: string;
    startDate: number;
    endDate: number;
    address: string;
    eventType: string;
    specificRelated: {
        id: number,
        name: string,
    };
    activityType: string;
    relatedToType: string;
    description: string;
    assignTo: {
        id: string,
        name: string,
    };
    assignToGroup: {
        id: string,
        name: string,
    };
    createdDate: number;
    updatedDate: number;
    branch: {
        id: string,
        name: string
    };
    isShare: boolean;
}
