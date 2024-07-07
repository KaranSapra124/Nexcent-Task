import React from "react";
import { BiSend } from "react-icons/bi";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { PiDribbbleLogo } from "react-icons/pi";

const Footer = () => {
  const companyLinks = [
    "About Us",
    "Blog",
    "Contact Us",
    "Pricing",
    "Testimonials",
  ];
  const supportLinks = [
    "Help Center",
    "Terms Of Service",
    "Legal",
    "Privacy Policy",
    "Status",
  ];
  return (
    <div className="flex flex-wrap justify-evenly pt-5 pb-5 bg-black text-white">
      <div className="flex  sm:mb-5 sm:p-2  flex-col">
        <div className="flex items-center justify-start">
          <img className="w-auto max-w-24" src="logo.png" alt="" srcset="" />
          <span className="sm:text-xl">Nexcent</span>
        </div>
        <div className="flex flex-col">
          <p>Copyright @ 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
          <div className="flex justify-between mt-2 sm:mt-4">
            <BsInstagram />
            <PiDribbbleLogo />
            <BsTwitter />
            <BsYoutube />
          </div>
        </div>
      </div>
      <div className="flex sm:mb-5 sm:p-2 ">
        <div>
          <h2 className="font-semibold mb-2 text-lg">Company</h2>
          <div>
            {companyLinks.map((elem) => {
              return <li className="list-none text-sm mb-2">{elem}</li>;
            })}
          </div>
        </div>
        <div className="ml-5">
          <h2 className="font-semibold mb-2 text-lg">Support</h2>
          <div>
            {supportLinks.map((elem) => {
              return <li className="list-none text-sm mb-2">{elem}</li>;
            })}
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold mb-2 text-lg">Stay up to date</h1>

        <div className="flex  w-fit bg-gray-700 justify-center items-center rounded p-2">
          <input
            className="bg-gray-700"
            type="email"
            placeholder="Enter Your Email..."
            name=""
            id=""
          />
          <BiSend />
        </div>
      </div>
    </div>
  );
};

export default Footer;
