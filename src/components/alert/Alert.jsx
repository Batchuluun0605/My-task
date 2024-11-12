import React from "react";
import Icon1 from "./Icon1";
import Icon2 from "./Icon2";

const Alert = () => {
  return (
    <div
      role="alert"
      className="rounded-xl border border-gray-100 flex items-center  bg-white p-4 max-w-fit"
    >
      <div className="flex items-center gap-4">
        <span className="text-green-600 ">
          <Icon1 />
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            Changes saved
          </strong>

          <p className="mt-1 text-sm text-gray-700">
            Your product changes have been saved.
          </p>
        </div>

        <button className="text-gray-500 transition hover:text-gray-600">
          <span className="sr-only">Dismiss popup</span>
          <Icon2 />
        </button>
      </div>
    </div>
  );
};

export default Alert;
