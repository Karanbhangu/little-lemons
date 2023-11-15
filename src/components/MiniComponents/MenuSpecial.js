import React from "react";
import "../css/MenuSpecial.css";

const MenuSpecial = (props) => {
  return (
    <section className="special">
      <div className="item-picture">
        <img src={props.image} alt="food-picture" />
      </div>
      <div className="item-description">
        <h2>{props.name}</h2>
        <p className="price yellow">${props.price}</p>
        <p className="desc">{props.description}</p>
        <a href="/" className="yellow-btn btn">Order Now</a>
      </div>
    </section>
  );
};

export default MenuSpecial;
