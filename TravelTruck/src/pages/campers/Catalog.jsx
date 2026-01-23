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
    equipment: [],
    vehicleType: [],
    location: "",
  });

  const [displayedCampers, setDisplayedCampers] = useState([]);
  useEffect(() => {
    console.log("Eqp güncellenmiş hali:", filteredData.equipment);
    setFilteredData((prev) => ({ ...prev, equipment: filteredData.equipment }));
  }, [filteredData.equipment]);

  const handleSelectedEqp = (selected) => {
    console.log("first selected:", selected);
    setFilteredData((prev) => ({ ...prev, equipment: selected }));
  };

  const handleLocationChange = (location) => {
    setFilteredData((prev) => ({ ...prev, location: location }));
    console.log("location in Catalog:", filteredData.location);
  };

  const handleVehicleTypeChange = (type) => {
    console.log("recieve Type:", type);
    console.log("current filtered data:", filteredData);
    setFilteredData((prev) => ({ ...prev, vehicleType: type }));
    console.log("vehicleType", filteredData.vehicleType);
  };
  const handleToogle = () => {
    setDisplayedCampers(filteredData);
  };

  return (
    <>
      <div className={css.bodyDiv}>
        <div className={css.location}>
          <p className={css.locationText}>Location</p>
          <input
            type="text"
            placeholder="city"
            onChange={(e) => {
              handleLocationChange(e.target.value);
            }}
          />

          <p className={css.filtersText}>Filters</p>
          <div className={css.equipments}>
            <h3>Vehicle equipments </h3>
          </div>
          <p className={css.devider}></p>
          <VeicleEqp onEqpChange={handleSelectedEqp} />
          <h3>Vehicle type</h3>
          <p className={css.devider}></p>
          <VehicleType
            selectedType={filteredData.vehicleType}
            onTypeChange={handleVehicleTypeChange}
          />
          <SearchButton onClick={() => onSearch()} />
        </div>
        <div className={css.camperList}>
          <CamperList onClick={() => handleToogle()} />
        </div>
      </div>
    </>
  );
}
