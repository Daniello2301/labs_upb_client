'use client';

import React from "react";
import { Button } from "../button";
import clsx from "clsx";

function Form({}) {

  console.log(localStorage.getItem("data"))


  return (
    <form
      className="w-full p-2 flex justify-center items-center"
    >
      <div className="w-4/5 gap-6 flex flex-col items-center">
        <h1 className={`mb-2 text-xl text-center text-[#354E95] font-medium `}>
          Agregar Equipos
        </h1>
        <div className="w-full">
          <div>
            <div className="relative my-5">
              <input
                className="peer block rounded-md w-full  py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="nro_inventario"
                type="text"
                name="nro_inventario"
                placeholder="Numero de Inventario"
              />
              {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " /> */}
            </div>
          </div>
          <div className="mt-4">
            <div className="relative my-5">
              <input
                className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="serial"
                type="text"
                name="serial"
                placeholder="Serial"
              />
              {/* <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " /> */}
            </div>
          </div>
          <div className="mt-4">
            <div className="relative my-5">
              <input
                className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="modelo"
                type="text"
                name="modelo"
                placeholder="Modelo"
              />
              {/* <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " /> */}
            </div>
          </div>
          <div className="mt-4">
            <div className="relative my-5">
              <input
                className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="descripcion"
                type="text"
                name="descripcion"
                placeholder="Descripcion"
              />
              {/* <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " /> */}
            </div>
          </div>
          <div className="relative mt-4">
            <select
              id="tipo_activo"
              name="tipo_activo"
              className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] text-gray-500/40 border-none"
              defaultValue=""
              aria-describedby="tipo-activo"
            >
              <option value="" selected disabled>
                Tipo de Activo
              </option>
              {/* {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))} */}
            </select>
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
          <div className="relative mt-4">
            <select
              id="bloque"
              name="bloque"
              className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] text-gray-500/40 border-none"
              defaultValue=""
              aria-describedby="bloque"
            >
              <option value="" selected disabled>
                Bloque
              </option>
              {/* {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))} */}
            </select>
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
          <div className="relative mt-4">
            <select
              id="aula"
              name="aula"
              className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] text-gray-500/40 border-none"
              defaultValue=""
              aria-describedby="aula"
            >
              <option value="" selected disabled>
                Aula
              </option>
              {/* {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))} */}
            </select>
            {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
          </div>
          {
            /* error && <p className="text-red-500 text-sm text-center">{error}</p> */
          }
        </div>
          <div className="flex relativ">
            
                    {/* {
                      loading && <Loader />
                    }
            */}
                    <Button type="submit" className={clsx(`mt-3 h-[40px] w-[160px] text-sm`, 
                      /* { "block": !loading, "hidden": loading } */
                    )}>
                      Crear
                    </Button>

          </div>
      </div>
    </form>
  );
}

export default Form;
