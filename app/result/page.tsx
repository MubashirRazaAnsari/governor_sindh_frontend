'use client' ;

import React from 'react'

const page = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mt-10 rounded-lg md:w-[40vw] w-full mx-auto px-4 py-8 flex flex-col justify-center items-center border-2 shadow-md min-w-[300px]">
        <h1 className="text-2xl text-[#044E83] font-extrabold mb-4">
        Grand Entrance Exam Result
        </h1>
        <form className="w-full max-w-lg mt-10" onSubmit={(e)=>(e.preventDefault)}>
          <div className="my-6 mx-3">
            <div className="w-full md:w-full px-3 my-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-registeration"
              >
                Registeration Number<span className="text-red-600">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-registeration"
                type="tel"
                placeholder="Registeration Number"
              />
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
              />
            </div>
            <div className="flex justify-center items-center w-full md:w-full px-3 my-6">
              <button className="flex w-[60%] flex-col items-center font-bold justify-center rounded-lg bg-[#044E83] text-md !leading-none text-white disabled:opacity-60 disabled:hover:cursor-not-allowed xs:text-base h-[46px]" type='submit'>
                GET RESULT
              </button>
            </div>
          </div>
        </form>    
        </div>
    </div>
  )
}

export default page
