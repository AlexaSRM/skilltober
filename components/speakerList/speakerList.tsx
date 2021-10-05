import ServicesLeft from "../../public/assets/servicesleft.svg";
import ServicesRight from "../../public/assets/servicesright.svg";
import FlowerRight from "../../public/assets/flower.svg";
import FlowerRightSm from "../../public/assets/flower_sm.svg";
const SpeakerList = () => {
  return (
    <div className="text-white font-primary relative">
      <div className="w-full flex justify-center items-center py-10 ">
        <span className="inline-flex">
          <ServicesLeft />
        </span>
        <h1 className="inline-flex md:px-20 px-2 md:text-5xl text-3xl leading-loose">
          Speaker List
        </h1>
        <span className="inline-flex">
          <ServicesRight />
        </span>
      </div>
      <div className="md:pl-20 md:pr-60  px-4 space-y-10 pb-40">
        <div className="flex flex-col lg:px-44 md:px-10 px-6 border-2 border-white rounded-2xl">
          <h1 className="pt-6 pb-3 md:text-3xl text-xl">
            Aniruddha Chatterjee
          </h1>
          <h6 className="text-red-600 pb-8 md:text-base text-sm">
            Guest Speaker
          </h6>
          <p className="pb-6 md:text-lg text-base ">
            Aniruddha Chatterjee is a noob and knows nothing. Aniruddha
            Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a
            noob and knows nothing. Aniruddha Chatterjee is a noob and knows
            nothing. Aniruddha Chatterjee is a noob and knows nothing.
          </p>
        </div>
        <div className="flex flex-col lg:px-44 md:px-10 px-6 border-2 border-white rounded-2xl ">
          <h1 className="pt-6 pb-3 md:text-3xl text-xl">
            Aniruddha Chatterjee
          </h1>
          <h6 className="text-red-600 pb-8 md:text-base text-sm">
            Guest Speaker
          </h6>
          <p className="pb-6 md:text-lg text-base">
            Aniruddha Chatterjee is a noob and knows nothing. Aniruddha
            Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a
            noob and knows nothing. Aniruddha Chatterjee is a noob and knows
            nothing. Aniruddha Chatterjee is a noob and knows nothing.
          </p>
        </div>
        <span className="lg:block hidden absolute top-0 right-0">
          <FlowerRight />
        </span>
        <span className="lg:hidden  md:block hidden absolute top-20 right-0">
          <FlowerRightSm />
        </span>
      </div>
    </div>
  );
};

export default SpeakerList;