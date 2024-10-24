import { CookiesProvider } from "next-client-cookies/server";

interface Props{
  children: React.ReactNode;
  value: any;
}

export const ClientCookiesProvider = ({ children }: Props) => {
  return (
    <CookiesProvider>
      {children}
    </CookiesProvider>
  );
};