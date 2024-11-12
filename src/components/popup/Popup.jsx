import React, { useState } from "react";
import { BiTrash, BiX } from "react-icons/bi";

const Popup = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-red-500 text-white flex gap-1 px-3 py-2 rounded-md items-center shadow-red-400"
        onClick={handleClick}
      >
        <BiTrash /> Delete
      </button>
      <div
        className={`fixed inset-0 flex justify-center items-center transition-colors ${
          open ? "visible bg-black/20" : "invisible"
        }`}
        onClick={handleClick}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-xl shadow p-6 transition-all ${
            open ? "scale-100 opcity-100" : "scale-125 opacity-0"
          }`}
        >
          <button
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white  hover:text-gray-600"
            onClick={handleClick}
          >
            <BiX />
          </button>
          <BiTrash size={40} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
