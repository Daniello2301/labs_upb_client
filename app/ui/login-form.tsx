"use client";

import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";
import { useState } from "react";
import Loader from "./loader";
import clsx from "clsx";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Form() {

  const { login } = useAuth();


  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const dataForm = new FormData(e.currentTarget);

    const creds = {
      email: dataForm.get("email") as string,
      password: dataForm.get("password") as string,
    };

      login(creds)
      .then((data) => {
        console.log(data?.access_token);
        if (data?.access_token) {
          router.push("/dashboard");
        } else {
          console.log(data.message)
          setError(data?.message);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
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
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>
        <div className="flex relativ">
          {loading && <Loader />}

          <Button
            type="submit"
            className={clsx(`mt-4 h-[40px] w-[160px] text-sm`, {
              block: !loading,
              hidden: loading,
            })}
          >
            Iniciar Sesion
          </Button>
        </div>
      </div>
    </form>
  );
}
