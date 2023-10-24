import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './Login&Register/Login.jsx'
import Register from './Login&Register/Register.jsx'
import AuthProvider from './AuthProvider.jsx'
import Addproduct from './pages/addproduct/Addproduct.jsx'
import PrivetRoute from './PrivetRoute.jsx'
import BrandProducts from './pages/brandProduct/BrandProducts.jsx'
import ProductDetails from './pages/productdetails/ProductDetails.jsx'
import Cart from './pages/cart/Cart.jsx'
import Update from './pages/update/Update.jsx'
import ErrorPage from './pages/errorpage/Errorpage.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: ([
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addproduct',
        element:<PrivetRoute> <Addproduct></Addproduct></PrivetRoute>
      },
      {
        path: '/product/:id',
        element:<PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
        loader:()=>fetch('https://apple-server-site.vercel.app/products')
      },
      {
        path:'/brand/:id',
        element:<BrandProducts></BrandProducts>,
        loader:()=>fetch('https://apple-server-site.vercel.app/products')
      },
      {
        path: '/mycart',
        element:<PrivetRoute><Cart></Cart></PrivetRoute>,
        loader:()=>fetch('https://apple-server-site.vercel.app/cart')
      },
      {
        path: '/update/:id',
        element:<PrivetRoute><Update></Update></PrivetRoute>,
        loader:({params})=>fetch(`https://apple-server-site.vercel.app/update/${params.id}`)
      },
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} >
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
