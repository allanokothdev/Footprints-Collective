import { useRouter } from 'next/router'
import React, { useEffect, useContext } from 'react'
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';

const noAuthRequired = ['/login', '/register', '/', '/recovery']

const ProtectedRoute = ({ children }) => {
    const { uid } = useContext(AuthenticatedUserContext);
    const router = useRouter()

    useEffect(() => {
        if (!uid) {
            router.push('/login')
        }
    }, [router, uid])

    return <>{uid ? children : null}</>
}

export default ProtectedRoute