import React from 'react'
import useAuth from '../custom-hooks/useAuth'
import { Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const { currentUser } = useAuth()
    return currentUser ? <Outlet />:('');
}

export default ProtectedRoute