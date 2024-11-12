import React from "react";

const Checkbox = () => {
  return (
    <fieldset>
      <div className="divide-y divide-gray-200 ">
        <label
          htmlFor="Option1"
          className="-mx-4 flex cursor-pointer items-center gap-4 p-4 has-[:checked]:bg-red-600"
        >
          <div className="flex items-center">
            &#8203;
            <input
              type="checkbox"
              className="size-4 rounded border-gray-300"
              id="Option1"
            />
          </div>

          <div>
            <strong className="font-semibold text-gray-900">
              John Clapton
            </strong>
            <p className=" text-pretty  text-gray-700">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </label>
      </div>
    </fieldset>
  );
};

export default Checkbox;
