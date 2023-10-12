"use client";

import React from "react";
import styles from "./CardInfo.module.css";
import Image, { StaticImageData } from "next/image";
import { categoria, categorias } from "@/constants";
import tick from "../../images/tick.png";
import trash from "../../images/trash.png";
import edit from "../../images/Edit.png";

interface CardInfoProps {
  information: {
    title: string;
    description: string;
    image: StaticImageData;
  };
  location: {
    latitud: number;
    longitud: number;
  };
  categoria: categoria[];
  type: {
    [key: string]: boolean;
  };
}

export default function CardInfo({
  information,
  location,
  type,
  categoria,
}: CardInfoProps) {
  const [getType, setType] = React.useState({
    turismo: false,
    medicina: false,
    agroforestal: false,
    bioconstruccion: false,
  });

  const [getLongitud, setLongitud] = React.useState(0);
  const [getLatitud, setLatitud] = React.useState(0);
  const [isEdit, setIsEdit] = React.useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setType({ ...getType, [name]: checked });
  };

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
          <Image
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
          {categorias.map((categoriaItem) => (
            <div className={styles.typeContainer} key={categoriaItem.name}>
              <input
                className={styles.typeInput}
                type="checkbox"
                disabled={!isEdit}
                onChange={handleCheckboxChange}
              />
              <label className={styles.typeLabel}>{categoriaItem.name}</label>
            </div>
          ))}
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
                <Image
                  src={trash}
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
                <Image
                  src={tick}
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
              <Image
                src={edit}
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
