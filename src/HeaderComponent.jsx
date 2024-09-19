import { useState } from "react";
import { Header, NavMenu } from "./pages/HeaderStyles";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Header>
      <img src="../images/coding.png" />
      <div className="logo">
        <span></span>
        <span>codingdevs</span>
      </div>

      <NavMenu isOpen={isOpen}>
        {/* Close Button only on mobile */}
        <span className="close-icon" onClick={closeMenu}>
          ✖
        </span>

        {/* Sidebar Links */}
        <a href="/">Home</a>
        <a href="/contact">contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/">Latest Articles</a>
      </NavMenu>

      {/* Hamburger Menu Icon */}
      <button className="menu-icon" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Profile Button */}
      <button>Get Started</button>
    </Header>
  );
};

export default HeaderComponent;
