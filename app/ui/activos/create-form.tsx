"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../button";
import clsx from "clsx";
import { TipoActivoDTO } from "../../../lib/tiposactivo-definitions";
import { BloqueDTO } from "../../../lib/bloque-definitions";
import AulasByBloqueSelector from "./aulasbybloque";
import Loader from "../loader";
import { createActivo } from "../../../api/activos.action";

function Form({
  tiposActivos,
  bloques,
  onNewActivo,
  activoSelected,
}: {
  tiposActivos: TipoActivoDTO[];
  bloques: BloqueDTO[];
  onNewActivo: () => void;
  activoSelected?: any;
}) {
  const [bloqueSelected, setBloqueSelected] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>();
  const [errors, setErrors] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleBloqueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBloqueSelected(e.target.value);
    setErrors(null);
  };

  const handleResetErrors = () => {
    setErrors(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth !== windowWidth) {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    setWindowWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await createActivo(formData);
      console.log(response);

      if (response?.errors) {
        setErrors(response.errors);
        
      } else {
        // Si el activo se crea exitosamente, limpia el formulario o realiza otra acción
        console.log("Activo creado con éxito");
      }

    } catch (error) {
      console.error("Error al crear el activo:", error);
     
    } finally {
      onNewActivo(); // Actualiza la lista de activos
      setLoading(false); // Termina la carga
    }
  };

  return (
    <>
      <span
        className={clsx(
          "absolute  w-[0.5px] bg-[#C8CBD9]/[.5] top-[140px]",
          window.innerWidth > 1800 ? "right-[36%] h-5/6" : "right-[27%] h-3/4"
        )}
      />
      <form
        onSubmit={handleSubmit}
        className="w-full max-h-[560px] overflow-y-visible p-2 flex justify-center items-center"
      >
        <div className="w-4/5 gap-6 flex flex-col items-center">
          <h1
            className={`mb-2 text-xl text-center text-[#354E95] font-medium `}
          >
            Agregar Equipos
          </h1>
          <div className="w-full">
            <div>
              <div className="relative mt-5">
                <input
                  className="peer block rounded-md w-full  py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/70"
                  id="numeroInventario"
                  type="text"
                  name="numeroInventario"
                  placeholder="Numero de Inventario"
                  onChange={handleResetErrors}
                />
              </div>
              <div id="activo-error" aria-live="polite" aria-atomic="true">
                {errors?.numeroInventario &&
                  errors.numeroInventario.map((error: string, index: number) => (
                    <p className="ml-4 mt-1 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="relative mt-5">
                <input
                  className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/70"
                  id="serial"
                  type="text"
                  name="serial"
                  placeholder="Serial"
                  onChange={handleResetErrors}
                />
              </div>
              <div id="activo-error" aria-live="polite" aria-atomic="true">
                {errors?.serial &&
                  errors.serial.map((error: string, index: number) => (
                    <p className="ml-4 mt-1 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="relative mt-5">
                <input
                  className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/70"
                  id="modelo"
                  type="text"
                  name="modelo"
                  placeholder="Modelo"
                  onChange={handleResetErrors}
                />
              </div>
              <div id="activo-error" aria-live="polite" aria-atomic="true">
                {errors?.modelo &&
                  errors.modelo.map((error: string, index: number) => (
                    <p className="ml-4 mt-1 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="relative mt-5">
                <input
                  className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/70"
                  id="descripcion"
                  type="text"
                  name="descripcion"
                  placeholder="Descripcion"
                  onChange={handleResetErrors}
                />
              </div>
              <div id="activo-error" aria-live="polite" aria-atomic="true">
                {errors?.descripcion &&
                  errors.descripcion.map((error: string, index: number) => (
                    <p className="ml-4 mt-1 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="relative mt-4">
              <select
                id="tipoActivo"
                name="tipoActivo"
                className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] text-gray-500/70 border-none"
                defaultValue=""
                aria-describedby="tipo-activo"
                onChange={handleResetErrors}
              >
                <option value="" selected disabled>
                  Tipo de Activo
                </option>
                {tiposActivos.map((tipo) => (
                  <option
                    key={tipo.id}
                    value={tipo.nomenclatura}
                    className="text-blue-300"
                  >
                    {tipo.nomenclatura}
                  </option>
                ))}
              </select>
              <div id="activo-error" aria-live="polite" aria-atomic="true">
                {errors?.tipoActivo &&
                  errors.tipoActivo.map((error: string, index: number) => (
                    <p className="ml-4 mt-1 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="relative mt-4">
              <select
                id="bloque"
                name="bloque"
                className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] text-gray-500/70 border-none"
                defaultValue=""
                aria-describedby="bloque"
                onChange={handleBloqueChange}
              >
                <option value="" selected disabled>
                  Bloque
                </option>
                {bloques.map((blo) => (
                  <option key={blo.id} value={blo.id} className="text-blue-300">
                    {blo.numero} - {blo.descripcion}
                  </option>
                ))}
              </select>
              <div id="activo-error" aria-live="polite" aria-atomic="true">
                {errors?.bloque &&
                  errors.bloque.map((error: string, index: number) => (
                    <p className="ml-4 mt-1 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
            <div className="relative mt-4">
              <AulasByBloqueSelector
                bloqueSelected={bloqueSelected}
                errors={errors}
              />
            </div>
          </div>
          <div className="flex relativ">
            {loading && <Loader />}
            <Button
              type="submit"
              disabled={loading}
              className={clsx(`mt-3 h-[40px] w-[160px] text-sm`)}
            >
              Crear
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
