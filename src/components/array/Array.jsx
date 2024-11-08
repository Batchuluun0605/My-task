import React from "react";

const Array = () => {
  let array = [1, 2, 3, 4, 5, 6, 6, 4, 8, 9, 10, 20];
  const lastIndex = array.at(-1);
  const duplicateArray = [...new Set(array)];

  return (
    <div className="flex gap-10">
      <div className="text-red-500 ">
        <p>{lastIndex}</p>
      </div>
      <div className="text-blue-500 ">
        {duplicateArray.map((number) => (
          <p>{number}</p>
        ))}
      </div>
    </div>
  );
};

export default Array;
