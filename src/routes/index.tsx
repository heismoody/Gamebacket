import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Homepage from "../pages/home";
import PageNotFound from "../pages/errorPage";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <Homepage/>},
            {path: '/404', element:<PageNotFound/>},
        ]
    },
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
])

export default router