import { NavBar } from '@/components/ui/NavBar';
import { Home } from '@/pages/Home';
import { Profile } from '@/pages/Profile';
import { ForgotPassword } from '@/pages/auth/ForgotPassword';
import { Login } from '@/pages/auth/Login';
import { Register } from '@/pages/auth/Register';
import { ResetPassword } from '@/pages/auth/ResetPassword';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
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
