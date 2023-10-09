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
