import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import SingUp from './SingUp/SingUp.jsx';
import SignIn from './SignIn/SignIn.jsx';
import AuthProvider from '../Provider/AuthProvider.jsx';
import Users from './Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://coffe-store-server-5r7hi91uq-gisans-projects.vercel.app/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffe-store-server-5r7hi91uq-gisans-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SingUp></SingUp>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path:'/users',
    element: <Users></Users>,
    loader: ()=> fetch('https://coffe-store-server-5r7hi91uq-gisans-projects.vercel.app/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
