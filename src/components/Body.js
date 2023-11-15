import React from "react";
import "./css/Body.css";
import MenuSpecial from "./MiniComponents/MenuSpecial";
import introPic from "./icons_assets/Mario and Adrian A.jpg";
import burger from "./icons_assets/burger.png"
import fries from "./icons_assets/Fries.png"
import wraps from "./icons_assets/wraps.png"

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
          <MenuSpecial name="Burger" price="12.99" description="Succulent, juicy, and packed with flavor, our signature burgers are culinary marvels that redefine the art of the classic burger." image={burger}/> 
          <MenuSpecial name="French Fries" price="3.50" description="Step into a world where every bite crunches with delight, where humble potatoes transform into golden masterpieces that accompany our sensational burgers. " image={fries}/>
          <MenuSpecial name="Wraps" price="9.99" description="Embark on a culinary voyage with our exquisite wraps, where taste and convenience intertwine in a harmony of flavors. " image={wraps}/>
        </div>
      </section>
      <section className="testimonials">
        <h2 className="heading" style={{textAlign:"center"}}>Testimonials</h2>
      </section>
    </>
  );
};

export default Body;
