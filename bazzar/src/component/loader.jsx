import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center min-h-screen bg-white">
      <img src="/loader.png" alt="Loading..." srcset="" />
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 bg-white"></div>
    </div>
  );
};

export default Loading;
