'use client';

import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import { signInAPI } from "@/api/authentication.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "./loader";
import clsx from "clsx";
import useLocalStorage  from "@/hooks/useLocalStorage";

export default function Form() {

  const [setData] = useLocalStorage("data", {});

  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const dataForm = new FormData(e.currentTarget);
    
    const response = await signInAPI(dataForm);
    console.log(response)

    setLoading(false);

    if(!response?.error){
      const encodeData = btoa(JSON.stringify(response) ); 
      setData(encodeData);
      router.push("/dashboard");
    }
    
    setError(response?.message);

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-3/4 p-10 flex justify-center items-center"
    >
      <div className="w-4/5 gap-6 flex flex-col items-center">
        <h1 className={`mb-3 text-xl text-center text-[#354E95] font-medium `}>
          Iniciar Sesion
        </h1>
        <div className="w-full">
          <div>
            <div className="relative my-5">
              <input
                className="peer block rounded-md w-full  py-[9px] pl-10 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="email"
                type="email"
                name="email"
                placeholder="email"
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative my-5">
              <input
                className="peer block w-full rounded-md py-[9px] pl-10 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="password"
                type="password"
                name="password"
                placeholder="Contraseña"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " />
            </div>
          </div>
          {
            error && <p className="text-red-500 text-sm text-center">{error}</p>
          }
        </div>
          <div className="flex relativ">
            
                    {
                      loading && <Loader />
                    }
           
                    <Button type="submit" className={clsx(`mt-4 h-[40px] w-[160px] text-sm`, 
                      { "block": !loading, "hidden": loading }
                    )}>
                      Iniciar Sesion
                    </Button>

          </div>
      </div>
    </form>
  );
}
