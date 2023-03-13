import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const Navbar = () => {
  let { cart } = useSelector((state) => state.cart);

  let links = [
    {
      to: "/",
      title: "Products",
    },
    {
      to: "/Cart",
      title: <AiOutlineShoppingCart size={25} />,
      count: 0,
    },
  ];

  let activeStyle = {
    textDecoration: "underline",
    color: "white",
  };

  return (
    <header className={style.navbar}>
      <h1>TeeRex Store</h1>
      {links.map((link) => (
        <NavLink
          className={style.navlink}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to={link.to}
          key={link.title}
        >
          {link.to === "/Cart" ? (
            <div style={{ display: "flex", padding: "10px" }}>
              <p style={{ color: "red" }}>{link.title}</p>{" "}
              <div
                style={{
                  width: "20px",
                  color: "white",
                  marginTop: "-5px",
                  borderRadius: "50%",
                  alignItems: "center",
                }}
              >
                {cart.length}
              </div>
            </div>
          ) : (
            <p style={{ color: "red" }}> {link.title}</p>
          )}
        </NavLink>
      ))}
    </header>
  );
};

export default Navbar;
