import { NavBar } from '@/components/ui/NavBar';
import Home from '@/pages/Home';
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
                path: '/home',
                element: <>This is fine</>
            }
        ]
    }
]);

export default router;
