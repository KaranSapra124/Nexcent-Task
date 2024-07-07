import React, { useContext } from "react";
import darkContext from "../../Utils/context"
import Stats from "./Stats";

const Hero = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  const heroData = {
    title: "The unseen of spending three years at pixelgrade.",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus aperiam assumenda facilis perspiciatis inventore cum excepturi eum, est, fuga beatae temporibus blanditiis ipsum modi dignissimos? Itaque mollitia quas laboriosam asperiores?",
    btn: "Learn More",
    image: "Coding.jpg",
  };
  return (
    <>
      <div
        className={`${
          isDark
            ? "flex flex-wrap max-[650]:text-xl justify-center bg-black items-center text-gray-300 p-5"
            : "flex flex-wrap max-[650]:text-xl justify-center  items-center p-5"
        }`}
      >
        <img className="w-96" src={heroData.image} />
        <div className="ml-5">
          <h1 className="text-3xl max-[700px]:text-sm font-semibold">
            {heroData.title}
          </h1>
          <p className="w-[45rem] para mt-2 mb-2">{heroData.desc}</p>
          <button className="bg-green-500 text-white p-2 rounded">
            {heroData.btn}
          </button>
        </div>
      </div>
      <Stats />
    </>
  );
};

export default Hero;
