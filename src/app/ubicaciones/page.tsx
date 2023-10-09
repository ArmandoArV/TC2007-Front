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
                search={""}
                setSearch={() => {}}
                onSearch={() => {}}
              />
            </div>
            <div className={styles.bottomContainer}>
              <BarCardContainer />
            </div>
          </div>
          <div className={styles.rightContainer}></div>
        </div>
      </div>
    </main>
  );
}
