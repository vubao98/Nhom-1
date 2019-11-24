import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';

const PHONE_NUMBER_MIN_LENGTH = 10;
const PHONE_NUMBER_MAX_LENGTH = 20;
const FAX_NUMBER_MIN_LENGTH = 10;
const FAX_NUMBER_MAX_LENGTH = 20;
const PASSWORD_MIN_LENGTH = 6;
const TAX_NUMBER_MIN_LENGTH = 10;
const TAX_NUMBER_MAX_LENGTH = 13;

export default class CustomValidator {

    static emailOrEmpty(control: AbstractControl): ValidationErrors | null {
        return (control.value === '' || control.value === null) ? null : Validators.email(control);
    }

    static required(control: AbstractControl): ValidationErrors | null {
        return (control.value === '' || control.value === null || control.value.trim() === '')
            ? {
                required: {
                    valid: false
                }
            }
            : null;
    }


    static website(control: AbstractControl): ValidationErrors | null {
        const WEBSITE_REGEX = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        return (WEBSITE_REGEX.test(control.value) || (control.value === '' || control.value === null)) ? null : {
            website: {
                valid: false
            }
        };
    }

    static probability(control: AbstractControl): ValidationErrors | null {
        return ((control.value === '' || control.value === null) || (control.value >= 0 && control.value <= 100)) ? null : {
            probability: {
                valid: false
            }
        };
    }

    static phoneNumber(control: AbstractControl): ValidationErrors | null {
        return (CustomValidator.isNullOrEmpty(control.value)
            || (control.value.length >= PHONE_NUMBER_MIN_LENGTH) && (control.value.length <= PHONE_NUMBER_MAX_LENGTH))
            ? null
            : {
                phoneNumber: {
                    valid: false
                }
            };
    }

    static faxNumber(control: AbstractControl): ValidationErrors | null {
        return (CustomValidator.isNullOrEmpty(control.value)
            || (control.value.length >= FAX_NUMBER_MIN_LENGTH) && (control.value.length <= FAX_NUMBER_MAX_LENGTH))
            ? null
            : {
                faxNumber: {
                    valid: false
                }
            };
    }

    static taxNumber(control: AbstractControl): ValidationErrors | null {
        return (CustomValidator.isNullOrEmpty(control.value)
            || ((control.value.length >= TAX_NUMBER_MIN_LENGTH) && (control.value.length <= TAX_NUMBER_MAX_LENGTH)))
            ? null
            : {
                taxNumber: {
                    valid: false
                }
            };
    }

    static password(control: AbstractControl): ValidationErrors | null {
        return (CustomValidator.isNullOrEmpty(control.value)
            || (control.value.length >= PASSWORD_MIN_LENGTH))
            ? null
            : {
                password: {
                    valid: false
                }
            };
    }

    private static isNullOrEmpty(value) {
        return value === undefined || value === null || value === '';
    }

    static requiredArray(control: AbstractControl): ValidationErrors | null {
        return (control.value != null && control.value.length === 0)
            ? {
                required: {
                    valid: false
                }
            }
            : null;
    }

}
