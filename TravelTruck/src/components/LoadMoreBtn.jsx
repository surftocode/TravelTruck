import css from "../styles/loadMoreBtn.module.css";
import { useState } from "react";




export default function LoadMoreBtn({ onClick}) {
  const [isVisible, setIsVisible] = useState(false);
  const showBtn=()=>{
    setIsVisible(!isVisible)
    
  }
  
  return (
    <>
     
        <button className={css.loadMoreBtn} onClick={onClick} >
          Load More
        </button>
    
    </>
  );
}
