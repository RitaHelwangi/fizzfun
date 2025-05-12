import { NavLink, Outlet } from 'react-router'
import './App.css'

function App() {
	return (
		<div className="app">
			<header>
				<nav>
					<NavLink to="/"> Home </NavLink>

				</nav>
			</header>
			<Outlet />
		</div>
	)
}

export default App
