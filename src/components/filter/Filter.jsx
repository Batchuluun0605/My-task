import React from "react";

const Filter = () => {
  return (
    <div className="relative flex ">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer border rounded-md px-3 py-2 items-center gap-2  border-gray-400 text-gray-900 transition hover:border-gray-600">
          <span className="text-sm font-medium"> Price </span>

          <span className="transition group-open:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
          <div className="w-96 rounded border border-gray-200 bg-white">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                The highest price is $600
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between gap-4">
                <label
                  htmlFor="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="w-full rounded-md border border-gray-200 sm:text-sm outline-none px-2 "
                  />
                </label>

                <label
                  htmlFor="FilterPriceTo"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Filter;
