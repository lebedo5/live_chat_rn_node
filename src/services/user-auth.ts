import { EndPointService } from './api-handlers/axios';
import EncryptedStorage from './encrypted-storage';

export const TOKEN_KEY = 'token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
export const USER_ID_KEY = 'user_id';
export const TOKEN_ID = 'token_id';

export class UserAuth {
    private isLoggedStatus = false;

    public async login(data: {
        token: string;
        _id: string
    }) {
        this.setIsLoggedIn(true);
        console.log('data', data)
        await EncryptedStorage.multiSet([
            [TOKEN_KEY, data.token],
            [USER_ID_KEY, data._id],
        ]);
    }

    public async logout(): Promise<void> {
        EndPointService.dropAuthorizationToken();
        await EncryptedStorage.multiRemove([TOKEN_KEY, USER_ID_KEY]);
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

    async getUserID(): Promise<string | null> {
        const id = await EncryptedStorage.getItem(USER_ID_KEY);
        return id ? id : null
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
