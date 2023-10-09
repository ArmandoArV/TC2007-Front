import React from "react";
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
  return (
    <div className={styles.searchContainer}>
      <div className={styles.SearchContainer}>
        <input
          type="text"
          id="searchInput"
          className={styles.searchInput}
          placeholder="Ingrese su búsqueda"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={styles.SearchLabelContainer}>
        <label htmlFor="searchInput" className={styles.SearchLabel}>
          Buscar
        </label>
      </div>
    </div>
  );
}
