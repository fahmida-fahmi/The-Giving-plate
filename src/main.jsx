import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { route } from './route/Route.jsx';
import { Scrollbar } from 'swiper/modules';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Scrollbar> */}
      <RouterProvider router={route} />
    {/* </Scrollbar> */}
  </React.StrictMode>,
)
