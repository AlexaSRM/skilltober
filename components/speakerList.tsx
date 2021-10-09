/* eslint-disable @next/next/no-img-element */

import Speaker from "./speaker";
import ServicesLeft from "../public/assets/servicesleft.svg";
import ServicesRight from "../public/assets/servicesright.svg";
import FlowerRight from "../public/assets/flower.svg";
import FlowerRightSm from "../public/assets/flower_sm.svg";

const speakerArray = [
  {
    name: "Rahul Dhawan",
    designation: "Guest Speaker",
    description:
      "Rahul Dhawan is currently working as a Security Engineer at Postman Inc. He is responsible for the security of Postman Documentation, Mock, and Integration Service. Being an open Souce enthusiast, he contributed to The Metasploit Project in GSoC 18' program and many contributions to other OSS projects. Founding member of WEclub, which aims to encourage and develop entrepreneurship spirit and guide the Entrepreneur mind who has begun their journey as an Entrepreneur.",
    imagePath: "/assets/rahul.png",
  },
  {
    name: "Arkodyuti Saha",
    designation: "Guest Speaker",
    description:
      "An open-source enthusiast who works at GitHub currently focusing on developer education. Previously have worked with organisations like Microsoft, GOJEK, and CISCO in landing their developer relations, product management & GTM strategies. The core has always been 'helping developers', working with product and engineering teams at scale.",
    imagePath: "/assets/arkodyuti.png",
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
      "Shivam Shekhar is an undergraduate student from SRMIST, Kattankulathur. Shivam is a keen UI/UX Designer, and he loves making applications better and appealing. He is a founding member and an administrator at GitHub Community SRM, developing and maintaining open source projects. You can talk to him about Design, Development, and Open-source!",
    imagePath: "/assets/shivam.png",
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
            key={speaker.name}
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
