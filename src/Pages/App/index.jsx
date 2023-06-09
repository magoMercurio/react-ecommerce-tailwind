import { useRoutes } from 'react-router-dom'

import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

const AppRoutes = () => {
  let  routes = useRoutes([
    { 
      path: '/',
      element: <Home /> 
    }
  ])
  return routes
}

function App() {



  return (
    <>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SignIn />
    </>
  )
}

export default App
