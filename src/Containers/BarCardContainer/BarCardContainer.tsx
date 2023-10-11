import React from "react";
import styles from "./Container.module.css";
import UbicationCard from "@/components/BarCardComponent/BarCardComponent";
import villahermosa from "../../images/100Villa.jpg";
import lacasaninos from "../../images/lacasaninos.png";

interface BarCardContainerProps {
  searchQuery: string;
}

export const BarCardContainer: React.FC<BarCardContainerProps> = ({
  searchQuery,
}) => {
  const locationData = [
    {
      title: "100% Natural Villahermosa",
      description:
        "Los primeros clientes utilizaban la palabra 100% natural para describir la principal virtud de los ingredientes con la que se preparaban los platillos y bebidas del menú.",
      image: villahermosa.src, 
    },
    {
      title: "La Casa de los Niños del Árbol (Children of the Tree House)",
      description:
        "La Casa de los Niños del Árbol (Children of the Tree House)",
      image: lacasaninos.src,
    },
  ];

  const filteredLocations = locationData.filter((location) =>
    location.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.outerContainer}>
      <div className={styles.cardContainers}>
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location, index) => (
            <UbicationCard key={index} information={location} />
          ))
        ) : (
          <p>No ubication found</p>
        )}
      </div>
    </div>
  );
};
