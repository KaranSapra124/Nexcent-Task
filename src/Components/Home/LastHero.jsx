import React, { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import darkContext from "../../Utils/context";

const LastHero = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  const data = {
    para: "Ipsum voluptate quo quod vitae laudantium. Ratione iure quae veniam dolor fugit, recusandae itaque perferendis corporis beatae architecto ut expedita asperiores eius.",
    btn: "Get a Demo",
  };
  return (
    <>
      <div
        className={`${
          isDark
            ? "bg-black text-gray-300 text-center flex justify-center items-center flex-col p-10"
            : "bg-gray-100 text-center flex justify-center items-center flex-col p-10"
        }`}
      >
        <h1 className="text-3xl mb-2 sm:text-xl">{data.para}</h1>
        <button className="bg-green-500 rounded flex justify-center items-center p-2 text-white">
          {data.btn} <BsArrowRight />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default LastHero;
