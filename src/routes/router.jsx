import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AddToy from "../pages/AddToy";
import AllToys from "../pages/AllToys";
import MyToys from "../pages/MyToys";
import ToyDetails from "../pages/ToyDetails";
import UpdateToy from "../pages/UpdateToy";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "all-toys", element: <AllToys /> },
      {
        path: "add-toy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "update/:id",
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default router;
