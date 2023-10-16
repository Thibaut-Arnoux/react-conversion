import { useSearchParams } from 'react-router-dom';

export const ResetPassword = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    return (
        <>
            token : {token}
            <br />
            email : {email}
        </>
    );
};
