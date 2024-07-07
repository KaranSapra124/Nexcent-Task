import React, { useContext } from "react";
import {
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaAirbnb,
  FaAmazon,
} from "react-icons/fa";
import { BsNvidia } from "react-icons/bs";
import Services from "./Services";
import darkContext from "../../Utils/context";

const OurClients = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  return (
    <>
      <div
        className={`${
          isDark
            ? "flex flex-col justify-center items-center bg-black text-gray-300 p-5"
            : "flex flex-col justify-center items-center p-5"
        }`}
      >
        <h1 className="text-2xl mb-2 font-bold">Our Clients</h1>
        <p className="mt-2  mb-4 text-xl p-2">
          We have been working with some 500+ fortune clients
        </p>
        <div className="flex justify-evenly w-full text-3xl mt-2">
          <FaGoogle />
          <FaMicrosoft />
          <FaApple />
          <FaAirbnb />
          <FaAmazon />
          <BsNvidia />
        </div>
      </div>
      <Services />
    </>
  );
};

export default OurClients;
