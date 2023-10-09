import React from "react";
import styles from "./Container.module.css";
import UbicationCard from "@/components/BarCardComponent/BarCardComponent";
import villahermosa from "../../images/100Villa.jpg";
import lacasaninos from "../../images/lacasaninos.png";

export const BarCardContainer = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.cardContainers}>
        <UbicationCard
          information={{
            title: "100% Natural Villahermosa",
            description:
              "Los primeros clientes utilizaban la palabra 100% natural para describir la principal virtud de los ingredientes con la que se preparaban los platillos y bebidas del menú.",
            image: villahermosa.src, // Pass the image path as a string
          }}
        />
        <UbicationCard
          information={{
            title: "La Casa de los Niños del Arbol ( Children of the Tree House )",
            description: "La Casa de los Niños del Arbol ( Children of the Tree House )",
            image: lacasaninos.src, // Pass the image path as a string
          }}
        />
      </div>
    </div>
  );
};
