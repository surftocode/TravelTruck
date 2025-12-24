import Button from "../../components/Button";
import React from "react";
import camper from "../../assets/images/camper.jpg";
import css from "../../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div>
        <img src={camper} alt="camper-pic" width="1440" height="696" className={css.camper} />
        <div className={css.home_body}>
          <div className={css.home_text}>
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
            <Button />
          </div>

          
        </div>
      </div>
    </>
  );
}
