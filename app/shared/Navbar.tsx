"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <nav className="fixed top-0 w-full bg-[#044E83] backdrop-blur-md z-50 shadow-sm gap-10">
      <div className="container w-[95%] mx-auto px-4 sticky">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center w-[90%] justify-evenly custom:ml-[-25px] md:h-20 lg:w-[90%] xl:w-[1300px]">
            <Link href="/" className="text-xl font-bold text-blue-600">
              <Image
                src="/logo.png"
                alt="logo"
                width="90"
                height="113"
                className="mt-10 w-[65px] sm:mt-20 sm:w-[70px] md:w-[80px]"
              />
            </Link>

            <h1 className="text_shadow hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block xl:text-xl px-8">
              Tuition Free Education Program on Latest Technologies
            </h1>
            <h1 className="text-[15px] font-extrabold  text-[#b9d8f3] md:flex sm:flex lg:hidden px-8">
              Tution Free Education
            </h1>
          </div>

          <button
            onClick={toggleMenu}
            className="block md:hidden text-white focus:outline-none"
          >
           <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
          </button>

          <div
            className=
            'hidden sm:hidden md:flex items-center sm:gap-5 text-[#FAF9F6] lg:gap-5 text-sm ml-5'>
            <Link
              href="/"
              className="text-white px-1 py-2 rounded-md hover:text-blue-300"
            >
              Home
            </Link>
            <Link
              href="/apply"
              className="text-white px-1 py-2 rounded-md hover:text-blue-300"
            >
              Apply
            </Link>
            <Link
              href="/jobs"
              className="text-white px-1 py-2 rounded-md hover:text-blue-300"
            >
              Jobs
            </Link>
            <Link
              href="/result"
              className="text-white px-1 py-2 rounded-md hover:text-blue-300"
            >
              Result
            </Link>

            <div className="relative">
              <button
              ref={buttonRef}
                onClick={toggleDropdown}
                className="text-white rounded-lg py-2.5 text-center inline-flex items-center"
                type="button"
              >
                Course{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div
                ref={dropdownRef}
                  className="absolute top-full mt-2 right-0 z-10 bg-white divide-y divide-gray-300 rounded-lg w-64  border-2 shadow-lg "
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <h1 className="font-bold text-[16px]">Core Courses</h1>
                    <Link
                      href="/compulsory/1"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Programming Fundamentals
                    </Link>
                    <Link
                      href="/compulsory/2"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Web2 Using NextJS
                    </Link>
                    <Link
                      href="/compulsory/3"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Earn as You Learn
                    </Link>
                  </div>

                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <h1 className="font-bold text-[14px]">Advanced Courses</h1>
                    <Link
                      href="/tracks/wmd/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Web 3 and Metaverse
                    </Link>
                    <Link
                      href="/tracks/cnc/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Cloud-Native Computing
                    </Link>
                    <Link
                      href="/tracks/ai/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      AI and Deep learning
                    </Link>
                    <Link
                      href="/tracks/iot/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Ambient Computing and IoT
                    </Link>
                    <Link
                      href="/tracks/gbs/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Genomics and BioInformatics
                    </Link>
                    <Link
                      href="/tracks/npa/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-700"
                    >
                      Network Programmability
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden custom:block mt-8 md:hidden lg:hidden bg-[#044E83] text-white space-y-4 px-4 py-4">
            <Link href="/" className="block hover:text-blue-300">
              Home
            </Link>
            <Link href="/apply" className="block hover:text-blue-300">
              Apply
            </Link>
            <Link href="/jobs" className="block hover:text-blue-300">
              Jobs
            </Link>
            <Link href="/result" className="block hover:text-blue-300">
              Result
            </Link>

            <div>
              <button
                onClick={toggleDropdown}
                className="w-full text-left flex items-center gap-1 hover:text-blue-300"
              >
                Course
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div
                  className="relative top-full mt-2 right-0 z-10 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-300 dark:text-white">
                    <h1 className="font-bold text-[16px]">Core Courses</h1>
                    <Link
                      href="/compulsory/1"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Programming Fundamentals
                    </Link>
                    <Link
                      href="/compulsory/2"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Web2 Using NextJS
                    </Link>
                    <Link
                      href="/compulsory/3"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Earn as You Learn
                    </Link>
                  </div>

                  <div className="px-4 py-3 text-sm text-gray-300 dark:text-white">
                    <h1 className="font-bold text-[14px]">Advanced Courses</h1>
                    <Link
                      href="/tracks/wmd/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Web 3 and Metaverse
                    </Link>
                    <Link
                      href="/tracks/cnc/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Cloud-Native Computing
                    </Link>
                    <Link
                      href="/tracks/ai/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      AI and Deep learning
                    </Link>
                    <Link
                      href="/tracks/iot/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Ambient Computing and IoT
                    </Link>
                    <Link
                      href="/tracks/gbs/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Genomics and BioInformatics
                    </Link>
                    <Link
                      href="/tracks/npa/4"
                      className="text-[11px] line-clamp-1 my-1 text-gray-300"
                    >
                      Network Programmability
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
