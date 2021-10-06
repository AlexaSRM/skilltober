import ServicesLeft from "../../public/assets/servicesleft.svg";
import ServicesRight from "../../public/assets/servicesright.svg";
import Contributions from "../../public/assets/contributions.svg";
import Trophy from "../../public/assets/trophy.svg";
import Flowerleft from "../../public/assets/flowerleft.svg";
import FlowerBottomHome from "../../public/assets/flowerbottomHome.svg";
import FlowerBottomHome_sm from "../../public/assets/flowerBottom_sm.svg";
const LandingPage = () => {
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
      <div className=" md:text-3xl text-xl md:px-40  px-6 pt-6 lg:pb-32 pb-20 md:pb-28 text-center font-font-normal">
        <p className="md:pb-10 pb-4">
          Skilltober is something that is organized by Alexa Developers SRM and
          GitHub Community SRM.
        </p>
        <p>
        Ever wondered about the marvels of Open source? Now {"here's"} your chance! Skilltober is an event that opens a cornucopia of information about open source software, and {"here's"} the good news, it lasts all month!
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-20 px-5 pb-20 space-y-6 text-center">
        <div className="md:text-3xl text-xl flex  lg:pl-10 lg:pr-7 md:px-14 lg:pt-6">
          <span className="pr-4">
            <Contributions />
          </span>
          <p>
            Learn how Open Source Contribution can result in an amazing career
            for you
          </p>
        </div>
        <div className="md:text-3xl text-xl flex  lg:pl-7 lg:pr-12 md:px-14 pb-10 ">
          <span className="pr-4">
            <Trophy />
          </span>
          <p>
            Top 3 participants get amazing swags delivered right to their homes
          </p>
        </div>
      </div>
      <span className="md:block hidden absolute bottom-0 right-0">
        <FlowerBottomHome />
      </span>
      <span className="md:hidden block absolute bottom-0 right-0">
        <FlowerBottomHome_sm />
      </span>
    </div>
  );
};

export default LandingPage;
