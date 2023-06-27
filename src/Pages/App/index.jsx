import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'

import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/NavBar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let  routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  return routes
}

const App = () => {



  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <CheckoutSideMenu />
    </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
