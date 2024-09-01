import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ message, statusCode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-9xl font-bold">{statusCode}</h1>
      <p className="text-2xl mt-4">{message}</p>
      {!message && (
        <p className="text-lg mt-2 text-gray-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
      )}
      <Link
        to="/"
        className="mt-8 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-300"
      >
        Go Home
      </Link>
      <img
        src="https://example.com/error-image.png"
        alt="Error Illustration"
        className="w-1/2 mt-10"
      />
    </div>
  );
};

export default ErrorPage;
