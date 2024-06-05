import { useState } from "react";
import styles from "./SearchBox.module.css";

console.log(styles);
function SearchBox() {
  const [value, setValue] = useState("");
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search Places..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" className={styles.searchButton}>
        Ctrl + /
      </button>
    </div>
  );
}

export default SearchBox;
