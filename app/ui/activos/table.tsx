"use client";

import { fetchFilteredActivos } from "../../../api/activos.action";
import React, { useEffect, useState } from "react";
import { ActivosTable } from "../../../lib/activo-definitions";
import Swal from "sweetalert2";

export default function TableActivos({
  query,
  currentPage,
  refresh,
  onEditActivo,
}: {
  query: string;
  currentPage: number;
  refresh: boolean;
  onEditActivo: (activo : any) => void;
}) {
  const [activos, setActivos] = useState<ActivosTable[] | []>();

  useEffect(() => {
    const getActivos = async () => {
      const activos = await fetchFilteredActivos(query, currentPage);
      setActivos(activos);
    };

    getActivos();
  }, [query, currentPage, refresh]);

  const handleViewActivo = (activo: ActivosTable) => {
    Swal.fire({
      title: "Información del Activo",
      html: `
        <div style="text-align: left;">
          <p><strong >Descripción:</strong> ${activo.descripcion}</p>
          <p><strong >Número de Inventario:</strong> ${
            activo.numeroInventario
          }</p>
          <p><strong >Modelo:</strong> ${activo.modelo}</p>
          <p><strong >Serial:</strong> ${activo.serial}</p>
          <hr style="margin-top: 1em;">
          <p><strong >Bloque:</strong> ${activo.bloque}</p>
          <p><strong >Aula:</strong> ${activo.aula}</p>
          <p><strong >Estado:</strong> ${
            activo.estado ? "Activo" : "Inactivo"
          }</p>
          <p><strong >Tipo de Activo:</strong> ${activo.tipoActivo}</p>
          <hr style="margin-top: 1em;">
          <p><strong >Fecha de Creación:</strong> ${new Date(
            activo.fechaCreacion
          ).toLocaleDateString()}</p>
          <p><strong >Última Actualización:</strong> ${new Date(
            activo.fechaActualizacion
          ).toLocaleDateString()}</p>
        </div>`,
      showCloseButton: false,
      showConfirmButton: true,
    });
  };

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
                  <th
                    scope="col"
                    className="px-3 py-4 font-medium text-black/50"
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className=" text-black/50 ">
                {activos?.map((activo) => (
                  <tr
                    key={activo.numeroInventario}
                    className="w-full py-2 text-sm max-h-[40px] "
                  >
                    <td 
                      onClick={() => handleViewActivo(activo)}
                      className="whitespace-nowrap py-3 pl-6 pr-3 hover:cursor-pointer hover:bg-blue-300/[.2] hover:text-blue-300 text-blue-300 bg-blue-300/[.1] h-full">
                      <p> {activo.numeroInventario} </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {activo.descripcion.length > 30
                        ? activo.descripcion.substring(0, 30) + "..."
                        : activo.descripcion}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {activo.estado === true ? "Activo" : "Inactivo"}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {activo.aula}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      {activo.bloque}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 h-full">
                      <button
                        onClick={() => onEditActivo(activo)}
                        className="text-blue-300"
                      >
                        Editar
                      </button>
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
