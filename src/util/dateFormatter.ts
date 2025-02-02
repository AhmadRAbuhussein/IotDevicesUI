import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
interface IDateFormatter {
    getFormattedDateTime: (date: string) => string;
    getFormattedDate: (date: string) => string;
    getSimpleFormattedDate: (date: string) => string;
}

const DateFormatter: IDateFormatter = {
    getFormattedDateTime: (date: string) => {
        if (!date) {
            return '-';
        }
        dayjs.extend(timezone);
        dayjs.extend(utc);
        let djs = dayjs.utc(date);
        const format = 'DD/MM/YYYY hh:mm A';
        djs.tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
        return djs.format(format);
    },
    getFormattedDate: (date: string) => {
        if (!date) {
            return '-';
        }
        dayjs.extend(timezone);
        dayjs.extend(utc);
        let djs = dayjs.utc(date);
        const format = 'DD/MM/YYYY';
        djs.tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
        return djs.format(format);
    },
    getSimpleFormattedDate: (date: string) => {
        if (!date) {
            return '-';
        }
        dayjs.extend(timezone);
        dayjs.extend(utc);
        let djs = dayjs(date);
        const format = 'MM/DD';
        djs.tz(Intl.DateTimeFormat().resolvedOptions().timeZone);
        return djs.format(format);
    },
};
export default DateFormatter;
