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
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="relative min-h-[3em] pt-2 flex items-center justify-between px-5 bg-white">
      <div className="bg-[#990000] py-1 max-w-[8em] w-full flex justify-center items-center rounded-md">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={60}
          height={60}
          className=""
        />
      </div>
      <div className="hidden sm:block">
        <ul className="flex gap-5 text-[#990000] text-sm font-bold">
          <li>
            <Link href="/" className="tracking-wider hover:font-normal">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={scroll.scrollToDaftarBuku}
              href="/"
              className="tracking-wider hover:font-normal"
            >
              Daftar buku
            </Link>
          </li>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="hover:font-normal">
              visi & misi
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <li>
            <Link
              onClick={scroll.scrollToKontak}
              href="/"
              className="tracking-wider hover:font-normal"
            >
              kontak
            </Link>
          </li>
        </ul>
      </div>

      <div className="--MENU-- absolute right-3 z-20 sm:hidden">
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
          onClick={() => signIn()}
          type="button"
          className="text-[#990000] transition duration-200 border-[1px] border-[#990000] font-bold px-3 py-1 rounded-md bg-white hover:text-white hover:bg-[#990000]"
        >
          Login
        </button>
      </div>

      <div
        className={`--SIDEBAR absolute z-10 top-0 bg-[#990000] transition-all duration-300 h-[100vh] w-[70%] flex justify-start items-center ${
          menu ? "right-0" : "right-[-70%]"
        }`}
      >
        <div className="flex flex-col text-white justify-center items-start gap-16 ms-5">
          <span>Home</span>
          <span
            onClick={() => {
              scroll.scrollToDaftarBuku();
              setMenu(false);
            }}
          >
            Daftar buku
          </span>
          <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="hover:font-normal">
              visi & misi
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-44 p-2 shadow text-[#990000]"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
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
