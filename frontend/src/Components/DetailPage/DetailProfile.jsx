import React from "react";
import "../../Styles/DetailProfile.css";
import profile from "../../Image/DetailProfile/ProfileLogo.png";
import { AiFillStar } from "react-icons/ai";
import price from '../../Image/DetailProfile/price.png'
import call from '../../Image/DetailProfile/call.png'
import web from '../../Image/DetailProfile/web.png'
import calender from '../../Image/DetailProfile/calender.png'
import { BsArrowRight } from "react-icons/bs";







const DetailProfile = () => {
  return (
    <div className="profileMain">
      <div className="profileContainer">
        <div className="profileDetails">
          <div>
            <img src={profile} alt="profile"></img>
          </div>
          <div>
            <h2>Renaissance Recovery</h2>
          </div>
          <div>
            <h4>Orange County, California, United States </h4>
          </div>
          <div className="profileStar">
            <span>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <span>5 Rating</span>
            <span>(160)</span>
          </div>
          <div>
            <p>
              Renaissance Recovery provides a variety of addiction and
              outpatient treatment programs in up-scale facilities, including
              adventure therapy.
            </p>
          </div>
        </div>
        <div className="profileContact">
            <div className="profileContactInfo">
                <span>
                    <img src={price} alt="price"></img>
                </span>
                <span>
                   <h5> $20000</h5>
                </span>
                <span>
                   <h5>(Insurance Accepted)</h5>
                </span>
            </div>
            <div  className="profileContactInfo">
                <span>
                    <img src={calender} alt="calender"></img>
                </span>
                <span>
                   <h5> 30+days</h5>
                </span>
            </div>
            <div  className="profileContactInfo">
            <span>
                    <img src={call} alt="call"></img>
                </span>
                <span>
                    <h5>+91-9845327644</h5>
                </span>
            </div>
            <div  className="profileContactInfo">
            <span>
                    <img src={web} alt="website"></img>
                </span>
                <span>
               <a href=" www.renaissancerecovery.co5">www.renaissancerecovery.com</a>
                </span>
            </div>
            <div>
                <button>Enquire Now <BsArrowRight className="profile-icon" /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfile;
