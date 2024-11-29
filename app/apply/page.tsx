"use client";
import React from "react";
import Link from "next/link";

const Apply = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mt-10 rounded-lg md:w-[40%] w-[100%] mx-auto px-4 py-8 flex flex-col justify-center items-center border-2 shadow-md">
        <h1 className="md:text-2xl text-xl text-center text-[#044E83] font-extrabold mb-4">
          Student Course Registration Form
        </h1>
        <h4 className="md:text-sm text-xs">
          Already Applied?{" "}
          <span className="underline text-teal-400 ">
            <Link href="/">Get Admit Card</Link>
          </span>
        </h4>
        <form
          className="sm:w-[100%] w-full mt-10"
          onSubmit={(e) => e.preventDefault}
        >
          <div className="my-6 mx-3">
            <div className="w- md:w-full px-3 my-6">
              <label
                className="block uppercase  tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-full-name"
              >
                Full Name<span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-full-name"
                type="text"
                placeholder="Full Name"
                defaultValue=""
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-father-name"
              >
                Father&apos;s Name<span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-father-name"
                type="text"
                placeholder="Father's Name"
                defaultValue=""
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email<span className="text-red-600">*</span>
              </label>
              <div className="flex">
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-email"
                  type="email"
                  defaultValue=""
                  spellCheck="false"
                  autoComplete="off"
                  placeholder="Email"
                />

                <button className="flex w-[30%] flex-col items-center justify-center rounded-r bg-[#044E83] text-xs !leading-none text-white disabled:opacity-60 disabled:hover:cursor-not-allowed xs:text-base h-[46px]">
                  <span>Send OTP</span>
                </button>
              </div>
            </div>

            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-CNIC"
              >
                CNIC or B-Form Number<span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-CNIC"
                type="tel"
                placeholder="CNIC or B-Form Number"
                defaultValue=""
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-phone"
              >
                Phone Number<span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-phone"
                type="tel"
                placeholder="Phone Number"
                defaultValue=""
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-OTP"
              >
                OTP<span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-OTP"
                type="tel"
                placeholder="OTP"
                defaultValue=""
                spellCheck="false"
                autoComplete="off"
              />
            </div>

            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  defaultValue=""
                  spellCheck="false"
                  autoComplete="off"
                >
                  <option value="karachi">Karachi</option>
                  <option value="Badin">Badin</option>
                  <option value="Bhirkan">Bhirkan</option>
                  <option value="Rajo Khanani">Rajo Khanani</option>
                  <option value="Chak">Chak</option>
                  <option value="Dadu">Dadu</option>
                  <option value="Digri">Digri</option>
                  <option value="Diplo">Diplo</option>
                  <option value="Dokri">Dokri</option>
                  <option value="Ghotki">Ghotki</option>
                  <option value="Haala">Haala</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Islamkot">Islamkot</option>
                  <option value="Jacobabad">Jacobabad</option>
                  <option value="Jamshoro">Jamshoro</option>
                  <option value="Jungshahi">Jungshahi</option>
                  <option value="Kandhkot">Kandhkot</option>
                  <option value="Kandiaro">Kandiaro</option>
                  <option value="Kashmore">Kashmore</option>
                  <option value="Keti Bandar">Keti Bandar</option>
                  <option value="Khairpur">Khairpur</option>
                  <option value="Kotri">Kotri</option>
                  <option value="Larkana">Larkana</option>
                  <option value="Matiari">Matiari</option>
                  <option value="Mehar">Mehar</option>
                  <option value="Mirpur Khas">Mirpur Khas</option>
                  <option value="Mithani">Mithani</option>
                  <option value="Mithi">Mithi</option>
                  <option value="Mehrabpur">Mehrabpur</option>
                  <option value="Moro">Moro</option>
                  <option value="Nagarparkar">Nagarparkar</option>
                  <option value="Naudero">Naudero</option>
                  <option value="Naushahro Feroze">Naushahro Feroze</option>
                  <option value="Naushara">Naushara</option>
                  <option value="Nawabshah">Nawabshah</option>
                  <option value="Nazimabad">Nazimabad</option>
                  <option value="Qambar">Qambar</option>
                  <option value="Qasimabad">Qasimabad</option>
                  <option value="Ranipur">Ranipur</option>
                  <option value="Ratodero">Ratodero</option>
                  <option value="Rohri">Rohri</option>
                  <option value="Sakrand">Sakrand</option>
                  <option value="Sanghar">Sanghar</option>
                  <option value="Shahbandar">Shahbandar</option>
                  <option value="Shahdadkot">Shahdadkot</option>
                  <option value="Shahdadpur">Shahdadpur</option>
                  <option value="Shahpur Chakar">Shahpur Chakar</option>
                  <option value="Shikarpaur">Shikarpaur</option>
                  <option value="Sukkur">Sukkur</option>
                  <option value="Tangwani">Tangwani</option>
                  <option value="Tando Adam Khan">Tando Adam Khan</option>
                  <option value="Tando Allahyar">Tando Allahyar</option>
                  <option value="Tando Muhammad Khan">
                    Tando Muhammad Khan
                  </option>
                  <option value="Thatta">Thatta</option>
                  <option value="Umerkot">Umerkot</option>
                  <option value="Warah">Warah</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-DoB"
              >
                Date of Birth<span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-DoB"
                type="Date"
                placeholder="Date of Birth"
                defaultValue=""
                spellCheck="false"
                autoComplete="off"
              />
            </div>
            <div className="w-full md:w-full px-3 my-6 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Gender<span className="text-red-600">*</span>
              </label>
              <div className="flex justify-evenly">
                <div>
                  <input
                    type="Radio"
                    defaultValue=""
                    spellCheck="false"
                    autoComplete="off"
                  />
                  Male
                </div>
                <div>
                  <input
                    type="Radio"
                    defaultValue=""
                    spellCheck="false"
                    autoComplete="off"
                  />
                  Female
                </div>
              </div>
            </div>
            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-education"
              >
                Highest Education?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-education"
                  defaultValue=""
                  spellCheck="false"
                  autoComplete="off"
                >
                  <option value="n">Please Select</option>
                  <option value="Under middle (Under grade 8)">
                    Under middle (Under grade 8)
                  </option>
                  <option value="Matric / O Levels">Matric / O Levels</option>
                  <option value="Intermediate / A Levels">
                    Intermediate / A Levels
                  </option>
                  <option value="Undergraduate (Bachelor's)">
                    Undergraduate (Bachelor&apos;s)
                  </option>
                  <option value="Graduate (Master's)">
                    Graduate (Master&apos;s)
                  </option>
                  <option value="Post-Graduate (PhD)">
                    Post-Graduate (PhD)
                  </option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-full md:w-full px-3 my-6">
              <button
                className="flex w-[60%] flex-col items-center justify-center rounded-lg bg-[#044E83] text-md !leading-none text-white disabled:opacity-60 disabled:hover:cursor-not-allowed xs:text-base h-[46px]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
