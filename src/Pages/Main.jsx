import React from "react";
import QueryAndLocation from "../components/Query&Location/QueryLocation";
import Discount from "../components/Discount/Discount";
import Panel1 from "../components/Panels/Panel1";
import Panel2 from "../components/Panels/Panel2";
import Panel3 from "../components/Panels/Panel3";
import Corasal from "../components/Corasal/Corasal";
import NewArrival from "../components/NewArrival/NewArrival";
import ExtraPanel from "../components/ExtraPanel/ExtraPanel";
import Footer from "../components/Footer/Footer";

const Main = ({ CardData, displayRazorpay, countLiked, setCountLiked }) => {
  return (
    <div>
      {/* panel 1 */}
      <Panel1 />

      {/* corasel */}
      <Corasal />

      {/* new arrival section  */}
      <NewArrival
        CardData={CardData}
        displayRazorpay={displayRazorpay}
        countLiked={countLiked}
        setCountLiked={setCountLiked}
      />

      {/* Panel 2 */}
      <Panel2 />

      {/* panel 3 */}
      <Panel3 />

      {/* discount panel  */}
      <Discount />

      {/* extrapanel */}
      <ExtraPanel />

      {/* query and location  */}
      <QueryAndLocation />

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Main;
