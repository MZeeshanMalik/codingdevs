import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #696cff;
  }

  button {
    background-color: #696cff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .menu-icon {
    display: none;
    font-size: 28px;
    cursor: pointer;
    background: none;
    border: none;
    color: #696cff;

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
    &:hover {
      color: #696cff;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 70%;
    height: 100%;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 60px 20px;
    transition: right 0.3s ease-in-out;
    z-index: 1001;

    a {
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 5px;
      text-align: left;
      transition: background-color 0.3s ease, color 0.3s ease;
      &:hover {
        background-color: #696cff;
        color: white;
      }
    }

    /* Close icon visible only on mobile */
    .close-icon {
      font-size: 24px;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      color: #696cff;
      display: block;
    }
  }

  /* Ensure close icon is hidden on larger screens */
  @media (min-width: 769px) {
    .close-icon {
      display: none;
    }
  }
`;

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
      <div className="logo">codingdevs</div>

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
