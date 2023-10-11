export const API_URL = "https://1mfu6t7gmh.execute-api.us-east-1.amazonaws.com";

export interface menuItem {
  name: string;
  path: string;
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
