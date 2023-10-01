import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header/Header';

const App = () => {
  const defaultTheme = createTheme();
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />  
      <Header />
      <h1>Hello, World!</h1>
    </ThemeProvider>
  )}

export default App
