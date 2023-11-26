import { LoginForm } from '@/components/forms/LoginForm';
import { CenteredBox } from '@/components/layout/CenteredBox';
import { IUser } from '@/models/User';
import { AuthService } from '@/services/AuthService';
import { LoginFormType } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const loginMutation = useMutation<IUser, Error, LoginFormType>({
        mutationFn: (login) => new AuthService().login(login.email, login.password),
        onSuccess: (user) => {
            queryClient.setQueryData<IUser>(['user'], user);
        }
    });

    const handleSubmit = async (loginForm: LoginFormType) => {
        await loginMutation.mutateAsync(loginForm);
        navigate('/');
    };

    return (
        <CenteredBox
            sx={{
                backgroundColor: 'white',
                width: '50%',
                maxWidth: '500px',
                padding: '20px',
                borderRadius: '10px'
            }}
        >
            <LoginForm onSubmit={handleSubmit} />
        </CenteredBox>
    );
};
