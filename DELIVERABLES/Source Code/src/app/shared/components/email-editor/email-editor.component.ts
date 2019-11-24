import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormGroup, FormBuilder } from '../../../../../node_modules/@angular/forms';
import { EmailModel } from '../../models/email-model';
import { SessionService, AlertService } from '../../services';
import { EmailRecipientModel } from '../../models/email-recipient-model';
import { DialogService, DialogRef } from '../../../../../node_modules/@progress/kendo-angular-dialog';
import { NgxSpinnerService } from '../../../../../node_modules/ngx-spinner';
import { groupBy, GroupResult, /* etc...*/ } from '@progress/kendo-data-query';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.scss'],
  // providers: [DialogRef]
})
export class EmailEditorComponent implements OnInit {

  @Input() emailList: any[];
  emailToList;
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log = '';
  @ViewChild('myckeditor') ckeditor: any;
  emailModel: EmailModel = new EmailModel();
  constructor(
    private emailService: EmailService,
    private sessionService: SessionService,
    private diaRef: DialogRef,
    private spinner: NgxSpinnerService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    const result = groupBy(this.emailList, [{field: 'email'}]) as GroupResult[];
    this.emailList = [];
    this.emailList = result.map(i => i.items[0]);
    this.emailToList = this.emailList.map(i => i.email);
    this.emailModel.sender = this.sessionService.currentUser.userName;
    this.emailModel.senderId = this.sessionService.currentUser.userId;
    this.emailModel.from = this.sessionService.currentUser.email;
    this.ckeConfig = {
      // allowedContent: false,
      // forcePasteAsPlainText: true
    };
  }

  onChange($event: any): void {
  }

  sendClick() {
    this.spinner.show();
    // this.diaRef.close();
    this.emailModel.recipients = this.emailList;
    this.emailModel.subject = this.emailModel.title;
    this.emailService.sendEmail(this.emailModel).subscribe(data => {
      this.spinner.hide();
      this.diaRef.close();
      this.alertService.success('Gửi email thành công');
    }, err => {
      this.spinner.hide();
      this.diaRef.close();
      this.alertService.error('Đã có lỗi xảy ra, vui lòng thử lại!');
    });
  }

}
