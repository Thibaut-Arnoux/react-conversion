import i18n from '@/i18n';
import { z } from 'zod';

export const RegisterFormDTO = z
    .object({
        email: z
            .string()
            .min(1, i18n.t('form.validation.email_required'))
            .email(i18n.t('form.validation.email_valid')),
        name: z.string().min(1, i18n.t('form.validation.name_required')),
        password: z
            .string()
            .min(1, i18n.t('form.validation.password_required'))
            .min(8, i18n.t('form.validation.password_min')),
        confirmPassword: z
            .string()
            .min(1, i18n.t('form.validation.password_required'))
            .min(8, i18n.t('form.validation.password_min'))
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: i18n.t('form.validation.password_mismatch'),
        path: ['confirmPassword']
    });

export type RegisterFormType = z.infer<typeof RegisterFormDTO>;

export interface IRegisterFormProps {
    onSubmit: (data: RegisterFormType) => void;
}
