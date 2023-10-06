import Header from './header/Header';
import { Container } from '@mui/material';
import Footer from './elements/Footer';
import About from './About/About';

const Layout = () => (
	<Container maxWidth="lg" sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column', p: 0}}>
		<Header />
		<About />
		<Footer />
	</Container>
 )

export default Layout;