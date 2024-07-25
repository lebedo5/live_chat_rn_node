interface PerformanceInterface {
    id: string;
    tenantId: string;
    cruiseMode: string;
    timeDistanceSlopeNmPerHr: number;
    timeDistanceInterceptMin: number;
    endurance: string;
    payloadLbEndurance: {
        0: string;
        3600: string;
        2500: string;
    };
    cruiseSpeedKts: number;
}

interface ModelsProps {
    id: string;
    size: string;
    name: string;
    code: string;
    displayName: string;
    faaCode: string;
    specifications: {
        id: string;
        tenantId: string;
        maxBaggageVolumeCuIn: number;
        paxSeatCount: number;
        cabinLengthFt?: number;
        cabinWidthFt?: number;
        performance: PerformanceInterface[];
    };
}

export interface MembershipsRates {
    category: string;
    hourlyRate: number;
    model?: {
        code: string;
        displayName: string;
        faaCode: string;
        id: string;
        name: string;
        size: string;
    };
}
export interface JetCardsProps {
    id: string;
    hourlyRate: number;
    hours: number;
    hoursUsed: number;
    hoursRemaining: number;
    amount: number;
    amountUsed: number;
    amountRemaining: number;
    active: boolean;
    matured: boolean;
    aircraft: {
        size: {
            id: string;
            category: string;
            displayName: string;
            lowMaxPassengers: number;
            highMaxPassengers: number;
            approxRangeNauticalMiles: number;
        };
        models?: ModelsProps[];
    };
    addOns?: { name: string }[];
}

export interface Memberships {
    id: string;
    name: string;
    rates: MembershipsRates[];
}

export interface Account {
    id: string;
    jetCards?: JetCardsProps[];
    memberships?: Memberships[];
}

export interface JatCardAccount {
    accounts: Account[];
}
