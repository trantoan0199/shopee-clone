import * as React from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import path from './constants/path'
import { AppContext } from './contexts/auth.context'
import CartLayout from './layouts/CartLayout'
import MainLayout from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout'
// import Cart from './pages/Cart'
// import Login from './pages/Login'
// import NotFound from './pages/NotFound'
// import ProductDetail from './pages/ProductDetail'
// import ProductList from './pages/ProductList/ProductList'
// import Register from './pages/Register/Register'
import UserLayout from './pages/User/layouts'
// import ChangePassword from './pages/User/pages/ChangePassword'
// import HistoryPurchase from './pages/User/pages/HistoryPurchase'
// import Profile from './pages/User/pages/Profile'

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
          path: path.login,
          element: (
            <RegisterLayout>
              <React.Suspense>
                <Login />
              </React.Suspense>
            </RegisterLayout>
          )
        },
        {
          path: path.register,
          element: (
            <RegisterLayout>
              <React.Suspense>
                <Register />
              </React.Suspense>
            </RegisterLayout>
          )
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
      path: path.productDetail,
      element: (
        <MainLayout>
          <React.Suspense>
            <ProductDetail />
          </React.Suspense>
        </MainLayout>
      )
    },
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <React.Suspense>
            <ProductList />
          </React.Suspense>
        </MainLayout>
      )
    },
    {
      path: '*',
      element: (
        <MainLayout>
          <React.Suspense>
            <NotFound />
          </React.Suspense>
        </MainLayout>
      )
    }
  ])
  return routeElements
}
