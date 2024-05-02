import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import Checkout from "../Pages/Checkout/Checkout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>,
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({params}) => fetch(`http://localhost:5000/servises/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ]
  },
]);

export default router;