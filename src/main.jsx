import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterApp} from './router/AppRouter'
import {

  RouterProvider,
} from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={RouterApp} />
  </React.StrictMode>,
)
