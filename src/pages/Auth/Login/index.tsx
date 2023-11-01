import { LoginForm } from '@/components/form/LoginForm';
import { LoginFormType } from '@/components/form/LoginForm/LoginForm';
import { CenteredBox } from '@/components/layout/CenteredBox';

export const Login = () => {
    const handleSubmit = (loginForm: LoginFormType): void => {
        console.log(loginForm);
        // TODO: Handle form submission logic here
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
