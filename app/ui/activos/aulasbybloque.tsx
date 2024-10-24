import React, { useEffect } from "react";
import { AulaDTO } from "../../../lib/aula-definition";
import { fetchAulasByBloque } from "../../../api/aulas.action";

function AulasByBloqueSelector({
  bloqueSelected,
  errors
}: {
  bloqueSelected: string | null;
  errors: any;
}) {
  const [aulas, setAulas] = React.useState<AulaDTO[] | []>();

  useEffect(() => {
    if (!bloqueSelected) return;

    const getAulas = async () => {
      const response = await fetchAulasByBloque(Number(bloqueSelected));
      if (response?.response?.status) {
        setAulas([]);
        return;
      }
      setAulas(response);
    };

    getAulas();
  }, [bloqueSelected]);

  return (
    <>
      <select
        id="aula"
        name="aula"
        className="peer block w-full rounded-md py-[9px] px-4 text-sm outline-0 bg-[#F5F6FB] text-gray-500/70 border-none"
        defaultValue=""
        aria-describedby="aula"
      >
        <option value="" selected disabled>
          Aula
        </option>
        {/* {aulas && !aulas.length && <option value="" disabled>No hay aulas</option>} */}
        {aulas &&
          aulas.map((aula) => (
            <option key={aula.id} value={aula.numero} className="text-blue-300">
              {aula.descripcion}
            </option>
          ))}
      </select>
      <div id="activo-error" aria-live="polite" aria-atomic="true">
        {errors?.aula &&
          errors.aula.map((error: string, index: number) => (
            <p className="ml-4 mt-1 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </>
  );
}

export default AulasByBloqueSelector;
