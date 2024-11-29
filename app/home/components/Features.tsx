import React from "react";
import Slider from "./Slider";
import Image from "next/image";

const Features = () => {
  const cardImages = [
    "/imageWebsite.jpg",
    "/imageWebsite2.jpg",
    "/imageWebsite3.jpg",
  ];
  return (
    <div className="xl:w-[1100px] lg:w-[95%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10">
      <h1 className="text-center xl:text-[27px] sm:text-[24px] text-lg sm:leading-[2.2rem] leading-[1rem] text-[#044E83] font-extrabold m-auto md:w-[95%]">
        Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
        Developing Billion-Dollar Valued Developers and Solopreneurs
      </h1>
      <p className=" text-centersm:mt-10 mt-7 mb-8 xl:text-[1.15rem] sm:text-[1.1rem] text-[1rem] text-zinc-800 sm:tracking-wider tracking-normal text-justify">
        The pace of technological change is accelerating, big players like
        Microsoft, Amazon, Google, and OpenAI are winning by providing
        infrastructure, large AI foundation models, frameworks, 3D Metaverse
        experiences, and massive distribution networks. Solopreneurs trained in
        this program will win by automating work typically outsourced to
        employees, by directly connecting to customers by eliminating the
        middleman, and by developing vertical metaverses, thus paving the way
        for the first billion-dollar valued solopreneur businesses. This program
        has the objective to train this new breed of billion-dollar
        solopreneurs. These solopreneurs will adopt the ultra-lean business
        model and work independently and will not need to hire employees or
        other team members.
      </p>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 mt-10 m-3 sm:m-0">
        {cardImages.map((image, index) =>
          index === 2 ? (
            <Image
              key={index}
              src={image}
              width="500"
              height="375"
              alt="website"
              className=" shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
            />
          ) : (
            <Image
              key={index}
              src={image}
              width="1100"
              height="900"
              alt="website"
              className=" shadow-2xl shadow-black rounded-lg h-[300px] object-cover w-full"
            />
          )
        )}
      </div>
      

      <Slider />
      
    </div>
  );
};

export default Features;
