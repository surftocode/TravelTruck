
import css from  "../styles/searchButton.module.css"

export default function SearchButton({onClick}) {

   
    return (
        <>
        <button className={css.searchBtn} onClick={onClick}>
            Search
        </button>
        </>
    );
}