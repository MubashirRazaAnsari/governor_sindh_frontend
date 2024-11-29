import React from "react";

const page = () => {
  return (
    <div className="w-full lg:p-0 p-3 rounded-md md:mt-[100px] mt-10">
      <div className="w-full lg:p-0 p-3 rounded-md">
        <div className="sm:flex block py-3 justify-between mt-5 border-b border-zinc-300 mb-5 pb-3">
          <h1 className="xs:text-5xl text-3xl text-zinc-800 font-bold">
            Course: 4
          </h1>
          <div className="text-sm text-center sm:mt-0 mt-5 rounded-lg text-zinc-800 flex xs:gap-5 gap-2 items-center w-fit">
            <span className="w-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"></path>
              </svg>
            </span>
            <p>
              <span className="font-bold">Duration: </span>( 13 Weeks )
            </p>{" "}
          </div>
        </div>
        <div className="border-b-8 border-zinc-900 md:px-5 px-3 py-5 rounded-md bg-gray-50 mb-14 relative overflow-hidden">
          <h1 className="lg:text-4xl text-3xl font-bold text-zinc-800">
            Ambient Computing and IoT
          </h1>
          <p className="text-zinc-800 mt-2">
            AC-351: Ambient Computing with Voice Assistants and Matter Devices
          </p>
        </div>
        <div className="text-zinc-800">
          <h1 className="lg:text-4xl text-3xl font-bold pb-3 border-b border-zinc-500 ">
            Course Description
          </h1>
          <div className="mt-5">
            <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
              Ambient computing, also commonly referred to as ubiquitous
              computing, is the concept of blending computing power into our
              everyday lives in a way that is embedded into our surroundings -
              invisible but useful. In a multi-device world, people don't want
              to spend their life fussing with technology. An ambient approach
              gets the tech out of your way so you can live your life while
              getting the help you need. It doesn't matter what device you're
              using, what context you're in, whether you're talking, typing, or
              tapping. The technology in your life works together seamlessly.
              Ambient computing uses all aspects of modern-day technology,
              including voice assistants, artificial intelligence, sensors,
              connectivity, cloud computing and more.
            </p>
            <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
              If you were thinking that the IoT and ambient computing sound a
              lot alike, you aren't wrong; the two concepts are intertwined. IoT
              refers to the vast array of devices that connect to the internet
              to optimize their functionality, like smart sensors and smart
              speakers: ambient computing builds on that. Ambient computing
              focuses on the interaction between these devices once they are
              connected.
            </p>
            <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
              Matter, the next-generation smart home standard, solves many smart
              home pain points while bringing all our IoT devices together. Some
              of the biggest tech companies are working together to make Matter
              a unified protocol for future smart homes. These companies include
              Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
              Samsung SmartThings, Google Nest, and Samsung SmartThings will
              support the Matter standard by default for all new devices.
            </p>
            <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
              In this course we will learn to build smart homes with Amazon
              Alexa and Matter protocol.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h1 className="lg:text-4xl text-3xl font-bold pb-3 border-b border-zinc-500 text-zinc-800">
            Course Outline
          </h1>
          <div className="mt-10">
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                1. Alexa Skill Developement
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://developer.amazon.com/en-US/alexa"
                      target="_blank"
                      className="text-blue-600 flex items-center gap-3 w-fit"
                    >
                      <span className="w-[4]">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="text-zinc-800"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </span>
                      <span className="lowercase">alexa</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                2. Alexa with Matter Protocol
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://developer.amazon.com/en-US/alexa/matter"
                      target="_blank"
                      className="text-blue-600 flex items-center gap-3 w-fit"
                    >
                      <span className="w-[4]">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="text-zinc-800"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </span>
                      <span className="lowercase">alexa matter protocol</span>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html"
                      target="_blank"
                      className="text-blue-600 flex items-center gap-3 w-fit"
                    >
                      <span className="w-[4]">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="text-zinc-800"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          ></path>
                        </svg>
                      </span>
                      <span className="lowercase">
                        Alexa connect kit SDK for matter
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
