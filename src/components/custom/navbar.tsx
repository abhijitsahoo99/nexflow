"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

function navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const toggleMenu = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const navItems = [
    { title: "Products", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Clients", href: "#" },
    { title: "Resources", href: "#" },
    { title: "Documentation", href: "#" },
    { title: "Enterprises", href: "#" },
  ];

  return (
    <nav className="relative z-100">
      <div className="flex justify-between items-center p-4 border-b-[1px] border-neutral-900 ">
        <div className="text-3xl font-bold">
          <p>nexflow</p>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 list-none">
            {navItems.map((item) => (
              <li key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
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
          <button
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle Mobile Menu"
          >
            {isToggleOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isToggleOpen && (
        <div className="h-screen border-b border-neutral-900 md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-4">
            {navItems.map((item) => (
              <li key={item.title} className="w-full">
                <Link
                  href={item.href}
                  className="block w-full py-2 hover:bg-slate-800 rounded px-3"
                  onClick={() => setIsToggleOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default navbar;
