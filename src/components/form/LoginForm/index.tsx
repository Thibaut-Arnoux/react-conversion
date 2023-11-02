import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ILoginFormProps, LoginFormSchema, LoginFormType } from './LoginForm';

export const LoginForm = (props: ILoginFormProps) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormType>({
        resolver: zodResolver(LoginFormSchema)
    });

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TextField
                    {...register('email')}
                    label={t('form.label.email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                        width: '100%'
                    }}
                />

                <TextField
                    {...register('password')}
                    type="password"
                    label={t('form.label.password')}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    sx={{
                        width: '100%',
                        mt: 2
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: '100%',
                        mt: 2
                    }}
                >
                    {t('login')}
                </Button>
            </Box>
        </form>
    );
};
