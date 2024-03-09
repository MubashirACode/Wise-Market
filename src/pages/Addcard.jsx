import { useEffect, useState } from "react";

export const Addtocard = ({ catrs }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(catrs);
  }, [catrs]);

  const removeFromCart = (indexToRemove) => {
    const updatedCards = cards.filter((_, index) => index !== indexToRemove);
    setCards(updatedCards);
  };

  return (
    <>
      {cards.map((cartsitem, cartsindex) => {
        return (
          <div key={cartsindex} className="m-10">
            <img src={cartsitem.img} width={230} alt="" />
            <p className="text-xl font-semibold">{cartsitem.subdescrition}</p>
            <span className="text-xl">{cartsitem.descrition}</span>

            <button
              className="text-3xl pl-4 pr-4"
              onClick={() => {
                const updatedCards = cards.map((item, index) => {
                  if (cartsindex === index) {
                    const newQuantity = item.quantity - 1;
                    return { ...item, quantity: newQuantity < 0 ? 0 : newQuantity };
                  }
                  return item;
                });
                setCards(updatedCards);
              }}
            >
              -
            </button>

            <span className="text-2xl">{cartsitem.quantity}</span>

            <button
              className="text-2xl pl-4 pr-4"
              onClick={() => {
                const updatedCards = cards.map((item, index) => {
                  if (cartsindex === index) {
                    return { ...item, quantity: item.quantity + 1 };
                  }
                  return item;
                });
                setCards(updatedCards);
              }}
            >
              +
            </button>

            <button
              className="text-2xl pl-4 pr-4 text-red-600 font-semibold"
              onClick={() => removeFromCart(cartsindex)}
            >
             <i className="ri-delete-bin-6-line"></i>
            </button>

            <span className="text-2xl text-green-600 font-semibold">
              Rs {cartsitem.price * cartsitem.quantity}
            </span>
          </div>
        );
      })}

      <p className="m-10 text-3xl">
        Total:{" "}
        <span className="text-green-600 font-semibold">
          {cards
            .map((item) => item.price * item.quantity)
            .reduce((total, value) => total + value, 0)}
        </span>
      </p>
    </>
  );
};
