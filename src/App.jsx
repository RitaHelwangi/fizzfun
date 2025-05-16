import { NavLink, Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
	return (
		<div className="app-container">
		<header>
		<Navbar />
		</header>
		<main className="main-content">
		<Outlet />
		</main>
		<Footer />
		
		</div>
		
	)
}

export default App 