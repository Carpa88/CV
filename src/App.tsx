import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from './Layout';

const App = () :JSX.Element => {
  const defaultTheme = createTheme();
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )}

export default App
