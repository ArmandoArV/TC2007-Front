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

  const handleUsernameLogin = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsernameLogin(e.target.value);
  };

  const handlePasswordLogin = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
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
      // Check if input is an email
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usernameLogin);

      // Set the data to send in the fetch request
      const requestData = isEmail
        ? { email: usernameLogin, password: passwordLogin }
        : { username: usernameLogin, password: passwordLogin };

      fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data.message === "User logged in successfully") {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "You have successfully logged in!",
            });
            localStorage.setItem("token", data.token);
            localStorage.setItem("idUser", data.idUser.toString());
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Incorrect email or username or password!",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          console.log(error);
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
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href={"/recuperar"}
            className="text-xl font-bold font-Ruda text-ventana-blue"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <div className="flex justify-center mt-10">
          <button className="w-50 h-12 px-4  text-xl rounded-md bg-ventana-blue text-white font-bold">
            <Link href={"/ubicaciones"}>Iniciar Sesión</Link>
          </button>
        </div>
      </form>
    </main>
  );
}
