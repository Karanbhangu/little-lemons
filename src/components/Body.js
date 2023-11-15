import React from "react";
import "./css/Body.css";
import MenuSpecial from "./MiniComponents/MenuSpecial";
import introPic from "./icons_assets/Mario and Adrian A.jpg";

const Body = () => {
  return (
    <>
      <div className="intro">
        <section className="introduction">
          <h1>
            Little-<span className="yellow">Lemons</span>
          </h1>
          <p className="city">Chicago</p>
          <p className="intro-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Laborum rerum a quidem sequi <br /> consequatur minima enim
            voluptates adipisci recusandae tenetur?
          </p>
          <div className="intro-btns">
            <a href="/" className="btn yellow-btn">
              Reserve Table
            </a>
            <a href="/" className="btn black-btn">
              Order Online
            </a>
          </div>
        </section>
        <section className="introduction-picture">
          <img src={introPic} alt="" />
        </section>
      </div>
      <section className="special-menu">
        <div className="flex-container">
          <h2 className="heading">Specials</h2>
          <a href="/" className="btn black-btn">
            Online Menu
          </a>
        </div>
        <div className="specials">
          <MenuSpecial /> 
        </div>
      </section>
    </>
  );
};

export default Body;
