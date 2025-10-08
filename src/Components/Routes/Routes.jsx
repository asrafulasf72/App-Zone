import { createBrowserRouter } from "react-router";
import Root from "../../Pages/Root/Root";
import Home from "../../Pages/Home/Home";
import App from "../../Pages/Apps/Apps";
import Installation from "../../Pages/Installation/Installation";
import ErrorPage from "../ErrorPage/ErrorPage";
import Apps from "../../Pages/Apps/Apps";


export const router = createBrowserRouter([
    {
      path:'/',
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      hydrateFallbackElement:<p>Loading...</p>,
      children:[
        {
            index:true,
            Component:Home,
            loader:()=>fetch('./appData.json')
        },
        {
            path:'/apps',
            Component:Apps
        },
        {
            path:'/installation',
            Component:Installation
        }
      ]
    }
  
]);