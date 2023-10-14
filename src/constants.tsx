export const API_URL = "https://1mfu6t7gmh.execute-api.us-east-1.amazonaws.com";

export interface menuItem {
  name: string;
  path: string;
}

export interface idNombre {
  id: number;
  nombre: string;
}

export interface categoria {
  name: string;
  isActive: boolean;
}

export const menuItems: menuItem[] = [
  {
    name: "Inicio",
    path: "/",
  },
];

export const categorias: categoria[] = [
  {
    name: "Turismo",
    isActive: false,
  },
  {
    name: "Medicina",
    isActive: false,
  },
  {
    name: "Agroforestal",
    isActive: false,
  },
  {
    name: "Bioconstruccion",
    isActive: false,
  },
];

export const CATEGORIAS: idNombre[] = [
  {
    id: 1,
    nombre: "Turismo",
  },
  {
    id: 2,
    nombre: "Medicina",
  },
  {
    id: 3,
    nombre: "Agroforestal",
  },
  {
    id: 4,
    nombre: "Bioconstruccion",
  },
];

export const TIPOS: idNombre[] = [
  {
    id: 1,
    nombre: "Hotel",
  },
  {
    id: 2,
    nombre: "Restaurante",
  },
  {
    id: 3,
    nombre: "Lugar recreativo",
  },
];

export const ESTADOS_DE_MEXICO: idNombre[] = [
  {
    id: 1,
    nombre: "Aguascalientes",
  },
  {
    id: 2,
    nombre: "Baja California",
  },
  {
    id: 3,
    nombre: "Baja California Sur",
  },
  {
    id: 4,
    nombre: "Campeche",
  },
  {
    id: 5,
    nombre: "Chiapas",
  },
  {
    id: 6,
    nombre: "Chihuahua",
  },
  {
    id: 7,
    nombre: "Coahuila",
  },
  {
    id: 8,
    nombre: "Colima",
  },
  {
    id: 9,
    nombre: "Ciudad de México",
  },
  {
    id: 10,
    nombre: "Durango",
  },
  {
    id: 11,
    nombre: "Guanajuato",
  },
  {
    id: 12,
    nombre: "Guerrero",
  },
  {
    id: 13,
    nombre: "Hidalgo",
  },
  {
    id: 14,
    nombre: "Jalisco",
  },
  {
    id: 15,
    nombre: "México",
  },
  {
    id: 16,
    nombre: "Michoacán",
  },
  {
    id: 17,
    nombre: "Morelos",
  },
  {
    id: 18,
    nombre: "Nayarit",
  },
  {
    id: 19,
    nombre: "Nuevo León",
  },
  {
    id: 20,
    nombre: "Oaxaca",
  },
  {
    id: 21,
    nombre: "Puebla",
  },
  {
    id: 22,
    nombre: "Querétaro",
  },
  {
    id: 23,
    nombre: "Quintana Roo",
  },
  {
    id: 24,
    nombre: "San Luis Potosí",
  },
  {
    id: 25,
    nombre: "Sinaloa",
  },
  {
    id: 26,
    nombre: "Sonora",
  },
  {
    id: 27,
    nombre: "Tabasco",
  },
  {
    id: 28,
    nombre: "Tamaulipas",
  },
  {
    id: 29,
    nombre: "Tlaxcala",
  },
  {
    id: 30,
    nombre: "Veracruz",
  },
  {
    id: 31,
    nombre: "Yucatán",
  },
  {
    id: 32,
    nombre: "Zacatecas",
  },
];
