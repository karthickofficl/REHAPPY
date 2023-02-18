import React from "react";
import "../../Styles/Explore.css";
import explore1 from "../../Image/explore1.png";
import explore2 from "../../Image/explore2.png";
import explore3 from "../../Image/explore3.png";
import { BsArrowRight } from "react-icons/bs";
// import Carousel from "react-bootstrap/Carousel";
import {BsArrowRightCircle} from "react-icons/bs"
import {BsArrowLeftCircle} from "react-icons/bs"

const explore = [
  {
    image: explore1,
    title: "Colorado",
    content: "Experience natural beauty while in treatment.",
  },
  {
    image: explore2,
    title: "Bali",
    content: "Travel to a tropical oasis for quality treatment",
  },
  {
    image: explore3,
    title: "Arizona",
    content: "Escape to the desert for amazing treatment",
  },
];

const Explore = () => {
  return (
    <div className="explore-main">
      <div className="explore-container">
        <div className="explore-title">
          <h1>EXPLORE TOP TREATMENT DESTINATION AROUND THE WORLD</h1>
        </div>
        <div className="explore-header explore-scroll">
        <span><BsArrowLeftCircle/></span>
          <div className="explore-content">


            {explore.map((item, index) => (
            <div key={index} className='explore-contentMain'>
                            <div className='explore-image'>
                                <img src={item.image} alt='explore'></img>
                            </div>
                            <div className='explore-mainTitle'>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                            </div>
            </div>
            ))}

          </div>
          <span><BsArrowRightCircle/></span>

          <div></div>
        </div>
        <div className="explore-button">
            <button>View All Destination<BsArrowRight className="explore-icon" />
</button>

        </div>
      </div>
    </div>
  );
};

export default Explore;
