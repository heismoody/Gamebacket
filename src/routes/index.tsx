import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Homepage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import GameDetail from "../pages/gameDetail";
import ErrorLayout from "../pages/layout/errorLayout";
import ShoppingCart from "../pages/shopping";
import CompleteOrder from "../pages/shopping/completeOrder";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <Homepage/>},
            {path: '/gamedetails', element:<GameDetail/>},
            {path: '/shoppingcart', element:<ShoppingCart/>},
            {path: '/shoppingcart/completeorder', element:<CompleteOrder/>},
        ]
    },
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
])

export default router