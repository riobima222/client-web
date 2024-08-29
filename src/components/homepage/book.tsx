"use client";

import { useState } from "react";

const Book = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-56 h-72 perspective-1000 rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute rounded-md w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isHovered ? "rotate-y-180" : ""
        }`}
      >
        {/* Cover buku */}
        <div className="absolute w-full h-full bg-[#990000] backface-hidden flex items-center justify-center text-white text-2xl font-bold">
          Cover Buku
        </div>

        {/* Isi buku */}
        <div className="absolute rounded-md w-full h-full bg-white backface-hidden rotate-y-180 flex items-center justify-center text-black text-lg p-4 overflow-y-auto">
          <p>
            Ini adalah isi buku. Anda dapat menambahkan teks atau konten lainnya
            di sini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
