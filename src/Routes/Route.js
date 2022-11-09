import Main from "../layout/Main";
import AddService from "../pages/AddService/AddService";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Profile from "../pages/Profile/Profile";
import Reviews from "../pages/Reviews/Reviews";
import Service from "../pages/Service/Service";

import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                element: <Service />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/reviews',
                element: <PrivateRoute><Reviews /></PrivateRoute>
            },
            {
                path: '/addServices',
                element: <PrivateRoute><AddService /></PrivateRoute>
            }

        ]
    },
    { path: '*', element: <NotFound></NotFound> }
])