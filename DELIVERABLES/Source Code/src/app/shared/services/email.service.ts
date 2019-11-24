import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { EmailModel } from '../models/email-model';
import { SessionService } from './session.service';

@Injectable()
export class EmailService {

  constructor(
    private apiService: ApiService,
    private sessionService: SessionService
  ) { }

  sendEmail(data: EmailModel) {
    const url = `employee/${this.sessionService.currentUser.employeeId}/email`;
    // tslint:disable-next-line:no-shadowed-variable
    return this.apiService.post(url, data).map(data => data.result);
  }

}
