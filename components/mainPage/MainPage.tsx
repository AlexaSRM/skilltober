import Alexadev from "../../public/assests/alexadev.svg";
import GithubSrm from "../../public/assests/githubsrm.svg";
import Heading from "../../public/assests/heading.svg";
import SmallHeading from "../../public/assests/small-heading.svg";
import Trophy from "../../public/assests/trophy.svg";
import MainFlower from "../../public/assests/mainPage_flower.svg";
import FlowerBottomHome from "../../public/assests/flowerbottomHome.svg";
import FlowerBottomHome_sm from "../../public/assests/flowerBottom_sm.svg";
import React from "react";
import Button from "../button/Button";

const MainPage = () => {
  return (
    <div className="text-TextMain font-primary relative h-screen w-full flex flex-col items-center">
      <span className="md:block hidden bottom-1 absolute m-auto">
        <MainFlower />
      </span>

      <span className="md:block hidden top-1 absolute m-auto transform rotate-180">
        <MainFlower />
      </span>

      <div className="flex flex-col justify-between relative sm:mt-40 text-center mt-20">
        <div className="relative flex justify-between text-base sm:flex-row flex-col">
          <span className="m-auto">
            <Alexadev />
          </span>
          <span className="mx-6 my-6 sm:text-base text-lg">and</span>
          <span className="m-auto">
            <GithubSrm />
          </span>
        </div>
        <span className="sm:text-lg sm:py-2 py-5 text-xl">presents</span>
        <div className="relative flex justify-between text-xs">
          <span className="hidden md:block py-5">
            <Heading />
          </span>
          <span className="py-5 md:hidden m-auto">
            <SmallHeading />
          </span>
        </div>
        <span className="py-5 text-2xl">22 October, 2021</span>
        <span className="transform hover:scale-110">
          <Button />
        </span>
      </div>
    </div>
  );
};

export default MainPage;
