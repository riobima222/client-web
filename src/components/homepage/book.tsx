"use client";

import { useState } from "react";

const Book = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[10rem] h-[14rem] sm:w-52 sm:h-72 perspective-1000 rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute rounded-md w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isHovered ? "rotate-y-180" : ""
        }`}
      >
        {/* Cover buku */}
        <div className="absolute w-full h-full bg-[#990000] backface-hidden flex items-center justify-center text-white text-2xl font-bold bg-[url('/images/cover.jpg')] bg-cover"></div>

        {/* Isi buku */}
        <div className="absolute rounded-md w-full h-full bg-white backface-hidden rotate-y-180 text-black text-lg overflow-y-auto">
          <div className="p-3 flex flex-col justify-between h-full items-center gap-3 border-2">
            <div className="bg-yellow-400 hover:border-2 hover:border-yellow-600 px-3 py-1 rounded-md text-sm text-white transition-all duration-100">
              Sinta 5
            </div>
            <div className="flex flex-col items-center gap-3">
              <hr className="text-gray-600 w-full" />
              <h1 className="text-2xl font-bold">Jurnal</h1>
              <p className="text-sm text-center font-bold">
                {"Al Mu'azarah: Jurnal Pengabdian Kepada Masyarakat"}
              </p>
              <hr className="text-gray-600 w-full" />
            </div>
            <button
              type="button"
              className="px-3 py-2 rounded bg-blue-500 text-white text-sm"
            >
              Lihat jurnal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
