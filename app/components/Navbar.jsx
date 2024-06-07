"use client"
import React from "react";
import {navLists} from "../constants"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src="/next.svg" alt="Apple" width={18} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav, i) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:font-light hover:text-base hover:text-slate-500 transition-all"
              onClick={() => router.push(`/${nav}`)}
            >
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
          <img src="/next.svg" alt="search" width={18} height={18} />
          <img src="/vercel.svg" alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;