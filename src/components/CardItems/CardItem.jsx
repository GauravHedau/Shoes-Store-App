import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import React, { useState } from "react";
import "./CardItem.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../redux/Slices/CartSlice";

const CardItem = ({ id, name, image, bg, price, curElem, displayRazorpay , countLiked , setCountLiked}) => {
  const [liked, setLiked] = useState(false);

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(curElem));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(curElem.id));
    toast.error("Item removed from Cart");
  };

  // console.log(CardData);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  function addLikedHandler() {
    setLiked(true);
    setCountLiked(countLiked + 1);
    toast.success("Liked successfull");
  }

  function removeLikedHandler() {
    setLiked(false);
    setCountLiked(countLiked - 1);
    toast.error("liked removed");
  }

  return (
    <div className="cardItem transition ease-in duration-300" key={id}>
      <div className="cardHead">
        <button className="card-head-button">New In</button>
        <div className="text-[30px]">
          {liked ? (
            <FcLike onClick={removeLikedHandler} />
          ) : (
            <FcLikePlaceholder onClick={addLikedHandler} />
          )}
        </div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <button
        className="buyButton transition ease-in duration-300"
        onClick={() => {
          displayRazorpay(price);
        }}
      >
        Quick Buy
      </button>
      <div className="card-details">
        <div className="circle" style={{ backgroundColor: bg }} />
        <span className="cardText">{name}</span>
        <span className="card-price">{formatter.format(price)}</span>
        <div className="itemSize flex justify-between items-center">
          <div>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>

          {cart.some((curr) => curr.id === curElem.id) ? (
            <button
              className="border-[0.1px] border-[#e9e6e6] text-[18px] px-3 transition ease-in duration-300 py-2 hover:bg-[#ff6666] hover:text-white "
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="border-[0.1px] border-[#e9e6e6] text-[18px] px-3 transition ease-in duration-300 py-2 hover:bg-[#ff6666] hover:text-white "
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
