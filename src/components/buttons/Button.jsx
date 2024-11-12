import React, { useState } from "react";

const Button = () => {
  const buttons = [
    {
      name: "edit",
    },
    {
      name: "view",
    },
    {
      name: "delete",
    },
  ];
  const [active, setActive] = useState("");
  return (
    <section className="sm:px-[80px] md:px-[100px] lg:px-[200px] px-[40px]">
      <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
        {buttons.map((button, index) => (
          <button
            key={index}
            class={`inline-block rounded-md px-4 py-2 text-sm  hover:text-gray-700 focus:relative ${
              active === button.name
                ? "text-red-500 shadow-sm bg-white"
                : "text-gray-500"
            }`}
            value={button.name}
            onClick={() => {
              setActive(button.name);
            }}
          >
            {button.name}
          </button>
        ))}
      </div>
      <a
        className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="#"
      >
        <span className="absolute inset-0 translate-x-1 translate-y-1 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

        <span className="relative block border border-current bg-white px-8 py-3">
          {" "}
          Download{" "}
        </span>
      </a>
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r  from-green-300 via-red-500 to-purple-600"></span>
    </section>
  );
};

export default Button;
