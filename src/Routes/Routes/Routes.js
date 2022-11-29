import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../LayOut/DeshboardLayOut/AddProduct/AddProduct";
import AllUsers from "../../LayOut/DeshboardLayOut/AllUsers/AllUsers";
import DeshboardLayOut from "../../LayOut/DeshboardLayOut/DeshboardLayOut";
import MyOrders from "../../LayOut/DeshboardLayOut/MyOrders/MyOrders";
import Main from "../../LayOut/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Allcategory from "../../Pages/Home/Category/CategoryData/AllCategory/Allcategory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categoy/:id',
                element: <Allcategory></Allcategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/deshboard',
        element: <PrivateRoute><DeshboardLayOut></DeshboardLayOut></PrivateRoute>,
        children: [
            {
                path: '/deshboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/deshboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/deshboard/addproduct',
                element: <AddProduct></AddProduct>
            }
        ]
    },
    {
        path: '*',
        element: <div className="mx-auto"><img src='https://cdn.ttgtmedia.com/rms/onlineimages/404_error-h_half_column_mobile.png' alt="" /></div>
    }

])
export default router;