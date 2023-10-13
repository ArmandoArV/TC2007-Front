"use client";
import React, { useEffect, useCallback, useState } from "react";
import styles from "./Container.module.css";
import UbicationCard from "@/components/BarCardComponent/BarCardComponent";
import { API_URL } from "@/constants";
import { data } from "autoprefixer";

interface BarCardContainerProps {
  searchQuery: string;
  onClickCard: (cardId: number) => void;
}

export const BarCardContainer: React.FC<BarCardContainerProps> = ({
  searchQuery,
  onClickCard,
}) => {
  const [locationData, setLocationData] = useState<any[]>([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const fetchData = useCallback(() => {
    fetch(`${API_URL}/proyecto`)
      .then((response) => response.json())
      .then((data) => {
        setLocationData(data.proyectos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredLocations = locationData.filter((location: any) =>
    location.nombre_proyecto.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleCardClick = (cardInfo: any) => {
    console.log(cardInfo);
    onClickCard(cardInfo);
  };

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
                id: location.id_proyecto,
              }}
              onClick={() => handleCardClick(location.id_proyecto)}
            />
          ))
        ) : (
          <p>No ubication found</p>
        )}
      </div>
    </div>
  );
};
