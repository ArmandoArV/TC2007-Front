"use client";
import Link from "next/link";
import styles from "./page.module.css";
import CardInfo from "@/components/CardInfoComponent/CardInfo";
import CienNatural from "../../images/CienNatural.png";
import React, { useState } from "react";
import { BarCardContainer } from "@/Containers/BarCardContainer/BarCardContainer";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import villahermosa from "../../images/100Villa.jpg";

interface Categoria {
  name: string;
  isActive: boolean;
}

export default function Home() {
  const [getLatitud, setLatitud] = useState(0);
  const [getLongitud, setLongitud] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };

  const cardInformation = {
    title: "Example Card Title",
    description: "This is an example card description.",
    image: villahermosa,
  };

  const location = {
    latitud: 123.456, // Replace with actual latitude value
    longitud: -78.91, // Replace with actual longitude value
  };

  const categories = [
    { name: "Category 1", isActive: true },
    { name: "Category 2", isActive: false },
    // Add more categories as needed
  ];

  const type = {
    turismo: true,
    medicina: false,
    agroforestal: true,
    bioconstruccion: false,
  };

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-2">
      <div className={styles.outerContainer}>
        <button className={styles.addButton}>+</button>
        <div className={styles.topContainer}>
          <h1 className={styles.sectionHeader}>Ubicaciones</h1>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.SearchBarContainer}>
              <SearchComponent
                search={searchQuery}
                setSearch={setSearchQuery}
                onSearch={handleSearch}
              />
            </div>
            <div className={styles.bottomContainer}>
              <BarCardContainer searchQuery={searchQuery} />
            </div>
          </div>
          <div className={styles.rightContainer}>
            <CardInfo
              information={cardInformation}
              location={location}
              categoria={categories}
              type={type}
            />{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
