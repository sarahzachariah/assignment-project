import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import New_User from "./pages/New_User";
import User_List from "./pages/User_List";

import "./App.css";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "newuser",
                element: <New_User />,
            },
            {
                path: "users",
                element: <User_List />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
