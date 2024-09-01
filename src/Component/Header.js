import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { useSelector } from "react-redux";

function Header() {
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error);
        console.log("An Error occured", error);
      });
  }
  if (error)
    return <ErrorPage message={error.message} statusCode={error.status} />;
  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Logo Netflix "
      />
      {user && (
        <div className="flex justify-between">
          <img
            className="w-12 h-12 rounded-lg"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="signout-logo"
          />
          <button className="mx-2 text-white font-bold" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
