import { Box, Button, Stack, Typography } from '@mui/material';

export const Home = () => {
    const openInNewTab = () => {
        window.open(
            'https://mui.com/material-ui/getting-started/',
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: 'calc(100vh - 56px)', sm: 'calc(100vh - 64px)' }
            }}
        >
            <Box fontWeight={700} fontSize={'1.25rem'} lineHeight={'1.75rem'}>
                <Typography
                    variant="h1"
                    mb={4}
                    fontSize={'1.5rem'}
                    fontWeight={800}
                    letterSpacing={'-0.025em'}
                    lineHeight={1}
                >
                    Hello World !
                </Typography>
            </Box>
            <Button variant="outlined" onClick={openInNewTab}>
                Material UI Documentation
            </Button>
        </Stack>
    );
};
