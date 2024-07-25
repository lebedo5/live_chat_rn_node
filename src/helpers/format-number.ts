export function formatNumber(num: number) {
    // Check if the number has decimals
    if (num.toString().includes('.')) {
        let [integerPart, decimalPart] = num.toString().split('.');
        let formattedInteger = integerPart.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ',',
        );
        let formattedDecimal = parseFloat(`0.${decimalPart}`)
            .toFixed(2)
            .split('.')[1];
        return `${formattedInteger}.${formattedDecimal}`;
    } else {
        return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}

export function formatNumberDetail(num: number) {
    // Check if the number has decimals
    if (num.toString().includes('.')) {
        let [integerPart, decimalPart] = num.toString().split('.');
        let formattedInteger = integerPart.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ',',
        );
        let formattedDecimal = parseFloat(`0.${decimalPart}`)
            .toFixed(2)
            .split('.')[1];
        return `${formattedInteger}.${formattedDecimal}`;
    } else {
        return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
