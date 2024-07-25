export const debounce = (func: (val: string) => void, delay: number) => {
    var timeoutId: NodeJS.Timeout;

    return (...args: string[]) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            // @ts-ignore
            func(...args);
        }, delay);
    };
};
