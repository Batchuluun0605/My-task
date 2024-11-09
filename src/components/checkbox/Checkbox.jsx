import React from "react";

const Checkbox = () => {
  return (
    <div className=" max-w-[400px] mx-auto">
      <fieldset>
        <legend className="sr-only">Checkboxes</legend>

        <div className="divide-y divide-gray-200">
          <label
            htmlFor="Option1"
            className="-mx-4 flex cursor-pointer items-start gap-4 p-4 has-[:checked]:bg-red-600"
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
              <strong className="font-medium text-gray-900">
                John Clapton
              </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </label>

          <label
            htmlFor="Option2"
            className="-mx-4 flex cursor-pointer items-start gap-4 p-4 has-[:checked]:bg-blue-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option2"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900">Peter Mayer</strong>

              <p className="mt-1 text-pretty text-sm text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto!
              </p>
            </div>
          </label>

          <label
            htmlFor="Option3"
            className="-mx-4 flex cursor-pointer items-start gap-4 p-4 has-[:checked]:bg-blue-50"
          >
            <div className="flex items-center">
              &#8203;
              <input
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="Option3"
              />
            </div>

            <div>
              <strong className="font-medium text-gray-900"> Eric King </strong>

              <p className="mt-1 text-pretty text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, mollitia.
              </p>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default Checkbox;
