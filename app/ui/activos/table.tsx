
import { fetchFilteredActivos } from "../../../api/activos.action";
import React, { act } from "react";

export default async function TableActivos({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const activos = await fetchFilteredActivos(query, currentPage);

  return (
    <>
      <div className="mt-6">
        <div className="inline-block min-w-full align-middle">
          <div className="p-2 pt-0 2xl:min-h-[272px] min-h-[372px]">
            <table className="min-w-full overflow-y-auto text-gray-900">
              <thead className="text-left text-sm font-normal bg-[#F1F2F7]">
                <tr>
                  <th
                    scope="col"
                    className="px-2 py-4 pl-6 rounded-s-lg text-blue-300 font-semibold"
                  >
                    Numero Inventario
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 font-medium text-black/50"
                  >
                    Descripcion
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 font-medium text-black/50"
                  >
                    Estado
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 font-medium text-black/50"
                  >
                    Aula
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-4 font-medium text-black/50"
                  >
                    Bloque
                  </th>
                </tr>
              </thead>
              <tbody className=" text-black/50 ">
                {activos?.map((activo) => (
                  <tr
                    key={activo.numeroInventario}
                    className="w-full py-2 text-sm max-h-[40px] hover:cursor-pointer hover:bg-blue-300/[.1] hover:text-blue-300"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3 text-blue-300 bg-blue-300/[.1] h-full">
                      <p> {activo.numeroInventario} </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {
                        activo.descripcion.length > 30
                          ? activo.descripcion.substring(0, 30) + "..."
                          : activo.descripcion
                      }
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {activo.estado === true ? "Activo" : "Inactivo"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {" "}
                      {activo.aula}{" "}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {" "}
                      {activo.bloque}{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
