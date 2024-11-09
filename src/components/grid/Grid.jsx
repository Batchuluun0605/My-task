import React from "react";

const Grid = () => {
  return (
    <div className="px-[200px]">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-8">
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-1"></div>
        <div class="h-32 rounded-lg bg-gray-200 lg:col-span-5"></div>
      </div>
    </div>
  );
};

export default Grid;
