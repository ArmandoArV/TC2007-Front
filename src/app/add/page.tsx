import React from "react";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-2">
      <div className={styles.outerContainer}>
        <form className="flex flex-col w-1/2">
          <label className="text-gray-700" htmlFor="title">
            Titulo
          </label>
          <input
            className="border border-gray-300 p-2"
            type="text"
            name="title"
            id="title"
          />
          <label className="text-gray-700" htmlFor="description">
            Descripcion
          </label>
          <textarea
            className="border border-gray-300 p-2"
            name="description"
            id="description"
            cols={30}
            rows={10}
          />
          <label className="text-gray-700" htmlFor="image">
            Imagen
          </label>
          <input
            className="border border-gray-300 p-2"
            type="text"
            name="image"
            id="image"
          />
          <label className="text-gray-700" htmlFor="latitud">
            Latitud
          </label>
          <input
            className="border border-gray-300 p-2"
            type="number"
            name="latitud"
            id="latitud"
          />
          <label className="text-gray-700" htmlFor="longitud">
            Longitud
          </label>
          <input
            className="border border-gray-300 p-2"
            type="number"
            name="longitud"
            id="longitud"
          />
          <label className="text-gray-700" htmlFor="categoria">
            Categoria
          </label>
          <select
            className="border border-gray-300 p-2"
            name="categoria"
            id="categoria"
          >
            <option value="0">Selecciona una categoria</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
            <option value="4">Categoria 4</option>
          </select>
          <button className="bg-blue-500 text-white p-2 rounded mt-2">
            Guardar
          </button>
        </form>
      </div>
    </main>
  );
}
