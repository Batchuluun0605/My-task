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
    </section>
  );
};

export default Button;
