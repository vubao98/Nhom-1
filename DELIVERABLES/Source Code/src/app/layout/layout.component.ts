import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import * as moment from "moment";
import { AlertService } from "../shared/services/index";
import { TranslateService } from "@ngx-translate/core";
import { delay } from "rxjs/operator/delay";

@Component({
    selector: "app-layout",
    templateUrl: "./layout.component.html",
    styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
    constructor(
        private router: Router,
        private alertService: AlertService,
        private translateService: TranslateService
    ) {
        this.clientHeight = window.innerHeight - 90;
    }
    sdt;
    status;
    listSdt;
    clientHeight: number;
    ngOnInit() {
        // disable datatable error alerts
        $.fn.dataTable.ext.errMode = "none";

        if (this.router.url === "/" || this.router.url === "/#/") {
            this.router.navigate(["/dashboard"]);
        }
        IntervalObservable.create(1 * 60 * 1000).subscribe(_ => {
            if (window.localStorage["listsNotification"]) {
                const list = JSON.parse(
                    window.localStorage["listsNotification"]
                );
                const that = this;
                list.forEach(element => {
                    if (
                        +element.startDate - moment().valueOf() <=
                        5 * 60 * 1000 &&
                        +element.startDate - moment().valueOf() > 0
                    ) {
                        const mess = `Bạn có một ${this.translateService.instant(
                            element.moduleName || "null"
                        )}
                         ${this.translateService.instant(
                                element.moduleItemName || "null"
                            )} sẽ diễn ra trong
                         ${moment(+element.startDate).fromNow()}!`;
                        that.alertService.success(mess);
                    }
                });
            }
        });
    }

    receive(sdt) {
        this.sdt = sdt;
    }
    receive2(status) {
        this.status = status;
    }
    receiveListPhone(list) {
        this.listSdt = list;
    }
}
