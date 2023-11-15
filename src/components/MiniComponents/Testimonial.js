import React from 'react'
import '../css/Testimonial.css'

const Testimonial = (props) => {
  return (
    <section className="testimonial">
        <div className="upper-testimonial">
            <img src={props.image} alt="" />
            <div className="person-info">
                <h2>{props.name}</h2>
                <p className="ratings"><span className="yellow">{props.yellowStars}</span> {props.greyStars}</p>
            </div>
        </div>
        <div className="lower-testimonial">
            <p className="user-text">{props.testimonial}</p>
        </div>
    </section>
  )
}

export default Testimonial