export const formatMilesToKm = (miles: number): number => {
    const kilometers = miles * 1.60934;
    return Number(kilometers.toFixed(3));
};
