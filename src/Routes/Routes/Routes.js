import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Deshboard from "../../Pages/Deshboard/Deshboard";
import Home from "../../Pages/Home/Home";

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
            }
        ]
    }
])
export default router;