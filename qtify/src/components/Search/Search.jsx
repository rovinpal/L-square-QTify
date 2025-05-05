import React from "react";
import SearchIcon from "../../assets/search.png";
import styles from "./Search.module.css"

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input 
        type="text"
        placeholder="Search an album of your choice"
        className={styles.search}
      />
      <button className={styles.searchIcon}>
        <img src={SearchIcon} alt="search" />
      </button>
    </div>
  );
};

export default Search;