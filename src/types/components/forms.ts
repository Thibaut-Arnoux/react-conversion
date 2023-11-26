import { LoginFormSchema, RegisterFormSchema } from '@/schemas';
import { z } from 'zod';

export type LoginFormType = z.infer<typeof LoginFormSchema>;

export interface ILoginFormProps {
    onSubmit: (data: LoginFormType) => void;
}

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export interface IRegisterFormProps {
    onSubmit: (data: RegisterFormType) => void;
}
