import React, { useContext } from "react";
// import { servicesData } from "../../Utils/data";
import { FaUsers } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { MdOutlineHandshake } from "react-icons/md";
import Hero from "./Hero";
import darkContext from "../../Utils/context";

const Services = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  const servicesData = [
    {
      icon: <FaUsers />,
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      icon: <BsBuildings />,
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
    },
    {
      icon: <MdOutlineHandshake />,
      title: "Clubs & Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments.",
    },
  ];

  return (
    <>
      <div
        className={`${
          isDark
            ? "flex bg-black text-gray-300  justify-center flex-col items-center pt-10 pb-10 p-2 text-center"
            : "flex   justify-center flex-col items-center pt-10 pb-10 p-2 text-center"
        }`}
      >
        <h1 className="text-2xl font-semibold">
          Manage your entire community in a single system
        </h1>
        <p>who is nexcent suitable for?</p>
      </div>
      <div
        className={`${
          isDark
            ? "flex bg-black  flex-wrap justify-evenly items-center"
            : "flex  flex-wrap justify-evenly items-center"
        }`}
      >
        {servicesData.map((item, index) => {
          //   console.log(item.icon);
          //   let IconComponent = item.icon; // Retrieve icon component from data
          return (
            <div
              key={index}
              className="card   m-5 mt-2 flex flex-col justify-center items-center "
            >
              <div className="text-2xl text-green-500">{item?.icon}</div>
              <h2 className="heading">{item?.title}</h2>
              <p className="text-black">{item?.desc}</p>
              <hr />
            </div>
          );
        })}
      </div>
      <Hero />
    </>
  );
};

export default Services;
