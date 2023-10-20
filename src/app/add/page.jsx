"use client";
import React, { useEffect, useCallback, useState } from "react";
import { API_URL, ESTADOS_DE_MEXICO, CATEGORIAS, TIPOS } from "@/constants";
import styles from "./page.module.css";
const Swal = require("sweetalert2");

export default function Home() {
  const [nombre_proyecto, setNombre_proyecto] = useState("");
  const [categoria_proyecto, setCategoria_proyecto] = useState("");
  const [descripcion_proyecto, setDescripcion_proyecto] = useState("");
  const [tipo_proyecto, setTipo_proyecto] = useState("");
  const [estado, setEstado] = useState("");
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [url_proyecto, setUrl_proyecto] = useState("");
  const [imagen, setImagen] = useState(null);
  const [logo, setLogo] = useState(null);
  const [horario_apertura, setHorario_apertura_proyecto] = useState("");
  const [horario_cierre, setHorario_cierre_proyecto] = useState("");

  const handleSave = useCallback(() => {
    const requestBody = {
      nombre_proyecto: nombre_proyecto,
      categoria_proyecto: categoria_proyecto,
      descripcion_proyecto: descripcion_proyecto,
      tipo_proyecto: tipo_proyecto,
      estado: estado,
      latitud: parseFloat(latitud),
      longitud: parseFloat(longitud),
      url_proyecto: url_proyecto,
      // imagen: imagen,
      // logo: logo,
      horario_apertura_proyecto: horario_apertura,
      horario_cierre_proyecto: horario_cierre,
    };

    console.log("Request Body:", requestBody);

    fetch(`${API_URL}/proyecto`, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": localStorage.getItem("token") || "",
      },
      body: requestBody,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response Body:", data); // Print the response body
        if (data.mensaje === "proyecto agregado") {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have successfully created a project!",
          });
          window.location.href = "/ubicaciones";
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [
    nombre_proyecto,
    categoria_proyecto,
    descripcion_proyecto,
    tipo_proyecto,
    estado,
    latitud,
    longitud,
    url_proyecto,
    imagen,
    logo,
    horario_apertura,
    horario_cierre,
  ]);

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-2">
      <div className={styles.outerContainer}>
        <form className={styles.formContainer}>
          <label className={styles.label} htmlFor="nombre_proyecto">
            Nombre del proyecto
            <label className={styles.labelObligatory} htmlFor="nombre_proyecto">
              *
            </label>
          </label>
          <input
            className="border border-gray-300 p-2"
            type="text"
            name="nombre_proyecto"
            id="nombre_proyecto"
            onChange={(e) => setNombre_proyecto(e.target.value)}
          />
          <label className={styles.label} htmlFor="description">
            Descripcion
            <label className={styles.labelObligatory}>*</label>
          </label>
          <textarea
            className="border border-gray-300 p-2"
            name="descripcion_proyecto"
            id="description"
            cols={30}
            rows={10}
            onChange={(e) => setDescripcion_proyecto(e.target.value)}
          />
          <label className={styles.label} htmlFor="address">
            Estado
            <label className={styles.labelObligatory} htmlFor="address">
              *
            </label>
          </label>
          <select
            className="border border-gray-300 p-2"
            name="estado"
            id="address"
            onChange={(e) => setEstado(e.target.value)}
            value={estado}
          >
            <option value="0">Selecciona un estado</option>
            {ESTADOS_DE_MEXICO.map((estado) => (
              <option key={estado.id} value={estado.nombre}>
                {estado.nombre}
              </option>
            ))}
          </select>

          <label className={styles.label} htmlFor="imagen">
            Imagen
          </label>
          <input
            className="border border-gray-300 p-2"
            type="file"
            name="imagen"
            id="imagen"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
          />
          <label className={styles.label} htmlFor="logo">
            Logo
          </label>
          <input
            className="border border-gray-300 p-2"
            type="file"
            name="logo"
            id="logo"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
          />
          <label className={styles.label} htmlFor="latitud">
            Latitud
            <label className={styles.labelObligatory} htmlFor="address">
              *
            </label>
          </label>
          <input
            className="border border-gray-300 p-2"
            type="number"
            name="latitud"
            id="latitud"
            onChange={(e) => setLatitud(e.target.value)}
          />
          <label className={styles.label} htmlFor="longitud">
            Longitud
            <label className={styles.labelObligatory} htmlFor="address">
              *
            </label>
          </label>
          <input
            className="border border-gray-300 p-2"
            type="number"
            name="longitud"
            id="longitud"
            onChange={(e) => setLongitud(e.target.value)}
          />
          <label className={styles.label} htmlFor="tipo_proyecto">
            Tipo
            <label className={styles.labelObligatory} htmlFor="tipo_proyecto">
              *
            </label>
          </label>
          <select
            className="border border-gray-300 p-2"
            name="tipo_proyecto" // Match the state property name
            id="tipo_proyecto"
            onChange={(e) => setTipo_proyecto(e.target.value)}
            value={tipo_proyecto}
          >
            <option value="">Selecciona un tipo</option>
            {TIPOS.map((tipo) => (
              <option key={tipo.id} value={tipo.nombre}>
                {tipo.nombre}
              </option>
            ))}
          </select>

          <label className={styles.label} htmlFor="categoria">
            Categoria
            <label className={styles.labelObligatory} htmlFor="address">
              *
            </label>
          </label>
          <select
            className="border border-gray-300 p-2"
            name="categoria_proyecto"
            id="categoria_proyecto"
            onChange={(e) => setCategoria_proyecto(e.target.value)}
            value={categoria_proyecto}
          >
            <option value="0">Selecciona una categoria</option>
            {CATEGORIAS.map((categoria) => (
              <option key={categoria.id} value={categoria.nombre}>
                {categoria.nombre}
              </option>
            ))}
          </select>
          <label className={styles.label} htmlFor="url_proyecto">
            URL del proyecto
          </label>
          <input
            className="border border-gray-300 p-2"
            type="text"
            name="url_proyecto"
            id="url_proyecto"
            onChange={(e) => setUrl_proyecto(e.target.value)}
          />
          <label className={styles.label} htmlFor="horario_apertura_proyecto">
            Horario de apertura
          </label>
          <input
            className="border border-gray-300 p-2"
            type="time"
            name="horario_apertura_proyecto"
            id="horario_apertura_proyecto"
            onChange={(e) => setHorario_apertura_proyecto(e.target.value)}
          />
          <label className={styles.label} htmlFor="horario_cierre_proyecto">
            Horario de cierre
          </label>
          <input
            className="border border-gray-300 p-2"
            type="time"
            name="horario_cierre_proyecto"
            id="horario_cierre_proyecto"
            onChange={(e) => setHorario_cierre_proyecto(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white p-2 rounded mt-2"
            onClick={handleSave}
            type="button"
          >
            Guardar
          </button>
        </form>
      </div>
    </main>
  );
}
