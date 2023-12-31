"use client";
import React, { useEffect, useCallback, useState } from "react";
import { API_URL, ESTADOS_DE_MEXICO, CATEGORIAS, TIPOS } from "@/constants";
import styles from "./page.module.css";
const Swal = require("sweetalert2");
import AuthRoute from "@/components/AuthComponent/AuthComponent";
export default function Home() {
  const [projectData, setProjectData] = useState({
    nombre_proyecto: "",
    categoria_proyecto: "",
    descripcion_proyecto: "",
    tipo_proyecto: "",
    estado: "",
    latitud: 0,
    longitud: 0,
    url_proyecto: "",
    imagen: null,
    logo: null,
    horario_apertura_proyecto: "",
    horario_cierre_proyecto: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleFileInputChange = (event) => {
    const { name, files } = event.target;
    setProjectData({
      ...projectData,
      [name]: files[0],
    });
  };

  const handleSave = useCallback(() => {
    const formData = new FormData();
    for (const key in projectData) {
      formData.append(key, projectData[key]);
    }

    console.log("Request Body:", formData);

    fetch(`${API_URL}/proyecto`, {
      method: "POST",
      headers: {
        // Remove "Content-Type" header to let the browser set it automatically
        "x-access-token": localStorage.getItem("token") || "",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response Body:", data);
        if (data.mensaje === "proyecto agregado") {
          Swal.fire({
            icon: "success",
            title: "¡Listo!",
            text: "¡Creado con éxito!",
          });
          window.location.href = "/ubicaciones";
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "¡Algo salió mal!",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [projectData]);

  return (
    <>
      <AuthRoute>
        <main className="flex min-h-screen flex-row items-center justify-between p-2">
          <div className={styles.outerContainer}>
            <form className={styles.formContainer}>
              <label className={styles.label} htmlFor="nombre_proyecto">
                Nombre del proyecto
                <label
                  className={styles.labelObligatory}
                  htmlFor="nombre_proyecto"
                >
                  *
                </label>
              </label>
              <input
                className="border border-gray-300 p-2"
                type="text"
                name="nombre_proyecto"
                id="nombre_proyecto"
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                value={projectData.estado}
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
                onChange={handleFileInputChange}
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
                onChange={handleFileInputChange}
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
              />
              <label className={styles.label} htmlFor="tipo_proyecto">
                Tipo
                <label
                  className={styles.labelObligatory}
                  htmlFor="tipo_proyecto"
                >
                  *
                </label>
              </label>
              <select
                className="border border-gray-300 p-2"
                name="tipo_proyecto"
                id="tipo_proyecto"
                onChange={handleInputChange}
                value={projectData.tipo_proyecto}
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
                onChange={handleInputChange}
                value={projectData.categoria_proyecto}
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
                onChange={handleInputChange}
              />
              <label
                className={styles.label}
                htmlFor="horario_apertura_proyecto"
              >
                Horario de apertura
              </label>
              <input
                className="border border-gray-300 p-2"
                type="time"
                name="horario_apertura_proyecto"
                id="horario_apertura_proyecto"
                onChange={handleInputChange}
              />
              <label className={styles.label} htmlFor="horario_cierre_proyecto">
                Horario de cierre
              </label>
              <input
                className="border border-gray-300 p-2"
                type="time"
                name="horario_cierre_proyecto"
                id="horario_cierre_proyecto"
                onChange={handleInputChange}
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
      </AuthRoute>
    </>
  );
}
