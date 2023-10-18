import { Box, BoxProps } from '@mui/material';

interface CenteredBoxProps extends BoxProps {
    children: React.ReactNode;
}

export const CenteredBox = ({ children, sx, ...rest }: CenteredBoxProps) => {
    return (
        <Box
            position="absolute"
            top="50%"
            left="50%"
            {...rest}
            sx={{ transform: 'translate(-50%, -50%)', ...sx }}
        >
            {children}
        </Box>
    );
};
