import { Routes, Route } from "react-router-dom";
import About from "../about/About";
import Skills from "../skills/Skills";
import Home from './../home/Home';

const Router = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/about' element={<About />} />
		<Route path='/skills' element={<Skills />} />
	</Routes> 
)
export default Router