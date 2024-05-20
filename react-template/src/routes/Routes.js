import React from "react";
import PathConstants from "./PathConstants";
import Error404 from "../Layouts/Error404";
import { createBrowserRouter } from "react-router-dom";
import routes from "./dashboardRoutes";
import Layout from "../Layouts/Layout";

const App = React.lazy(() => import("../App"))

const router = createBrowserRouter([
    {
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: PathConstants.HOME,
                element: <Layout/>,
            },
            routes
        ]
    }
  
]);

export default router;