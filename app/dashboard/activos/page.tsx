"use client";

import { fetchActivosCount } from "../../../api/activos.action";
import Form from "@/ui/activos/create-form";
import Pagination from "@/ui/activos/pagination";
import TableActivos from "@/ui/activos/table";
import Search from "@/ui/search";
import { fetchTiposActivos } from "../../../api/tipo_activo.action";
import { fetchBloques } from "../../../api/bloque.action";
import { useEffect, useState } from "react";
import useCookie from "../../../hooks/useCookies";
import { useSearchParams } from "next/navigation";
import { Activo } from "../../../lib/activo-definitions";

export default function Page(/* {
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
} */) {

  const searchParams = useSearchParams();

  // Before
  //const query = searchParams?.query || "";
  // After
  const query = searchParams.get("query") || "";

  // Before
  //const currentPage = Number(searchParams?.page) || 1;
  // After
  const currentPage = Number(searchParams.get("page")) || 1;

  const [totalPages, setTotalPages] = useState<number>(0);
  const [tiposActivos, setTiposActivos] = useState<any>([]);
  const [bloques, setBloques] = useState<any>([]);
  const [ refresh, setRefresh ] = useState<boolean>(false);

  const [ activoSelected, setActivoSelected ] = useState<Activo>();

  const { getCookie } = useCookie();
  const user = JSON.parse(getCookie("user") || "{}");


  const handleRefresh = () => {
    setRefresh(!refresh);
  }

  const handleSelectedActivo = (activo: Activo) => {
    setActivoSelected(activo);

    if (activo) {
      console.log("Activo seleccionado", activo);
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      const totalPages = await fetchActivosCount(query);
      setTotalPages(totalPages);
      const tiposActivos = await fetchTiposActivos(user?.access_token);
      setTiposActivos(tiposActivos);
      const bloques = await fetchBloques();
      setBloques(bloques);
    };
    fetchData();
  }, [query, user?.access_token]);

  return (
    <>
      <span className="absolute h-3/5 w-[0.5px] bg-[#C8CBD9]/[.5] top-56 left-72"></span>
      <main className="relative p-5 h-auto max-h-full">
        <h1 className="text-2xl text-blue-300 font-semibold ml-16 mb-5">
          Activos
        </h1>
        <div className="grid grid-cols-[minmax(800px,1000px)_minmax(auto,500px)] gap-7 items-center justify-center h-full">
          <section className="w-full grid grid-cols-1 gap-10 items-center justify-center px-10 ">
            <Search
              placeholder="Buscar activo"
              className="w-[460px] bg-[#F6F6FB]"
            />

            {/* This is the table */}
            <TableActivos query={query} currentPage={currentPage} refresh={refresh} onEditActivo={handleSelectedActivo} />
            {/* Pagination */}

            <div className="flex w-full items-center justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          </section>
          <section className="flex justify-center w-full flex-col">
            <Form tiposActivos={tiposActivos} bloques={bloques} onNewActivo={handleRefresh} activoSelected={activoSelected} />
          </section>
        </div>
      </main>
    </>
  );
}
