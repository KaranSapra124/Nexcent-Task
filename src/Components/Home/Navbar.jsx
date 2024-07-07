import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Switch } from "antd";
import { BsLightbulb } from "react-icons/bs";
import { GiNightSky } from "react-icons/gi";
import darkContext from "../../Utils/context";
const Navbar = () => {
  const theme = useContext(darkContext);
  const { isDark, setIsDark } = theme;
  const [isActiveLogin, setIsActiveLogin] = useState(false);
  const [isActiveSignUp, setIsActiveSignUp] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  const handleActive = (buttonName) => {
    if (buttonName === "btn1") {
      setIsActiveLogin(!isActiveLogin);
      setIsActiveSignUp(false); // Ensure only one button is active at a time
    } else if (buttonName === "btn2") {
      setIsActiveSignUp(!isActiveSignUp);
      setIsActiveLogin(false); // Ensure only one button is active at a time
    }
  };

  const routes = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Service",
      path: "#services",
    },
    {
      title: "Feature",
      path: "#feature",
    },
    {
      title: "Product",
      path: "#product",
    },
    {
      title: "Testimonials",
      path: "#testimonials",
    },
    {
      title: "FAQ",
      path: "#FAQ",
    },
  ];

  return (
    <>
      <div
        className={`${
          isDark
            ? "flex justify-evenly pt-4 pb-4 max-[500px]:flex-col bg-black text-gray-300"
            : "flex justify-evenly pt-4 pb-4 max-[500px]:flex-col bg-gray-100 text-black"
        }`}
      >
        <div className="text-xl max-[500px]:justify-between flex justify-center  items-center">
          <div className="flex   justify-center items-center">
            <img src="logo.png" className="w-14" alt="Logo" />
            Nexcent
          </div>
          <button
            className="max-[500px]:block hidden text-xl shadow-lg p-1 rounded mr-2"
            onClick={() => {
              setIsToggle(!isToggle);
            }}
          >
            {!isToggle ? <RxHamburgerMenu /> : <RxCross1 />}
          </button>
        </div>
        {!isToggle ? (
          <>
            <div className="flex transition-all  duration-1000 max-[500px]:hidden justify-center items-center">
              {routes.map((elem, index) => (
                <Link key={index} to={elem.path} className="m-2">
                  {elem.title}
                </Link>
              ))}
            </div>
            <div className="flex max-[500px]:hidden justify-center items-center">
              <Switch onClick={()=>setIsDark(!isDark)}
                checkedChildren={<BsLightbulb className="mt-1" />}
                unCheckedChildren={<GiNightSky className="mt-1" />}
                defaultChecked
              />
              <button
                name="btn1"
                onClick={() => handleActive("btn1")}
                className={`${
                  isActiveLogin ? "text-white bg-green-500" : "text-green-500"
                } m-2 px-4 py-2 rounded`}
              >
                Login
              </button>
              <button
                name="btn2"
                onClick={() => handleActive("btn2")}
                className={`${
                  isActiveSignUp ? "text-white bg-green-500" : "text-green-500"
                } m-2 px-4 py-2 rounded`}
              >
                Sign Up
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col">
            <>
              <div className="flex justify-center items-center flex-col">
                {routes.map((elem, index) => (
                  <Link key={index} to={elem.path} className="m-2">
                    {elem.title}
                  </Link>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <Switch
                onClick={()=>setIsDark(!isDark)}
                  checkedChildren={
                    <BsLightbulb
                      className="mt-1"
                      
                    />
                  }
                  unCheckedChildren={
                    <GiNightSky
                      className="mt-1"
                      
                    />
                  }
                  defaultChecked
                />
                <button
                  name="btn1"
                  onClick={() => handleActive("btn1")}
                  className={`${
                    isActiveLogin ? "text-white bg-green-500" : "text-green-500"
                  } m-2 px-4 py-2 rounded`}
                >
                  Login
                </button>
                <button
                  name="btn2"
                  onClick={() => handleActive("btn2")}
                  className={`${
                    isActiveSignUp
                      ? "text-white bg-green-500"
                      : "text-green-500"
                  } m-2 px-4 py-2 rounded`}
                >
                  Sign Up
                </button>
              </div>
            </>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
