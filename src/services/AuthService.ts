import i18n from '@/i18n';
import { IUser, User } from '@/models/User';
import { ConnexionSchema } from '@/schemas/';
import { AxiosInstance } from 'axios';
import { ZodError } from 'zod';
import { httpClient } from './HttpClient';

export class AuthService {
    readonly ressourceUrl: string;
    private httpClient: AxiosInstance;

    constructor() {
        this.ressourceUrl = '/auth';
        this.httpClient = httpClient;
    }

    async login(email: string, password: string): Promise<IUser> {
        try {
            const res = await this.httpClient.post<unknown>(`${this.ressourceUrl}/login`, {
                email,
                password
            });
            const loginResponse = ConnexionSchema.parse(res.data);

            // Store token in local storage
            localStorage.setItem('token', loginResponse.tokens.access_token);

            // TODO : Server side store refresh_token in cookie

            return new User(
                loginResponse.user.id,
                loginResponse.user.name,
                loginResponse.user.email,
                loginResponse.user.created_at,
                loginResponse.user.updated_at
            );
        } catch (e: unknown) {
            if (e instanceof ZodError) {
                throw new Error(i18n.t('service.error.login_validation'));
            }
            throw new Error(i18n.t('service.error.login_unknown'));
        }
    }
}
