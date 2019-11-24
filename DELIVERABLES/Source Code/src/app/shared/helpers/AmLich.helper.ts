export default class AmLichHelper {

    public static PI = Math.PI;
    public static selestialStems = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
    public static terrestrialBranches = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mảo', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];
    public static INT(d: number) {
        return Math.floor(d);
    }

    public static jdFromDate(dd, mm, yy) {
        let a, y, m, jdn;
        a = AmLichHelper.INT((14 - mm) / 12);
        y = (yy + 4800 - a);
        m = (mm + 12 * a - 3);
        jdn = dd + AmLichHelper.INT((153 * m + 2) / 5) + 365 * y
            + AmLichHelper.INT(y / 4)
            - AmLichHelper.INT(y / 100)
            + AmLichHelper.INT(y / 400)
            - 32045;
        if (jdn < 2299161) {

        }
        return jdn;
    }

    public static jdToDate(jd) {
        let a, b, c, d, e, m, day, month, year;
        if (jd > 2299160) {
            a = jd + 32044;
            b = AmLichHelper.INT((4 * a + 3) / 146097);
            c = a - AmLichHelper.INT((b * 146097) / 4);
        } else {
            b = 0;
            c = jd + 32082;
        }
        d = AmLichHelper.INT((4 * c + 3) / 1461);
        e = c - AmLichHelper.INT((1461 * d) / 4);
        m = AmLichHelper.INT((5 * e + 2) / 153);
        day = e - AmLichHelper.INT((153 * m + 2) / 5) + 1;
        month = m + 3 - 12 * AmLichHelper.INT(m / 10);
        year = b * 100 + d - 4800 + AmLichHelper.INT(m / 10);
        return new Date(+year, +month, +day);
    }

    public static NewMoon(k, timeZone) {
        let T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
        T = k / 1236.85; // Time in Julian centuries from 1900 January 0.5
        T2 = T * T;
        T3 = T2 * T;
        dr = Math.PI / 180;
        Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
        Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr); // Mean new moon
        M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3; // Sun's mean anomaly
        Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3; // Moon's mean anomaly
        F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3; // Moon's argument of latitude
        C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
        C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
        C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
        C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
        C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
        C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
        C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
        if (T < -11) {
            deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
        } else {
            deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
        }
        JdNew = Jd1 + C1 - deltat;
        return AmLichHelper.INT(JdNew + 0.5 + timeZone / 24);
    }

    public static getSunLongitude(jdn, timeZone) {
        let T, T2, dr, M, L0, DL, L;
        T = (jdn - 2451545.5 - timeZone / 24) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
        T2 = T * T;
        dr = Math.PI / 180; // degree to radian
        M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
        L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
        DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
        DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
        L = L0 + DL; // true longitude, degree
        L = L * dr;
        L = L - Math.PI * 2 * (AmLichHelper.INT(L / (Math.PI * 2))); // Normalize to (0, 2*PI)
        return AmLichHelper.INT(L / Math.PI * 6);
    }

    public static getNewMoonDay(k, timeZone) {
        return AmLichHelper.INT(AmLichHelper.NewMoon(k, timeZone));
    }

    /* Find the day that starts the luner month 11 of the given year for the given time zone */
    public static getLunarMonth11(yy, timeZone) {
        let k, off, nm, sunLong;
        off = AmLichHelper.jdFromDate(31, 12, yy) - 2415021;
        k = AmLichHelper.INT(off / 29.530588853);
        nm = AmLichHelper.getNewMoonDay(k, timeZone);
        sunLong = AmLichHelper.getSunLongitude(nm, timeZone); // sun longitude at local midnight
        if (sunLong >= 9) {
            nm = AmLichHelper.getNewMoonDay(k - 1, timeZone);
        }
        return nm;
    }

    /* Find the index of the leap month after the month starting on the day a11. */
    public static getLeapMonthOffset(a11, timeZone) {
        let k, last, arc, i;
        k = AmLichHelper.INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
        last = 0;
        i = 1; // We start with the month following lunar month 11
        arc = AmLichHelper.getSunLongitude(AmLichHelper.getNewMoonDay(k + i, timeZone), timeZone);
        do {
            last = arc;
            i++;
            arc = AmLichHelper.getSunLongitude(AmLichHelper.getNewMoonDay(k + i, timeZone), timeZone);
        } while (arc != last && i < 14);
        return i - 1;
    }


    public static SolarToLunar(date, timeZone) {
        let k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, diff, leapMonthDiff;
        let lunarLeap;
        dayNumber = AmLichHelper.jdFromDate(date.Day, date.Month, date.Year);
        k = AmLichHelper.INT((dayNumber - 2415021.076998695) / 29.530588853);
        monthStart = AmLichHelper.getNewMoonDay(k + 1, timeZone);
        if (monthStart > dayNumber) {
            monthStart = AmLichHelper.getNewMoonDay(k, timeZone);
        }
        a11 = AmLichHelper.getLunarMonth11(date.Year, timeZone);
        b11 = a11;
        if (a11 >= monthStart) {
            lunarYear = date.Year;
            a11 = AmLichHelper.getLunarMonth11(date.Year - 1, timeZone);
        } else {
            lunarYear = date.Year + 1;
            b11 = AmLichHelper.getLunarMonth11(date.Year + 1, timeZone);
        }
        lunarDay = dayNumber - monthStart + 1;
        diff = AmLichHelper.INT((monthStart - a11) / 29);
        lunarLeap = false;
        lunarMonth = diff + 11;
        if (b11 - a11 > 365) {
            leapMonthDiff = AmLichHelper.getLeapMonthOffset(a11, timeZone);
            if (diff >= leapMonthDiff) {
                lunarMonth = diff + 10;
                if (diff == leapMonthDiff) {
                    lunarLeap = true;
                }
            }
        }
        if (lunarMonth > 12) {
            lunarMonth = lunarMonth - 12;
        }
        if (lunarMonth >= 11 && diff < 4) {
            lunarYear -= 1;
        }

        return {
            lunarDay: lunarDay,
            lunarMonth: lunarMonth,
            lunarYear: lunarYear,
            lunarLeap: lunarLeap
        };
    }

    /* Convert a lunar date to the corresponding solar date */

    public static LunarToSolar(ld, lunarLeap, timeZone) {
        let k, a11, b11, off, leapOff, leapMonth, monthStart;

        if (ld.Month < 11) {
            a11 = AmLichHelper.getLunarMonth11(ld.Year - 1, timeZone);
            b11 = AmLichHelper.getLunarMonth11(ld.Year, timeZone);
        } else {
            a11 = AmLichHelper.getLunarMonth11(ld.Year, timeZone);
            b11 = AmLichHelper.getLunarMonth11(ld.Year + 1, timeZone);
        }
        off = ld.Month - 11;
        if (off < 0) {
            off += 12;
        }
        if (b11 - a11 > 365) {
            leapOff = AmLichHelper.getLeapMonthOffset(a11, timeZone);
            leapMonth = leapOff - 2;
            if (leapMonth < 0) {
                leapMonth += 12;
            }
            if (lunarLeap && ld.Month != leapMonth) {
                return new Date('0001-01-01T00:00:00Z');
            } else if (lunarLeap || off >= leapOff) {
                off += 1;
            }
        }
        k = AmLichHelper.INT(0.5 + (a11 - 2415021.076998695) / 29.530588853);
        monthStart = AmLichHelper.getNewMoonDay(k + off, timeZone);
        return AmLichHelper.jdToDate(monthStart + ld.Day - 1);
    }


    public static ConvertToLunarYear(year) {
        const Can = AmLichHelper.selestialStems[year.toString().substring(3)];
        const x = year.toString().slice(0, 1);
        const y = year.toString().substring(2);
        const a = ((x % 3) * 4 + y) % 12;
        const Chi = AmLichHelper.terrestrialBranches[a];
        return Can + ' ' + Chi;
    }


}

class LunarDate {
    public Day: number;
    public Month: number;
    public Year: number;
    public IsLeapYear: boolean;

}
class SolarDate {
    public Day: number;
    public Month: number;
    public Year: number;
    public IsLeapYear: boolean;

    public ToString() {
        return this.Day.toString() + '/' + this.Month.toString() + '/' + this.Year.toString() + (this.IsLeapYear ? 'N' : '');
    }
}
class SolarDateExt {
    public static ToSolarDate3(d, lunarLeap, timeZone) {
        return AmLichHelper.LunarToSolar(d, lunarLeap, timeZone);
    }

    public static ToSolarDate2(d, lunarLeap) {
        return SolarDateExt.ToSolarDate3(d, lunarLeap, 7);
    }
    public static ToSolarDate(datetime, lunarLeap) {
        let date = datetime;
        const day = date.Remove(date.IndexOf('/'));
        date = date.Substring(date.IndexOf('/') + 1);
        const month = date.Remove(date.IndexOf('/'));
        date = date.Substring(date.IndexOf('/') + 1);
        const year = date;
        let _lunardate;
        _lunardate = new LunarDate();
        _lunardate.Day = +day;
        _lunardate.Month = +month;
        _lunardate.Year = +year;

        return SolarDateExt.ToSolarDate2(_lunardate, lunarLeap);
    }
}
class LunarDateExt {
    public static ToLunarDate(d, timeZone) {
        return AmLichHelper.SolarToLunar(d, timeZone);
    }

    public static ToLunarDate2(d) {
        return LunarDateExt.ToLunarDate(d, 7);
    }
}

export class GetLeapMonthHelper {
    public static PI = Math.PI;

    public static INT(d) {
        return Math.floor(d);
    }
    public getSunLongitude(jdn, timeZone) {
        let T, T2, dr, M, L0, DL, L;
        T = (jdn - 2451545.5 - timeZone / 24) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
        T2 = T * T;
        dr = Math.PI / 180; // degree to radian
        M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
        L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
        DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
        DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
        L = L0 + DL; // true longitude, degree
        L = L * dr;
        L = L - Math.PI * 2 * (GetLeapMonthHelper.INT(L / (Math.PI * 2))); // Normalize to (0, 2*PI)
        return GetLeapMonthHelper.INT(L / Math.PI * 6);
    }
    public NewMoon(k, timeZone) {
        let T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
        T = k / 1236.85; // Time in Julian centuries from 1900 January 0.5
        T2 = T * T;
        T3 = T2 * T;
        dr = Math.PI / 180;
        Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
        Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr); // Mean new moon
        M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3; // Sun's mean anomaly
        Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3; // Moon's mean anomaly
        F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3; // Moon's argument of latitude
        C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
        C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
        C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
        C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
        C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
        C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
        C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
        if (T < -11) {
            deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
        } else {
            deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
        }
        JdNew = Jd1 + C1 - deltat;
        return GetLeapMonthHelper.INT(JdNew + 0.5 + timeZone / 24);
    }

    public getNewMoonDay(k, timeZone) {
        return GetLeapMonthHelper.INT(this.NewMoon(k, timeZone));
    }
    public getLunarMonth11(yy, timeZone) {
        let k, off, nm, sunLong;
        off = this.jdFromDate1(31, 12, yy) - 2415021;
        k = GetLeapMonthHelper.INT(off / 29.530588853);
        nm = this.getNewMoonDay1(k, timeZone);
        sunLong = this.getSunLongitude(nm, timeZone); // sun longitude at local midnight
        if (sunLong >= 9) {
            nm = this.getNewMoonDay1(k - 1, timeZone);
        }
        return nm;
    }
    public getNewMoonDay1(k, timeZone) {
        return GetLeapMonthHelper.INT(this.NewMoon(k, timeZone));
    }
    public jdFromDate1(dd, mm, yy) {
        let a, y, m, jdn;
        a = GetLeapMonthHelper.INT((14 - mm) / 12);
        y = (yy + 4800 - a);
        m = (mm + 12 * a - 3);
        jdn = dd + GetLeapMonthHelper.INT((153 * m + 2) / 5) + 365 * y +
            GetLeapMonthHelper.INT(y / 4) - GetLeapMonthHelper.INT(y / 100) + GetLeapMonthHelper.INT(y / 400) - 32045;
        if (jdn < 2299161) {
        }
        return jdn;
    }



    public getLeapMonthOffset(a11, timeZone) {
        let k, last, arc, i;
        k = GetLeapMonthHelper.INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
        last = 0;
        i = 1; // We start with the month following lunar month 11
        arc = this.getSunLongitude(this.getNewMoonDay(k + i, timeZone), timeZone);
        do {
            last = arc;
            i++;
            arc = this.getSunLongitude(this.getNewMoonDay(k + i, timeZone), timeZone);
        } while (arc != last && i < 14);
        return i - 1;
    }
    public Geta11(date, timeZone) {
        let k, dayNumber, monthStart, a11, lunarYear;
        dayNumber = this.jdFromDate1(date.Day, date.Month, date.Year);
        k = GetLeapMonthHelper.INT((dayNumber - 2415021.076998695) / 29.530588853);
        monthStart = this.getNewMoonDay(k + 1, timeZone);
        if (monthStart > dayNumber) {
            monthStart = this.getNewMoonDay(k, timeZone);
        }
        a11 = this.getLunarMonth11(date.Year, timeZone);
        if (a11 >= monthStart) {
            lunarYear = date.Year;
            a11 = this.getLunarMonth11(date.Year - 1, timeZone);
        }
        return a11;
    }

}
