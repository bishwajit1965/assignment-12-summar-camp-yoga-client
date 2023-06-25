import React from "react";

import sliderOne from "../../assets/slider-1.jpg";
import sliderTwo from "../../assets/slider-2.jpg";
import sliderThree from "../../assets/slider-3.jpg";
import sliderFour from "../../assets/slider-4.jpg";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
          <img src={sliderOne} className="w-full rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-10">
              <h3 className="text-white md:text-5xl font-bold text-center">
                Summer Camp Yoga Learning
              </h3>
              <p className="text-white  w-1/2 mx-auto">
                Thank you for joining us on this transformative path of yoga.
                Together, let us cultivate strength, balance, and serenity, both
                on and off the mat. Take a deep breath, step onto the path, and
                embrace the beauty of your own evolution.
              </p>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
          <img src={sliderTwo} className="w-full rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-10">
              <h3 className="text-white text-5xl font-bold text-center">
                Summer Camp Yoga Learning
              </h3>
              <p className="text-white  w-1/2 mx-auto">
                Thank you for joining us on this transformative path of yoga.
                Together, let us cultivate strength, balance, and serenity, both
                on and off the mat. Take a deep breath, step onto the path, and
                embrace the beauty of your own evolution.
              </p>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
          <img src={sliderThree} className="w-full rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-10">
              <h3 className="text-white text-5xl font-bold text-center">
                Summer Camp Yoga Learning
              </h3>
              <p className="text-white  w-1/2 mx-auto">
                Thank you for joining us on this transformative path of yoga.
                Together, let us cultivate strength, balance, and serenity, both
                on and off the mat. Take a deep breath, step onto the path, and
                embrace the beauty of your own evolution.
              </p>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
          <img src={sliderFour} className="w-full rounded-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-10">
              <h3 className="text-white text-5xl font-bold text-center">
                Summer Camp Yoga Learning
              </h3>
              <p className="text-white w-1/2 mx-auto">
                Thank you for joining us on this transformative path of yoga.
                Together, let us cultivate strength, balance, and serenity, both
                on and off the mat. Take a deep breath, step onto the path, and
                embrace the beauty of your own evolution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
