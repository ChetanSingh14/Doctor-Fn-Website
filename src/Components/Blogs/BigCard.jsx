import React from "react";

export default function BigCard({src,head,descr}) {
  return (
    <div className="flex flex-wrap bg-gray-100 my-4 lg:flex-nowrap">
      <img
        src={src}
        alt=""
        className="w-full h-64 object-cover lg:w-1/2 lg:h-auto"
      />
      <div className="lg:m-12 lg:mx-16 m-4 flex flex-col justify-center">
        <h1 className="text-2xl lg:text-3xl">
          {head}
        </h1>
        <hr className="my-4 border-4 border-green-500" />
        <p className="text-base lg:text-xl font-light">
          {descr}
        </p>
      </div>
    </div>
  );
}
