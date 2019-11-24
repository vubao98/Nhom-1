import { Component, OnInit, group } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivityService, UserNotificationService, SessionService } from '../../shared/services/index';
import { DictionaryItem, TimelineOfDay, ProspectFilter } from '../../shared/models/index';
import { ActivityListItem } from '../../shared/models/activity/activity-list-item.model';
import * as Rx from 'rxjs/Rx';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs/Rx';
import { ProspectModule } from '../prospect/prospect.module';
import { CustomerFilter } from '../../shared/models/customer/customer-filter.model';
import { ContactFilter } from '../../shared/models/contact/contact-filter.model';
import { OpportunityFilter } from '../../shared/models/opportunity/opportunity-filter.model';
import { CampaignFilter } from '../../shared/models/campaign/campaign-filter.model';
import { ActivityFilter } from '../../shared/models/activity/activity-filter.model';
import { CustomerModule } from '../customer/customer.module';
import { ContactModule } from '../contact/contact.module';
import { OpportunityModule } from '../opportunity/opportunity.module';
import { CampaignModule } from '../campaign/campaign.module';
import { ActivityModule } from '../activity/activity.module';
import { USER_GROUP_ROLE } from '../../shared/configs/common.config';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    eventTimeline: TimelineOfDay[];
    taskTimeline: TimelineOfDay[];
    customerBirthdayCount: number;

    listPermission: any[];
    userGroupRole = USER_GROUP_ROLE;

    get groupRole(): string {
        if (this.sessionService.currentSession) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }

    get isHomeViewTask(): boolean {
        // xem su kien
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeViewTask').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isHomeViewEvent(): boolean {
        // xem cong viec
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeViewEvent').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsProspect(): boolean {
        // xem tiem nang
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'StatisticsProspect').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsCustomer(): boolean {
        // xem khach hang
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeCustomer').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsContact(): boolean {
        // xem lien he
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeContact').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsCampaign(): boolean {
        // xem chien dich
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeCampaign').length > 0 ? true : false;
        } else {
            return false;
        }
    }
    get isStatisticsOpportunity(): boolean {
        // xem co hoi
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeOpportunity').length > 0 ? true : false;
        } else {
            return false;
        }
    }

    constructor(
        private activityService: ActivityService,
        private userNotificationService: UserNotificationService,
        private sessionService: SessionService
    ) { }

    ngOnInit() {
        ProspectModule.searchTerm = '';
        ProspectModule.filterModel = new ProspectFilter();

        CustomerModule.searchTerm = '';
        CustomerModule.filterModel = new CustomerFilter();

        ContactModule.searchTerm = '';
        ContactModule.filterModel = new ContactFilter();

        OpportunityModule.searchTerm = '';
        OpportunityModule.filterModel = new OpportunityFilter()

        CampaignModule.searchTerm = '';
        CampaignModule.filterModel = new CampaignFilter();

        ActivityModule.searchTerm = '';
        ActivityModule.filterModel = new ActivityFilter();

        this.userNotificationService.count().subscribe(data => {
            this.customerBirthdayCount = data.customerBirthdayCount;
        });
        this.activityService
            .getDashboardItems('Event', 0, 5)
            .subscribe(result => {
                this.eventTimeline = this.createTimeline(result);
            });

        this.activityService
            .getDashboardItems('Work', 0, 5)
            .subscribe(result => {
                this.taskTimeline = this.createTimeline(result);
            });
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
    }

    createTimeline(activities: ActivityListItem[]): TimelineOfDay[] {
        if (!activities || !activities.length) {
            return [];
        }

        const groups = activities.reduce(function (accumulator, item) {
            const timelineDate = moment(item.startDate).format('DD/MM/YYYY');
            accumulator[timelineDate] = accumulator[timelineDate] || [];
            accumulator[timelineDate].push(item);
            return accumulator;
        }, {});

        return Object
            .keys(groups)
            .map(function (key) {
                return {
                    timelineDate: key,
                    items: groups[key]
                };
            })
            .sort(function (a, b) {
                return (a.items[0].startDate) - (b.items[0].startDate);
            });
    }

}
