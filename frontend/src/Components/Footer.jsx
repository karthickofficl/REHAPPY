import React from "react";
import facebook from '../Image/facebook.png'
import linkedin from '../Image/linkedin.png'
import instagram from '../Image/instagram.png'
import twitter from '../Image/twitter.png'
import gmail from '../Image/gmail.png'
import '../Styles/Footer.css'




const Footer = () => {
  return (
    <div className="footerMain">
      <div className="footerContainer">
        <div className="footerTitle">
          <h1>REHABPY</h1>
        </div>
          <hr className="horizonLine"/>
        <div className="footerContent">
          <div className="footerDiv">
            <h3>Not Sure Where to Go?</h3>
            <ul>
              <li>Watch "Destinations" video series</li>
              <li>Find California Treatment</li>
              <li>Find Canadian Treatment</li>
              <li>Find UK Treatment</li>
              <li>Find European Treatment</li>
              <li>Find Florida Treatment</li>
              <li>Find Thailand Treatment</li>
            </ul>
          </div>
          <div className="footerDiv">
            <h3>Latest From the Blog</h3>
            <ul>
              <li>
                Stay Calm and Connected in <br></br>Connecticut Rehabs View all Posts
              </li>
            </ul>
            <h3>For Treatment Provider</h3>
            <ul>
              <li>Submit Your Luxury Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footerDiv">
            <h3>Top Specializations</h3>
            <ul>
              <li>Eating Disorder Treatment</li>
              <li>Depression Treatment</li>
              <li>Executive Rehab</li>
              <li>Adolescent Treatment</li>
              <li>Sex Addiction Treatment</li>
              <li>Smoking Rehab</li>
              <li>Gambling Addiction</li>
            </ul>
          </div>
          <div className="footerDiv">
            <h3>Popular Centers</h3>
            <ul>
              <li>Luxury Detox Centers</li>
              <li>Non-12 Step Rehabs</li>
              <li>12 Step Treatment Centers</li>
              <li>Cognitive Behavior Therapy</li>
              <li>Evidence Based Treatment</li>
              <li>LGBTQ Addiction Rehab</li>
              <li>Wellness Centers</li>
            </ul>
          </div>
        </div>
        {/* </div> */}
        <hr className="horizonLine"/>
        <div className="footerSocial">
            <span><img src={facebook} alt="social media"/></span>
            <span><img src={linkedin} alt="social media"/></span>
            <span><img src={instagram} alt="social media"/></span>
            <span><img src={twitter} alt="social media"/></span>
            <span><img src={gmail} alt="social media"/></span>
        </div>
        <hr className="horizonLine"/>
        <div className="footerFoot">
            <span>Rehabpy2022.&#169; All Rights Reserved.</span>
            <span>Privacy Policy I Terms of Use</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
