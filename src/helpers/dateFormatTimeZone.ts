import dayjs, { Dayjs } from 'dayjs';

export const formatDayTimeZone = (newData: string | number): Dayjs => {
    const newDates = new Date(newData);
    const userTimezoneOffset = newDates?.getTimezoneOffset() * 60000;

    return dayjs(new Date(newDates.getTime() + userTimezoneOffset));
};

export const formatDayTimeZoneWithFormat = (
    newData?: string | number,
    format?: string,
): string => {
    if (!newData) {
        return '';
    }

    const newDates = new Date(newData);
    const userTimezoneOffset = newDates?.getTimezoneOffset() * 60000;

    return dayjs(new Date(newDates.getTime() + userTimezoneOffset)).format(
        format,
    );
};
