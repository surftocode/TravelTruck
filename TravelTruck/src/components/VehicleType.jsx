import React, { useState } from "react";
import Van from "../public/assets/icons/van.svg?react";
import Integrated from "../public/assets/icons/integrated.svg?react";
import Alcove from "../public/assets/icons/alcove.svg?react";
import css from "../styles/vehicleType.module.css";

export default function VehicleType({ onTypeChange }) {
  const icons = [
    {
      name: "Van",
      Icon: Van,
    },
    {
      name: "Integrated",
      Icon: Integrated,
    },
    {
      name: "Alcove",
      Icon: Alcove,
    },
  ];
  const [selectedType, setSelectedType] = useState([]);

  const handleTypeChange = (type) => {
    console.log("selected type:", type);
    const selected = selectedType.includes(type)
      ? selectedType.filter((item) => item !== type)
      : [...selectedType, type];
    setSelectedType(selected);
    onTypeChange(selected);
  };
  return (
    <ul>
      {icons.map(({ name, Icon }) => {
        return (
          <li key={name}>
            <button onClick={() => handleTypeChange(name)}>
              <img
                src={Icon}
                alt={name}
                style={{ width: "32px", height: "32px" }}
              />
              <span>{name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
