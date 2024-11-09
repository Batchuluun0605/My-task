import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Input = () => {
  return (
    <div className="relative max-w-[200px]">
      <label htmlFor="email" className="flex items-center p-2">
        <input
          type="email"
          placeholder="hohn@gmail.com"
          className="border rounded-md p-2"
        />
        <span className=" absolute end-0 pr-1 ">
          <MdOutlineAlternateEmail />
        </span>
      </label>
    </div>
  );
};

export default Input;
