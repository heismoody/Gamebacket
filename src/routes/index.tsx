import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Homepage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import GameDetail from "../pages/gameDetail";
import PageNotFound from "../pages/errorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <Homepage/>},
            {path: '/gamedetail', element:<GameDetail/>},
            {path: '/errorpage', element:<PageNotFound/>},
        ]
    },
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
])

export default router