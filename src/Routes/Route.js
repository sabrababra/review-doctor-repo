const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Blogs } = require("../pages/Blogs/Blogs");
const { default: Home } = require("../pages/Home/Home");
const { default: Services } = require("../pages/Services/Services");

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
        ]
    },
    {path:'*',element:<div>not found</div>}
])