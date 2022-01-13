import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate, useRoutes } from 'react-router-dom';

import Login from './Login';
import Movies from './Movies';
import Redux from './Redux';
import Register from './Register';
import Studios from './Studios';

export default function ReduxRoutes() {
  const isAuthenticated = useSelector(({ base }) => !!base.userState.name)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const routes = useRoutes([
    { path: '', element: <Redux />},
    { path: 'login', element: !isAuthenticated ? <Login /> : <Navigate to="/redux/movies" />},
    { path: 'register', element: !isAuthenticated ? <Register /> : <Navigate to="/redux/movies" /> },
    { path: 'movies', element: isAuthenticated ? <Movies /> : <Navigate to="/redux/login" /> },
    { path: 'studios', element: isAuthenticated ? <Studios /> : <Navigate to="/redux/login" /> },
  ])

  useEffect(() => {
    if(
      location.pathname.split('/').includes('redux') &&
      !['/redux', '/redux/login', '/redux/register'].includes(location.pathname)
    ){
      dispatch({ type: 'base/guard' })
      .then()
      .catch(() => {
        navigate('/redux/login')
        alert('You are not authenticated. Please login first.')
      })
    }
  }, [])

  return (
    <>
      {routes}
    </>
  )
}
