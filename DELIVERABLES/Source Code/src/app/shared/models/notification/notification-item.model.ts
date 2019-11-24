export interface NotificationItem {
    id: number;
    moduleName: string;
    moduleItemId: number;
    moduleItemName: string;
    startDate: number;
    endDate: number;
    unread: boolean;
    isLeaderNotification: boolean;
    employee: any;
    createdDate: number;
    employeeGroup: {
        id: number;
        name: string;
    };
}
