import React from "react";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import Banner4 from "../../assets/banner4.jpg";
import Banner5 from "../../assets/banner5.jpg";
import Banner6 from "../../assets/banner6.jpg";

const Corasal = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner6} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Corasal;
