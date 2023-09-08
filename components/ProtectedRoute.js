import { useRouter } from 'next/router'
import React, { useEffect, useContext } from 'react'
import { AuthenticatedUserContext } from '../context/AuthenticatedUserProvider';

const ProtectedRoute = ({ children }) => {
    const { wallet } = useContext(AuthenticatedUserContext);
    const router = useRouter()

    useEffect(() => {
        if (!wallet) {
            router.push('/')
        }
    }, [router, wallet])

    return <>{wallet ? children : children}</>
}

export default ProtectedRoute