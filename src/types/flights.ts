interface LegsProps {
    id: string;
    tripLegNumber: number;
}
export interface FlightsProps {
    id: string;
    departureInstant: string;
    arrivalInstant: string;
    originAirport: {
        id: string;
        icaoCode: string;
        iataCode: string;
        faaCode: string;
        name: string;
        timeZone: string;
        city: string;
        countryName: string;
        countryCode2: string;
        countryCode3: string;
        subdivisionCode: string;
        subdivisionName: string;
        latitude: number;
        longitude: number;
        types: string[];
    };
    destinationAirport: {
        id: string;
        icaoCode: string;
        iataCode: string;
        faaCode: string;
        name: string;
        timeZone: string;
        city: string;
        countryName: string;
        countryCode2: string;
        countryCode3: string;
        subdivisionCode: string;
        subdivisionName: string;
        latitude: number;
        longitude: number;
        types: string[];
    };
    aircraft: {
        id: string;
        tailNumber: string;
        displayName: string;
        size: string;
        capacity: number;
        cabinHeight: {
            value: number;
            unit: string;
        };
        cabinLength: {
            value: number;
            unit: string;
        };
        baggageVolume: number;
        baggageMaxWeight: {
            value: number;
            unit: string;
        };
        standardSuitcases: number;
        amenities: string[];
        baggageFeatures: string[];
        imageIds: string[];
    };
    flightTime: string;
    blockTime: string;
    paxCount: number;
    tripLegNumber: number;
    trip: {
        id: string;
        bookingStatus: string;
        displayId: string;
        jetCard: {
            active: boolean;
            displayName: string;
        };
        membership: {
            active: boolean;
            displayName: string;
        };
        legs: LegsProps[];
    };
}

export interface FullFlightsProps {
    _embedded: {
        legs: FlightsProps[];
    };
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: 0;
    };
}

export enum FlightStatus {
    // request tab
    PREPARING = 'PREPARING',
    REQUESTED = 'REQUESTED',

    // scheduled tab
    SCHEDULED = 'SCHEDULED',
    CONFIRMED = 'CONFIRMED',

    // past trip tab
    COMPLETED = 'COMPLETED',
}

export interface AircraftSizeByIdProps {
    id: string;
    tailNumber: string;
    displayName: string;
    size: string;
    capacity: number;
    cabinHeight: {
        value: number;
        unit: string;
    };
    cabinLength: {
        value: number;
        unit: string;
    };
    baggageVolume: number;
    baggageMaxWeight: {
        value: number;
        unit: string;
    };
    standardSuitcases: number;
    amenities: string[];
    baggageFeatures: string[];
    imageIds: string[];
}

export interface AirportSearch {
    id: string;
    icaoCode: string;
    iataCode: string;
    name: string;
    timeZone: string;
    city: string;
    countryName: string;
    countryCode2: string;
    countryCode3: string;
    latitude: number;
    longitude: number;
}

export interface AircraftSizeProps {
    id: string;
    category: string;
    displayName: string;
    lowMaxPassengers: number;
    highMaxPassengers: number;
    approxRangeNauticalMiles?: number;
    model?: string;
    lowRangeNauticalMiles?: number;
    highRangeNauticalMiles?: number;
    modelId?: string;
    modelSize?: string;
    modelName?: string;
    modelCode?: string;
    modelDisplayName?: string;
    modelFaaCode?: string;
}
export interface AircraftSizesProps {
    sizes: AircraftSizeProps[];
}

export interface EstimateFlightTimeProps {
    distanceNM?: number;
    durationMins?: number;
    durationMinsWithPadding?: number;
}

interface PickUpAddress {}

export interface GeoSearchAirport {
    id: string;
    icaoCode: string;
    iataCode: string;
    faaCode: string;
    name: string;
    timeZone: string;
    city: string;
    countryName: string;
    countryCode2: string;
    countryCode3: string;
    subdivisionCode: string;
    subdivisionName: string;
    latitude: number;
    longitude: number;
    distanceFromSearchCoordinates: {
        value: number;
        unit: string;
    };
}

export interface PickAddress {
    id: string;
    address: string;
    location?: { lat: number; lng: number };
}

export interface FlightLeg {
    originAirport: {
        id?: string;
        icaoCode?: string;
        iataCode?: string;
        name?: string;
        timeZone?: string;
        city?: string;
        countryName?: string;
        countryCode2?: string;
        countryCode3?: string;
        latitude?: number;
        longitude?: number;
    };
    destinationAirport: {
        id?: string;
        icaoCode?: string;
        iataCode?: string;
        name?: string;
        timeZone?: string;
        city?: string;
        countryName?: string;
        countryCode2?: string;
        countryCode3?: string;
        latitude?: number;
        longitude?: number;
    };
    departureInstant?: string;
    arrivalInstant?: string;
    paxCount: number;
    byDepartureTime: boolean;
    pickUpAddress?: string;
    dropOffAddress?: string;
}

export interface NewFlightResponse {
    accountName: string;
    aircraftCategoryPreference: string;
    aircraftYearMinimum: number;
    createdDate: string;
    displayId: string;
    golfClubs: number;
    id: string;
    legs: FlightLeg[];
    models: [{ displayName: string; id: string }];
    nonStopOnly: boolean;
    rootQuoteId: string;
    skis: number;
    standardLuggage: number;
    status: string;
    updatedDate: string;
}

export interface GooglePlacePredictions {
    description: string;
    place_id: string;
}

export interface GooglePlaceResponse {
    predictions: GooglePlacePredictions[];
}

export interface GoogleGeocodePredictions {
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
    };
}

export interface GoogleGeocodeResponse {
    results: GoogleGeocodePredictions[];
}

export interface AdvanceBooksDay {
    id: string;
    localDate: string;
}

export interface AdvanceBooksDays {
    advancedBookingDays: AdvanceBooksDay[];
}
