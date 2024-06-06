import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/Applied Jobs',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch('../jobs.json')
      },
      {
        path: '/Blog',
        element:<Blog></Blog>,
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch('../public/jobs.json')
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div>
          <RouterProvider router={router} />
        </div>
   
  </React.StrictMode>,
)
