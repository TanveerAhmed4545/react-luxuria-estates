import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Contact from "../pages/Contact/Contact";





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
            }
        ]

    }
])

export default router;