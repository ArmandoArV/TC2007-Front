"use client";
import Link from "next/link";
import Image from "next/image";
import CienNatural from "@/images/CienNatural.png";
import { API_URL } from "@/constants";
import React, { useCallback, useState } from "react";
const Swal = require("sweetalert2");
export default function Home() {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleUsernameLogin = (e: any) => {
    setUsernameLogin(e.target.value);
  };

  const handlePasswordLogin = (e: any) => {
    setPasswordLogin(e.target.value);
  };

  const handleSubmitLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (usernameLogin === "" || passwordLogin === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All the fields are required!",
      });
    } else {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameLogin);
      const requestData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        clave_admin: "TUNA",
        usuario_admin: "Tuna123321",
      };

      console.log("Request Data:", requestData);

      fetch(`${API_URL}/login`, requestData)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col items-center justify-center mt-4">
        <div className="mt-20">
          <img src={CienNatural.src} alt="Logo" />
        </div>
        <div className="mt-4  flex flex-col">
          <div className="flex justify-center flex flex-col mt-10">
            <label className="text-2xl font-bold font-Ruda">Usuario</label>
            <input
              className="w-96 h-12 px-4 mt-2 text-xl border border-black rounded-md"
              type="text"
              placeholder="Usuario"
              onChange={handleUsernameLogin}
            />
          </div>
          <div className="flex justify-center flex flex-col mt-10">
            <label className="text-2xl font-bold mt-2 font-Ruda">
              Contraseña
            </label>
            <input
              className="w-96 h-12 px-4 mt-2 text-xl border border-black rounded-md"
              type="password"
              placeholder="Contraseña"
              onChange={handlePasswordLogin}
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="w-50 h-12 px-4  text-xl rounded-md bg-ventana-blue text-white font-bold"
            type="button"
            onClick={handleSubmitLogin}
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </main>
  );
}
