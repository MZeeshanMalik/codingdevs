import React from "react";
import HeaderComponent from "../HeaderComponent";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import GlobalStyles from "./GlobalStyles";
function Applayout(props) {
  return (
    <div>
      <GlobalStyles />
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
