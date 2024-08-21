import { fetchActivosCount } from "../../../api/activos.action";
import Form from "@/ui/activos/create-form";
import Pagination from "@/ui/activos/pagination";
import TableActivos from "@/ui/activos/table";
import Search from "@/ui/search";
import { Metadata } from "next";
import { fetchTiposActivos } from "../../../api/tipo_activo.action";
import { fetchBloques } from "../../../api/bloque.action";


export const metadata: Metadata = {
  title: "Activos",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchActivosCount(query);

  const tiposActivos = await fetchTiposActivos();
  const bloques = await fetchBloques();

  return (
    <>
      <span className="absolute h-3/5 w-[0.5px] bg-[#C8CBD9]/[.5] top-56 left-72"></span>
      <span className="absolute h-3/5 w-[0.5px] bg-[#C8CBD9]/[.5] top-56 right-[24%]" />
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
            <TableActivos query={query} currentPage={currentPage} />
            {/* Pagination */}

            <div className="flex w-full items-center justify-center">
              <Pagination totalPages={totalPages} />
            </div>
          </section>
          <section className="flex justify-center w-full">
            <Form tiposActivos={tiposActivos} bloques={bloques} />
          </section>
        </div>
      </main>
    </>
  );
}
