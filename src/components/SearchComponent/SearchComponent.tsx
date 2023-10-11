import React, { useState } from "react";
import styles from "./Search.module.css";

interface SearchComponentProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (query: string) => void;
}

export default function SearchComponent({
  search,
  setSearch,
  onSearch,
}: SearchComponentProps): JSX.Element {
  const handleLabelClick = () => {
    if (search.trim() !== "") {
      onSearch(search);
      alert("Search query: " + search);
    } else {
      alert("Please enter a search query.");
    }
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.SearchContainer}>
        <input
          type="text"
          id="searchInput"
          className={styles.searchInput}
          placeholder="Ingrese su búsqueda"
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={styles.SearchLabelContainer} onClick={handleLabelClick}>
        <label htmlFor="searchInput" className={styles.SearchLabel}>
          Buscar
        </label>
      </div>
    </div>
  );
}
