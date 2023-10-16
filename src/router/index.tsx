import { NavBar } from '@/components/ui/NavBar';
import { ForgotPassword } from '@/pages/Auth/ForgotPassword';
import { Login } from '@/pages/Auth/Login';
import { Register } from '@/pages/Auth/Register';
import { ResetPassword } from '@/pages/Auth/ResetPassword';
import Home from '@/pages/Home';
import { Profile } from '@/pages/Profile';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        element: <NavBar />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />
            },
            {
                path: '/profile',
                element: <Profile />
            }
        ]
    }
]);

export default router;
