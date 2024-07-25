export function removeDoubleElements(arr1: any, arr2: any) {
    const passengerIds = arr2.map(passenger => passenger.passenger.id);
    return arr1.filter(item => !passengerIds.includes(item.id));
}

export function removeDoubleElementsАFromList(prevList: any, newList: any) {
    const prevListId = prevList.map((item: any) => item.id);
    console.log('double flight', newList.filter((flight: any) => prevListId.includes(flight.id)))
    return newList.filter((flight: any) => !prevListId.includes(flight.id));
}
