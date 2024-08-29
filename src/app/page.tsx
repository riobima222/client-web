"use client";
import Footer from "@/components/footer/footer";
import Book from "@/components/homepage/book";
import Hero from "@/components/homepage/hero";
import Navbar from "@/components/navbar/navbar";
import { useRef } from "react";

export default function Home() {
  const daftarBuku = useRef<HTMLDivElement>(null);
  const kontakRef = useRef<HTMLDivElement>(null);

  const scrollToDaftarBuku = () => {
    if (daftarBuku.current) {
      daftarBuku.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToKontak = () => {
    if (kontakRef.current) {
      kontakRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="overflow-x-hidden">
      <div className="--SECTION 1-- md:h-screen">
        <Navbar scroll={{ scrollToDaftarBuku, scrollToKontak }} />
        <Hero />
      </div>
      <div ref={daftarBuku} className="--DAFTAR BUKU-- min-h-[50em]">
        <h1 className="text-3xl font-bold text-center">Daftar Buku</h1>
        <div className="flex justify-center mt-2">
          <hr className="w-[70%] border-[1px] border-slate-800" />
        </div>

        <div className="--BOOK CONTENT--  min-h-[20em] flex justify-center mt-9">
          <div className="max-w-[65em] w-full flex justify-center flex-wrap gap-2 sm:gap-5">
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
        <Footer kontakRef={kontakRef} />
      </div>
    </main>
  );
}
