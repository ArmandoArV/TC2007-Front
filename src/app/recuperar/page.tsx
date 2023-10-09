import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola desde recuperar</h1>
      <Link href="/">
        <button className="bg-ventana-orange p-4 rounded-md shadow-md hover:bg-axos-orange-dark">
          Regresar a Inicio
        </button>
      </Link>
    </main>
  );
}
