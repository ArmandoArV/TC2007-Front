"use client";
import Link from "next/link";
import styles from "./page.module.css";
import CardInfo from "@/components/CardInfoComponent/CardInfo";
import CienNatural from "../../images/CienNatural.png";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import { BarCardContainer } from "@/Containers/BarCardContainer/BarCardContainer";
import SearchComponent from "@/components/SearchComponent/SearchComponent";
import villahermosa from "../../images/100Villa.jpg";
import { API_URL } from "@/constants";
import { get } from "http";

interface Categoria {
  name: string;
  isActive: boolean;
}

export default function Home() {
  const [getLatitud, setLatitud] = useState(0);
  const [getLongitud, setLongitud] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [getTitle, setTitle] = useState("");
  const [getDescription, setDescription] = useState("");
  const [getImagen, setImagen] = useState("");
  const [getCategoria, setCategoria] = useState("");
  const [getEstado, setEstado] = useState("");
  const [getTipo, setTipo] = useState("");
  const [getApertura, setApertura] = useState("");
  const [getCierre, setCierre] = useState("");
  const [getUrl, setUrl] = useState("");

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };

  const cardInformation = useMemo(() => {
    return {
      title: getTitle,
      description: getDescription,
      image: getImagen,
      estado: getEstado,
      tipo: getTipo,
      apertura: getApertura,
      cierre: getCierre,
      url: getUrl,
    };
  }, [
    getTitle,
    getDescription,
    getImagen,
    getEstado,
    getTipo,
    getApertura,
    getCierre,
    getUrl,
  ]);

  const location = useMemo(() => {
    return {
      latitud: getLatitud,
      longitud: getLongitud,
    };
  }, [getLatitud, getLongitud]);

  const categories = useMemo(() => {
    return getCategoria;
  }, [getCategoria]);

  const handleCardSelect = (cardId: number) => {
    setSelectedCardId(cardId);
  };

  const fetchData = useCallback(() => {
    fetch(`${API_URL}/proyecto/${selectedCardId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Response Body:", data); // Print the response body
        setTitle(data.proyecto.nombre_proyecto);
        setDescription(data.proyecto.descripcion_proyecto);
        setImagen(data.proyecto.imagen_proyecto);
        setLatitud(data.proyecto.latitud);
        setLongitud(data.proyecto.longitud);
        setCategoria(data.proyecto.categoria_proyecto);
        setEstado(data.proyecto.estado);
        setTipo(data.proyecto.tipo_proyecto);
        setApertura(data.proyecto.horario_apertura_proyecto);
        setCierre(data.proyecto.horario_cierre_proyecto);
        setUrl(data.proyecto.url_proyecto);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedCardId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-2">
      <div className={styles.outerContainer}>
        <Link href="/add">
          <button className={styles.addButton}>+</button>
        </Link>
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
              <BarCardContainer
                searchQuery={searchQuery}
                onClickCard={handleCardSelect}
              />
            </div>
          </div>
          {selectedCardId ? (
            <div className={styles.rightContainer}>
              <CardInfo
                information={cardInformation}
                location={location}
                categoria={categories}
                id={selectedCardId}
              />
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
