import type { Metadata } from "next";
import "./ui/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"] 
});



export const metadata: Metadata = {
  title: "LabsIEE",
  description: "App for manage the labs of IEE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </>
  );
}
