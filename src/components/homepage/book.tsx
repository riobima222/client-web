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
        <div className="absolute rounded-md w-full h-full bg-white backface-hidden rotate-y-180 text-black text-lg p-4 overflow-y-auto">
          <div className="p-3 flex flex-col items-center gap-3 border-2 border-black">
            <div className="bg-yellow-400 hover:border-2 hover:border-yellow-600 px-3 py-1 rounded-md text-sm text-white transition-all duration-100">
              Sinta 5
            </div>
            <hr className="h-14 text-gray-600 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
