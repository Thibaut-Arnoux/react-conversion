import { LoginForm } from '@/components/form/LoginForm';
import { CenteredBox } from '@/components/layout/CenteredBox';

export const Login = () => {
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
            <LoginForm />
        </CenteredBox>
    );
};
