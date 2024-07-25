export interface Passenger {
    id: string;
    firstName: string;
    lastName: string;
    birthDate?: string;
    weight: {
        value: number;
        unit: string;
    };
    transientPassenger?: boolean;
    passenger: {
        id: string;
        firstName: string;
        lastName: string;
        name: string;
        weight: {
            value: number;
            unit: string;
        };
    };
}

export interface FullNotes {
    notes: Note[];
}

export interface Note {
    id?: string;
    type?: string;
    value: string;
}

export interface OrderedItems {
    orderedItems: CateringItem[];
}

interface CateringItem {
    id: string;
    item: {
        id: string;
        categories: string[];
        name: string;
        description: string;
    };
    count: number;
}

export interface NewPassenger {
    id?: string;
    firstName: string;
    lastName: string;
    gender?: string;
    luggageType?: string;
    luggageWeight?: {
        value: number;
        unit: string;
    };
    document?: {
        number: number;
        country: string;
        type: string;
    };
    birthDate?: string;
    weight?: {
        value: number;
        unit: string;
    };
    accountId?: string;
}

export interface ExistPassenger {
    _embedded: {
        passengers: Passenger[];
    };
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    };
}

export interface CateringMenuItem {
    id: string;
    categories: string[];
    name: string;
    description: string;
    count?: number;
}
export interface CateringMenu {
    items: CateringMenuItem[];
}

export interface FormatCateringMenu {
    categoryName: string;
    positions: CateringMenuItem[];
}

export interface OrderCateringItem {
    id: string;
    item: {
        id: string;
        categories: string[];
        name: string;
        description: string;
    };
    count: number;
}

export interface TripLegItem {
    id: string;
    tripLegNumber: number;
}

export interface FlightInfo {
    originAirport?: {
        iataCode?: string;
        city?: string;
        timeZone?: string;
        name: string;
        icaoCode?: string;
        faaCode?: string;
    };
    destinationAirport?: {
        iataCode?: string;
        city?: string;
        timeZone?: string;
        name: string;
        icaoCode?: string;
        faaCode?: string;
    };
    aircraft: {
        tailNumber?: string;
        size?: string;
        capacity?: number;
    };
    blockTime?: string;
    departureInstant: string;
    arrivalInstant: string;
    flightTime: string;
    trip: {
        displayId: string;
        legs: TripLegItem[];
        jetCard: {
            active: boolean;
            displayName: string;
        };
        membership: {};
    };
    id: string;
    status: string;
}

export interface RequestFlightDetailsById {
    flightInfo?: {
        data: {};
    };
    passengerInfo?: {
        data?: Passenger[];
    };
    notesInfo?: {
        data: FullNotes;
    };
    cateringInfo?: {
        data: OrderedItems;
    };
}

export interface BillingInfoItem {
    name: string;
    quantity: number;
    unit: string;
}

export interface BillingList {
    lineItems: BillingInfoItem[];
    totals?: {
        PER_BLOCK_HOUR: number;
        PER_FLIGHT_HOUR: number;
        PER_LEG: number;
        PER_OVERNIGHT: number;
        PER_TRIP_INCL_REPO_CAL_DAY: number;
    };
}
