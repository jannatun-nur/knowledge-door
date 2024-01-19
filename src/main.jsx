import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import Signup from './Home/Signup/Signup';
import AuthProvider from '../public/Provider/AuthProvider';
import SignIn from './Home/SignIn/SignIn';
import About from './Home/Banner/About/About';
import MyCart from './Home/Items/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/signin',
        element:<SignIn/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/cart',
        element:<MyCart/>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <div className='bg-white'>
    <RouterProvider router={router} />
    </div>
   </AuthProvider>
  </React.StrictMode>,
)
