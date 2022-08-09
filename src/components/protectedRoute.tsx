import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UseAppSelector } from '../hooks/redux-hooks';

function ProtectedRoute(){
  const { token } = UseAppSelector((state) => state.token);

  return(
    token ? <Outlet/> : <Navigate to='/' />
  )
}

export default ProtectedRoute;