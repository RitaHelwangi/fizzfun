import { NavLink, Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
	return (
		<div className="app">
			<header>
			<Navbar />
			</header>
			<Outlet />
			<Footer />
			
		</div>
	)
}

export default App 