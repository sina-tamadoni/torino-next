"use client";

import { navLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideMenu({ isMenuOpen, setIsMenuOpen }) {
  const pathname = usePathname();
  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-[209px] h-[816px] bg-white shadow-lg z-20 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <ul className="w-full flex flex-col gap-5 items-start px-4 py-8 font-[400] text-base leading-6">
          {navLinks.map(({ name, href, icon }) => {
            const isActive = pathname.endsWith(href);
            return (
              <li
                key={name}
                className={`flex items-center gap-2 ${
                  isActive ? "text-[#28A745]" : undefined
                }`}
              >
                <Image
                  src={`/assets/icons/${icon}`}
                  width={16}
                  height={16}
                  alt={icon}
                />
                <Link
                  href={href}
                  className="text-base font-[400] leading-[24.8px] text-[#282828]"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
