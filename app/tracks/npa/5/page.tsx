import React from "react";

const page = () => {
  return (
    <div className="w-full lg:p-0 p-3 rounded-md md:mt-[100px] mt-10">
      <div className="w-full lg:p-0 p-3 rounded-md">
        <div className="sm:flex block py-3 justify-between mt-5 border-b border-zinc-300 mb-5 pb-3">
          <h1 className="xs:text-5xl text-3xl text-zinc-800 font-bold">
            Course: 5
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
            Network Programmability and Automation
          </h1>
          <p className="text-zinc-800 mt-2">
            NPA-361: Network Programmability and Automation
          </p>
        </div>
        <div className="text-zinc-800">
          <h1 className="lg:text-4xl text-3xl font-bold pb-3 border-b border-zinc-500 ">
            Course Description
          </h1>
          <div className="mt-5">
            <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
              Traditional network management techniques can't be effectively
              automated and don't scale well. By implementing network
              programmability based on Application Programming Interfaces, this
              course will assist in overcoming issues of the future and help you
              develop the skills required for the Next-Generation Network
              Engineer.
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
                1. Textbook:
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3"
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
                        Network Programmability Automation Networking Technology
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
