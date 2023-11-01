import i18n from '@/i18n';
import { z } from 'zod';

export const LoginFormDTO = z.object({
    email: z
        .string()
        .min(1, i18n.t('form.validation.email_required'))
        .email(i18n.t('form.validation.email_valid')),
    password: z.string().min(1, i18n.t('form.validation.password_required'))
});

export type LoginFormType = z.infer<typeof LoginFormDTO>;

export interface ILoginFormProps {
    onSubmit: (data: LoginFormType) => void;
}
