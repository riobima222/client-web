"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ClientNavbar = ({
  scroll,
}: {
  scroll: {
    scrollToDaftarBuku: () => void;
    scrollToKontak: () => void;
  };
}) => {
  const [dropLogin, setDropLogin] = useState<any>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const handleLoginButton = () => {
    setDropLogin(!dropLogin);
  };

  return (
    <div className="relative min-h-[3em] flex items-center justify-between px-5 bg-[#990000]">
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
      <div className="hidden sm:block">
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

      <div className="--MENU-- absolute right-3 z-10 sm:hidden">
        <div>
          <button onClick={() => setMenu((prev) => !prev)} className="relative">
            <div
              className={`relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-[#990000] duration-200`}
            >
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left delay-100 ${
                    menu ? "translate-y-6" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 delay-75 ${
                    menu ? "translate-y-6" : ""
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    menu ? "translate-y-6" : ""
                  }`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0 ${
                    menu ? "w-12 translate-x-0" : ""
                  }`}
                >
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                      menu ? "rotate-45" : ""
                    }`}
                  ></div>
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                      menu ? "-rotate-45" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="--LOGIN BUTTON-- relative hidden sm:block">
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
          <button
            onClick={() => signIn()}
            type="button"
            className="bg-white text-[#990000] font-bold w-full tracking-wider rounded-md px-2 py-1 hover:scale-90 transition duration-200"
          >
            Admin
          </button>
        </div>
      </div>

      <div
        className={`--SIDEBAR absolute top-0 bg-[#990000] transition-all duration-300 h-[100vh] w-[50%] flex justify-center items-center ${
          menu ? "right-0" : "right-[-50%]"
        }`}
      >
        <div className="flex flex-col text-white justify-center items-center gap-16">
          <span>Home</span>
          <span
            onClick={() => {
              scroll.scrollToDaftarBuku();
              setMenu(false);
            }}
          >
            Daftar buku
          </span>
          <span
            onClick={() => {
              scroll.scrollToKontak();
              setMenu(false);
            }}
          >
            Kontak
          </span>
        </div>
      </div>
    </div>
  );
};
export default ClientNavbar;
