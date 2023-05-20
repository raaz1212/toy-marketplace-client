import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 via-sky-200 to-blue-200 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6 text-center">
          <img
            src="https://i.ibb.co/p1ptSRx/4051578-2120540.jpg"
            alt="Error"
            className="mx-auto h-64 w-64 rounded-full object-cover"
          />
          <h1 className="text-4xl text-gray-800 font-bold mt-4">Oops!</h1>
          <p className="text-gray-600 mt-2">
            Something went wrong. We apologize for the inconvenience.
          </p>
        </div>
        <div className="text-center">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
