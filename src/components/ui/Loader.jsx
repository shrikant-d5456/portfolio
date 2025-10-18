import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="animate-pulse w-[80%] max-w-3xl space-y-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="h-4 w-4 rounded-full bg-gray-300"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>

        <div className="h-10 w-2/3 mx-auto bg-gray-300 rounded"></div>
        <div className="h-5 w-1/3 mx-auto bg-gray-200 rounded"></div>

        <div className="flex justify-center mt-6">
          <div className="h-32 w-32 rounded-full bg-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
        </div>

        <div className="space-y-3 mt-6">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>

        <div className="h-10 w-32 bg-gray-300 rounded mx-auto mt-6"></div>
      </div>
    </div>
  );
};

export default Loader;
