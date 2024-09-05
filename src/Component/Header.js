import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/Store/userSlice";
import {
  NETFLIX_LOGO,
  SIGNOUT_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constant";
import { toogleGptSeachView } from "../utils/Store/GptSearchSlice";
import LanguageOptions from "../utils/LanguageOptions";
import { changeLanguage } from "../utils/Store/languageconfiguration";

function Header() {
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user);
  const search = useSelector((state) => state.gpt.showGptSearch);

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
    return () => unsubscribe();
  }, [dispatch, navigate]);

  function handleGptSearch() {
    dispatch(toogleGptSeachView());
  }
  function handleSignOut() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error);
        console.log("An Error occured", error);
      });
  }
  function changeHandler(e) {
    dispatch(changeLanguage(e.target.value));
  }

  if (error)
    return <ErrorPage message={error.message} statusCode={error.status} />;
  return (
    <div className=" absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="Logo Netflix " />
      {user && (
        <div className="flex items-center">
          {search && (
            <select
              onChange={changeHandler}
              className="p-3 rounded-lg bg-gray-800 text-white m-2 text-center border border-gray-600 hover:bg-gray-700 focus:ring-2 focus:ring-red-500 focus:outline-none transition duration-300 ease-in-out"
            >
              {SUPPORTED_LANGUAGES.map((lang, i) => (
                <LanguageOptions
                  key={i}
                  name={lang.name}
                  indentifire={lang.indentifire}
                />
              ))}
            </select>
          )}
          <button
            className="p-2 mr-3 w-36 bg-green-300 rounded-xl"
            onClick={handleGptSearch}
          >
            {search ? "Home Page" : " Gpt Search"}
          </button>
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
