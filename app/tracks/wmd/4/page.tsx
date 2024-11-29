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
            Web 3 and Metaverse
          </h1>
          <p className="text-zinc-800 mt-2">
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </p>
        </div>
        <div className="text-zinc-800">
          <h1 className="lg:text-4xl text-3xl font-bold pb-3 border-b border-zinc-500 ">
            Course Description
          </h1>
          <div className="mt-5">
            <p className="mb-5 lg:text-base text-sm text-zinc-800 font-normal bg-gray-50 md:p-5 p-3 rounded-md">
              In this course you will learn how to develop Web 3.0 DApps, create
              a project, deploy it in production, write smart contracts, unit
              test them, and create user interfaces for them. We will also learn
              to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note
              that in order to develop Web 3 applications you also need to build
              on top of Web 2.0 technologies which we have already covered in
              the previous quarters.
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
                1. Blockchain and Metaverse Theory
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      The Metaverse: And How It Will Revolutionize Everything by
                      Matthew Ball
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0"
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
                        Metaverse book by matthew ball{" "}
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Mastering Blockchain - Fourth Edition by Imran Bashir</p>
                  </div>
                  <div className="">
                    <a
                      href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067"
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
                        Mastering blockchain book by imran bashir{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                2. Smart Contract Development in Solidity
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Solidity Programming Essentials - Second Edition By Ritesh
                      Modi
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181"
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
                        Solidity programming book by Ritesh Modi
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Solidity Learning Repo</p>
                  </div>
                  <div className="">
                    <a
                      href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts"
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
                        Defi dapps solidity smart contracts repo
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                3. Dapp Development using Ethers.js and Next.js 13
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Dapp Learning Repo</p>
                  </div>
                  <div className="">
                    <a
                      href="https://github.com/panaverse/dapps-nextjs"
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
                      <span className="lowercase">Dapps nextjs repo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                4. Tokennomics
              </h1>
              <div className=""></div>
            </div>
            <div>
              <h1 className="sm:text-2xl text-xl text-[#045084] font-extrabold mb-5 mt-10">
                5. Blockchain Project: Create a Token and Launch ICO/IEO/IDO
              </h1>
              <div className="lg:text-base text-sm font-normal text-zinc-800 bg-gray-50 md:p-5 p-3 rounded-md">
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      As you probably know, the ICO ("Initial Coin Offering")
                      industry has been booming, and it's completely reinventing
                      the way new startups kickstart themselves. In fact, have a
                      look at Wikipedia's list of highest crowdfunding projects
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects"
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
                        List_of highest-funded crowdfunding projects
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <p>
                      and you'll notice that blockchain projects absolutely
                      dominate the list.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Understand the difference between IDO vs. IEO vs. ICO</p>
                  </div>
                  <div className="">
                    <a
                      href="https://phemex.com/blogs/what-is-a-dex-ido"
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
                      <span className="lowercase">What is a dex ido</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Also check these links for latest listings:</p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://icodrops.com"
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
                      <span className="lowercase">ICO list at ICO Drops</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://topicolist.com/"
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
                        ICO List of Best New Initial Coin Offerings
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs
                      and IDOsTop-Rated Crypto Token Sales: List of New ICOs,
                      STOs, IEOs and IDOs{" "}
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://cryptototem.com/ico-list/"
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
                      <span className="lowercase">Ico list</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://www.icolistingonline.com"
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
                      <span className="lowercase">ICO List Online</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://coincodex.com/ieo-list/binance/"
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
                      <span className="lowercase">Binance IEO List</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/"
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
                      <span className="lowercase">Binance Launchpad</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://icomarks.com/ieo"
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
                      <span className="lowercase">IEO List</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://polkastarter.com"
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
                      <span className="lowercase">Polkastarter</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 1: How to Launch a IEO on Binance Launchpad
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Read How to Launch an IEO</p>
                  </div>
                  <div className="">
                    <a
                      href="https://appinventiv.com/blog/how-to-launch-an-ieo/"
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
                      <span className="lowercase">How to launch an ieo</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Your first task of the project is to make a google slides
                      presentation on how to start a IEO on the Binance Launch
                      Pad
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04"
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
                        How to Get Started with Binance Launchpool
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="flex items-start gap-3 font-bold">
                      <span className=" w-4">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="text-[#a048e8]"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"></path>
                        </svg>
                      </span>
                      Note : Also document the alternatives to Binance
                      Launchpad.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 2: How to Launch a IDO on Polkastarter
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Review the list of top fundraising platforms</p>
                  </div>
                  <div className="">
                    <a
                      href="https://cryptorank.io/fundraising-platforms"
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
                      <span className="lowercase">Top fundraising platforms</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Your second task of the project is to make a google slides
                      presentation on how to start a IDO on the Polkastarter
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://polkastarter.com/"
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
                      <span className="lowercase">polkastarter</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 3: Create a Pako Token
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      By creating a token and related contracts, you'll also
                      learn how to handle money sent to your contracts, which
                      should come in handy if you want to create some kind of
                      paid decentralized service in the future.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Therefore, for the sake of this chapter, let's imagine
                      that our Pako DApp uses its own coin – the Pako Token. We
                      will create two contracts – one for the token itself and
                      one for the token crowd sale (the ICO).
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Now Create your own Pako ERC20 Token and deploy it on a
                      testnet. The Token should be to use OpenZeppelin
                      contracts. You will use the Hardhat development
                      environment. Also, write at least twenty automated tests.
                      We will be using Solidity and Typescript for development.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 4: Develop Crowd Sale Contract
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      This contract will be responsible for allowing users to
                      exchange ETH for our Pako Token. In order to do that we
                      need to set a price for our token (1 ETH = 100 Pako Token)
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Implement a payable buyToken() function.</p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Emit a BuyTokens event that will log who’s the buyer, the
                      amount of ETH sent and the amount of Token bought
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Transfer 75% of the Tokens to the Crowd Sale contract at
                      deployment time. i.e. Right after the contract is
                      deployed, we want the token contract to send 75% of our
                      token supply to it. While 25% remain in our personal
                      "owner" account.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Transfer the ownership of the Crowd Sale contract (at
                      deploy time) to our frontend address so that we are able
                      to withdraw the ETH.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>You can use the openzeppelin crowd sale contracts</p>
                  </div>
                  <div className="">
                    <a
                      href="https://docs.openzeppelin.com/contracts/4.x/crowdsales"
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
                        Openzeppelin crowd sale contracts
                      </span>
                    </a>
                  </div>
                  <div className="">
                    <p>
                      however you will have to update the code to the latest
                      solidity version.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Also write extensive tests, for example we will simply
                      send a transaction of 1 ETH from a random account to the
                      contract. After the transaction, we should expect the
                      account to have received Pako, while the contract's
                      balance should have been reduced.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="flex items-start gap-3 font-bold">
                      <span className=" w-4">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="text-[#a048e8]"
                          height="16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"></path>
                        </svg>
                      </span>
                      Note : Before you get started writing the token contract
                      we suggest you review the access control
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://docs.openzeppelin.com/contracts/4.x/access-control"
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
                      <span className="lowercase">access-control</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 5: Trying it with MetaMask
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      While it's always good to test your code, it's often more
                      satisfying to see the results of your work wrapped in a
                      nice UI. Let's see how we can deploy our contracts and get
                      some Pako tokens into our MetaMask wallet!
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      We start by running our deployment scripts for the test
                      network so that the new token contracts are uploaded and
                      deployed.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      When it's done, take note of what addresses the contracts
                      were uploaded to and copy it!
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Now head to MetaMask, and send a transaction of 1 ETH to
                      the crowd sale contract address. If your MetaMask wallet
                      doesn't have any ethers, remember that you can use any
                      faucet.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      After the transaction has been confirmed, you might be
                      confused about why you can't see any tokens in your
                      wallet. It turns out that you need to manually add the
                      token address in MetaMask in order to "register" it –
                      after all, there are so many tokens out there, there's no
                      way MetaMask could list them all by default!
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      To do this, open the side menu and click on the "Add
                      token" button to get started:
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Once you're on the token page, click on "Add custom token"
                      and paste in the token contract's address in the address
                      field.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      After confirming that you want to add the token, you
                      should be able to see your Pako balance right next to your
                      ETH balance in the wallet. How cool!
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 6: Trying it with Multisignature Wallets
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Read</p>
                  </div>
                  <div className="">
                    <a
                      href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/"
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
                        Multisignature wallets can keep your coins safer if you
                        use them right
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Now use Gnosis Safe with multi-sigs to do what you did in
                      the last part
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://gnosis-safe.io/"
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
                      <span className="lowercase">Gnosis safe</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 7: Sending Tokens using Ethers.js
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Write a Typescript program to send Pako Token to some
                      friend's address using Ethers.js.
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <a
                      href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/"
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
                        You may follow this tutorial
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p className="text-lg font-extrabold text-zinc-800">
                      Project Part 8 Advance: Create, Deploy, Mint, and Sell an
                      NFT
                    </p>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Read this NFT tutorial series</p>
                  </div>
                  <div className="">
                    <a
                      href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/"
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
                        How to write and deploy an nft
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Create a NFT contract using the OpenZepplen ERC721 NFT
                      Standard{" "}
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://docs.openzeppelin.com/contracts/4.x/erc721"
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
                        NFT contract using OpenZepplen ERC721 NFT Standard
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>You may use the Preset ERC721 contract</p>
                  </div>
                  <div className="">
                    <a
                      href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets"
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
                      <span className="lowercase">Present ERC721 contract</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>
                      Deploy your NFT contract on a testnet, mint it, and view
                      it on the MetaMask wallet and list it on OpenSea
                      Marketplace for sale.
                    </p>
                  </div>
                  <div className="">
                    <a
                      href="https://opensea.io/"
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
                      <span className="lowercase">opensea</span>
                    </a>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <div className="">
                    <p>Implement a ERC721 Market </p>
                  </div>
                  <div className="">
                    <a
                      href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/"
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
                        How to implement an erc721 market
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
