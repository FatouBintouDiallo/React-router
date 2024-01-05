import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Film1 from './compenents/film1';
import Film2 from './compenents/film2';
import Film3 from './compenents/film3';
import Film4 from './compenents/film4';
import Film5 from './compenents/film5';
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/> 
  },
  {
    path:"/film1",
    element: <Film1/> 
  },
  {
    path:"/film2",
    element: <Film2/> 
  },
  {
    path:"/film3",
    element: <Film3/> 
  },
  {
    path:"/film4",
    element: <Film4/> 
  },
  {
    path:"/film5",
    element: <Film5/> 
  },

]
  
)
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
