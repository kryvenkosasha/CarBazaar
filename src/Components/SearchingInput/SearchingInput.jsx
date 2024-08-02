import styles from "./SearchingInput.module.css";

function SearchingInput() {
  return (
    <div className={styles.SearchingInputContainer}>
      <form className={styles.searchingForm}>
        <label>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={styles.SearchingInput}
          />
        </label>
        <button type="submit" className={styles.searchingButton}>Search</button>
      </form>
    </div>
  );
}
export default SearchingInput;
