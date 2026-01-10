import SearchButton from "../../components/SearchButton";
import VehicleType from "../../components/VehicleType";
import VeicleEqp from "../../components/VeicleEqp";
import css from "../../styles/catalogPage.module.css";
import { useState,useEffect } from "react";
import React from "react";
import CamperList from "../../components/CamperList";
import axios from "axios";
import SearchLocation from "../../components/SearchLocation";

export default function Catalog() {

  const [query,setQuery]=useState("")
 useEffect(()=>{
  const fetchData=async()=>{
    const res=await axios.get("../../assets/data/campersList.json");
    console.log(res.items)
    setQuery(res.items)
  };
  if(query.length===0||query.length>2) fetchData();
 },[])
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
          >{<SearchLocation data={query.items}/>}</input>
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
