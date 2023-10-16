// material-ui default fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        MuiStack: {
            defaultProps: {
                useFlexGap: false
            }
        }
    },
    palette: {
        text: {
            primary: '#173A5E',
            secondary: '#46505A'
        }
    }
});
