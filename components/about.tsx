import ServicesLeft from "../public/assets/servicesleft.svg";
import ServicesRight from "../public/assets/servicesright.svg";
import Contributions from "../public/assets/contributions.svg";
import Trophy from "../public/assets/trophy.svg";
import Flowerleft from "../public/assets/flowerleft.svg";
import FlowerBottomHome from "../public/assets/flowerbottomHome.svg";
import FlowerBottomHomeSm from "../public/assets/flowerBottom_sm.svg";
const About = () => {
  return (
    <div className="text-white font-primary relative">
      <span className="md:block hidden absolute top-1/2 left-0">
        <Flowerleft />
      </span>
      <div className="w-full flex justify-center items-center py-10 ">
        <span className="inline-flex">
          <ServicesLeft />
        </span>
        <h1 className="inline-flex  text-center md:px-20  md:text-5xl text-2xl leading-loose font-bold">
          What is Skilltober?
        </h1>
        <span className="inline-flex">
          <ServicesRight />
        </span>
      </div>
      <div className=" md:text-2xl text-xl md:px-40  px-6 pt-6 lg:pb-24 pb-20 md:pb-28 text-center font-font-normal">
        <p className="md:pb-10 pb-4">
          Skilltober is a speaker talk that is organized by Alexa Developers SRM
          and GitHub Community SRM on 22 October 2021 at 6:30 PM (IST).
        </p>
        <p>
          Ever wondered about the marvels of Open Source Contribution and what
          it can do for your career? Now here&apos;s your chance to learn all
          that is to open source and career! Skilltober is an event that opens a
          cornucopia of information about open source software contributions and
          the impact it can have on your career objectives. Learn from the best
          minds in the field and get started with open source with Skilltober!
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-20 px-5 pb-20 space-y-6 text-center w-10/12 mx-auto">
        <div className="md:text-2xl text-xl flex  lg:pl-10 lg:pr-4 md:px-14 lg:pt-6  xl:-space-x-16">
          <span className="pr-6 xl:pr-0">
            <Contributions />
          </span>
          <p className="xl:pr-12 xl:pl-20 pt-1 text-left">
            Learn how Open Source Contribution can result in an amazing career
            for you
          </p>
        </div>
        <div className="md:text-2xl text-xl flex  lg:pl-3 lg:pr-12 md:px-14  pb-10 xl:-space-x-16  ">
          <span className="pr-6">
            <Trophy />
          </span>
          <p className="xl:px-12 pt-1 text-left">
            Top 3 participants get amazing swags delivered right to their homes
          </p>
        </div>
      </div>
      <span className="md:block hidden absolute bottom-0 right-0">
        <FlowerBottomHome />
      </span>
      <span className="md:hidden block absolute bottom-0 right-0">
        <FlowerBottomHomeSm />
      </span>
    </div>
  );
};

export default About;
