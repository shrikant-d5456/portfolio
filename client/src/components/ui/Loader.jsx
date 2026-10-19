import React from "react";
import loadingGif from "../../assets/loading.gif";

const Loader = ({ fullScreen = true }) => {
  const containerClass = fullScreen
    ? "fixed inset-0 z-[999] bg-transparent flex items-center justify-center"
    : "w-full h-screen flex items-center justify-center";

  return (
    <div
      className={`${containerClass} flex items-center justify-center`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="rounded-2xl bg-black ">
        <img
          src={loadingGif}
          alt="Loading"
          className="h-screen w-full object-cover "
        />
      </div>
    </div>
  );
};

export default Loader;
