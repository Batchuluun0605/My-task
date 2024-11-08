import React from "react";

let a = [
  {
    title: "Google Search",
    type: "Website",
    website: "https://google.com/",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIN-ig-CYut49zgv_OgPnqThWsg2BCotm216cyQrdDuNvi0zzbyEWBA&s=0",
    description:
      "Google Search is a search engine provided and operated by Google. Handling more than 3.5 billion searches per day, it has a 92% share of the global search engine market. It is the most-visited website in the world. Additionally, it is the most...",
    descriptionSource: "Wikipedia",
    descriptionLink: "https://en.wikipedia.org/wiki/Google_Search",
    attributes: {
      "Written in": "Python, C, and C++",
      Category: "Search engine",
      "Date launched": "1998",
    },
  },
];

const Text = () => {
  return (
    <div>
      <marquee direction="top">The coding marqueee</marquee>
      <img
        src={a[0].imageUrl}
        alt=""
        className=" object-contain"
        width={200}
        height={150}
      />
    </div>
  );
};

export default Text;
