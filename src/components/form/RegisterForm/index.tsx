import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IRegisterFormProps, RegisterFormType, registerDTO } from './RegisterForm';

export const RegisterForm = (props: IRegisterFormProps) => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<RegisterFormType>({
        resolver: zodResolver(registerDTO)
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
                    {...register('name')}
                    label={t('form.label.name')}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    sx={{
                        width: '100%'
                    }}
                />

                <TextField
                    {...register('email')}
                    label={t('form.label.email')}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    sx={{
                        width: '100%',
                        mt: 2
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

                <TextField
                    {...register('confirmPassword')}
                    type="password"
                    label={t('form.label.password_confirmation')}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
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
                    {t('register')}
                </Button>
            </Box>
        </form>
    );
};
