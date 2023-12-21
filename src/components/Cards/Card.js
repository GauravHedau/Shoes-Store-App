import CardItem from "../CardItems/CardItem";

const Card = ({ CardData, displayRazorpay, countLiked, setCountLiked }) => {
  return (
    <>
      {CardData.map((curElem) => {
        return (
          <CardItem
            key={curElem.id}
            {...curElem}
            curElem={curElem}
            displayRazorpay={displayRazorpay}
            countLiked={countLiked}
            setCountLiked={setCountLiked}
          />
        );
      })}
    </>
  );
};

export default Card;
