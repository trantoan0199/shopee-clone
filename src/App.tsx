import useRouteElements from './useRouteElements'
import * as React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LocalStorageEventTarget } from './utils/auth'
import { AppContext } from './contexts/auth.context'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ErrorBoundary from './components/ErrorBoundary'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const routeElements = useRouteElements()
  const { reset } = React.useContext(AppContext)

  React.useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])

  return (
    <HelmetProvider>
      <ErrorBoundary>
        {routeElements}
        <ToastContainer />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </HelmetProvider>
  )
}

export default App
