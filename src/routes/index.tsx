import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Homepage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import GameDetail from "../pages/gameDetail";
import ErrorLayout from "../pages/layout/errorLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <Homepage/>},
            {path: '/gamedetails', element:<GameDetail/>},
        ]
    },
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
])

export default router