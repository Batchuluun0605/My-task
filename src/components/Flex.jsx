import React from "react";

const Flex = () => {
  return (
    <div>
      <p>
        Today I spent most of the day researching ways to
        <span className="inline-flex items-baseline">
          <img
            src="path/to/image.jpg"
            alt=""
            className="self-center w-5 h-5 rounded-full mx-1"
          />
          <span>Kramer</span>
        </span>
        keeps telling me there is no way to make it work, that
      </p>
      <div class="flex ">
        <div class="flex-1 h-16 bg-red-300 ">01</div>
        <div class="flex-1 h-16  bg-red-400">02</div>
        <div class="flex-1 h-16 bg-red-500">03</div>
      </div>
    </div>
  );
};

export default Flex;
