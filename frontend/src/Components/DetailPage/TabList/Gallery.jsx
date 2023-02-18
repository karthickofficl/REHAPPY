import React from "react";
import side5 from "../../../Image/SinglePage/side5.png";
import side1 from "../../../Image/SinglePage/side1.png";
import side2 from "../../../Image/SinglePage/side2.png";
import side3 from "../../../Image/SinglePage/side3.png";
import side4 from "../../../Image/SinglePage/side4.png";
import side6 from "../../../Image/SinglePage/side 6.png";

import { BsArrowRightCircle } from "react-icons/bs";

const Gallery = () => {
  return (
    <div className="galleryMain">
      <div className="galleryContainer">
        <div className="galleryImg">
          <img src={side5} alt="mainImage" />
        </div>
        <div className="galleryList">
          <img src={side1} alt="mainImage" />
          <img src={side2} alt="mainImage" />
          <img src={side3} alt="mainImage" />
          <img src={side4} alt="mainImage" />
          <img src={side6} alt="mainimage" />
          <span className="GalleryMore">
            <p>More Images</p>
            <BsArrowRightCircle />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
