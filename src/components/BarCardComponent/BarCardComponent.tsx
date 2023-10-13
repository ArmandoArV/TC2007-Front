import React from "react";
import styles from "./UbicationCard.module.css";
import CienNatural from "../../images/CienNatural.png";
import Image from "next/image";
interface UbicationCardProps {
  information: {
    title: string;
    description: string;
    image: string;
    id: number;
  };
  onClick: () => void;
}

export const UbicationCard = (props: UbicationCardProps) => {
  return (
    <div className={styles.cardContainer} onClick={props.onClick}>
      <div className={styles.cardImageContainer}>
        <img
          src={props.information.image}
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.cardTextContainer}>
        <h1 className={styles.cardTitle}>{props.information.title}</h1>
        <p className={styles.cardDescription}>
          {props.information.description}
        </p>
      </div>
    </div>
  );
};

export default UbicationCard;
