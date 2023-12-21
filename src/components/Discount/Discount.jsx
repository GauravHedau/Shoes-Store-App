import React from "react";
import New1 from "../../assets/new1.jpg";
import New2 from "../../assets/new2.jpg";
import "./discount.css";

const Discount = () => {
  return (
    <div className="discountPanel">
      <div className="disImage">
        <img
          src={New1}
          className="disImg1"
          width="300px"
          height="300px"
          alt="new1"
        />
        <img
          src={New2}
          className="disImg2"
          width="300px"
          height="300px"
          alt="new2"
        />
      </div>
      <div className="disText">
        <h2>Missed the Sale?</h2>
        <p>Shop from the crazy deals</p>
        <button>Min 30% OFF</button>
      </div>
    </div>
  );
};

export default Discount;
