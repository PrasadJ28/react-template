import React from "react";
import PathConstants from "./PathConstants";
import Error404 from "../Layouts/Error404";
import { createBrowserRouter } from "react-router-dom";
import routes from "./dashboardRoutes";

const App = React.lazy(() => import("../App"))
const Login = React.lazy(() => import("../Layouts/Login"))
const Layout = React.lazy(() => import("../Layouts/Layout"))

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PathConstants.HOME,
                element: <Layout/>,
            },
            {
                path: PathConstants.LOGIN,
                element: <Login/>,
            },
            routes
        ]
    }
  
]);

export default router;