import { Location } from '../models/location';

export default class Utils {
    static capitalizeFirstLetter(text) {
        return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
    }

    static parseAssignTo(assignToFormValue) {
        if (!assignToFormValue) {
            return null;
        }
        return {
            assignToType: assignToFormValue.split('_')[0],
            assignToId: assignToFormValue.split('_')[1],
        };
    }

    static isNullOrEmpty(data: string): boolean {
        if (data.trim()) {
            return true;
        } else {
            return false;
        }
    }

    static getLocation(data: Location, type: string): string {
        if (data.type === type) {
            return data.name;
        } else {
            if (data.parent) {
                return this.getLocation(data.parent, type);
            } else {
                return '';
            }
        }
    }

    static getLocationId(data: Location, type: string): number {
        if (data.type === type) {
            return data.id;
        } else {
            if (data.parent) {
                return this.getLocationId(data.parent, type);
            } else {
                return 0;
            }
        }
    }
}
