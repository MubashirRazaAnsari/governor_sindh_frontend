import Link from "next/link";
import Image from "next/image";
import React from "react";

const Courses = () => {
  const core_course = [
    {
      name: "Programming Fundamentals",
      img: "/programming_fundamentals.jpg",
      pageLink: "/compulsory/1",
    },
    {
      name: "Web2 Using Nextjs",
      img: "/nextjs.jpg",
      pageLink: "/compulsory/2",
    },
    {
      name: "Earn as you Learn",
      img: "/earn_as_you_learn.jpg",
      pageLink: "/compulsory/3",
    },
  ];

  const advanced_course = [
    {
      name: "Artificial Intelligence",
      img: "/AI.jpg",
      pageLink: "/tracks/ai/4",
    },
    {
      name: "Web 3 and Metaverse",
      img: "/metaverse.jpg",
      pageLink: "/tracks/wmd/4",
    },
    {
      name: "Cloud-Native Computing",
      img: "/cloudComputing.jpg",
      pageLink: "/tracks/cnc/4",
    },
    {
      name: "Ambient Computing and IoT",
      img: "/iot.jpg",
      pageLink: "/tracks/iot/4",
    },
    {
      name: "Genomics and Bioinformatics",
      img: "/genomics.jpg",
      pageLink: "/tracks/gbs/4",
    },
    {
      name: "Network Programmability and Automation",
      img: "/automation.jpg",
      pageLink: "/tracks/npa/4",
    },
  ];

  return (
    <div className="xl:w-[1100px] lg:w-[95%] w-[95%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10">
      
      <h1 className="text-3xl font-bold text-[#044E83] mb-6">Core Courses Sequence</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {core_course.map((course, index) => (
          <Link
            key={index}
            className="hover:scale-105 transition-transform duration-200"
            href={course.pageLink}
          >
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <Image
                alt={course.name}
                src={course.img}
                width={450}
                height={300}
                className="object-cover w-full h-[200px]"
              />
              <div className="p-4 text-center text-zinc-600 font-semibold">
                {course.name}
              </div>
            </div>
          </Link>
        ))}
      </div>

      
      <h1 className="text-3xl font-bold text-[#044E83] mt-10 mb-6">
        Advanced Courses
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {advanced_course.map((course, index) => (
          <Link
            key={index}
            className="hover:scale-105 transition-transform duration-200"
            href={course.pageLink}
          >
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <Image
                alt={course.name}
                src={course.img}
                width={450}
                height={300}
                className="object-cover w-full h-[200px]"
              />
              <div className="p-4 text-center text-zinc-600 font-semibold">
                {course.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
