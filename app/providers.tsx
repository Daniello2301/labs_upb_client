import { AuthProvider } from "../contexts/AuthContext";
import { ClientCookiesProvider } from "./cookies";
import { cookies } from "next/headers";

export function Providers({ children }: React.PropsWithChildren) {

  /* const cookiesStorage = cookies().getAll(); */

  return (
    <ClientCookiesProvider value={cookies().getAll()}>
      <AuthProvider>{children}</AuthProvider>
    </ClientCookiesProvider>
  );
}