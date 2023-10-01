import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header/Header';
import { Container } from '@mui/material';
import Footer from './elements/Footer';

const App = () => {
  const defaultTheme = createTheme();
 
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />  
        <Container maxWidth="lg" sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
          <Header />
          <h1>Hello, World!</h1>
        <Footer />
      </Container>
    </ThemeProvider>
  )}

export default App
