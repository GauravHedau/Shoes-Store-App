import React from "react";
import "./extrapanel.css"
const ExtraPanel = () => {
  return (
    <div className="extra">
      <div>
        <i className="fa-solid fa-truck-fast" />
        <p>Fast Delivery</p>
      </div>
      <div>
        <i className="fa-solid fa-tags" />
        <p>15 days easy return</p>
      </div>
      <div>
        <i className="fa-solid fa-location-dot" />
        <p>Accepting Orders 24/7</p>
      </div>
    </div>
  );
};

export default ExtraPanel;
