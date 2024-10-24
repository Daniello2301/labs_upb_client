import React from 'react'

export default function viewActivo({activo} : {activo: any}) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-500 p-4">
            <h3 className="text-white text-xl font-bold">
              {activo.descripcion}
            </h3>
            <p className="text-blue-100 text-sm">ID: {activo.numeroInventario}</p>
          </div>
          <div className="p-4 space-y-4">
            <p className="text-gray-600">
              <span className="font-semibold">Modelo:</span> {activo.modelo}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Serial:</span> {activo.serial}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Bloque:</span> {activo.bloque}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Aula:</span> {activo.aula}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Tipo de Activo:</span> {activo.tipoActivo}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Estado:</span> {activo.estado ? "Activo" : "Inactivo"}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Fecha de Creación:</span> {new Date(activo.fechaCreacion).toLocaleDateString()}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Última Actualización:</span> {new Date(activo.fechaActualizacion).toLocaleDateString()}
            </p>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200">
            <p className="text-gray-700 font-semibold">Usuario: {activo.usuario}</p>
          </div>
        </div>
      );
}