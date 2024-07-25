import { EndPointService } from '../api-handlers/axios';
import { API_URL, CLIENT_ID_FOR_LONG_LIVE_TOKEN } from '../../../config/env';

const fetchLongTimeToken = ({ authToken }: { authToken: string }) => {
    const body = {
        client_id: CLIENT_ID_FOR_LONG_LIVE_TOKEN,
        grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
        subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
        subject_token: authToken,
    };

    return EndPointService.post(
        `${API_URL}/auth/realms/stellar-customer-portal/protocol/openid-connect/token`,
        body,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        },
    );
};

export default {
    fetchLongTimeToken,
};
