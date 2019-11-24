import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ConfirmationPopupComponent } from '../components/confirmation-popup/confirmation-popup.component';
import { ConfirmationPopupCallAwayComponent } from '../components/confirmation-popup-call-away/confirmation-popup-call-away.component';
import { ConfirmationRoutingPopupComponent } from '../components/confirmation-routing-popup/confirmation-routing-popup.component';

@Injectable()
export class ConfirmationService {
    constructor(private modalService: NgbModal) {}

    confirm(message: string, siFn: () => void, textOk?: string) {
        // this.setConfirmation(message, siFn, noFn);
        this.openConfirmationPopup({
            type: 'confirm',
            text: message,
            siFn: function() {
                siFn();
            }
        }, textOk);
    }
    confirmRouting(message: string, siFn: () => void, isCancel: () => void, textOk?: string) {
        // this.setConfirmation(message, siFn, noFn);
        this.openConfirmationRoutingPopup({
            type: 'confirm',
            text: message,
            siFn: function() {
                siFn();
            },
            isCancel: function(){
                isCancel();
            }
        }, textOk);
    }

    confirmCallAway(message: string, siFn: () => void) {
        // this.setConfirmation(message, siFn, noFn);
        this.openConfirmationPopupCallAway({
            type: 'confirm',
            text: message,
            siFn: function() {
                siFn();
            }
        });
    }

    openConfirmationRoutingPopup(message, textOk?: string) {
        const modalRef = this.modalService.open(ConfirmationRoutingPopupComponent);
        modalRef.componentInstance.message = message;
        if (textOk) {
            modalRef.componentInstance.textOkDefault = textOk;
        }
    }

    openConfirmationPopup(message, textOk?: string) {
        const modalRef = this.modalService.open(ConfirmationPopupComponent);
        modalRef.componentInstance.message = message;
        if (textOk) {
            modalRef.componentInstance.textOkDefault = textOk;
        }
    }

    openConfirmationPopupCallAway(message) {
        const modalRef = this.modalService.open(
            ConfirmationPopupCallAwayComponent
        );
        modalRef.componentInstance.message = message;
    }
}
