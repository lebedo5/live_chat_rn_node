import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import urls from '../../../config/env';
import UserAuthService from '../user-auth';

// Set default params and headers for axios
axios.defaults.baseURL = `${urls.apiUrl}`;
// axios.defaults.headers.common['content-type'] =
//     'multipart/form-data;charset=utf-8';
// axios.defaults.headers.common.Accept = 'multipart/form-data';

class Axios {
    private authorizationToken = '';

    // Set authorization token
    public setAuthorizationToken(token: string): void {
        this.authorizationToken = token;
    }

    // Drop authorization token
    public dropAuthorizationToken(): void {
        this.authorizationToken = '';
    }

    public async get(endPoint: string, config: any = {}): AxiosPromise {
        return axios.get(endPoint, await this.addHeaders(config));
    }

    public async post(
        endPoint: string,
        params = {},
        config = {},
    ): AxiosPromise {
        return axios.post(endPoint, params, await this.addHeaders(config));
    }

    public async put(endPoint: string, params = {}, config = {}): AxiosPromise {
        return axios.put(endPoint, params, await this.addHeaders(config));
    }

    public async patch(
        endPoint: string,
        params = {},
        config = {},
    ): AxiosPromise {
        return axios.patch(endPoint, params, await this.addHeaders(config));
    }

    public async delete(endPoint: string, config = {}): AxiosPromise {
        return axios.delete(endPoint, await this.addHeaders(config));
    }

    public delay(time: number, args?: any): AxiosPromise {
        return new Promise(resolve => {
            setTimeout(resolve.bind(null, args), time);
        });
    }

    public async axios(config: AxiosRequestConfig): AxiosPromise {
        const resultConfig = await this.addHeaders(config);

        return axios(resultConfig);
    }

    private async addHeaders(userConfig: any): Promise<any> {
        let requestHeaders = {};
        const token = await UserAuthService.getAuthToken();
        if (token) {
            requestHeaders = {
                Authorization: `Bearer ${token}`,
            };
        }

        const { headers, ...restConfigs } = userConfig;
        // Return extended config
        return {
            headers: {
                ...requestHeaders,
                ...headers,
            },
            ...restConfigs,
        };
    }
}

const EndPointService = new Axios();

export { Axios, EndPointService };
