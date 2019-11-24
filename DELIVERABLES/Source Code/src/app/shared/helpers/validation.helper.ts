import { FormGroup } from '@angular/forms';


export default class ValidationHelper {
    private static validationMessages = {
        required: 'Trường này là bắt buộc nhập',
        email: 'Email không đúng định dạng',
        website: 'Website không đúng định dạng',
        probability: 'Giá trị phải nằm trong khoảng từ 0-100',
        phoneNumber: 'Số điện thoại phải có từ 10 đến 20 chữ số',
        faxNumber: 'Fax phải có từ 10 đến 20 chữ số',
        password: 'Mật khẩu phải có ít nhất 6 kí tự',
        taxNumber: 'Mã số thuế phải có từ 10 đến 13 chữ số',
        maxlength: 'Truờng này phải nhỏ hơn '
    };

    static getInvalidMessages(
        form: FormGroup,
        formErrors: object): string[] {
        if (!form) { return; }
        const errorMessages = [];
        for (const field in formErrors) {
            formErrors[field] = '';
            const control = form.get(field);
            if (control && !control.valid) {
                // const messages = validationMessages[field];
                // tslint:disable-next-line:forin
                for (const key in control.errors) {
                    if (key === 'maxlength') {
                        formErrors[field] += this.validationMessages[key] + control.errors[key].requiredLength + ' ký tự';
                    } else {
                        formErrors[field] += this.validationMessages[key] + '';
                    }
                }
            }
        }

        for (let key in formErrors) {
            if (formErrors.hasOwnProperty(key) && formErrors[key].length > 0) {
                errorMessages.push(formErrors[key]);
            }
        }

        return errorMessages;
    }

    static validateForm(form: FormGroup,
        formErrors: object): boolean {
        return true;
    }
}
