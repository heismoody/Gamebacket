import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Homepage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import GameDetail from "../pages/gameDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {index: true, element: <Homepage/>},
            {path: '/gamedetail', element:<GameDetail actualprice="20,000" promoprice="50,000"/>},
        ]
    },
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
])

export default router