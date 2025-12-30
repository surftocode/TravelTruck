import css from "../styles/loadMoreBtn.module.css";




export default function LoadMoreBtn({ onClick}) {

  
  return (
    <>
     
        <button className={css.loadMoreBtn} onClick={onClick} >
          Load More
        </button>
    
    </>
  );
}
