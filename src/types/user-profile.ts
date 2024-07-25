export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
}

export interface SelectedImage {
    filename?: string;
    uri: string;
    type?: string;
    fileName?: string;
}

export interface PhoneNumber {
    id?: string;
    type: string;
    number: string;
    description?: string;
}

export interface UserPersonalContacts {
    id: string;
    primary?: boolean;
    type: string;
    address: {
        street: string;
        city: string;
        postalCode: string;
        state?: string;
        country: string;
    };
    emailAddress?: string;
    phoneNumbers: PhoneNumber[];
}

export interface UpdateContactInfo {
    address: {
        street: string;
        city: string;
        postalCode: string;
        state?: string;
        country: string;
        building?: 'string';
        mailstop?: 'string';
        international?: 'string';
    };
}

export interface SelectedImage {
    filename?: string;
    uri: string;
    type?: string;
    fileName?: string;
    id?: string;
}

export interface UserStatus {
    registered: string;
    status: string;
}
