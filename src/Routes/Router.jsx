import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Homes/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import About_Us from "../Pages/About_Us/About_Us/About_Us";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/shop",
            element : <Shop/>
        },
        {
            path : "/about_us",
            element : <About_Us/>
        },
        {
            path : "/contact",
            element : <Contact/>
        }
    ]
  },
]);
