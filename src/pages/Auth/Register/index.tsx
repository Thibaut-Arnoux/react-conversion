import { RegisterForm } from '@/components/form/RegisterForm';
import { RegisterFormType } from '@/components/form/RegisterForm/RegisterForm';
import { CenteredBox } from '@/components/layout/CenteredBox';

export const Register = () => {
    const handleSubmit = (data: RegisterFormType): void => {
        console.log(data);
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
            <RegisterForm onSubmit={handleSubmit} />
        </CenteredBox>
    );
};
