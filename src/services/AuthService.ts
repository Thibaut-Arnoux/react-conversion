import { AxiosInstance } from 'axios';
import { httpClient } from './HttpClient';

export class AuthService {
    readonly ressourceUrl: string;
    private httpClient: AxiosInstance;

    constructor() {
        this.ressourceUrl = '/auth';
        this.httpClient = httpClient;
    }

    async login(email: string, password: string) {
        const res = await this.httpClient.post<unknown>(`${this.ressourceUrl}/login`, {
            email,
            password
        });

        // TODO : Parse with token DTO

        // TODO : Store token in local storage, refresh_token in cookie (fct to be reused)

        // TODO : Call get authenticated

        // TODO : Put User inside store

        // TODO : Redirect to home
    }
}
