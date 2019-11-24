﻿import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
    moduleId: module.id,
    selector: 'app-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss'],
})

export class AlertComponent implements OnInit {
    message: any;
    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
            this.message = message;
            // setTimeout(function () {
            //     this.message = '';
            // }.bind(this), 10000);
            setTimeout(() => {
                this.message = '';
            }, 10000);
        });
    }
    close() {
        this.message = '';
    }
}