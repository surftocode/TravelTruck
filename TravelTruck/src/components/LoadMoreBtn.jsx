import css from "../styles/loadMoreBtn.module.css";

export default function LoadMoreBtn({onClick}) {
  return (
    <>
      <button onClick={onClick} className={css.loadMoreBtn}>Load More</button>
    </>
  );
}
