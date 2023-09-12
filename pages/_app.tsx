import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { AuthenticatedUserProvider } from '../context/AuthenticatedUserProvider'
import { useRouter } from 'next/router'
import ProtectedRoute from '../components/ProtectedRoute'

const noAuthRequired = ['/login', '/register', '/', '/signin', '/recovery']

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <AuthenticatedUserProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthenticatedUserProvider>
  )
}

export default App

