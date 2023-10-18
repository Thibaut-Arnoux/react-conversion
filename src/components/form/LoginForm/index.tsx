import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { LoginFormType, loginDTO } from './LoginForm';

export const LoginForm = () => {
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormType>({
        resolver: zodResolver(loginDTO)
    });

    const onSubmit = (data: LoginFormType) => {
        console.log(data);
        // TODO: Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
