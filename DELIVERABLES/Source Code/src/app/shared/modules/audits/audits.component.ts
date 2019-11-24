import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuditItem, PagedResult } from '../../models/index';
import { AuditService, SessionService } from '../../services/index';
import { Router } from '@angular/router';
import { USER_GROUP_ROLE } from '../../configs/common.config';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {
  @Input() moduleName: string;
  @Input() moduleItemId: number;
  @Input() viewAudit: boolean;
  audits$: Observable<PagedResult<AuditItem[]>>;
  audits: AuditItem[];
  pagedResult: PagedResult<AuditItem>;

  userGroupRole = USER_GROUP_ROLE;

  get groupRole(): string {
    if (this.sessionService.currentSession) {
      return this.sessionService.currentSession.role + '';
    } else {
      return '';
    }
  }

  constructor(
    private auditService: AuditService,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.auditService.getAuditsByModuleItemId(this.moduleName, this.moduleItemId, 0, 3)
      .subscribe(pagedResult => {
        this.pagedResult = pagedResult;
        this.audits = pagedResult.items;
      });
  }

  // onLoadMore() {
  //   this.auditService.getAuditsByModuleItemId(this.moduleName, this.moduleItemId,
  //      +this.pagedResult.currentPage + 1 , +this.pagedResult.pageSize)
  //     .subscribe(pagedResult => {
  //       this.pagedResult = pagedResult;
  //       this.audits = this.audits.concat(pagedResult.items);
  //     });
  // }

  // onViewModeClick() {
  //   switch (this.viewMode) {
  //     case 'partial':
  //       this.router.navigate([`/${this.moduleName}/detail/${this.moduleItemId}/audit`]);
  //       break;
  //     case 'partialEvent':
  //       this.router.navigate([`/${this.moduleName}/event/detail/${this.moduleItemId}/audit`]);
  //       break;
  //     case 'partialTask':
  //       this.router.navigate([`/${this.moduleName}/task/detail/${this.moduleItemId}/audit`]);
  //       break;
  //     case 'all':
  //   }
  // }
}
