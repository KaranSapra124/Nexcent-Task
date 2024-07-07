import React, { useContext, useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { SiClubhouse } from "react-icons/si";
import VisibileData from "../../Utils/VisibileData";
import { MdPayments } from "react-icons/md";
import darkContext from "../../Utils/context";
import Design from "./Design";

const Stats = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(100);
  const [clubCount, setClubCount] = useState(0);
  const [clubTarget, setClubTarget] = useState(1000);
  const [eventCount, setEventCount] = useState(0);
  const [eventTarget, setEventTarget] = useState(1500);
  const [payments, setPayments] = useState(0);
  const [paymentTargt, setPaymentTarget] = useState(2000);
  const theme = useContext(darkContext);
  const { isDark } = theme;
  useEffect(() => {
    let interval = "";
    if (count < target) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 5);
    }
    // Clear the interval when the count reaches the target

    return () => clearInterval(interval);
  }, [count, target]);

  useEffect(() => {
    let interval = "";
    if (clubCount < clubTarget) {
      interval = setInterval(() => {
        setClubCount((prevCount) => prevCount + 1);
      }, 5);
    }
    // Clear the interval when the count reaches the target

    return () => clearInterval(interval);
  }, [clubCount, clubTarget]);

  useEffect(() => {
    let interval = "";
    if (eventCount < eventTarget) {
      interval = setInterval(() => {
        setEventCount((prevCount) => prevCount + 1);
      }, 5);
    }
    // Clear the interval when the count reaches the target

    return () => clearInterval(interval);
  }, [eventCount, eventTarget]);
  useEffect(() => {
    let interval = "";
    if (payments < paymentTargt) {
      interval = setInterval(() => {
        setPayments((prevCount) => prevCount + 1);
      }, 5);
    }
    // Clear the interval when the count reaches the target

    return () => clearInterval(interval);
  }, [payments, paymentTargt]);

  // onChange={(isVisible) => {
  //   if (isVisible) {
  //     setCount(0);
  //   }
  // }}
  return (
    <>
      <div
        className={`${
          isDark
            ? "flex justify-evenly pb-8  w-full items-center bg-black text-gray-300 pt-10  flex-wrap serviceCard"
            : "flex justify-evenly pb-8  w-full items-center bg-gray-200 pt-10  flex-wrap serviceCard"
        }`}
      >
        <div>
          <h1 className="text-5xl font-semibold">Helping a local </h1>
          <span className="text-green-500 text-5xl font-semibold">
            business reinvent itself
          </span>
          <p className="text-xl">
            We reached here with our hard work & dedication.
          </p>
        </div>
        <div className="flex text-2xl  count">
          <div className="mr-10">
            <VisibileData
              data={
                <div className="flex justify-center items-center">
                  <FaUserFriends className="text-4xl text-green-400 mr-5" />
                  <div>
                    <div className=" text-4xl font-semibold">
                      {count.toLocaleString()}
                    </div>
                    <p>Members</p>
                  </div>
                </div>
              }
              onChange={(isVisible) => {
                if (isVisible) {
                  setCount(0);
                }
              }}
            ></VisibileData>
            <VisibileData
              data={
                <div className="flex justify-center items-center">
                  <MdPayments className="text-4xl text-green-400 mr-5" />
                  <div>
                    <div className=" text-4xl font-semibold">
                      {payments.toLocaleString()}
                    </div>
                    <p>Payments</p>
                  </div>
                </div>
              }
              onChange={(isVisible) => {
                if (isVisible) {
                  setPayments(0);
                }
              }}
            ></VisibileData>
          </div>
          <div>
            <VisibileData
              data={
                <div className="flex  items-center">
                  <SiClubhouse className="text-4xl text-green-400 mr-5" />
                  <div>
                    <div className=" text-4xl font-semibold">
                      {clubCount.toLocaleString()}
                    </div>
                    <p>Clubs</p>
                  </div>
                </div>
              }
              onChange={(isVisible) => {
                if (isVisible) {
                  setClubCount(0);
                }
              }}
            ></VisibileData>
            <VisibileData
              data={
                <div className="flex justify-center items-center">
                  <MdEventNote className="text-4xl text-green-400 mr-5" />
                  <div className="flex flex-col ">
                    <div className="text-4xl font-semibold">
                      {eventCount.toLocaleString()}
                    </div>
                    <p className="text-start">Events & Bookings</p>
                  </div>
                </div>
              }
              onChange={(isVisible) => {
                if (isVisible) {
                  setEventCount(0);
                }
              }}
            ></VisibileData>
          </div>
        </div>
      </div>
      <Design />
    </>
  );
};

export default Stats;
