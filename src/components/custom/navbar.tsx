import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

function navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-[1px] border-neutral-900 ">
      <div className="text-3xl font-bold">
        <p>nexflow</p>
      </div>
      <div className="hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Dashboard
            </span>
          </button>
        </Link>
        <MenuIcon className="md:hidden" />
      </div>
    </nav>
  );
}

export default navbar;
