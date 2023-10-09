import Link from "next/link";
import Image from "next/image";
import CienNatural from "@/images/CienNatural.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col items-center justify-center mt-4">
        <div className="mt-20">
          <Image
            src={CienNatural}
            alt="100%Natural Logo"
            width={192}
            height={81}
          />
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
