import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import PopularMovie from "../pages/PopularMovie";
import TopRatedMovie from "../pages/TopRatedMovie";
import UpcomingMovie from "../pages/UpcomingMovie";
import BrowseRoot from "./BrowseRoot";
import TvShow from "../pages/TvShow";
import SerialMovie from "../pages/SerialMovie";
import WatchList from "../pages/WatchList";
function Body() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    { path: "/signup", element: <Login /> },
    {
      path: "/browse",
      element: <BrowseRoot />,
      children: [
        { path: "popular", element: <PopularMovie /> },
        { path: "toprated", element: <TopRatedMovie /> },
        { path: "upcoming", element: <UpcomingMovie /> },
        { path: "tvshow", element: <TvShow /> },
        { path: "series", element: <SerialMovie /> },
        { path: "watchlist", element: <WatchList /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Body;
