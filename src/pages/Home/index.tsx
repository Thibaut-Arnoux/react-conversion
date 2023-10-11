import { Box, Button, Typography } from '@mui/material';

const Home = () => {
    const openInNewTab = () => {
        window.open(
            'https://mui.com/material-ui/getting-started/',
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <>
            <Box textAlign={'center'} mt={20} p={5} maxHeight={'100%'}>
                <Box
                    width={'100%'}
                    textAlign={'center'}
                    mt={10}
                    fontWeight={700}
                    fontSize={'1.25rem'}
                    lineHeight={'1.75rem'}
                >
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
            </Box>
        </>
    );
};

export default Home;
