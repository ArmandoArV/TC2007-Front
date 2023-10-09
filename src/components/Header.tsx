"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LaVentanaLogo from "@/images/logos/LaVentana.png";

import { menuItems, menuItem } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ref: React.MutableRefObject<any> = useRef();
  const tooltipRef: React.MutableRefObject<any> = useRef();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClickOutside(event: any) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-5 left-0 right-0 w-full px-5 z-30">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl min-[856px]:items-center min-[856px]:flex min-[856px]:px-8">
        <div className="flex items-center justify-between py-3 min-[856px]:block">
          <div className="flex w-full items-center">
            <Link href={"/"} className="">
              <Image
                src={LaVentanaLogo}
                alt="100%Natural Logo"
                width={192}
                height={81}
              />
            </Link>
          </div>

          <div className="min-[856px]:hidden">
            <button
              className="outline-none p-2 rounded-full focus:border-gray-400 bg-slate-900 bg-opacity-50 focus:border
              hover:bg-opacity-70 active:bg-opacity-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              ref={tooltipRef}
            >
              {isMenuOpen ? (
                <Image
                  className="focus:border-none active:border-none opacity-50"
                  src={"/images/icons/x.svg"}
                  alt="Close Icon"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  className="focus:border-none active:border-none opacity-80"
                  src={"/images/icons/hamburger.svg"}
                  alt="Menu Icon"
                  width={24}
                  height={24}
                />
              )}
            </button>
          </div>
        </div>
        {/* Container for menuItems, aligned to the right */}
        <div className="flex-1 justify-end min-[856px]:block">
          <ul className="h-auto items-center justify-end flex space-x-6">
            {menuItems.map((item: menuItem) => (
              <li
                key={item.name}
                className="text-md text-black py-2 text-center border-b-0
        hover:border-b-2 hover:border-black hover:border-opacity-60"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }} // Add this line
              >
                <Link href={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
