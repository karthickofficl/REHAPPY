import React from "react";
import "../Styles/News.css";
import NewsMain from "../Image/NewsMain.png";
import New1 from "../Image/New1.png";
import New2 from "../Image/New2.png";
import New3 from "../Image/New3.png";
import New4 from "../Image/News4.png";
import { BsArrowRight } from "react-icons/bs";

const LatestNews = () => {
  return (
    <div className="newsContainer">
      <div className="newsMain">
        <div className="newsTitle">
            <div>
            <h1>LATEST NEWS & BLOGS</h1>
            </div>
            <div className="newTitleButton">
            <button>
              See More <BsArrowRight className="NewsRow1-icon" />
            </button>
            </div>
        </div>
        <div className="newsRow">
          <div className="newsRow1">
            <div className="newsRow1Main">
              <div className="newRow1MainImg">
                <img src={NewsMain} alt="newsPic"></img>
              </div>
              <div>
                <h2>Nourishing the Recovering Body: Nutrition in Rehab</h2>
              </div>
              <div>
                <p>
                  Eating well is a huge part of feeling well. Food doesn’t just
                  support wellness—it can also be a source of joy. When you go
                  to rehab for addiction or mental health treatment, great meals
                  can be the thing you look forward to.
                </p>
              </div>
              <div className="newRow1Mainbutton">
                <span>
                  <button>Read More</button>
                  <BsArrowRight className="NewsRow1-icon" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="newsRow">
          <div className="newRow2Div">
            <div className="newRow2Span">
              <img src={New1} alt="new1"></img>
              <span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button>Read More </button>
                <BsArrowRight className="NewsRow2-icon" />
              </span>
            </div>
            <div className="newRow2Span">
              <img src={New2} alt="new2"></img>
              <span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button>Read More </button>
                <BsArrowRight className="NewsRow2-icon" />
              </span>{" "}
            </div>
            <div className="newRow2Span">
              <img src={New3} alt="new3"></img>
              <span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button>Read More </button>
                <BsArrowRight className="NewsRow2-icon" />
              </span>
            </div>
            <div className="newRow2Span">
              <img src={New4} alt="new4"></img>
              <span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <button>Read More </button>
                <BsArrowRight className="NewsRow2-icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
