import React from "react";
import loadingGif from "../../assets/loading.gif";

const Loader = ({ fullScreen = true }) => {
  const containerClass = fullScreen
    ? "fixed inset-0 z-[999] bg-white"
    : "w-full h-full";

  return (
    <div
      className={`${containerClass} flex items-center justify-center`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="rounded-2xl bg-white ">
        <img
          src={loadingGif}
          alt="Loading"
          className="h-full w-full object-cover "
        />
      </div>
    </div>
  );
};

export default Loader;
