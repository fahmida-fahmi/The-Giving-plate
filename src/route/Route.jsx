import { createBrowserRouter } from "react-router-dom";
import Header from "../share/Header/Header";
import Home from "../pages/Home/Home";
import UserDashboard from "../pages/Dashboard/UserDashboard";
import Login from "../pages/Login/Login";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'dashboard/user',
                element: <UserDashboard></UserDashboard>
            },
            {
                path:'login',
                element:<Login></Login>
            }
        ]
    }
])