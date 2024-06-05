import { useEffect, useRef, useState } from "react";
import styles from "./SearchBox.module.css";

function SearchBox({ getApiData }) {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  const handlerSubmit = () => {
    if (!value) {
      return;
    }

    getApiData(value);

    // setValue("");
  };

  useEffect(() => {
    // Automatically focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Handler for keyboard shortcut
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "/") {
        if (inputRef.current) {
          inputRef.current.focus();

          setValue((prevState) => {
            if (!prevState) {
              return prevState;
            }
            getApiData(prevState);
            return prevState;
          });
          event.preventDefault();
        }
      }
    };

    // Attach the event listener for the keyboard shortcut
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!value) {
      getApiData(value);
    }
  }, [value]);

  return (
    <div
      className={styles.searchContainer}
      id="search-container"
      onKeyDown={(event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === "/") {
          event.preventDefault();
          document.getElementById("search-container").focus();
        }
      }}
    >
      <input
        ref={inputRef}
        className={styles.searchInput}
        type="text"
        placeholder="Search Places..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        className={styles.searchButton}
        onClick={handlerSubmit}
      >
        Ctrl + /
      </button>
    </div>
  );
}

export default SearchBox;
