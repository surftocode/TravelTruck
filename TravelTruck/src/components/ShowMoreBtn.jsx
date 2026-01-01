
import { Link } from "react-router-dom"
import css from "../styles/searchButton.module.css"

export default function ShowMoreBtn({onClick}) {

return(
    <>
  
    <button className={css.searchBtn} onClick={onClick} >Show More</button>
   
    </>
)



}
