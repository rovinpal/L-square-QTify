import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../../assets/search.png";
import styles from "./Search.module.css";

const Search = ({ searchData }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setFilteredResults([]);
      setShowDropdown(false);
      return;
    }

    const debounce = setTimeout(() => {
      const results = searchData?.filter((album) =>
        album.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
      setShowDropdown(true);
    }, 1000);

    return () => clearTimeout(debounce);
  }, [query, searchData]);

  const handleSelect = (id) => {
    navigate(`/album/${id}`);
    setQuery("");
    setShowDropdown(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Search an album of your choice"
          className={styles.search}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.searchIcon}>
          <img src={SearchIcon} alt="search" />
        </button>
      </div>

      {showDropdown && (
        <div className={styles.dropdown}>
          {filteredResults.length > 0 ? (
            filteredResults.map((album) => (
              <div
                key={album.id}
                className={styles.listElement}
                onClick={() => handleSelect(album.id)}
              >
                <img
                  src={album.image}
                  alt={album.title}
                  className={styles.albumImage}
                />
                <div className={styles.albumText}>
                  <div className={styles.albumTitle}>{album.title}</div>
                  <div className={styles.albumArtists}>
                    {(album.songs?.[0]?.artists || []).join(", ") || "Unknown Artist"}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
