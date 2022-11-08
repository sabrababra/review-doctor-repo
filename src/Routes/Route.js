import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";


const { createBrowserRouter } = require("react-router-dom");



export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
           {
            path:'/signup',
            element:<SignUp></SignUp>
           },
           {
            path:'/login',
            element:<Login></Login>
           }
            
        ]
    },
    {path:'*',element:<div>not found</div>}
])