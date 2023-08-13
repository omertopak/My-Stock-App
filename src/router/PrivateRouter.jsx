import React from 'react'
import { Navigate,Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRouter = () => {
    // const currentuser=true;
    const {currentuser} = useSelector((state)=>state.auth)
  return (
    currentuser ? <Outlet/> : <Navigate to="/"/>  )
}

export default PrivateRouter        