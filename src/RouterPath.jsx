import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import HeroRegister from "./components/HeroRegister";

const rote  = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
               element:<Login></Login>
            },
            {
                path:'/register',
               element:<Register></Register>
            },
            {
                path:'/heroregister',
               element:<HeroRegister></HeroRegister>
            },
            
        ])
    }

])
export default rote;