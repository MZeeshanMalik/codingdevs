import React from "react";
import HeaderComponent from "../HeaderComponent";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
function Applayout(props) {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Applayout;
