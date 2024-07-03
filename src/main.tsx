import App from './App'
import ReactDOM from 'react-dom/client'
import * as React from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import 'src/i18n/i18n'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from './contexts/auth.context'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <App />
        </AppProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
)
