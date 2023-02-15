import React from "react";
import offer1 from "../../Image/Offer/offer1.png";
import offer2 from "../../Image/Offer/offer2.png";
import offer3 from "../../Image/Offer/offer3.png";
import offer4 from "../../Image/Offer/offer4.png";
import offer5 from "../../Image/Offer/offer5.png";
import offer6 from "../../Image/Offer/offer6.png";
import offer7 from "../../Image/Offer/offer7.png";
import offer8 from "../../Image/Offer/offer8.png";
import '../../Styles/DetailOffer.css'




const DetailOffer = () => {
  return (
    <div className="offerMain">
      <div className="offerContainer">
        <div className="offerTitle">
          <h3>What we offer for you</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div className="offerDiv">
          <div className="offerImg">
            <img src={offer1} alt="offer1" />
          </div>
          <div>
            <h3>LOCATED IN SUNNY CALIFORNIA</h3>
            <p>Whether clients are Orange County natives or traveling across the country for treatment, Southern California provides many benefits to help with recovery. Clients at Renaissance Recovery have easy access to outdoor hikes, sandy beaches, shopping, and exceptional restaurants 
                all while enjoying the abundant sunshine and beautiful weather that Southern California offers.</p>
          </div>
          <div className="offerImg">
            <img src={offer2} alt="offer2" />
          </div>
        </div>
        <div className="offerDiv">
          <div className="offerImg">
            <img src={offer3} alt="offer3" />
          </div>
          <div>
            <h3>ADVENTURE THERAPY</h3>
            <p>Renaissance offers a variety of experiential and adventure-based programs for clients to enjoy. Feel rejuvenated after taking part in activities such as surfing, 
                hiking, paddle boarding, fishing, paintballing, snowboarding, and beach bonfires.</p>
          </div>
          <div className="offerImg">
            <img src={offer4} alt="offer4" />
          </div>
        </div>
        <div className="offerDiv">
          <div className="offerImg">
            <img src={offer5} alt="offer5" />
          </div>
          <div>
            <h3>CUSTOM TREATMENT PLANS</h3>
            <p>Renaissance Recovery understands the importance of treating each client uniquely and coming up with customized plans and goals for recovery. Their master’s-level clinicians ensure that each client is 
                receiving the care they need by offering a variety of programs, therapies, and activities.</p>
          </div>
          <div className="offerImg">
            <img src={offer6} alt="offer6" />
          </div>
        </div>
        <div className="offerDiv">
          <div className="offerImg">
            <img src={offer7} alt="offer7" />
          </div>
          <div>
            <h3>STRONG ALUMNI COMMUNITY</h3>
            <p>Renaissance Recovery believes follow-up is essential to successful recovery. They provide their clients with the resources for long-term success, including departure planning, 
                weekly follow-up calls, peer-to-peer support, and continued sobriety support.</p>
          </div>
          <div className="offerImg">
            <img src={offer8} alt="offer8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOffer;
