import Box from '@mui/material/Box';
import Copyright from './Copyright';
import { alpha } from '@mui/material/styles';

const Footer = () => (
  <Box component="footer" sx={{ mt: 'auto', bgcolor:  alpha('#000', 0.5), py: 3 }}>
    <Copyright color='white' />
  </Box>
);

export default Footer