import React from "react";
import Card from "../Cards/Card.js";
import "./newArrival.css";

const NewArrival = ({
  CardData,
  displayRazorpay,
  countLiked,
  setCountLiked,
}) => {
  return (
    <div className="newarrivalsection">
      <div className="head">
        <i className="fa-solid fa-chevron-left" />
        <h1>New Arrivals</h1>
        <i className="fa-solid fa-chevron-right" />
      </div>
      <p className="viewtext">VIEW ALL</p>

      <div className="cards">
        <Card
          CardData={CardData}
          displayRazorpay={displayRazorpay}
          countLiked={countLiked}
          setCountLiked={setCountLiked}
        />
      </div>
    </div>
  );
};

export default NewArrival;
