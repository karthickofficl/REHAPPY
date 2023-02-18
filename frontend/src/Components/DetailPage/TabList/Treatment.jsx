import React from "react";
import Medal from "../../../Image/Tabs/Treatment/medal 1.png";
import Philisophy from "../../../Image/Tabs/Treatment/philosophy 1.png";
import Spine from "../../../Image/Tabs/Treatment/spine 1.png";
import Alcohol from "../../../Image/Tabs/Treatment/no-alcohol 1.png";
import Event from "../../../Image/Tabs/Treatment/event 1.png";
import Check from "../../../Image/Tabs/check-mark 1.png";
import '../../../Styles/TabsBox.css'





const Treatment = () => {
  return (
    <div className="treatMain">
      <div className="treatContainer">
        <div className="treatContent">
          <div className="treatTitle">
            <img src={Medal} alt="medal"></img>
            <span>Specializations</span>
          </div>
          <div className="treatList">
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Alcohol</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Co-Occurring Disorders</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Drug Addiction</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Post Traumatic Stress Disorder</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Depression</p>
            </span>
          </div>
        </div>
        <div className="treatContent">
          <div className="treatTitle">
            <img src={Philisophy} alt="medal"></img>
            <span>Philosophy</span>
          </div>
          <div className="treatList">
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Evidence-Based</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Holistic</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Individual Treatment</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Medical</p>
            </span>
          </div>
        </div>
        <div className="treatContent">
          <div className="treatTitle">
            <img src={Spine} alt="medal"></img>
            <span>Therapies</span>
          </div>
          <div className="treatList">
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>1-on-1 Counseling</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Art Therapy</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Cognitive Behavioral Therapy</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Dialectical Behavior Therapy</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Experiential Therapy</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Eye Movement Therapy(EMDR)</p>
            </span>
          </div>
        </div>
        <div className="treatContent">
          <div className="treatTitle">
            <img src={Alcohol} alt="medal"></img>
            <span>What We Treat</span>
          </div>
          <div className="treatList">
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Alcohol</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Anger</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Anxiety</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Benzodiazepines</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Bipolar</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Co-Occurring Disorders</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Cocaine</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Codependency</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Anxiety</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Depression</p>
            </span>
          </div>
        </div>
        <div  className="treatContent">
          <div className="treatTitle">
            <img src={Event} alt="medal"></img>
            <span>Aftercare</span>
          </div>
          <div className="treatList">
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Alumni Events & Get-Togethers</p>
            </span>
            <span>
              <img src={Check} alt="check-mark"></img>
              <p>Ability to Call a Counselor</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
