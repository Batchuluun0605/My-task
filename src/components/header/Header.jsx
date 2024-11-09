import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100 border-b py-10  px-[100px]">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Blog Post</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure,
            recusandae.
          </p>
        </div>
        <div className="inline-flex gap-8">
          <button className="inline-block border px-4 py-2  bg-white text-black rounded-md">
            View Website
          </button>
          <button className="inline-block bg-indigo-500 px-4 py-2  text-white rounded-md">
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
