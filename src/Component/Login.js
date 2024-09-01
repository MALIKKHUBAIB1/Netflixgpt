import React, { useState } from "react";
import Header from "./Header";
import { Formik, Form } from "formik";
import InputFeild from "../utils/InputFeild";
import {
  isPasswordValid,
  isUserEmailValid,
  isUserNameValid,
} from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Store/userSlice";
function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const disPatch = useDispatch();
  function toggleSignForm() {
    setSignInForm(!isSignInForm);
  }

  function submitHandler(values) {
    if (isSignInForm) {
      delete values.username;
    }

    if (!values) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: values.username,
          })
            .then(() => {
              const { email, password, uid, displayName } = auth.currentUser;
              disPatch(addUser({ email, password, uid, displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              setError(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorCode, errorMessage);
        });
    }
  }

  if (error)
    return <ErrorPage message={error.message} statusCode={error.status} />;

  return (
    <div>
      <Header />

      <div
        className="relative h-screen w-full flex items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg")`,
        }}
      >
        <Formik
          initialValues={{ email: "", password: "", username: "" }}
          onSubmit={submitHandler}
        >
          {({ errors, touched, isValid, dirty }) => {
            return (
              <Form className="w-full max-w-xs md:max-w-md lg:max-w-lg p-8 bg-black bg-opacity-80 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4 text-start">
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                  <InputFeild
                    name="username"
                    type="text"
                    placeholder="Full Name"
                    validate={isUserNameValid}
                  />
                )}
                {touched.username && errors.username && (
                  <span className="text-red-600 text-sm text-start">
                    {errors.username}
                  </span>
                )}

                <InputFeild
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  validate={isUserEmailValid}
                />
                {touched.email && errors.email && (
                  <span className="text-red-600 text-sm text-start">
                    {errors.email}
                  </span>
                )}
                <InputFeild
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  validate={isPasswordValid}
                />
                {error && (
                  <p className="text-sm text-red-600 text-start">
                    {error === "Firebase: Error (auth/invalid-credential)." &&
                      "Invalid email or password"}
                  </p>
                )}
                {touched.password && errors.password && (
                  <span className="text-red-600 text-sm text-start">
                    {errors.password}
                  </span>
                )}
                <button
                  type="submit"
                  className="bg-red-700 my-6 p-4 rounded-md font-bold w-full disabled:cursor-not-allowed"
                  disabled={!isValid || !dirty}
                >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p
                  className="text-gray-300 cursor-pointer"
                  onClick={toggleSignForm}
                >
                  {isSignInForm
                    ? "New to Netflix? Sign up now"
                    : "Already registered? Sign in now"}
                </p>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Login;
