import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import UserProfile from "../pages/UserProfile/UserProfile";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/profile',
                element: <UpdateProfile></UpdateProfile>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/userProfile',
                element: <UserProfile></UserProfile>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            }
        ]

    }
])

export default router;