import {Link, Typography, TypographyProps} from '@mui/material';

const Copyright = (props?: TypographyProps) => (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href='#'>
            CV
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>  
)

export default Copyright