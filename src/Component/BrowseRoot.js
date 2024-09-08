import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Browse from "./Browse";

function BrowseRoot() {
  const location = useLocation();
  const isLocation = location.pathname === "/browse";
  return (
    <>
      <Header />
      {isLocation ? <Browse /> : <Outlet />}
    </>
  );
}

export default BrowseRoot;
