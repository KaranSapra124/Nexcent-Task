import { Carousel } from "antd";
import React, { useContext } from "react";
import OurClients from "./OurClients";
import darkContext from "../../Utils/context";

const Banner = () => {
  const theme = useContext(darkContext);
  const { isDark } = theme;
  const carouselData = [
    {
      image: "3610761.jpg",
      title: "Custom Web Development",
      description:
        "We specialize in creating bespoke web solutions tailored to your business needs.",
      link: "Register",
    },
    {
      image: "3964906.jpg",
      title: "Responsive Design",
      description:
        "Our websites are designed to look great and function flawlessly across all devices.",
      link: "Contact Us",
    },
    // Add more objects as needed
  ];

  return (
    <>
      <Carousel autoplay>
        {carouselData.map((item, index) => (
          <div
            key={index}
            className={`${
              isDark
                ? "flex max-[500px]:h-full w-64 bg-black text-gray-300 "
                : "flex max-[500px]:h-full w-64 "
            }`}
          >
            <div className="flex flex-wrap-reverse p-2  justify-center items-center">
              <div className="mr-4">
                <h2 className="text-2xl">{item.title}</h2>
                <p>{item.description}</p>
                <button className="bg-green-500 text-white p-2 rounded mt-2">
                  {item.link}
                </button>
              </div>
              <img
                className="h-full w-64 object-cover"
                src={item.image}
                alt={`Slide ${index}`}
              />
            </div>
          </div>
        ))}
      </Carousel>
      <OurClients />
    </>
  );
};

export default Banner;
