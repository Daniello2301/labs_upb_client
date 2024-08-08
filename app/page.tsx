import Image from "next/image";

import styles from "@/ui/home.module.css";
import Link from "next/link";

export default function Home() {



  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 bg-[#354E95]/[.2]">
      <div
        className={`${styles.divmain} relative rounded-lg grid md:grid-cols-2 sm:grid-cols-1`}
      >
          <span className="absolute w-10/12 h-[0.5px] bg-blue-300/[.5] md:top-20 md:left-16"></span>
          <span className="absolute h-5/6 w-[0.5px] bg-[#354E95]/[.5] md:top-10 md:left-24"></span>
        <section className="flex flex-col justify-center items-center ml-24 gap-4">
          <h2 className="text-5xl text-wrap w-[400px] font-medium text-[#354E95] text-left">Laboratorios de Energía Y TIC</h2>
          <p className="text-[20px] font-medium text-left text-wrap w-[400px] text-[#787F89]">
            Para una mejor gestion de los equipos y sus prestamos
          </p>
          <Link
            className="w-[150px] h-[40px] bg-[#FBFCFE] border border-[#DDE4F0] text-[#354E95] 
              shadow-[2px_2px_5px_1px_rgba(53,78,149,0.2)] rounded-md text-center flex items-center justify-center ml-20
              transition-transform duration-300 ease-in-out hover:scale-105"
            href="/login"
            >
            Iniciar Sesion
          </Link>
        </section>
        <section className="grid content-cente place-content-center">
            <Image
              src="/logo_upb.png"
              alt="Laboratorio de Energía"
              width={400}
              height={400}
              priority
            />
        </section>
      </div>
    </main>
  );
}
