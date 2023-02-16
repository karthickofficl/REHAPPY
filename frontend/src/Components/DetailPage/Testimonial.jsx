import React from "react";
import quote from "../../Image/Testimonial/quote.png";
import profilePic1 from "../../Image/Testimonial/profilePic1.png";
import profilePic2 from "../../Image/Testimonial/profilePic2.png";
import ProfileUser from "../../Image/Testimonial/ProfileUser.png";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import "../../Styles/Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testiMain">
      <div className="testiContainer">
        <div className="testiRow">
          <div className="testiDetail">
            <div className="testiPic">
              <img src={quote} alt="pic" />
            </div>
            <div className="testiLeft">
              <h6>Testimonials</h6>
              <h4>Don’t Believe me? Check what Client thinks of us...</h4>
            </div>
          </div>
        </div>
        <div className="testiRow">
          <div className="testiCardList">
          <div className="testiColor">
          <div className="testiCard">
              <div className="testiCardTitle">
                <h5>Himura Adreas </h5>
                  <p>Rating</p>
              </div>
              <div className="testiCardPara">
                <p>
                  <IoLocationOutline /> Lorem ipsum dolor sit amet
                </p>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="testiText">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
              <div className="testiCardImg">
                <img src={profilePic1} alt="profile"></img>
              </div>
            </div>
            <div className="testiCard">
              <div className="testiCardTitle">
              <h5>Himura Adreas </h5>
                  <p>Rating</p>
              </div>
              <div className="testiCardPara">
                <p>
                  <IoLocationOutline /> Lorem ipsum dolor sit amet
                </p>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="testiText">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
              <div className="testiCardImg">
                <img src={ProfileUser} alt="profile"></img>
              </div>
            </div>
            <div className="testiCard">
              <div className="testiCardTitle">
              <h5>Himura Adreas </h5>
                  <p>Rating</p>
              </div>
              <div className="testiCardPara">
              <p>
                  <IoLocationOutline /> Lorem ipsum dolor sit amet
                </p>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
              </div>
              <div className="testiText">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
              <div className="testiCardImg" >
                <img src={profilePic2} alt="profile"></img>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
