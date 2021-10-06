/* eslint-disable @next/next/no-img-element */

import Speaker from "./speaker";
import ServicesLeft from "../public/assets/servicesleft.svg";
import ServicesRight from "../public/assets/servicesright.svg";
import FlowerRight from "../public/assets/flower.svg";
import FlowerRightSm from "../public/assets/flower_sm.svg";

const speakerArray = [
  {
    name: "Aniruddha Chatterjee",
    designation: "Guest Speaker",
    description:
      "Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing.",
    imagePath: "/assets/gita.png",
  },
  {
    name: "Aniruddha Chatterjee",
    designation: "Guest Speaker",
    description:
      "Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing.",
    imagePath: "/assets/gita.png",
  },
  {
    name: "Gita Alekhya Paul",
    designation: "Guest Speaker",
    description:
      "Gita Alekhya Paul is an undergraduate student from SRMIST, Kattankulathur. He is an MLH Fellowship alumni, GitHub Externship alumni and contributor to popular repositories like Amazon AWS Amplify and Hoppscotch. Gita is a keen cybersecurity student, and he is fond of making and breaking web applications. Ask him about Javascript, APIs, Hacking and Open-source!",
    imagePath: "/assets/gita.png",
  },
  {
    name: "Shivam Shekhar",
    designation: "Moderator",
    description:
      "Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing. Aniruddha Chatterjee is a noob and knows nothing.",
    imagePath: "/assets/shivam.jpeg",
  },
];

const SpeakerList = () => {
  return (
    <div className="text-white font-primary relative">
      <div className="w-full flex justify-center items-center py-10 ">
        <span className="inline-flex">
          <ServicesLeft />
        </span>
        <h1 className="inline-flex md:px-20 px-2 md:text-5xl text-2xl leading-loose text-center">
          Speaker List
        </h1>
        <span className="inline-flex">
          <ServicesRight />
        </span>
      </div>

      <div className="md:pl-20 md:pr-60  px-4 space-y-10 pb-40">
        {speakerArray.map((speaker) => (
          <Speaker
            name={speaker.name}
            designation={speaker.designation}
            imagePath={speaker.imagePath}
            description={speaker.description}
          />
        ))}

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
