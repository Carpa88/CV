import { Routes, Route } from "react-router-dom";
import About from "../about/About";
import Skills from "../skills/Skills";
import Home from './../home/Home';
import SingIn from './../singIn/SingIn';

const Router = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/skills' element={<Skills />} />
		<Route path='/singin' element={<SingIn />} />
	</Routes> 
)
export default Router