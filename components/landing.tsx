import React from "react";
import Button from "./button";
import SvgRenderer from "./svgRenderer";

const Landing = () => {
  return (
    <div className="text-textPrimary font-primary relative w-full flex flex-col items-center">
      <span className="bottom-1 absolute m-auto opacity-20 md:opacity-100">
        <SvgRenderer filePath="/assets/mainPage_flower.svg" />
      </span>
      <span className="top-1 absolute m-auto opacity-20 md:opacity-100 transform rotate-180">
        <SvgRenderer filePath="/assets/mainPage_flower.svg" />
      </span>
      <div className="flex flex-col justify-between relative sm:mt-40 text-center mt-20">
        <div className="relative flex justify-between text-base sm:flex-row flex-col">
          <div className="m-auto">
            <div className="mx-5">
              <SvgRenderer
                filePath="/assets/alexadev.svg"
                widthClassProperties="w-2/3 md:w-full"
              />
            </div>
          </div>
          <p className="mx-6 my-6 text-lg md:text-xl">and</p>
          <div className="mx-auto">
            <div className="mx-5">
              <SvgRenderer
                filePath="/assets/githubsrm.svg"
                widthClassProperties="w-2/3 md:w-full"
              />
            </div>
          </div>
        </div>
        <span className="text-lg py-2 md:py-5 md:text-xl">presents</span>
        <div className="relative flex justify-between text-xs">
          <div className="my-5 mx-auto w-3/4 md:w-full">
            <SvgRenderer filePath="/assets/heading.svg" />
          </div>
        </div>
        <p className="py-10 text-3xl md:text-5xl">22 October, 2021</p>
        <div className="py-10">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Landing;
