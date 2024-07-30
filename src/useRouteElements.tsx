import * as React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constants/path'
import { AppContext } from './contexts/auth.context'
import CartLayout from './layouts/CartLayout'
import MainLayout from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout'
import UserLayout from './pages/User/layouts'

const Login = React.lazy(() => import('./pages/Login'))
const Cart = React.lazy(() => import('./pages/Cart'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'))
const ProductList = React.lazy(() => import('./pages/ProductList'))
const Register = React.lazy(() => import('./pages/Register'))
const ChangePassword = React.lazy(() => import('./pages/User/pages/ChangePassword'))
const HistoryPurchase = React.lazy(() => import('./pages/User/pages/HistoryPurchase'))
const Profile = React.lazy(() => import('./pages/User/pages/Profile'))

function ProtectedRoute() {
  const { isAuthenticated } = React.useContext(AppContext)
  return isAuthenticated ? <Outlet /> : <Navigate to={path.login} />
}

function RejectedRoute() {
  const { isAuthenticated } = React.useContext(AppContext)
  return !isAuthenticated ? <Outlet /> : <Navigate to={path.home} />
}

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '',
          element: <RegisterLayout />,
          children: [
            {
              path: path.login,
              element: (
                <React.Suspense>
                  <Login />
                </React.Suspense>
              )
            },
            {
              path: path.register,
              element: (
                <React.Suspense>
                  <Register />
                </React.Suspense>
              )
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: path.cart,
          element: (
            <CartLayout>
              <React.Suspense>
                <Cart />
              </React.Suspense>
            </CartLayout>
          )
        },
        {
          path: path.user,
          element: (
            <MainLayout>
              <React.Suspense>
                <UserLayout />
              </React.Suspense>
            </MainLayout>
          ),
          children: [
            {
              path: path.profile,
              element: (
                <React.Suspense>
                  <Profile />
                </React.Suspense>
              )
            },
            {
              path: path.changePassword,
              element: (
                <React.Suspense>
                  <ChangePassword />
                </React.Suspense>
              )
            },
            {
              path: path.historyPurchase,
              element: (
                <React.Suspense>
                  <HistoryPurchase />
                </React.Suspense>
              )
            }
          ]
        }
      ]
    },
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: path.productDetail,
          element: (
            <React.Suspense>
              <ProductDetail />
            </React.Suspense>
          )
        },
        {
          path: '',
          index: true,
          element: (
            <React.Suspense>
              <ProductList />
            </React.Suspense>
          )
        },
        {
          path: '*',
          element: (
            <React.Suspense>
              <NotFound />
            </React.Suspense>
          )
        }
      ]
    }
  ])
  return routeElements
}
