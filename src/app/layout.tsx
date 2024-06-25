"use client";
import { Lato } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav";
import Sidebar from "./_components/sidebar";
import { useState } from "react";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [close, setClose] = useState(false);

  const handleClose = (val?: boolean) => {
    if (val) return setClose(val);
    // return
    setClose(!close);
  };
  return (
    <html lang="en">
      <body className={lato.className}>
        <Nav />
        <Sidebar handleClose={handleClose} close={close} />
        <div className={`pl-[70px] ${!close && "md:pl-[280px]"}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
