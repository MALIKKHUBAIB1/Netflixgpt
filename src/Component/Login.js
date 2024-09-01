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
} from "firebase/auth";
import { auth } from "../utils/firebase";
function Login() {
  const [isSignInForm, setSignInForm] = useState(true);
  const [error, setError] = useState(null);
  function toogleSignForm() {
    setSignInForm(!isSignInForm);
  }
  function submitHandler(values) {
    if (isSignInForm) {
      delete values.username;
    }
    //sign in || sign up
    // if the value is null then return this is not requred but best practice to do
    if (!values) return;
    // signup
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed up
          console.log(userCredential);
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorCode, errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_medium.jpg"
          alt="background images"
        />
      </div>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={submitHandler}
      >
        {({ errors, touched, isValid, dirty }) => {
          return (
            <Form className="w-3/12  absolute p-12 bg-black bg-opacity-80 mx-auto my-36 left-0 right-0 items-start text-white  rounded-lg">
              <h1 className="font-bold text-3xl py-4 text-start">
                {isSignInForm ? "sign In" : "Sign up"}
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
                <span className="text-red-600">{errors.username}</span>
              )}

              <InputFeild
                type="email"
                name="email"
                placeholder="enter your mail"
                validate={isUserEmailValid}
              />

              {touched.email && errors.email && (
                <span className="text-red-600">{errors.email}</span>
              )}
              <InputFeild
                type="password"
                name="password"
                placeholder="enter your password"
                validate={isPasswordValid}
              />
              {error && (
                <p className="text-sm text-red-600">
                  {error === "Firebase: Error (auth/invalid-credential)." &&
                    "invalid email or password"}
                </p>
              )}
              {touched.password && errors.password && (
                <span className="text-red-600">{errors.password}</span>
              )}
              <button
                type="submit"
                className="bg-red-700  my-6 p-4 rounded-md font-bold w-full disabled:cursor-not-allowed"
                disabled={!isValid || !dirty}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
              <p
                className="text-gray-300 cursor-pointer"
                onClick={toogleSignForm}
              >
                {isSignInForm
                  ? "New to Netflix? sign up now "
                  : "Already registered signin now"}
              </p>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
export default Login;
