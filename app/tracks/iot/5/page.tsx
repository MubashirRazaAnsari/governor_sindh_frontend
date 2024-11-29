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
            Ambient Computing and IoT
          </h1>
          <p className="text-zinc-800 mt-2">
            AC-361: Embedded Programming using C and Rust
          </p>
        </div>
        <div className="text-zinc-800">
          <h1 className="lg:text-4xl text-3xl font-bold pb-3 border-b border-zinc-500 ">
            Course Description
          </h1>
          <div className="mt-5">
            <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
              This is an introductory course about using the C and Rust
              Programming Languages on "Bare Metal" embedded systems, such as
              Microcontrollers. We will start by introducing embedded systems
              and move on to learn the C++ and Rust programming languages. We'll
              learn about basic programming concepts using C and Rust, then we
              will explore key concepts in electronics, microcontrollers, and
              embedded programming. It is a fast-paced, thorough introduction to
              programming with C and Rust that will have you writing programs,
              solving problems, burning your code on microcontrollers, playing
              with GPIOs, and making things that work in no time.
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
                1. Introduction to the Internet of Things and Embedded Systems
                (Weeks 1 and 2)
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar"
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
                        Intro to 4IR, IoT, and Embedded Systems
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <p>What is the Fourth Industrial Revolution? </p>
                  </div>
                  <div className="">
                    <p>What is IoT? </p>
                  </div>
                  <div className="">
                    <p>Embedded Systems</p>
                  </div>
                  <div className="">
                    <p>Hardware and Software for IoT </p>
                  </div>
                  <div className="">
                    <p>Edge and Cloud Computing </p>
                  </div>
                  <div className="">
                    <p>The future of IoT is AI</p>
                  </div>
                  <div className="">
                    <p>Blockchain in the Internet of Things? </p>
                  </div>
                  <div className="">
                    <p>
                      IoT + AI + Blockchain: The Fourth Industrial Revolution
                      has begun
                    </p>
                  </div>
                  <div className="">
                    <p>
                      How will Matter change the IoT Infrastructure and address
                      issues
                    </p>
                  </div>
                  <div className="">
                    <p>Metaverse and IoT</p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Mid-Term I: Introduction to the Internet of Things (IoT)
                      Quiz in Week 3
                    </p>
                  </div>
                  <div className="">
                    <p>Total Questions: 46</p>
                  </div>
                  <div className="">
                    <p>Total Time: 60 minutes </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                2. The C Reference Book: The C programming language
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Embedded Programming book: Internet of things with ESP8266
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing"
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
                      <span className="lowercase">Download</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                3. Introduction to C Part 1 (Weeks 3B, 4, and 5)
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      C environment Setup for (Windows, Linux, and Mac OS
                      systems)
                    </p>
                  </div>
                  <div className="">
                    <p>Chapters 1-2 of “The C programming language”</p>
                  </div>
                  <div className="">
                    <ul className="list-disc ml-10">
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Variable names types</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Data types and sizes</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Constants</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Arithmetic operations</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Logical and relational operators</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Type conversions</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Bitwise operators</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Conditional expressions</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Programming Assignments will also be given.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                4. C Programming Part 2 (Weeks 6 and 7)
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Topics 3 and 4 of “The C programming language”</p>
                  </div>
                  <div className="">
                    <ul className="list-disc ml-10">
                      <li className="mb-2 mt-2">
                        <div>
                          <p>
                            Control flow statements (else if, loops, switch,
                            break continue)
                          </p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>
                            Function and Program structure(Returning and
                            non-returning, scope rules, Recursion)
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Programming Assignments will also be given.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                5. Introduction to Embedded systems Part 1 (Weeks 8){" "}
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Basic Electronics and Introduction to microcontrollers
                    </p>
                  </div>
                  <div className="">
                    <p>Chapter 1 of “Internet of things with ESP8266”</p>
                  </div>
                  <div className="">
                    <ul className="list-disc ml-10">
                      <li className="mb-2 mt-2">
                        <div>
                          <p>
                            Arduino IDE installation and env setup for ESP8266
                          </p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Burning your first code on ESP8266</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Programming Assignments will also be given.</p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Mid-Term II: C Programming Quiz 1 in Week 9
                    </p>
                  </div>
                  <div className="">
                    <p>Total Questions: 62</p>
                  </div>
                  <div className="">
                    <p>Total Time: 75 minutes </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                6. Introduction to Embedded systems Part 2 (Weeks 9-12)
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Chapters 2-5 of “Internet of things with ESP8266”</p>
                  </div>
                  <div className="">
                    <ul className="list-disc ml-10">
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Connecting your hardware to wifi.</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <a
                            href="https://randomnerdtutorials.com/wifimanager-with-esp8266-autoconnect-custom-parameter-and-manage-your-ssid-and-password/"
                            target="_blank"
                            className="text-blue-600 flex items-center gap-3"
                          >
                            <span className="w-[10px]">
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
                              Wifimanager with esp8266 autoconnect custom
                              parameter and manage your ssid and password
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Reading data from GPIOs</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <a
                            href="https://randomnerdtutorials.com/esp8266-nodemcu-digital-inputs-outputs-arduino/#:~:text=ESP8266%20NodeMCU%20Read%20Digital%20Inputs,number"
                            target="_blank"
                            className="text-blue-600 flex items-center gap-3"
                          >
                            <span className="w-[10px]">
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
                              ESP8266 NodeMCU Digital Inputs and Digital Outputs
                              (Arduino IDE)
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Controlling LEDs</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Reading data from digital sensors.</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <a
                            href="https://tttapa.github.io/ESP8266/Chap16%20-%20Data%20Logging.html"
                            target="_blank"
                            className="text-blue-600 flex items-center gap-3"
                          >
                            <span className="w-[10px]">
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
                            <span className="lowercase">Data logging</span>
                          </a>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <a
                            href="https://circuitdigest.com/microcontroller-projects/nodemcu-datalogger-to-save-temperature-and-pressure-data-on-thinger-io-cloud-platform"
                            target="_blank"
                            className="text-blue-600 flex items-center gap-3"
                          >
                            <span className="w-[10px]">
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
                              nodemcu datalogger to save temperature and
                              pressure data on thinger io cloud platform
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <a
                            href="https://iotdesignpro.com/projects/nodemcu-data-logger-to-upload-data-on-webserver"
                            target="_blank"
                            className="text-blue-600 flex items-center gap-3"
                          >
                            <span className="w-[10px]">
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
                              Nodemcu data logger to upload data on webserver
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Displaying data on the cloud.</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <a
                            href="https://github.com/adesolasamuel/NodeMCU-DHT-Data-to-Arduino-IoT-Cloud"
                            target="_blank"
                            className="text-blue-600 flex items-center gap-3"
                          >
                            <span className="w-[10px]">
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
                              NodeMCU DHT Data to Arduino IoT Cloud
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Controlling controller remotely.</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Control ESP8266 Over the Internet from Anywhere</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Controlling a lamp anywhere in the world.</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Interacting with different web services.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                7. Embedded Programming using Rust (Extra Weeks in the Course)
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://www.rust-lang.org/what/embedded"
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
                      <span className="lowercase">Embedded devices</span>
                    </a>
                  </div>
                  <div className="">
                    <a
                      href="https://crates.io/crates/esp8266"
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
                      <span className="lowercase">esp8266</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                8. Hardware Requirements:
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <ul className="list-disc ml-10">
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Esp8266 (Node MCU)</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Jumper Wires</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Bread Board</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>LEDs</p>
                        </div>
                      </li>
                      <li className="mb-2 mt-2">
                        <div>
                          <p>Sensors: (Dht11, ultrasonic sensor, IR sensor)</p>
                        </div>
                      </li>
                    </ul>
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
