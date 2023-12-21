import React from "react";
import Panel11 from "../../assets/panel11.jpg";
import Panel12 from "../../assets/panel12.jpg";
import Panel21 from "../../assets/panel21.jpg";
import Panel22 from "../../assets/panel22.jpg";
import "./panels.css"

const Panel2 = () => {
  return (
    <div>
      {/* images panel 1 */}
      <div className="panel2">
        <div className="image1">
          <img src={Panel21} alt="panel21" />
        </div>
        <div className="image2">
          <img src={Panel22} alt="panel22" />
        </div>
      </div>

      {/* images panel 2 */}
      <div className="panel3">
        <div className="image3">
          <img src={Panel11} alt="panel11" />
        </div>
        <div className="image4">
          <img src={Panel12} alt="panel12" />
        </div>
      </div>
    </div>
  );
};

export default Panel2;
