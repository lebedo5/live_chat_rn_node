import { format } from 'date-fns-tz';

export default function useTimer() {
    const currentDate = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const tomorrow = new Date(currentDate).setDate(currentDate.getDate() + 1);
    return {
        hours: format(currentDate, 'HH', {
            timeZone,
        }),
        minutes: format(currentDate, 'mm', {
            timeZone,
        }),
        tomorrow: format(tomorrow, 'yyyy-MM-dd', {
            timeZone,
        }),
    };
}
