import React, { FunctionComponent } from "react";

type SpeakerPropsType = {
  name: string;
  designation: string;
  description: string;
  imagePath: string;
};

const Speaker: FunctionComponent<SpeakerPropsType> = ({
  name,
  designation,
  description,
  imagePath,
}) => {
  return (
    <div className="flex flex-col   px-6 border-2 border-white rounded-2xl">
      <div className="flex lg:flex-row flex-col ">
        <div className="m-auto pt-8 lg:pt-0">
          <img
            src={imagePath}
            className="rounded-full w-24 md:w-36 lg:w-48 xl:w-52"
            alt={`${name} Image`}
          />
        </div>
        <div className="flex flex-col lg:ml-10 pr-10 pl-6 w-full lg:w-11/12">
          <h1 className="pt-6 pb-3 md:text-3xl text-xl">{name}</h1>
          <h6 className="text-red-600 pb-5 md:text-base text-sm">
            {designation}
          </h6>
          <p className="pb-6 md:text-lg text-base ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
