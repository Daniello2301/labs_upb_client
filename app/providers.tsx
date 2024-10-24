import { AuthProvider } from "../contexts/AuthContext";
import { ClientCookiesProvider } from "./cookies";
import { cookies } from "next/headers";

export async function Providers({ children }: React.PropsWithChildren) {
  
  const cookieStore = await cookies();
  const allCookies = cookieStore.getAll(); // Obtiene todas las cookies

  return (
    <ClientCookiesProvider value={allCookies}>
      <AuthProvider>{children}</AuthProvider>
    </ClientCookiesProvider>
  );
}
