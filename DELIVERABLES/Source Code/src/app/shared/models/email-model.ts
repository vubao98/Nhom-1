import { EmailRecipientModel } from './email-recipient-model';

export class EmailModel {
    title: string;
    sender: string;
    senderId: number;
    content: string;
    subject: string;
    from: string;
    recipients: EmailRecipientModel[];
}
