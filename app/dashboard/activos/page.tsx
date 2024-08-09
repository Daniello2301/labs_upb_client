import { fetchActivosCount } from "@/lib/activos.action";
import Pagination from "@/ui/activos/pagination";
import TableActivos from "@/ui/activos/table";
import Form from "@/ui/login-form";
import Search from "@/ui/search";
import { Metadata } from "next";

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

  console.log(totalPages)

  return (
    <>
      <span className="absolute h-3/5 w-[0.5px] bg-[#C8CBD9]/[.5] top-56 left-72"></span>
      <span className="absolute h-3/5 w-[0.5px] bg-[#C8CBD9]/[.5] top-56 right-[24%]" />
      <main className="relative p-10 h-auto max-h-full">
        <h1 className="text-2xl text-blue-300 font-semibold ml-16 mb-10">
          Activos
        </h1>
        <div className="grid grid-cols-[minmax(900px,1100px)_minmax(auto,300px)] gap-7 items-center justify-center h-full">
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
          <section className="border border-red-500 flex justify-center w-full">
            <Form />
          </section>
        </div>
      </main>
    </>
  );
}
