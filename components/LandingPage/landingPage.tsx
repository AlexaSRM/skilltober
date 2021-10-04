import ServicesLeft from "../../public/assests/servicesleft.svg";
import ServicesRight from "../../public/assests/servicesright.svg";
import Contributions from "../../public/assests/contributions.svg"
import Trophy from "../../public/assests/trophy.svg"
import Flowerleft from "../../public/assests/flowerleft.svg"
import FlowerBottomHome from "../../public/assests/flowerbottomHome.svg"
import FlowerBottomHome_sm from "../../public/assests/flowerBottom_sm.svg"
const LandingPage = () => {
  return (
    <div className="text-white font-primary relative">
        <span className="md:block hidden absolute top-1/2 left-0"><Flowerleft/></span>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
          diam at arcu elementum tristique in eleifend nulla. Aliquam efficitur
          risus eget aliquet feugiat. In scelerisque mattis finibus. Aliquam
          suscipit magna eu congue aliquet. Nam vel ipsum condimentum, ornare
          odio id, eleifend orci. Fusce rutrum fermentum auctor. Donec dapibus
          lacus at est volutpat fermentum vel sagittis dui.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:px-20 px-5 pb-20 space-y-6 text-center">
        <div className="md:text-3xl text-xl flex  lg:pl-10 lg:pr-7 md:px-14 lg:pt-6">
          <span className="pr-4"><Contributions/></span>
          <p>
            Learn how Open Source Contribution can result in an amazing career
            for you
          </p>
        </div>
        <div className="md:text-3xl text-xl flex  lg:pl-7 lg:pr-12 md:px-14 pb-10 ">
          <span className="pr-4"><Trophy/></span>
          <p>
            Top 3 participants get amazing swags delivered right to their homes
          </p>
        </div>
      </div>
      <span className="md:block hidden absolute bottom-0 right-0"><FlowerBottomHome/></span>
      <span className="md:hidden block absolute bottom-0 right-0"><FlowerBottomHome_sm/></span>
    </div>
  );
};

export default LandingPage;
