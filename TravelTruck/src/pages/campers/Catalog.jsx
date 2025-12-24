import Header from "../../components/Header";
import SearchButton from "../../components/SearchButton";
import css from "../../styles/catalogPage.module.css";
export default function Catalog() {
  return (
    <>
      <div className={css.bodyDiv}>
        <div className={css.location}>
          <p>Location</p>
          <input type="text" value="location" placeholder="city"></input>
          <p className={css.filters}>Filters</p>
          <div classNAme={css.equipments}>Vehicle equipments </div>
          <div>Vehicle type</div>
          <SearchButton />
        </div>
        <div></div>
      </div>
    </>
  );
}
