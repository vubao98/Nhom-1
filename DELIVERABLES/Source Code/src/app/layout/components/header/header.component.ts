import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService, SessionService, UserNotificationService, CustomerService } from '../../../shared/services/index';
import { Observable } from "rxjs/Observable";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { UserModel } from '../../../shared/models/user/user.model';
import { NotificationItem } from '../../../shared/models/index';
import { toggleSearch, toggleSearchContainer } from '../../../search.animations';
import { HomeSearchModel } from '../../../shared/models/home-search-model';
import { USER_GROUP_ROLE } from '../../../shared/configs/common.config';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    animations: [toggleSearch(), toggleSearchContainer()]
})
export class HeaderComponent implements OnInit {

    pushRightClass = 'push-right';
    toggleSearch = false;
    searchStr = '';
    searchResult: HomeSearchModel[];
    placeHolderSearchText: string;

    listPermission: any[];
    userGroupRole = USER_GROUP_ROLE;

    get groupRole(): string {
        if (this.sessionService.currentSession) {
        return this.sessionService.currentSession.role + '';
        } else {
        return '';
        }
    }

    get isPmsViewCustomerInfo(): boolean {
        // xem thông tin khách hàng
        if (this.listPermission && this.listPermission.length > 0) {
        return this.listPermission.filter(i => i.functionWeb.no === 'CustomerViewCustomerInformation').length > 0 ? true : false;
        } else {
        return false;
        }
    }

    get isProspectViewProspectInfo(): boolean {
        // xem thông tin tiềm năng
        if (this.listPermission && this.listPermission.length > 0) {
            return this.listPermission.filter(i => i.functionWeb.no === 'ProspectViewProspectInformation').length > 0 ? true : false;
        } else {
            return false;
        }
    }

    constructor(
        private translate: TranslateService,
        private customerService: CustomerService,
        private router: Router,
        private sessionService: SessionService) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.listPermission = this.sessionService.getSession().userGroupFunctions;
        this.placeHolderSearchText = `Tìm kiếm ${this.isProspectViewProspectInfo || this.groupRole === this.userGroupRole.SuperAdmin || this.groupRole === this.userGroupRole.Admin ? 'tiềm năng' : ''}, ${this.isPmsViewCustomerInfo || this.groupRole === this.userGroupRole.SuperAdmin || this.groupRole === this.userGroupRole.Admin ? 'khách hàng' : ''} theo tên, điện thoại, email ...`;
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }



    changeLang(language: string) {
        this.translate.use(language);
    }

    search(searchStr: string) {
        this.customerService.searchProspectOrCustomer(searchStr).subscribe(data => this.searchResult = data);
    }

    selectSearch(data: HomeSearchModel) {
        this.closeSearchBar();
        if (data.type.toLowerCase() === 'customer') {
            this.router.navigate([`/customer/detail/${data.id}/spec`]);
        } else if (data.type.toLowerCase() === 'prospect') {
            this.router.navigate([`/prospect/detail/${data.id}/activity`]);
        }
    }

    closeSearchBar() {
        this.toggleSearch = false;
        this.searchStr = '';
    }

    openSearchBar() {
        this.toggleSearch = true;
        const ip = document.getElementById('search-bar-ip') as HTMLInputElement;
        setTimeout(() => {
            ip.focus();
        }, 150);
    }
}
