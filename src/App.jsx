import { NavLink, Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="app">
			<header>
			<Navbar />
			</header>
			<Outlet />
		</div>
	)
}

export default App 