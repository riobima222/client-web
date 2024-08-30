import Image from "next/image";
import Link from "next/link";

// ICONS
import { GiPadlock } from "react-icons/gi";
import { MdOutlineMailOutline } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-3">
      <div className="max-w-[30em] w-full py-7 rounded-xl bg-gradient-to-b from-[#990000] via-red-800 to-red-600 flex flex-col justify-center items-center">
        <Image
          src="/images/logo.png"
          alt="login-logo"
          width="140"
          height="140"
        />
        <h1 className="text-4xl font-bold text-white mb-9">Login</h1>

        <form className="max-w-[24em] w-full flex flex-col gap-8 items-center justify-center px-2">
          <div className="--INPUT 1-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <MdOutlineMailOutline className="text-lg" />
            </div>
            <input
              type="email"
              placeholder="email"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>

          <div className="--INPUT 1-- w-full flex items-center justify-center gap-3">
            <div className="--ICON-- text-white">
              <GiPadlock className="text-lg" />
            </div>
            <input
              type="password"
              placeholder="password"
              className="focus:outline-none max-w-[17em] w-full text-sm bg-transparent text-white border-b-2 border-white"
            />
          </div>
          <button
            type="button"
            className="px-4 py-2 bg-white text-[#990000] rounded-md font-bold tracking-wider transition-all duration-300 focus:scale-75"
          >
            Login
          </button>
        </form>

        <div className="text-white text-sm mt-10">
          {"Don't have any account ? register"}{" "}
          <Link
            href="/auth/register"
            className="text-gray-800 underline hover:no-underline font-bold"
          >
            here
          </Link>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
