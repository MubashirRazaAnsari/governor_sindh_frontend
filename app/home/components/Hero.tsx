import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative z-0 w-full h-full  flex flex-col justify-center items-center overflow-hidden bg-opacity-75 bg-[url('/bg_house.jpg')] bg-cover mt-[60px]">
      
      <div className="absolute inset-0 -z-50 h-full w-full bg-zinc-100 bg-opacity-80"></div>

      
      <div className="container flex flex-col md:flex-row items-center justify-center md:ml-[150px] mt-10 h-full px-4 sm:px-6 lg:px-8">
        
        <div className="h-fit w-full md:w-1/2 md:ml-10 text-center md:text-left">
          <h1 className="text-[1.75rem] font-extrabold leading-10 tracking-wider sm:text-5xl custom:text-4xl sm:leading-none lg:text-5xl text-[#044E83]">
            Governor Sindh
          </h1>
          <h2 className="text-[1.5rem] font-normal leading-[2rem] tracking-wider sm:text-3xl sm:leading-[3rem] lg:text-[2.25rem] text-[#044E83]">
            Kamran Khan Tessori
          </h2>
          <h3 className="mt-2 text-[1.5rem] font-semibold leading-[2rem] tracking-wider sm:text-3xl sm:leading-[2rem] lg:text-[2.25rem] text-[#2EB6E8]">
            Certified Cloud
            <br />
            Applied Generative AI
            <br />
            Engineer (GenEng)
          </h3>
          <p className="my-5 text-[1.15rem] font-extrabold text-[#044E83] sm:text-2xl">
            Earn up to $5,000 / month
          </p>
          <p className="text-lg sm:text-xl font-bold text-[#044E83]">
            Now admissions are open in Hyderabad
          </p>
          <div className="mb-7 mt-5 flex flex-col md:flex-row items-center sm:gap-5">
            <Link href="/apply">
              <button className=" w-[150px] rounded-md bg-[#044E83] py-3 text-sm font-semibold tracking-widest text-white transition-all hover:translate-y-1 sm:py-4 sm:text-base">
                APPLY NOW
              </button>
            </Link>
            <div className="mt-4 md:mt-0 md:ml-5 text-center">
              <div className="text-xl sm:text-3xl font-extrabold text-main">
                562,143
              </div>
              <div className="text-xs sm:text-sm tracking-wider text-[#044E83]">
                Accepted Applications
              </div>
            </div>
          </div>
        </div>

        
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/herocover.png"
            width="1600"
            height="1212"
            alt="Hero Background"
            className="h-auto min-w-[300px] md:min-w-[400px] lg:w-[800px] object-contain hidden sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
