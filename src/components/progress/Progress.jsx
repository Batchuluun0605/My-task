import React from "react";

const Progress = () => {
  return (
    <div className="p-[50px]">
      <div>
        <span id="ProgressLabel" className="sr-only">
          Loading
        </span>

        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow="75"
          className="relative block rounded-full bg-gray-200"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[10px]">
            <span className="font-bold text-white"> 75% </span>
          </span>
          <span className="block h-4 rounded-full bg-indigo-600 text-center w-[75%]"></span>
        </span>
      </div>
    </div>
  );
};

export default Progress;
