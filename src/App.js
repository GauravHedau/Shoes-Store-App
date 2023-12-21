import "./main.css";
import CardData from "./data";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Cart from "./Pages/Cart";
import toast from "react-hot-toast";
import { useState } from "react";

const App = () => {
  const [countLiked, setCountLiked] = useState(0);

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_nEsydYBMWKqfR1",
      currency: "INR",
      amount: amount * 100,
      name: "Gaurav Hedau",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        toast.success(`Your Payment Id ${response.razorpay_payment_id}`);
        toast.success("Payment Successfully");
      },
      prefill: {
        name: "gaurav hedau",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div className="box">
        <div>
          <Navbar countLiked={countLiked} />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Main
                CardData={CardData}
                displayRazorpay={displayRazorpay}
                countLiked={countLiked}
                setCountLiked={setCountLiked}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart displayRazorpay={displayRazorpay} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
