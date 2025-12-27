import React from "react";
import Van from "../assets/icons/van.svg?react";
import Integrated from "../assets/icons/integrated.svg?react";
import Alcove from "../assets/icons/alcove.svg?react";
import css from "../styles/vehicleType.module.css";

export default function VehicleType() {
  const icons = {
    Van: Van,
    Integrated: Integrated,
    Alcove: Alcove,
  };
  return (
    <ul>
      {Object.entries(icons).map(([icon, iconSrc]) => {
        const iconName = icon;
        return (
          <button key={iconName}>
            <li >
              <img
                src={iconSrc}
                alt={iconName}
                style={{ width: "32px", height: "32px" }}
              />
              <span>{iconName}</span>
            </li>
          </button>
        );
      })}
    </ul>
  );
}
