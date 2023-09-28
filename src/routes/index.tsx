import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Homepage from "../pages/home";
import LoginPage from "../pages/login";
import SignupPage from "../pages/signup";
import GameDetail from "../pages/gameDetail";
import ErrorLayout from "../pages/layout/errorLayout";
import ShoppingCart from "../pages/shopping";
import CompleteOrder from "../pages/shopping/completeOrder";
import News from "../pages/news";
import NewsDetails from "../pages/news/newsDetail";
import ContactUs from "../pages/contact";
import AboutUs from "../pages/about";
import TestimonyPage from "../pages/home/testimonials/testimonyPage";
import ComingSoon from "../pages/comingSoon";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorLayout/>,
        children: [
            {index: true, element: <Homepage/>},
            {path: '/news', element:<News/>},
            {path: '/about', element:<AboutUs/>},
            {path: '/contact', element:<ContactUs/>},
            {path: '/testimonials', element: <TestimonyPage/>},
            {path: '/comingsoon', element: <ComingSoon/>},
            {path: '/news/details', element:<NewsDetails/>},
            {path: '/gamedetails', element:<GameDetail/>},
            {path: '/shoppingcart', element:<ShoppingCart/>},
            {path: '/shoppingcart/completeorder', element:<CompleteOrder/>},
        ]
    },
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignupPage/>},
])

export default router