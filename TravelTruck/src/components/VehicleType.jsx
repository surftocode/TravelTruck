import React from "react";
import Van from "../public/assets/icons/van.svg?react";
import Integrated from "../public/assets/icons/integrated.svg?react";
import Alcove from "../public/assets/icons/alcove.svg?react";
import css from "../styles/vehicleType.module.css";

export default function VehicleType({selectedType = [], onTypeChange}) {
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

  const handleTypeChange = (type) => {
    const selected = selectedType.includes(type)
      ? selectedType.filter(type)
      : [...selectedType, type];
   
    onTypeChange(selected);
  };
  return (
    <ul>
      {icons.map(({ name, Icon }) => {
        return (
          <button key={name} onClick={() => handleTypeChange(name)}>
            <li>
              <img
                src={Icon}
                alt={name}
                style={{ width: "32px", height: "32px" }}
              />
              <span>{name}</span>
            </li>
          </button>
        );
      })}
    </ul>
  );
}
