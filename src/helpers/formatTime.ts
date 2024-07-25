export function formatTime(time?: string) {
    if (!time) {
        return '';
    }
    const [hours, minutes] = time?.split(':').map(Number);
    return hours + 'h' + ' ' + minutes + 'm';
}
