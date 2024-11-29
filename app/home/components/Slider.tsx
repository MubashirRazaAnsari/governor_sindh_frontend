"use client";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const sliderImages = [
    "/slideShow1.jpg",
    "/slideShow2.jpg",
    "/slideShow3.jpg",
    "/slideShow4.jpg",
    "/slideShow5.jpg",
    "/slideShow6.jpg",
    "/slideShow7.jpg",
    "/slideShow8.jpg",
  ];

  const visibleSlides = 2;
  const totalImages = sliderImages.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - visibleSlides : prevIndex - visibleSlides
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleSlides) % totalImages);
  };

  return (
    <div>
      <div className="xl:w-[1100px]  lg:w-[90%] w-[90%] m-auto sm:mt-20 mt-10 border-b border-zinc-300 pb-10 overflow-hidden rounded-lg">
        <div
          className="flex transition-transform  duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
          }}
        >
          {sliderImages.map((image, index) => (
            <div key={index} className="shrink-0 w-full sm:w-1/2">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-screen h-[370px] md:h-[450px] sm:h-[350px] object-cover"
              />
            </div>
          ))}
        </div>
        <div className="hidden justify-center gap-2 mt-2 sm:hidden md:flex">
          {Array.from(
            { length: Math.ceil(totalImages / visibleSlides) },
            (_, idx) => (
              <button
                key={idx}
                className={`h-1 w-20 ${
                  idx === Math.floor(currentIndex / visibleSlides)
                    ? "bg-gray-800"
                    : "bg-gray-300"
                } rounded-full`}
                onClick={() => setCurrentIndex(idx * visibleSlides)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
