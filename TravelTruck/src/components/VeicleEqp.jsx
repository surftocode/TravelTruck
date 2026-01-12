import React from "react";
import AC from "../public/assets/icons/AC.svg?react";
import Bathroom from "../public/assets/icons/Bathroom.svg?react";
import Automatic from "../public/assets/icons/Automatic.svg?react";
import Kitchen from "../public/assets/icons/Kitchen.svg?react";
import TV from "../public/assets/icons/TV.svg?react";
import css from "../styles/equipments.module.css";
export default function VeicleEqp() {
  const icons = {
    AC: AC,
    Automatic: Automatic,
    Kitchen: Kitchen,
    TV: TV,
    Bathroom: Bathroom,
  };

  return (
    <ul className={css.ul}>
      {Object.entries(icons).map(([icon, iconSrc]) => {
        const iconName = icon;
        return (
          <button className={css.listItem} key={iconName}>
            <li >
              <img
                src={iconSrc}
                alt="iconName"
                style={{ width: "32px", height: "32px" }}
              />
              {iconName}
            </li>
          </button>
        );
      })}
    </ul>
  );
}
