import React, { useContext } from "react";
import Cards from "../../Utils/Cards";
import LastHero from "./LastHero";
import darkContext from "../../Utils/context";

const Marketing = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  const data = [
    {
      image: "Image1.jpg",
      para: "Creating Streamlined Safeguarding Processing With OneRen ",
    },
    {
      image: "Image2.jpg",
      para: "Creating Streamlined Safeguarding Processing With OneRen ",
    },
    {
      image: "Image3.jpg",
      para: "Creating Streamlined Safeguarding Processing With OneRen ",
    },
  ];
  return (
    <>
      <h1
        className={`${
          isDark
            ? "text-2xl text-center font-bold pt-4 text-gray-300 bg-black"
            : "text-2xl text-center font-bold mt-2 pt-4"
        }`}
      >
        Caring is the new marketing!
      </h1>
      <p
        className={`${
          isDark
            ? "text-xl text-center p-5 bg-black text-gray-300"
            : "text-xl text-center p-5"
        }`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
        dignissimos quisquam ducimus ipsam, quibusdam impedit dicta? Nulla, sunt
        sequi dolores nam quisquam quos aperiam corporis
      </p>
      <div
        className={`${
          isDark
            ? "flex justify-evenly pt-10 flex-wrap bg-black text-gray-300"
            : "flex justify-evenly pt-10 flex-wrap"
        }`}
      >
        {data.map((elem) => {
          return <Cards image={elem.image} para={elem.para} />;
        })}
      </div>
      <LastHero />
    </>
  );
};

export default Marketing;
