"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./CardInfo.module.css";
import Image, { StaticImageData } from "next/image";
import { categoria, categorias } from "@/constants";

interface CardInfoProps {
  information: {
    title: string;
    description: string;
    image: string;
  };
  location: {
    latitud: number;
    longitud: number;
  };
  categoria: string;

  id: number;
}

export default function CardInfo({
  information,
  location,
  categoria,
  id,
}: CardInfoProps) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.topContainer}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{information.title}</h1>
        </div>
      </div>
      <div className={styles.mediumContainer}>
        <div className={styles.imageContainer}>
          <img
            src={information.image}
            alt={information.title}
            width={192}
            height={81}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>{information.description}</p>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.typesContainer}>
          <h3 className={styles.typesTitle}>Categoria(s): </h3>
          <p className={styles.typesText}>{categoria}</p>
        </div>
        <div className={styles.locationsContainer}>
          <div className={styles.locationContainer}>
            <label className={styles.locationTitle}>Latitud</label>
            {isEdit ? (
              <input className={styles.location} />
            ) : (
              <p className={styles.locationText}>{location.latitud}</p>
            )}
          </div>
          <div className={styles.locationContainer}>
            <label className={styles.locationTitle}>Longitud</label>
            {isEdit ? (
              <input className={styles.location} />
            ) : (
              <p className={styles.locationText}>{location.longitud}</p>
            )}
          </div>
        </div>
        {isEdit ? (
          <div className={styles.buttonContainer}>
            <div className={styles.leftButtonContainer}>
              <button className={styles.btnDelete}>
                Eliminar{" "}
                <img
                  src={"/images/trash.png"}
                  alt="delete"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </button>
            </div>
            <div className={styles.rightButtonContainer}>
              <button className={styles.btnSave}>
                Guardar{" "}
                <img
                  src={"/images/tick.png"}
                  alt="save"
                  width={30}
                  height={50}
                  className={styles.icon}
                />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.buttonContainer}>
            <button className={styles.buttonEdit} onClick={handleEditClick}>
              <img
                src={"/images/Edit.png"}
                alt="save"
                width={30}
                height={50}
                className={styles.editIcon}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
