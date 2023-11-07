import Header from './header/Header';
import { Container } from '@mui/material';
import Footer from './elements/Footer';
import Router from './elements/Router';

const Layout = () => (
	<Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', p: 0 }}>
		<Header />
		<Router />
		<Footer />
	</Container>
)

export default Layout;
