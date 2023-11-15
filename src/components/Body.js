import React from "react";
import "./css/Body.css";
import MenuSpecial from "./MiniComponents/MenuSpecial";
import Testimonial from "./MiniComponents/Testimonial";
import introPic from "./icons_assets/Mario and Adrian A.jpg";
import burger from "./icons_assets/burger.png";
import fries from "./icons_assets/Fries.png";
import wraps from "./icons_assets/wraps.png";

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
          <MenuSpecial
            name="Burger"
            price="12.99"
            description="Succulent, juicy, and packed with flavor, our signature burgers are culinary marvels that redefine the art of the classic burger."
            image={burger}
          />
          <MenuSpecial
            name="French Fries"
            price="3.50"
            description="Step into a world where every bite crunches with delight, where humble potatoes transform into golden masterpieces that accompany our sensational burgers. "
            image={fries}
          />
          <MenuSpecial
            name="Wraps"
            price="9.99"
            description="Embark on a culinary voyage with our exquisite wraps, where taste and convenience intertwine in a harmony of flavors. "
            image={wraps}
          />
        </div>
      </section>
      <section className="testimonials-section">
        <h2 className="heading" style={{ textAlign: "center" }}>
          Testimonials
        </h2>
        <section className="testimonials">
          <Testimonial
            name="Kamal Kumar"
            testimonial="I wish I could have my birthday party here every day. It's not just a restaurant; it's like my food kingdom. Trust me, it's super-duper awesome!. They even have this really cool play area! It's a dream come true!"
            image="https://images.pexels.com/photos/2586353/pexels-photo-2586353.jpeg?auto=compress&cs=tinysrgb&w=600"
            yellowStars={
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </>
            }
            greyStars={
              <>
                <i className="fa-solid fa-star"></i>
              </>
            }
          />
          <Testimonial
            name="Rajav Yadav"
            testimonial="As someone with a discerning palate, finding a restaurant that embodies culinary excellence and ambiance is a rarity. Little-Lemons, however, has effortlessly mastered the art of providing an unparalleled dining experience."
            yellowStars={
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </>
            }
            image="https://images.pexels.com/photos/7752850/pexels-photo-7752850.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Testimonial
            name="Sushmita Sharma"
            image="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
            testimonial="Hi everyone! I just have to tell you about my absolute favorite place in the whole wide world - it's Little-Lemons! It's not just a restaurant; it's like stepping into a  food wonderland!
            The burgers are very delicious. "
            yellowStars={
              <>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </>
            }
          />
        </section>
      </section>
      <section className="more-information">
          <div className="left-info">
            <h2>Little-<span className="yellow">Lemons</span></h2>
            <p style={{marginBottom:"10px"}} className="city">Chicago</p>
            <p className="intro-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aut natus non amet debitis eius sunt assumenda <br /> ipsum autem molestiae consectetur nisi tempora nemo, quidem quasi eligendi tempore a accusantium delectus.</p>
            <br />
            <p className="intro-text">
              Lorem ipsum dolor sit amet  <br /> consectetur adipisicing elit. Labore enim inventore molestias neque et sequi, ipsa eligendi iure nulla error.
            </p>
          </div>
          <div className="right-info">
            <img src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="upper-img" />
            <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="lower-img" />
          </div>
      </section>
      <footer>
        
      </footer>
    </>
  );
};

export default Body;
