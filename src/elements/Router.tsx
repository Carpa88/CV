import { Routes, Route } from "react-router-dom";
import About from "../about/About";
import Skills from "../skills/Skills";
import Home from '../home/Home';
import SingIn from '../singIn/SingIn';
import UseerList from '../useApi/UsersList';
import UseerPage from '../useApi/UserPage';

const Router = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/skills' element={<Skills />} />
		<Route path='/singin' element={<SingIn />} />
		<Route path='/api' element={<UseerList />} />
		<Route path='/api/:userId' element={<UseerPage />} />
	</Routes> 
)
export default Router