import React, { useState, useEffect } from "react";
import "./css/Navbar.css";

export default function Navbar(props) {
  const [menuState, changeMenuState] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY <= 10 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const handleMenu = () => {
    if (menuState === "open") {
      changeMenuState("");
      setIsScrolled(false);
    } else {
      changeMenuState("open");
      setIsScrolled(true);
    }
  };

  const closeMenu = () => {
    changeMenuState("");
  };

  return (
    <>
      <nav
        className={`${isScrolled ? "scrolled-navbar" : "transparent-navbar"}`}
      >
        <div className="lefty">
          <a href="#">
            <h1>Little-<span className="yellow">Lemons</span></h1>
          </a>
        </div>
        <div className="righty">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
          </ul>
        </div>
        <div className="righty-end">
          <a href="/">
            <i className="fa-solid fa-bag-shopping fa-lg"></i> Basket
          </a>
          <a href="/">Login</a>
        </div>
        <div
          className={
            menuState === "open" ? "righty-mobile open" : "righty-mobile"
          }
          onClick={handleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <div
        className={menuState === "open" ? "mobile-Menu open" : "mobile-Menu"}
      >
        <ul>
          <li>
            <a onClick={closeMenu} href="#">
              Home
            </a>
          </li>

          <li>
            <a onClick={closeMenu} href="#">
              About
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#">
              Menu
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#">Reservations</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#">Order Online</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#">My Basket</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#">Login</a>
          </li>
        </ul>
      </div>
    </>
  );
}
