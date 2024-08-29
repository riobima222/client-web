"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ClientNavbar = ({
  status,
  url,
  scroll,
}: {
  status?: boolean;
  url?: string | undefined;
  scroll: {
    scrollToDaftarBuku: () => void;
    scrollToKontak: () => void;
  };
}) => {
  const [dropLogin, setDropLogin] = useState<any>(false);

  const handleLoginButton = () => {
    setDropLogin(!dropLogin);
  };

  return (
    <div className="min-h-[3em] flex items-center justify-between px-5 bg-[#990000]">
      <div>
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={60}
          height={60}
          className=""
        />
        {/* {status && url ? (
          <Image src={url} alt="logo" width={60} height={60} className="" />
        ) : (
          <div>Logo not found</div>
        )} */}
      </div>
      <div className="">
        <ul className="flex gap-5 text-white text-sm">
          <li>
            <Link href="/" className="tracking-wider hover:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={scroll.scrollToDaftarBuku}
              href="/"
              className="tracking-wider hover:font-bold"
            >
              Daftar buku
            </Link>
          </li>
          <li>
            <Link
              onClick={scroll.scrollToKontak}
              href="/"
              className="tracking-wider hover:font-bold"
            >
              kontak
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative">
        <button
          onClick={handleLoginButton}
          type="button"
          className="text-[#990000] transition duration-200 border-[1px] border-white font-bold px-3 py-1 rounded-md bg-white hover:text-white hover:bg-[#990000]"
        >
          Login
        </button>
        <div
          className={`${
            dropLogin ? "opacity-100" : "opacity-0"
          } absolute transition-all duration-300 left-[-39.5px] top-[40px] pt-1 flex px-3 justify-center items-start h-[3em] w-[8em] z-10 bg-[#990000] text-sm text-white`}
        >
          <Link
            href="/"
            className="bg-white text-[#990000] font-bold w-full tracking-wider rounded-md px-2 py-1 hover:scale-90 transition duration-200"
          >
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ClientNavbar;
