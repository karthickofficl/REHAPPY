import React from "react";
import "../../Styles/DetailStaff.css";
import Staff1 from "../../Image/DetailStaff/staff1.png";
import Staff2 from "../../Image/DetailStaff/staff2.png";
import Staff3 from "../../Image/DetailStaff/staff3.png";
import Staff4 from "../../Image/DetailStaff/staff4.png";
import Staff5 from "../../Image/DetailStaff/staff5.png";


const DetailStaff = () => {
  return (
    <div className="staffMain">
      <div className="staffContainer">
        <div className="staffTitle">
          <h1>Professional Staff</h1>
        </div>
        <div className="staffImgs">
          <div className="staffScroll">
            <span>
              <img src={Staff1} alt="staff-1"></img>
              <h5>Jack petti</h5>
              <p>Chief Executive Officer</p>
            </span>
            <span>
              <img src={Staff2} alt="staff-2"></img>
              <h5>Reese Morgan</h5>
              <p>Chief Financial Officer</p>
            </span>
            <span>
              <img src={Staff3} alt="staff-3"></img>
              <h5>Diana Vo</h5>
              <p>Clinical Director</p>
            </span>
            <span>
              <img src={Staff4} alt="staff-4"></img>
              <h5>Kevin Cataldi</h5>
              <p>Chief Marketing Officer</p>
            </span>
            <span>
              <img src={Staff5} alt="staff-5"></img>
              <h5>Caitlin Garcia</h5>
              <p>Program Director</p>
              </span>
          </div>
        </div>
        <div className="staffArrow"></div>
      </div>
    </div>
  );
};

export default DetailStaff;
