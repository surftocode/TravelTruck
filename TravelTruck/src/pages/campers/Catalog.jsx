import SearchButton from "../../components/SearchButton";
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
            value="location"
            placeholder="city"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          ></input>
          <p>Filters</p>

          <VeicleEqp />

          <div className={css.equipments}>Vehicle equipments </div>
          <div>Vehicle type</div>
          <SearchButton />
        </div>
        <div></div>
      </div>
    </>
  );
}
