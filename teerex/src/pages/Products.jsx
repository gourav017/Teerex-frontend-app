import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filterbox from "../components/filterBox/Filterbox";
import { addProduct } from "../store/addCart/addCart.action";
import style from "./Products.module.css";
const Products = () => {
  const [Allproducts, setAllproducts] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const { cart } = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const getProducts = async () => {
    await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((res) => res.json())
      .then((data) => setAllproducts(data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddtoCart = (item) => {
    dispatch(addProduct(item));
  };

  return (
    <>
      <div >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder="Search here..."
          className={style.searchbox}
        />
      </div>

      <div className={style.productContainer}>
        <Filterbox/>
        {Allproducts.filter((item) => {
          return searchTerm.toLowerCase() === ""
            ? item
            : item.type.toLowerCase().includes(searchTerm) ||
                item.color.toLowerCase().includes(searchTerm) ||
                item.name.toLowerCase().includes(searchTerm) ||
                item.gender.toLowerCase().includes(searchTerm);
        }).map((item) => (
          <div key={item.id} className={style.productCard}>
            <p>{item.name}</p>
            <p>{item.color}</p>
            <p>{item.type}</p>
            <p>{item.gender}</p>
            <img src={item.imageURL} width={200} alt={item.id} />
            <p>{item.price}</p>
            <button onClick={() => handleAddtoCart(item)}>add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
