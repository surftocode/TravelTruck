import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      Travel<span>truck</span>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </nav>
    </div>
  );
}
