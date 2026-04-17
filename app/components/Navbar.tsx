"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import navData from "@/app/data/navbar.json";
import type { NavbarData } from "@/app/types/navbar";

const data = navData as NavbarData;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white mb-[10px] mt-[10px]">

      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-[14px]">

        <Image
          src="/logo.png"
          alt="logo"
          width={180}
          height={40}
          priority
        />

        <nav className="hidden md:flex items-center gap-[28px]">

          {data.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`
                text-[16px] font-medium transition
                ${
                  link.active
                    ? "text-[#00B8C6] border border-[#00B8C6] px-[14px] py-[5px] rounded-full"
                    : "text-[#2E2E2E] hover:text-[#00B8C6]"
                }
              `}
            >
              {link.label}
            </Link>
          ))}

        </nav>

        <Link
          href={data.cta.href}
          className="hidden md:inline-flex items-center justify-center bg-[#00B8C6] text-white px-[20px] py-[8px] rounded-full text-[15px] font-medium"
        >
          {data.cta.label}
        </Link>

        <button
          className="md:hidden flex flex-col gap-[4px]"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-[#2E2E2E]" />
          <span className="w-6 h-[2px] bg-[#2E2E2E]" />
          <span className="w-6 h-[2px] bg-[#2E2E2E]" />
        </button>

      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 space-y-[14px] bg-white border-t border-[#EAEAEA]">

          {data.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`
                block text-[16px] font-medium
                ${
                  link.active
                    ? "text-[#00B8C6]"
                    : "text-[#2E2E2E]"
                }
              `}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={data.cta.href}
            className="block bg-[#00B8C6] text-white text-center py-[10px] rounded-full text-[15px] font-medium mt-[10px]"
          >
            {data.cta.label}
          </Link>

        </div>
      )}

    </header>
  );
}