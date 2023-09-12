import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { AuthenticatedUserProvider } from '../context/AuthenticatedUserProvider'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'

const noAuthRequired = ['/login', '/register', '/', '/recovery']

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <SessionProvider>
    <AuthenticatedUserProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthenticatedUserProvider>
    </SessionProvider>
  )
}

export default App

