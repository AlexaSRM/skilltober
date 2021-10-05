/* eslint-disable @next/next/no-img-element */
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

        <div className="flex flex-col   px-6 border-2 border-white rounded-2xl">
          <div className="flex lg:flex-row flex-col ">
            <span className="my-auto  pr-2  pl-24 lg:pl-0 pt-4 ">
            <img src="/photo.jpg" className="rounded-full lg:w-44 lg:h-12 w-16 h-16 xl:h-16 xl:w-36 " alt ="img"/>
            </span>
            <div className="flex flex-col pr-10 pl-6">
          <h1 className="pt-6 pb-3 md:text-3xl text-xl">
            Aniruddha Chatterjee
          </h1>
          <h6 className="text-red-600 pb-5 md:text-base text-sm">
            Guest Speaker
          </h6>
          <p className="pb-6 md:text-lg text-base ">
            Aniruddha Chatterjee is a noob and knows nothing. Aniruddha
            Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a
            noob and knows nothing. Aniruddha Chatterjee is a noob and knows
            nothing. Aniruddha Chatterjee is a noob and knows nothing.
          </p>
        </div>
        </div>
        </div>
        
        <div className="flex flex-col   px-6 border-2 border-white rounded-2xl">
          <div className="flex lg:flex-row flex-col ">
            <span className="my-auto  pr-2  pl-24 lg:pl-0 pt-4 ">
            <img src="/photo.jpg" className="rounded-full lg:w-44 lg:h-12 w-16 h-16 xl:h-16 xl:w-36" alt ="img"/>
            </span>
            <div className="flex flex-col pr-10 pl-6">
          <h1 className="pt-6 pb-3 md:text-3xl text-xl">
            Aniruddha Chatterjee
          </h1>
          <h6 className="text-red-600 pb-5 md:text-base text-sm">
            Guest Speaker
          </h6>
          <p className="pb-6 md:text-lg text-base ">
            Aniruddha Chatterjee is a noob and knows nothing. Aniruddha
            Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a
            noob and knows nothing. Aniruddha Chatterjee is a noob and knows
            nothing. Aniruddha Chatterjee is a noob and knows nothing.
          </p>
        </div>
        </div>
        </div>
        
        <div className="flex flex-col   px-6 border-2 border-white rounded-2xl">
          <div className="flex lg:flex-row flex-col ">
            <span className="my-auto  pr-2  pl-24 lg:pl-0 pt-4 ">
            <img src="/photo.jpg" className="rounded-full lg:w-44 lg:h-12 w-16 h-16  xl:h-16 xl:w-36" alt ="img"/>
            </span>
            <div className="flex flex-col pr-10 pl-6">
          <h1 className="pt-6 pb-3 md:text-3xl text-xl">
            Aniruddha Chatterjee
          </h1>
          <h6 className="text-red-600 pb-5 md:text-base text-sm">
            Guest Speaker
          </h6>
          <p className="pb-6 md:text-lg text-base ">
            Aniruddha Chatterjee is a noob and knows nothing. Aniruddha
            Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a
            noob and knows nothing. Aniruddha Chatterjee is a noob and knows
            nothing. Aniruddha Chatterjee is a noob and knows nothing.
          </p>
        </div>
        </div>
        </div>
        
        <div className="flex flex-col   px-6 border-2 border-white rounded-2xl">
          <div className="flex lg:flex-row flex-col ">
            <span className="my-auto  pr-2  pl-24 lg:pl-0 pt-4 ">
            <img src="/photo.jpg" className="rounded-full lg:w-44 lg:h-12 w-16 h-16 xl:h-16 xl:w-36" alt ="img"/>
            </span>
            <div className="flex flex-col pr-10 pl-6">
          <h1 className="pt-6 pb-3 md:text-3xl text-xl">
            Aniruddha Chatterjee
          </h1>
          <h6 className="text-red-600 pb-5 md:text-base text-sm">
            Guest Speaker
          </h6>
          <p className="pb-6 md:text-lg text-base ">
            Aniruddha Chatterjee is a noob and knows nothing. Aniruddha
            Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a
            noob and knows nothing. Aniruddha Chatterjee is a noob and knows
            nothing. Aniruddha Chatterjee is a noob and knows nothing.
          </p>
        </div>
        </div>
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
