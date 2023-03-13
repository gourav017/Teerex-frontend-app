import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  removeOneProduct,
  addProduct,
} from "../store/addCart/addCart.action";

const Cart = () => {
  let { cart } = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    let price = 0;
    cart.map(
      (product) => (price = product.price * product.product.count + price)
    );
    setTotal(price);
  };
  useEffect(() => {
    getTotal();
  });

  const handleDeleteProduct = (item) => {
    dispatch(removeProduct(item));
  };

  const handleDecrement = (item) => {
    if (item.product.count === 1) {
      dispatch(removeProduct(item));
    } else {
      dispatch(removeOneProduct(item));
    }
  };

  const handleIncrement = (item) => {
    dispatch(addProduct(item));
  };
  return (
    <div  >
      {cart.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", justifyContent: "space-evenly",alignItems:"center",width:"50%" }}
        >
          <div style={{ display: "flex" }}>
            <p>{item.color}</p>
            <p>{item.type}</p>
            <img src={item.imageURL} width={100} alt={item.id} />
            <h4>Rs.{item.price}</h4>
          </div>

          <button onClick={() => handleDecrement(item)}>-</button>
          {item.product.count}
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDeleteProduct(item)}>deletet</button>
        </div>
      ))}
      <div>
        {total === 0 ? <h2>No item in the cart</h2>
      : <h1>Grand Total: Rs {total}</h1>}
      </div>
    </div>
  );
};

export default Cart;
