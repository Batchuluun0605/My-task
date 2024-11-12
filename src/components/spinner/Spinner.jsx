import React from "react";

const Spinner = () => {
  const person = ["red", "green"];
  for (let key in person) {
    console.log(person[key]);
  }
  return (
    <div className="bg-black h-screen">
      <div class="sk-chase ">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
    </div>
  );
};

export default Spinner;
