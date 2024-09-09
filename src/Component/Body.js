import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import PopularMovie from "../pages/PopularMovie";
import TopRatedMovie from "../pages/TopRatedMovie";
import UpcomingMovie from "../pages/UpcomingMovie";
import BrowseRoot from "./BrowseRoot";
import TvShow from "../pages/TvShow";
import WatchList from "../pages/WatchList";
import WatchHistory from "../pages/WatchHistory";
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
        { path: "history", element: <WatchHistory /> },
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
