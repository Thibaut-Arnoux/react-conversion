import { DateReponse } from '@/types';

export interface IUser {
    id: string;
    name: string;
    email: string;
    createdAt: DateReponse;
    updatedAt: DateReponse;
}

export class User implements IUser {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public createdAt: DateReponse,
        public updatedAt: DateReponse
    ) {}
}
