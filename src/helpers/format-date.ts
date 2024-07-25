import {
    format,
    getTimezoneOffset,
    utcToZonedTime,
    zonedTimeToUtc,
} from 'date-fns-tz';
import { format as formatFNS } from 'date-fns';
import dayjs from 'dayjs';

export const formatDate = (date?: string | null, time?: string) => {
    if (!date || !time) {
        return;
    }
    let inputDateString = (date + ' ' + time).toString();

    return dayjs(inputDateString).format('YYYY-MM-DDTHH:mm:ss[Z]');
};

export const calculateArrivalDay = (
    departureDay?: string,
    departureTime?: string,
    estimatedTime?: any,
) => {
    if (
        !departureDay ||
        !departureTime ||
        !estimatedTime?.durationMinsWithPadding
    ) {
        return;
    }
    let inputDateString = (departureDay + ' ' + departureTime).toString();
    let parsedDate = new Date(inputDateString);
    const dateWithEstimateTime =
        parsedDate.getTime() + estimatedTime?.durationMinsWithPadding * 60000;

    return dayjs(dateWithEstimateTime).format('YYYY-MM-DDTHH:mm:ss[Z]');
};

export const checkRequestTime = (
    departureDay?: string,
    departureTime?: string,
    fromAirportTimeZone?: string,
) => {
    if (!departureDay || !departureTime || !fromAirportTimeZone) {
        return;
    }
    const now = new Date();
    let inputDateString = (departureDay + ' ' + departureTime).toString();
    let parsedDate = new Date(inputDateString);

    const dates = format(parsedDate, "yyyy-MM-dd'T'HH:mm:ss", {
        // @ts-ignore
        fromAirportTimeZone,
    });

    const newDate = new Date(dates).getTime() - now.getTime();
    const hours = newDate / (60 * 60 * 1000);

    return hours > 24 ? false : true;
};

export const calculateInLocalTime = (
    utcTime: any,
    timeZone?: string,
    formatPattern?: string,
) => {
    if (utcTime && timeZone && formatPattern) {
        const date = new Date(utcTime);

        // const targetTime = zonedTimeToUtc(date, timeZone);
        const zonedDate = utcToZonedTime(date, timeZone);
        const formattedDateTime = format(zonedDate, "yyyy-MM-dd'T'HH:mm:ss", {
            timeZone,
        });

        return formatFNS(new Date(formattedDateTime), formatPattern);
    }
};
