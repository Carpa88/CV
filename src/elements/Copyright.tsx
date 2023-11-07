import {Link, Typography, TypographyProps} from '@mui/material';
import {CV_LINK} from './constants';

const Copyright = (props?: TypographyProps) => (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href={CV_LINK}>
            Resume
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>  
)

export default Copyright