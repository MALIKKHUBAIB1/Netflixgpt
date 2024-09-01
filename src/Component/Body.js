import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/Store/userSlice";
import ErrorPage from "../pages/ErrorPage";
function Body() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    { path: "/", element: <Login />, errorElement: <ErrorPage /> },
    { path: "/signup", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
      } else {
        dispatch(removeUser());
      }
    });
  });

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Body;
