import SearchButton from "../../components/SearchButton";
import VehicleType from "../../components/VehicleType";
import VeicleEqp from "../../components/VeicleEqp";
import css from "../../styles/catalogPage.module.css";
import { useState, useEffect } from "react";
import React from "react";
import CamperList from "../../components/CamperList";
import { SearchLocation } from "../../components/SearchLocation";
import axios from "axios";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState({
    selectedEqp: [],
    vehicleType: [],
    location: "",
  });
  const [selectedEqp, setSelectedEqp] = useState([]);
  const [displayedCampers, setDisplayedCampers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/assets/data/campersList.json");

        console.log("fetch Data:", res.data.items);
        setData(res.data.items);
        setFilteredData(res.data.items);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, []);

  const handleSelectedEqp = (selected) => {
    setSelectedEqp((prev)=>({...prev,selectedEqp:selected}));
    console.log("selected eqp:", selectedEqp);
  }

  return (
    <>
      <div className={css.bodyDiv}>
        <div className={css.location}>
          <p className={css.locationText}>Location</p>
          <input
            type="text"
            placeholder="city"
            onChange={(e) => {
              e.target.value;
            }}
          />
          {/* {isOpen && <SearchLocation datas={filteredData}  />} */}

          <p className={css.filtersText}>Filters</p>
          <div className={css.equipments}>
            <h3>Vehicle equipments </h3>
          </div>
          <p className={css.devider}></p>
          <VeicleEqp
            selectedEqp={filteredData.selectedEqp}
            onEqpChange={()=>handleSelectedEqp(selectedEqp)}
          />
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
