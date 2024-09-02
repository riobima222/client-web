"use client";

import Footer from "@/components/footer/footer";
import Book from "@/components/homepage/book";
import Hero from "@/components/homepage/hero";
import Navbar from "@/components/navbar/navbar";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import SearchSection from "./searchSection";

// ICONS
import { IoIosAdd } from "react-icons/io";

const Main = () => {
  const daftarBuku = useRef<HTMLDivElement>(null);
  const kontakRef = useRef<HTMLDivElement>(null);
  const { data: session } = useSession();

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
    <div>
      <div className="--SECTION 1-- md:h-screen">
        <Navbar scroll={{ scrollToDaftarBuku, scrollToKontak }} />
        <Hero />
      </div>

      <div className="--STATISTIC OVERVIEW-- flex justify-center">
        <div className="--CONTENT-- border-2 border-yellow-500 rounded-md max-w-[40em] w-full p-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>

          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>

          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>

          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>

          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>

          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>

          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>

          <div className="bg-[#990000] p-2 rounded-md">
            <h2 className="text-3xl text-white font-bold">110</h2>
            <span className="text-[#b5b5b5]">Journals</span>
          </div>
        </div>
      </div>

      <div ref={daftarBuku} className="--DAFTAR BUKU-- pb-7 mt-16">
        <h1 className="text-3xl font-bold text-center">Daftar Buku</h1>
        <div className="flex justify-center mt-2">
          <hr className="w-[70%] border-[1px] border-slate-800" />
        </div>

        <SearchSection />
        {session && (
          <div className="-ADD JOURNAL flex justify-center mt-10">
            <div className="-CONTENT- max-w-[60em] w-full flex">
              <div className="-BUTTON- flex items-center hover:cursor-pointer border-2 border-[#990000] text-[#990000] px-2 p-1 rounded-md hover:bg-[#990000] hover:text-white">
                <div>
                  <IoIosAdd className="text-2xl" />
                </div>
                <span>Tambahkan journal</span>
              </div>
            </div>
          </div>
        )}
        <div className="--BOOK CONTENT--  min-h-[20em] flex justify-center mt-4">
          <div className="max-w-[65em] w-full flex justify-center flex-wrap gap-2 sm:gap-5">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>

      <Footer kontakRef={kontakRef} />
    </div>
  );
};
export default Main;
