import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project";
import Skill from "../Pages/Skill/Skill";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>,
            },
            {
                path:'/skill',
                element:<Skill></Skill>
            },
            {
                path: '/project',
                element:<Project></Project>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ])
    }
])