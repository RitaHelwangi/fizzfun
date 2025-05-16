import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Footer from './components/Footer.jsx'
import Admin from './pages/Admin.jsx'

const router = createHashRouter([
	{
		path: '/',
		Component: App,
		children: [
			{index: true, Component: Home},
			{ path: 'shop', Component: Shop },
			{ path: 'cart', Component: Cart },
			{ path: 'login', Component: Login },
			{ path: 'admin', Component: Admin },
			{ path: 'footer', Component: Footer },



		]
	}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
