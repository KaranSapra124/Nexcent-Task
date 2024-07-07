import React, { useContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Banner from "./Components/Home/Banner";
import OurClients from "./Components/Home/OurClients";
import darkContext from "../src/Utils/context";
const MyApp = () => {
  const theme = useContext(darkContext);
  const [isDark, setIsDark] = useState(false);
  const appRoutes = createBrowserRouter([
    {
      element: <Navbar />,
      path: "/",
      children: [
        {
          element: <Banner />,
          path: "/",
        },
      ],
    },
  ]);
  return (
    <>
      <darkContext.Provider value={{ isDark, setIsDark }}>
        <RouterProvider router={appRoutes} />
      </darkContext.Provider>
    </>
  );
};

export default MyApp;
