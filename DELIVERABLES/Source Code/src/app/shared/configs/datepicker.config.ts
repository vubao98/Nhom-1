import * as moment from 'moment';

export const DATETIME_PICKER_CONFIG = {
    calendarType: 'calendar',
    currentDate: new Date(),
    placeHolder: 'dd/mm/yyyy HH:mm',
    datePlaceHolder : 'dd/mm/yyyy',
    dateFormat: 'DD/MM/YYYY',
    datetimeFormat: 'DD/MM/YYYY HH:mm',
    readonlyInput: false,
    vi: {
        firstDayOfWeek: 0,
        dayNames: [
            'Chủ nhật',
            'Thứ 2',
            'Thứ 3',
            'Thứ 4',
            'Thứ 5',
            'Thứ 6',
            'Thứ 7'],
        dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        monthNames: [
            'Tháng 1',
            'Tháng 2',
            'Tháng 3',
            'Tháng 4',
            'Tháng 5',
            'Tháng 6',
            'Tháng 7',
            'Tháng 8',
            'Tháng 9',
            'Tháng 10',
            'Tháng 11',
            'Tháng 12'],
        monthNamesShort: [
            'Th 1',
            'Th 2',
            'Th 3',
            'Th 4',
            'Th 5',
            'Th 6',
            'Th 7',
            'Th 8',
            'Th 9',
            'Th 10',
            'Th 11',
            'Th 12']
    }
}

