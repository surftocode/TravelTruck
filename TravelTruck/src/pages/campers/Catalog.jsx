import Header from "../../components/Header";
import SearchButton from "../../components/SearchButton";
import css from "../../styles/catalogPage.module.css";

const icons = import.meta.glob("../../assets/icons/*.svg", {
  eager: true,
  import: "default",
});
const getIcon = (iconName) => {
  return icons[`../../assets/icons/${iconName}.svg`];
};
export default function Catalog() {
  return (
    <>
      <div className={css.bodyDiv}>
        <div className={css.location}>
          <p>Location</p>
          <input type="text" value="location" placeholder="city"></input>
          <p>Filters</p>
          <ul className={css.filters}>
            <li className={css.filterItem}>
              <img src={getIcon("wind")} /> AC
            </li>
            <li className={css.filterItem}>
              <img src={getIcon("diagram")} />
              Automatic
            </li>
            <li className={css.filterItem}>
              <img src={getIcon("cup-hot")} />
              Kitchen
            </li>
            <li className={css.filterItem}>
              <img src={getIcon("tv")} />
              TV
            </li>
            <li className={css.filterItem}>
              <img src={getIcon("shower")} />
              Bathroom
            </li>
          </ul>
          <div className={css.equipments}>Vehicle equipments </div>
          <div>Vehicle type</div>
          <SearchButton />
        </div>
        <div></div>
      </div>
    </>
  );
}
