import Button from "../../components/Button";
import React from "react";
import Header from "../../components/Header";
import camper from "../../assets/images/camper.jpg";
import css from "./Home.module.css";

export default function Home() {
  return (
    <>
      
      <div className="home-body">
        <img src={camper} alt="camper-pic" width="1440" height="696" />
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <Button />
      </div>
    </>
  );
}
