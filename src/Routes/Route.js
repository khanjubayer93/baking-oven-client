import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ProductDetails from "../Home/ProductDetails";
import Main from "../Layout/Main";
import Checkout from "../Pages/Checkout";
import CreateProduct from "../Pages/CreateProduct";
import Login from "../Pages/Login";
import Orders from "../Pages/Orders";
import Payment from "../Pages/Payment";
import Signup from "../Pages/Signup";
import UpdateProduct from "../Pages/UpdateProduct";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/createProduct',
                element: <PrivateRoute><CreateProduct></CreateProduct></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/productDetails/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params?.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: '/payment/:id',
                element: <Payment></Payment>
            }
        ]
    }
])