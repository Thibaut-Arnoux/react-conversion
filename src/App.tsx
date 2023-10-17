import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { theme } from './style';

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
};

export default App;
