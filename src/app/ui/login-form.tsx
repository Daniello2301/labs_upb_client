import { AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { Button } from "./button";

export default function Form() {
  return (
      <form action="" className="w-full flex justify-center items-center">
      <div className="w-4/5 gap-5 flex flex-col items-center">
        <h1 className={`mb-3 text-xl text-center text-[#354E95] font-medium`}>Iniciar Sesion</h1>
        <div className="w-full">
          <div>
            <div className="relative ">
              <input
                className="peer block w-full rounded-md  py-[9px] pl-10 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="email"
                type="email"
                name="email"
                placeholder="ID"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " />
            </div>
          </div>
          <div className="mt-4">
            <div className="relative">
              <input
                className="peer block w-full rounded-md py-[9px] pl-10 text-sm outline-0 bg-[#F5F6FB] placeholder:text-gray-500/40"
                id="password"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500/40 " />
            </div>
          </div>
        </div>
        <Button className="mt-4 h-[32px] w-[100px] text-sm" >
          Ingresar
        </Button>
      </div>
    </form>
  );
}
