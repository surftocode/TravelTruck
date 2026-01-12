import SearchButton from "../../components/SearchButton";
import VehicleType from "../../components/VehicleType";
import VeicleEqp from "../../components/VeicleEqp";
import css from "../../styles/catalogPage.module.css";
import { useState, useEffect } from "react";
import React from "react";
import CamperList from "../../components/CamperList";
import {SearchLocation} from "../../components/SearchLocation";
import axios from "axios";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("../../public/assets/data/campersList.json");
      console.log("fetch Data:", res.data.items);
      setLocation(res.data.items);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, []);
  const filteredLocation=location.filter((item)=>{
    return item.toLowercase().includes(query);
  })
  return (
    <>
      <div className={css.bodyDiv}>
        <div className={css.location}>
          <p className={css.locationText}>Location</p>
          <input
            type="text"
            placeholder="city"
            onChange={(e) => {
              setQuery(e.target.value.toLowerCase());
            }}
          />
            {<SearchLocation datas={filteredLocation} />}
         
          <p className={css.filtersText}>Filters</p>
          <div className={css.equipments}>
            <h3>Vehicle equipments </h3>
          </div>
          <p className={css.devider}></p>
          <VeicleEqp />
          <h3>Vehicle type</h3>
          <p className={css.devider}></p>
          <VehicleType />
          <SearchButton />
        </div>
        <div className={css.camperList}>
          <CamperList />
        </div>
      </div>
    </>
  );
}
