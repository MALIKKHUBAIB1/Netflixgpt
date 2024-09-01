import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
function Body() {

  const router = createBrowserRouter([
    { path: "/", element: <Login />, errorElement: <ErrorPage /> },
    { path: "/signup", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Body;
