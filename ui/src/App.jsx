import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "users",
                element: <Users />,
            },
            {
                path: "user/new",
                element: <NewUser />,
            }
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
