import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Deshboard from "../../Pages/Deshboard/Deshboard";
import Allcategory from "../../Pages/Home/Category/CategoryData/AllCategory/Allcategory";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

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
                path: '/deshboard',
                element: <Deshboard></Deshboard>
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
                element: <Allcategory></Allcategory>
            }
        ]
    }
])
export default router;