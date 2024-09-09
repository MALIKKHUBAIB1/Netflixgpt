import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Browse from "./Browse";
import { useSelector } from "react-redux";
import useFetchTrailer from "../Hooks/useFetchTrailer";

function BrowseRoot() {
  const id = useSelector((state) => state?.modal?.id);
  const isOpen = useSelector((state) => state?.modal?.showModal);
  const location = useLocation();

  const isLocation = location.pathname === "/browse";
  useFetchTrailer(id);
  return (
    <>
      <Header />
      {isLocation ? <Browse isOpen={isOpen} /> : <Outlet />}
    </>
  );
}

export default BrowseRoot;
