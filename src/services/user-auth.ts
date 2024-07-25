import { EndPointService } from './api-handlers/axios';
import EncryptedStorage from './encrypted-storage';

export const TOKEN_KEY = 'token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
export const USER_ID_KEY = 'user_id';
export const TOKEN_ID = 'token_id';

export class UserAuth {
    private isLoggedStatus = false;

    public async login(data: {
        accessToken: string;
        refreshToken: string;
        idToken: string;
    }) {
        this.setIsLoggedIn(true);
        await EncryptedStorage.multiSet([
            [TOKEN_KEY, data.accessToken],
            [REFRESH_TOKEN_KEY, data.refreshToken],
            [TOKEN_ID, data.idToken],
        ]);
    }

    public async logout(): Promise<void> {
        EndPointService.dropAuthorizationToken();
        await EncryptedStorage.multiRemove([TOKEN_KEY, REFRESH_TOKEN_KEY]);
        this.setIsLoggedIn(false);
        return Promise.resolve();
    }
    private setIsLoggedIn(isLoggedIn: boolean) {
        this.isLoggedStatus = isLoggedIn;
    }

    async getAuthToken(): Promise<string | null> {
        return EncryptedStorage.getItem(TOKEN_KEY);
    }

    async getRefreshToken(): Promise<string | null> {
        return await EncryptedStorage.getItem(REFRESH_TOKEN_KEY);
    }

    async getIdToken(): Promise<string | null> {
        return await EncryptedStorage.getItem(TOKEN_ID);
    }

    async getUserID(): Promise<string> {
        const id = await EncryptedStorage.getItem(USER_ID_KEY);
        return id && JSON.parse(id);
    }

    async repair(): Promise<boolean> {
        const token = await this.getAuthToken();
        if (!token) {
            return false;
        }
        EndPointService.setAuthorizationToken(token);
        this.setIsLoggedIn(true);
        return true;
    }
}

const UserAuthService = new UserAuth();

export default UserAuthService;
