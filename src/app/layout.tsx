"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { AOSInit } from "@/lib/aos/init";
import ModalAppearProvider from "@/context/modalAppear";
import "react-quill/dist/quill.snow.css";
import FetchTriggerProvider from "@/context/fetchTrigger";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AOSInit />
        <FetchTriggerProvider>
          <ModalAppearProvider>
            <SessionProvider>{children}</SessionProvider>
          </ModalAppearProvider>
        </FetchTriggerProvider>
      </body>
    </html>
  );
}
