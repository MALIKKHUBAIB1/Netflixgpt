import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/Store/userSlice";
import { NETFLIX_LOGO, SIGNOUT_LOGO } from "../utils/constant";

function Header() {
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  }, [dispatch, navigate]);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
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
        src={NETFLIX_LOGO}
        alt="Logo Netflix "
      />
      {user && (
        <div className="flex justify-between">
          <img
            className="w-12 h-12 rounded-lg"
            src={SIGNOUT_LOGO}
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
