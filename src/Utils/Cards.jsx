import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Tilt } from "react-tilt";

const Cards = ({ image, para }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale:1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 100, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <>
      <Tilt options={defaultOptions}>
        <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-10">
          <img
            src={image}
            class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
          />
          <div class="">
            <p class="block font-sans text-base font-semibold leading-relaxed p-5  antialiased">
              {para}
            </p>
            <hr />
            <span className="flex justify-center items-center  text-green-500 p-2">
              {" "}
              READ MORE <BsArrowRight className="ml-2 text-green-500" />
            </span>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default Cards;
