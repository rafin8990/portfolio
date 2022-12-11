import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Project/Project";
import DoctorsPortal from "../Pages/Project/ProjectDetails/EmaJohn/DoctorsPortal/DoctorsPortal";
import EmaJohn from "../Pages/Project/ProjectDetails/EmaJohn/EmaJohn";
import SkillShop from "../Pages/Project/ProjectDetails/SkillShop/SkillShop";
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
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/emajohn',
                element:<EmaJohn></EmaJohn>
            },
            {
                path:'/doctorsportal',
                element:<DoctorsPortal></DoctorsPortal>
            },
            {
                path:'/skillshop',
                element:<SkillShop></SkillShop>
            }
        ])
    }
])