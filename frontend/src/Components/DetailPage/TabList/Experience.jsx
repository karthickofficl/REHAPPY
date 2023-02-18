import React from "react";
import Gear from "../../../Image/Tabs/Experience/gear 1.png";
import Hotel from "../../../Image/Tabs/Experience/hotel 1.png";
import Landscape from "../../../Image/Tabs/Experience/landscape 1.png";
import checkList from "../../../Image/Tabs/Experience/checklist 1.png";

const Experience = () => {
  return (
    <div className="experMain">
      <div className="experContain">
        <div className="experList">
          <div className="experTitle">
            <img src={Gear} alt="gear"></img>
            <span>Special Considerations</span>
          </div>
          <div className="experpara">
            <p>Gender-specific groups</p>
          </div>
        </div>
        <div className="experList">
          <div  className="experTitle">
            <img src={Hotel} alt="Amenities"></img>
            <span>Amenities</span>
          </div>
          <div  className="experpara">
            <span>Access to Nature</span>
            <span>Gardens</span>
            <span>Outdoor Lounge</span>
            <span>Beach Access</span>
            <span>Walking Trails</span>
            <span>Ocean View</span>
            <span>Access to Nature</span>
            <span>Air-Conditioned Rooms</span>
            <span>Desk</span>
          </div>
        </div>
        <div className="experList">
          <div className="experTitle">
            <img src={checkList} alt="checklist"></img>
            <span>On-site Activities</span>
          </div>
          <div className="experpara">
            <span>Acupuncture</span>
            <span>Physical Fitness</span>
            <span>Massage</span>
            <span>Yoga</span>
            <span>Adventure Outings</span>
          </div>
        </div>
        <div className="experList">
          <div className="experTitle">
            <img src={Landscape} alt="landsacpe"></img>
            <span>Off-Site Activities</span>
          </div>
          <div className="experpara">
            <span>Beach Fitness</span>
            <span>Beach Walks</span>
            <span>Water Activities</span>
            <span>Physical Fitness</span>
            <span>Swimming</span>
            <span>Hiking</span>
            <span>Sightseeing</span>
            <span>Adventure Outings</span>
            <span>Skiing </span>
            <span>Yoga</span>
            <span>Fishing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
