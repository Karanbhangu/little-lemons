import React, { useState, useEffect } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <h1>Little-<span className="yellow">Lemons</span></h1>
          </Link>
        </div>
        <div className="righty">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/">Reservations</Link>
            </li>
            <li>
              <Link to="/">Order Online</Link>
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
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link onClick={closeMenu} to="/">
              About
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/">
              Menu
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/">Reservations</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/">Order Online</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/">My Basket</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
