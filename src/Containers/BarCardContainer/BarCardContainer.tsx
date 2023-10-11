"use client";
import React, { useEffect, useCallback, useState } from "react";
import styles from "./Container.module.css";
import UbicationCard from "@/components/BarCardComponent/BarCardComponent";
import villahermosa from "../../images/100Villa.jpg";
import lacasaninos from "../../images/lacasaninos.png";
import { API_URL } from "@/constants";

interface BarCardContainerProps {
  searchQuery: string;
}

export const BarCardContainer: React.FC<BarCardContainerProps> = ({
  searchQuery,
}) => {
  const [locationData, setLocationData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/proyecto`)
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data.proyectos);
        console.log(data.proyectos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredLocations = locationData.filter((location: any) =>
    location.nombre_proyecto.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.outerContainer}>
      <div className={styles.cardContainers}>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location: any, index: any) => (
            <UbicationCard
              key={index}
              information={{
                title: location.nombre_proyecto,
                description: location.descripcion_proyecto,
                image: location.logo_proyecto,
              }}
            />
          ))
        ) : (
          <p>No ubication found</p>
        )}
      </div>
    </div>
  );
};
