import React from "react";
import { Link } from "react-router-dom";
import css from "../styles/Header.module.css";
import logo from "../assets/icons/Logo.svg";



export default function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="TravelTruck" className={css.logo} />
        <nav className={css.header_nav}>
          <Link to="/" className={css.link}>
            Home
          </Link>
          <Link to="/catalog" className={css.link}>
            Catalog
          </Link>
        </nav>
      </div>
    </>
  );
}
