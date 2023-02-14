import React from "react";
import "../../Styles/SinglePage.css";
import Main from "../../Image/SinglePage/Main.png";
import side1 from "../../Image/SinglePage/side1.png";
import side2 from "../../Image/SinglePage/side2.png";
import side3 from "../../Image/SinglePage/side3.png";
import side4 from "../../Image/SinglePage/side4.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import {BsArrowRightCircle} from "react-icons/bs"
import {AiFillStar} from 'react-icons/ai'


const ListPages = () => {
  return (
    <div className="page-main">
      <div className="page-container">
        <div className="page-row">
          <div className="page-row1">
            <div className="page-rowImg">
              <img src={Main} alt="mainpic"></img>
            </div>
          </div>
          {/* </div>
        <div className="page-row"> */}
          <div className="page-row2">
            <div className="page-row2Title">
              <h2>Featured Residential Centers</h2>
            </div>
            <div className="pageLocation">
              <span>
                {" "}
                <IoLocationOutline />
                Lorem ipsum dolor sit amet
              </span>
              <button>View Gallery</button>
            </div>
            <div className="Pagestars">
              <span>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </span>
              <span>5 Rating</span>
              <span>(160)</span>
            </div>
            <div className="pageButtonList">
              <button>Lorem ipsum</button>
              <button>Lorem ipsum</button>
              <button>Lorem ipsum</button>
              <button>Lorem ipsum</button>
            </div>
            <div className="pagePara">
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="pageEnd">
                <div className="pageprice">
                    <p>Starting At</p>
                    <h2> &#8377; 20000/month</h2>
                </div>
                <div className="pageBookBtn">
                 <button>Book Now <BsArrowRight/></button>
                </div>
            </div>
          </div>
        </div>
        <div className="page-row3">
            <div className="paga-rowImg">
                <span><img src={side1} alt="" /></span>
                <span><img src={side2} alt="" /></span>
                <span><img src={side3} alt="" /></span>
                <span><img src={side4} alt="" /></span>
                <span><img src={side1} alt="" /></span>
                <span className="pageMore">
                    <p>More Images</p>
                    <BsArrowRightCircle/>
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ListPages;
