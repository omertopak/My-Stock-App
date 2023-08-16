import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from './PrivateRouter'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Purchases from '../pages/Purchases'
import Sales from '../pages/Sales'
import Firms from '../pages/Firms'
import Brands from '../pages/Brands'
const AppRouter = () => {
  return (
    
   
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/stock' element={<PrivateRouter/>}>
          <Route path="" element={<Dashboard />}>
            <Route  index element={<Home/>}/>
            <Route  path='products' element={<Products/>}/>
            <Route  path='purchase' element={<Purchases/>}/>
            <Route  path='sales' element={<Sales/>}/>
            <Route  path='firms' element={<Firms/>}/>
            <Route  path='brands' element={<Brands/>}/>
          </Route>
        </Route>
      </Routes>
    
  )
}

export default AppRouter
