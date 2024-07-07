import React, { useContext } from "react";
import { BsArrowRight, BsNvidia } from "react-icons/bs";
import {
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaAirbnb,
  FaAmazon,
} from "react-icons/fa";
import Marketing from "./Marketing";
import darkContext from "../../Utils/context";
const Testimonials = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  const data = {
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi culpa molestiae repellendus voluptatibus id aspernatur praesentium explicabo minus qui rerum accusantium incidunt commodi corporis alias delectus, eaque voluptatum nisi. Voluptas?",
    author: "Karan Sapra",
    designation: "Software enginner , tesla",
  };
  return (
    <>
      <div
        className={`${
          isDark
            ? "flex justify-center flex-wrap bg-black text-gray-300 pt-10 pb-10"
            : "flex justify-center flex-wrap bg-gray-100 pt-10 pb-10"
        }`}
      >
        <img className="w-52" src="tesla.avif" />
        <div className="ml-10 mt-2">
          <p className="w-[40rem] text-base reviewPara">{data.review}</p>
          <h3 className="text-green-500 font-bold">{data.author}</h3>
          <h4 className="font-semibold">{data.designation}</h4>
          <div className="flex justify-between items-center mt-2 text-lg">
            <FaGoogle />
            <FaMicrosoft />
            <FaApple />
            <FaAirbnb />
            <FaAmazon />
            <BsNvidia />
            <button className="flex text-green-600 justify-between items-center p-2">
              Read More <BsArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <Marketing />
    </>
  );
};

export default Testimonials;
