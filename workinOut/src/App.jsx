import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import './App.css'
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    <div className='websiteContainer'>
    <Navbar/>
    <Outlet></Outlet>
    </div>
     
    </>
  )
}

const router = createBrowserRouter([
  {
    
    
    element: <App/>,
  errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      }
      
      
    ]
  }
  
  

]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);