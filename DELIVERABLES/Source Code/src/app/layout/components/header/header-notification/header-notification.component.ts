import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { NotificationItem, PagedResult } from '../../../../shared/models/index';
import { UserNotificationService } from '../../../../shared/services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-notification',
  templateUrl: './header-notification.component.html',
  styleUrls: ['./header-notification.component.scss']
})
export class HeaderNotificationComponent implements OnInit {
  notificationCount;
  notificationItems: NotificationItem[];
  pagedResult: PagedResult<NotificationItem>;
  constructor(
    private router: Router,
    private userNotificationService: UserNotificationService,
  ) { }

  ngOnInit() {
    this.userNotificationService.getNotifiSubject().subscribe(data => this.updateNotifi());
    this.updateNotifi();
  }

  updateNotifi() {
    this.userNotificationService.count().subscribe(x => {
      this.notificationCount = x;
    });
    this.userNotificationService.list(0, 5)
    .subscribe(pagedResult => {
      this.notificationItems = pagedResult.items;
    });
  }

  read(item: NotificationItem) {
    this.userNotificationService
      .read(item.id)
      .subscribe(result => {
        this.userNotificationService.count().subscribe(x => {
          this.notificationCount = x;
        });
        this.userNotificationService.list(0, 5)
        .subscribe(pagedResult => this.notificationItems = pagedResult.items);
        this.gotoDetailPage(item);
      });
  }


  gotoDetailPage(item: NotificationItem) {
    const moduleUrl = item.moduleName === 'Event'
      ? 'activity/event'
      : item.moduleName === 'Work'
        ? 'activity/task'
        : item.moduleName.toLowerCase();

    const detailUrl = `${moduleUrl}/detail`;

    this.router.navigate([detailUrl, item.moduleItemId]);
  }

}
