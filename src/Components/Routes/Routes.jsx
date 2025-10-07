import { createBrowserRouter } from "react-router";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import App from "../../Pages/Apps/App";
import Installation from "../../Pages/Installation/Installation";
import ErrorPage from "../ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
      path:'/',
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/app',
            Component:App
        },
        {
            path:'/installation',
            Component:Installation
        }
      ]
    }
  
]);