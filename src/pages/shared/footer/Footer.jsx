import React from "react";
import {
  FaFacebook,
  FaFax,
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="md:flex justify-between w-full gap-4 text-white p-4 bg-[#024980]">
        <div className="">
          <h2 className="text-2xl font-bold">Summer Camp Yoga</h2>
          <div className="flex justify-normal items-center space-x-4 my-5">
            <FaFacebook className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaGithub className="w-6 h-6" />
            <FaInstagram className="w-6 h-6" />
          </div>
          <Link to="/about-us">
            <button className="btn bg-[#012E52] text-white hover:text-gray-700 border-0 shadow-lg btn-sm px-9">
              About Us
            </button>
          </Link>
        </div>
        <div className="">
          <h2 className="text-1xl font-bold border-b-2 mb-2">Contact Us:</h2>
          <p className="flex items-center">
            <FaPhoneAlt className="mr-2" /> 01512456235, 0245235654
          </p>
          <p className="flex items-center">
            {" "}
            <FaFax className="mr-2" /> 0151245624512
          </p>
          <p className="flex items-center">
            <FaMailBulk className="mr-2" /> summer.camp@gmail.com
          </p>
          <p className="flex items-center">
            <FaGlobe className="mr-2" /> https://www.summer.camp.yoga.com
          </p>
        </div>
        <div className="">
          <h2 className="text-1xl font-bold border-b-2 mb-2">Write Us:</h2>
          <address>
            <h2 className="font-bold">Summer Camp Yoga</h2>
            <p>Road no: #13/C Main Road</p> <p>House no: #12/D First Floor</p>
            <p>Dhanmondi</p>
            <p>Bangladesh, Dhaka </p>
            <p></p>
          </address>
        </div>
      </div>
      <div className="bg-[#012E52] py-4 text-center text-white">
        <span>&copy; 2023 All rights reserved to Summer Camp Yoga</span>
      </div>
    </div>
  );
};

export default Footer;
