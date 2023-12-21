import React from "react";
import New3 from "../../assets/new3.jpg";
import New4 from "../../assets/new4.jpg";
import "./panels.css";

const Panel3 = () => {
  return (
    <div className="panel4">
      <div className="panel3Head">
        <h2>Know Your Shoes!</h2>
        <p>Get To Know The Tech That Makes Your Shoes More Special.</p>
      </div>
      <div className="cardImage">
        <div className="cardImagItem">
          <img src={New3} width="500px" height="600px" alt="new3" />
          <h2>Air Capsule</h2>
          <p>For Responsive impact Cushioning.</p>
        </div>
        <div className="cardImagItem">
          <img src={New4} width="500px" height="600px" alt="new4" />
          <h2>Yoga-Flex</h2>
          <p>Flexible &amp; Bouncy Footbed.</p>
        </div>
        <div className="cardImagItem2" />
      </div>
    </div>
  );
};

export default Panel3;
