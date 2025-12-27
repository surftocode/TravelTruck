import SearchButton from "../../components/SearchButton";
import VehicleType from "../../components/VehicleType";
import VeicleEqp from "../../components/VeicleEqp";
import css from "../../styles/catalogPage.module.css";
import { useState } from "react";
import React from "react";

export default function Catalog() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className={css.bodyDiv}>
        <div className={css.location}>
          <p>Location</p>
          <input
            type="text"
            placeholder="city"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          ></input>
          <p>Filters</p>

          <div className={css.equipments}>
            <h3>Vehicle equipments </h3>
          </div>
          <p className={css.devider}></p>
          <VeicleEqp />
          <div>Vehicle type</div>
          <p className={css.devider}></p>
          <VehicleType />
          <SearchButton />
        </div>
        <div></div>
      </div>
    </>
  );
}
