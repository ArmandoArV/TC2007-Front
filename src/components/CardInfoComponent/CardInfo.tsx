"use client";

import React, { useState, useCallback, useEffect } from "react";
import styles from "./CardInfo.module.css";
import Image, { StaticImageData } from "next/image";
import { categoria, categorias, API_URL } from "@/constants";
const Swal = require("sweetalert2");

interface CardInfoProps {
  information: {
    title: string;
    description: string;
    image: string;
    estado: string;
    tipo: string;
    apertura: string;
    cierre: string;
    url: string;
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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estado, setEstado] = useState("");
  const [tipo, setTipo] = useState("");
  const [apertura, setApertura] = useState("");
  const [cierre, setCierre] = useState("");
  const [url, setUrl] = useState("");
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [categorias, setCategoria] = useState("");

  const setValues = useCallback(() => {
    setTitle(information.title);
    setDescription(information.description);
    setEstado(information.estado);
    setTipo(information.tipo);
    setApertura(information.apertura);
    setCierre(information.cierre);
    setUrl(information.url);
    setLatitud(location.latitud);
    setLongitud(location.longitud);
    setCategoria(categoria);
  }, [information, location, categoria]);

  useEffect(() => {
    setValues();
  }, [setValues]);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    fetch(`${API_URL}/proyecto/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem("token") || "",
      },
    })
      .then((response) => {
        console.log("Request URL:", response.url);
        console.log("Response Status:", response.status);

        if (response.status === 200) {
          console.log("Successfully deleted.");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have successfully deleted a project!",
          });
          window.location.reload();
        } else {
          console.error("Failed to delete.");
        }
      })
      .catch((error) => {
        console.error("Network or fetch error:", error);
      });
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
          {isEdit ? (
            <textarea
              className={styles.description}
              cols={30}
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          ) : (
            <p className={styles.description}>{information.description}</p>
          )}
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Estado: </h3>
            {isEdit ? (
              <input
                className={styles.infoText}
                onChange={(e) => setEstado(e.target.value)}
                value={estado}
              />
            ) : (
              <p className={styles.infoText}>{information.estado}</p>
            )}
          </div>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Tipo: </h3>
            {isEdit ? (
              <input
                className={styles.infoText}
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
            ) : (
              <p className={styles.infoText}>{information.tipo}</p>
            )}
          </div>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Apertura: </h3>
            {isEdit ? (
              <input
                className={styles.infoText}
                onChange={(e) => setApertura(e.target.value)}
                value={apertura}
              />
            ) : (
              <p className={styles.infoText}>{information.apertura}</p>
            )}
          </div>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>Cierre: </h3>
            {isEdit ? (
              <input
                className={styles.infoText}
                onChange={(e) => setCierre(e.target.value)}
                value={cierre}
              />
            ) : (
              <p className={styles.infoText}>{information.cierre}</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.typesContainer}>
          <h3 className={styles.typesTitle}>Categoria(s): </h3>
          {isEdit ? (
            <input
              className={styles.infoText}
              onChange={(e) => setCategoria(e.target.value)}
              value={categorias}
            />
          ) : (
            <p className={styles.typesText}>{information.tipo}</p>
          )}
        </div>
        <div className={styles.locationsContainer}>
          <div className={styles.locationContainer}>
            <label className={styles.locationTitle}>Latitud</label>
            {isEdit ? (
              <input
                className={styles.location}
                onChange={(e) => setLatitud(Number(e.target.value))}
                value={latitud}
              />
            ) : (
              <p className={styles.locationText}>{location.latitud}</p>
            )}
          </div>
          <div className={styles.locationContainer}>
            <label className={styles.locationTitle}>Longitud</label>
            {isEdit ? (
              <input
                className={styles.location}
                onChange={(e) => setLongitud(Number(e.target.value))}
                value={longitud}
              />
            ) : (
              <p className={styles.locationText}>{location.longitud}</p>
            )}
          </div>
        </div>
        {isEdit ? (
          <div className={styles.buttonContainer}>
            <div className={styles.leftButtonContainer}>
              <button className={styles.btnDelete} onClick={handleDelete}>
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
