import { useState } from "react";
import {
  IxApplication,
  IxApplicationHeader,
  IxContent,
  IxContentHeader,
  IxMenu,
  IxMenuItem,
} from "@siemens/ix-react";

import Home_Page from "./pages/Home_Page";
import New_User from "./pages/New_User";
import User_List from "./pages/User_List";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_Page />,
  },
  {
    path: "newuser",
    element: <New_User />,
  },{
    path: "users",
    element: <User_List />,
  },
]);

function App() {
  return (
    <IxApplication>
      <IxApplicationHeader name="My Application">
        <div className="placeholder-logo" slot="logo"></div>
      </IxApplicationHeader>
      <IxMenu>
        <IxMenuItem>Home</IxMenuItem>
        <IxMenuItem>Users</IxMenuItem>
      </IxMenu>

      <IxContent>
        <RouterProvider router={router} />
        {/* <IxContentHeader
          slot="header"
          header-title="My Content Page"
        ></IxContentHeader> */}
      </IxContent>
    </IxApplication>
  );
}

export default App;
