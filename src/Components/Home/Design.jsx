import React, { useContext } from "react";
import Testimonials from "./Testimonials";
import darkContext from "../../Utils/context";

const Design = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  const data = {
    title: "How to design your site footer like we did",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ex saepe asperiores cum magnam voluptas nihil incidunt molestiae veniam atque. Dolorum quos, at et fuga perferendis laboriosam dicta modi blanditiis.",
    btn: "Learn More",
  };
  return (
    <>
      <div className={`${isDark ? "flex justify-center bg-black text-gray-300 items-center flex-wrap pb-2":"flex justify-center items-center flex-wrap pb-2"}`}>
        <img className="w-[20rem]" src="Html.jpg" alt="" />
        <div className="ml-5">
          <h1 className="font-bold text-3xl">{data.title}</h1>
          <p className="w-[35rem] designPara text-xl mt-5 mb-5">{data.desc}</p>
          <button className="bg-green-500 rounded p-2 text-white">{data.btn}</button>
        </div>
      </div>
      <Testimonials/>
    </>
  );
};

export default Design;
