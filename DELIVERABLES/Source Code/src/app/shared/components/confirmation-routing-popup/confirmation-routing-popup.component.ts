import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-routing-popup',
  templateUrl: './confirmation-routing-popup.component.html',
  styleUrls: ['./confirmation-routing-popup.component.scss']
})
export class ConfirmationRoutingPopupComponent implements OnInit {
  @Input() message: any;
  // @Input() textOkDefault = 'Đồng ý';
  // textOkDefault = 'Đồng ý';


  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }
}
