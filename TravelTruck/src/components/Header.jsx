import React from "react";
import { Link } from "react-router-dom";
import css from "../styles/Header.module.css";
import logo from "../public/assets/icons/Logo.svg";
import{useLocation} from"react-router-dom";


export default function Header() {
  const location = useLocation();
  return (

    <>
      <div className={css.header}>
        <img src={logo} alt="TravelTruck" className={css.logo} />
        <nav className={css.header_nav}>
          <Link to="/" className={css.link} style={{color: location.pathname==="/"?"var(--orange)":"var(--main"}}>
            Home
          </Link>
          <Link to="/catalog" className={css.link} style={{color: location.pathname==="/catalog"?"var(--orange)":"var(--main"}}>
            Catalog
          </Link>
        </nav>
      </div>
    </>
  );
}
