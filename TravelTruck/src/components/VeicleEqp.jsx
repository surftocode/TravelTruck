import React, { useState } from "react";
import AC from "../public/assets/icons/AC.svg?react";
import Bathroom from "../public/assets/icons/Bathroom.svg?react";
import Automatic from "../public/assets/icons/Automatic.svg?react";
import Kitchen from "../public/assets/icons/Kitchen.svg?react";
import TV from "../public/assets/icons/TV.svg?react";
import css from "../styles/equipments.module.css";

export default function VeicleEqp({ onEqpChange }) {
  const equipments = [
    { name: "AC", Icon: AC },
    { name: "Automatic", Icon: Automatic },
    { name: "Kitchen", Icon: Kitchen },
    { name: "TV", Icon: TV },
    { name: "Bathroom", Icon: Bathroom },
  ];

  const [selectedEqp, setSelectedEqp] = useState([]);

  const handleClick = (equipmentName) => {
    const selected = selectedEqp.includes(equipmentName)
      ? selectedEqp.filter((item) => item !== equipmentName)
      : [...selectedEqp, equipmentName];
    setSelectedEqp(selected);
    console.log("equipmentName:", equipmentName);
    onEqpChange(selected);
  };

  return (
    <ul className={css.ul}>
      {equipments.map(({ name, Icon }) => {
        return (
          <li key={name}>
            <button
              className={css.listItem}
              type="button"
              onClick={() => handleClick(name)}
            >
              <img src={Icon} style={{ width: "32px", height: "32px" }} />
              <span> {name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
