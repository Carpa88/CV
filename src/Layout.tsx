import Header from './header/Header';
import { Container } from '@mui/material';
import Footer from './elements/Footer';
import About from './about/About';
import Skills from './skills/Skills';
import TopBaner from './TopBanner';

const Layout = () => (
	<Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', p: 0 }}>
		<Header />
		<TopBaner />
		<About />
		<Skills />
		<Footer />
	</Container>
)

export default Layout;
