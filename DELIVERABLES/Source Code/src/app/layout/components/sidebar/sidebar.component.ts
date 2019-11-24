import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuditItem, PagedResult } from '../../../shared/models/index';
import { AuditService, SessionService, UserService } from '../../../shared/services/index';
import { UserModel } from '../../../shared/models/user/user.model';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { CallCenterService } from '../../../shared/services/call-center.service';
import { CallCenterHistoryService } from '../../../shared/services/call-center-history.service';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    @Output() emitPhoneCall: EventEmitter<string> = new EventEmitter<string>();
    @Output() emitPhoneStatus: EventEmitter<string> = new EventEmitter<string>();
    @Output() listPhoneCall: EventEmitter<any> = new EventEmitter<any>();

    public audits$: Observable<AuditItem[]>;
    public audits: any[];
    public pagedResult: PagedResult<AuditItem>;
    public isCollapsedCall = false;
    public isCollapsedCallAway = true;
    public isCollapsedAudit = false;

    abc = 'aaaa';
    isActive = false;
    showMenu = '';
    dem = 0;
    avatarSrc: string;
    listCurrentNumber = [];
    listPhoneNumber = [];
    listPhoneNumberHistory = [];
    listPhoneNumberHistoryAway = [];

    userInfo: UserModel;
    listPermission: any[];
    userGroupRole = USER_GROUP_ROLE;

    get groupRole(): string {
        if (this.sessionService.currentSession) {
            return this.sessionService.currentSession.role + '';
        } else {
            return '';
        }
    }

    get isHomeViewAudit(): boolean {
        // create cơ hội
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'HomeViewAudit').length > 0 ? true : false;
        } else {
            return false;
        }
    }

    constructor(
        private auditService: AuditService,
        private sessionService: SessionService,
        private userService: UserService,
        private callCenter: CallCenterService,
        private callCenterHistory: CallCenterHistoryService
    ) { }

    ngOnInit(): void {
        this.auditService.getAudits(0, 5)
            .subscribe(pagedResult => {
                this.pagedResult = pagedResult;
                this.audits = pagedResult.items;
                this.audits.forEach((element) => {
                    this.userService.getAvatarByUserId(element.id)
                        .subscribe(result => {
                            element.avatar = result.avatar ? `data:image/jpeg;base64,${result.avatar}` : null;
                        });
                });
            });
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        // IntervalObservable.create(3000).subscribe(() => {
        //     this.getListPhoneNumberIsCall();
        //     this.getListPhoneCallAway();
        // });

    }
    getListPhoneNumberIsCall() {
        this.callCenter.getCallNumbers().subscribe(result => {
            for (let i = 0; i < result.length; i++) {
                for (let j = i + 1; j < result.length; j++) {
                    if (result[i].callernumber === result[j].callernumber) {
                        result.splice(i, 1);
                    }
                }
            }
            const top = (window.innerHeight / 2) - 50;
            let right = 200;
            this.listPhoneNumber = result;
            // this.listPhoneNumber = [
            //     {'callernumber': 935439807, 'callStatus': 'Start'},
            //     {'callernumber': 986966295, 'callStatus': 'Start'},
            //     {'callernumber': 935439807, 'callStatus': 'Start'}
            // ];
            this.listPhoneNumber.forEach(e => {
                e.top = top;
                e.right = right;
                right = right + 150;
            });
            if (this.listCurrentNumber.length === 0) {
                this.copyAndEmitListPhone();
            } else if (this.listCurrentNumber.length !== this.listPhoneNumber.length) {
                this.copyAndEmitListPhone();
            } else {
                this.compareTwoList();
            }
            // this.listPhoneCall.emit(this.listPhoneNumber);

            this.callCenter.getCallNumbersHistory().subscribe(res => {
                let list = [];
                list = res;
                if (list.length) {
                    this.listPhoneNumber.forEach(e => {
                        list.unshift(e);
                    });
                }
                this.listPhoneNumberHistory = list.slice(0, 5);
                this.listPhoneNumberHistory.forEach(e => {
                    if (e.callStatus === 'DialAnswer') {
                        e.title = 'Đang trả lời';
                    }
                    if (e.callStatus === 'Start') {
                        e.title = 'Đang gọi';
                    }
                    if (e.callStatus !== 'DialAnswer' && e.callStatus !== 'Start') {
                        e.title = 'Đã gọi';
                    }
                });
                if (list && list.length && this.dem === 0) {
                    this.isCollapsedAudit = true;
                    this.isCollapsedCall = false;
                    this.dem++;
                }
                if (!list && !list.length) {
                    this.dem = 0;
                }
            });
        });
    }
    getListPhoneCallAway() {
        this.callCenter.getCallNumbersAway().subscribe(result => {
            this.listPhoneNumberHistoryAway = result;
            this.listPhoneNumberHistoryAway.forEach(e => {
                if (e.callStatus === 'DialAnswer') {
                    e.title = 'Đang trả lời';
                }
                if (e.callStatus === 'Start') {
                    e.title = 'Đang gọi';
                }
                if (e.callStatus !== 'DialAnswer' && e.callStatus !== 'Start') {
                    e.title = 'Đã gọi';
                }
            });
        });
    }
    sendCallNumber(sdt, status, time) {
        this.emitPhoneCall.emit(sdt);
        this.emitPhoneStatus.emit(status);
        this.callCenterHistory.sendCallHistory(sdt, status, time);
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    toggleCol1() {
        this.isCollapsedCall = !this.isCollapsedCall;
        if (this.isCollapsedCall === true) {
            this.isCollapsedAudit = false;
            this.isCollapsedCallAway = true;
        } else {
            this.isCollapsedAudit = true;
            this.isCollapsedCallAway = true;
        }
    }
    toggleCol2() {
        this.isCollapsedCallAway = !this.isCollapsedCallAway;
        if (this.isCollapsedCallAway === true) {
            this.isCollapsedAudit = true;
            this.isCollapsedCall = false;
        } else {
            this.isCollapsedAudit = true;
            this.isCollapsedCall = true;
        }
    }
    toggleCol3() {
        this.isCollapsedAudit = !this.isCollapsedAudit;
        if (this.isCollapsedAudit === true) {
            this.isCollapsedCall = false;
            this.isCollapsedCallAway = true;
        } else {
            this.isCollapsedCall = true;
            this.isCollapsedCallAway = true;
        }
    }

    compareTwoList() {
        const equal = this.listPhoneNumber.every(i => this.listCurrentNumber.find(e => e.callernumber === i.callernumber));
        if (!equal) {
            this.copyAndEmitListPhone();
        }
    }

    copyAndEmitListPhone() {
        this.listCurrentNumber = Object.assign([], this.listPhoneNumber);
        this.listPhoneCall.emit(this.listPhoneNumber);
    }
}
