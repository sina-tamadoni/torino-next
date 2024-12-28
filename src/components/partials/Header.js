"use client";

import Link from "next/link";
import { navLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { convertNum } from "@/core/utils/convertNumToPersian";
import Image from "next/image";
import { useRef, useState } from "react";
import SideMenu from "./SideMenu";
import UserMenu from "./UserMenu";
import OutsideClick from "./OutsideClick";

function Header() {
  const pathname = usePathname();
  const { setStep, setIsOpen, user, isLoggedIn, isLoading } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const mobile = user?.data?.mobile || null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="px-[29px] md:px-[20px] lg:px-[126px] w-full h-10 md:h-[74px] mt-[16px] md:mt-0">
      {/* mobile design */}
      <SideMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="flex justify-between items-center md:hidden w-full ">
        <Image
          src="/assets/icons/Hamburger.svg"
          width={20}
          height={16}
          alt="hamburger"
          className="cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
        {!isLoggedIn ? (
          <Image
            src="/assets/icons/signIn.svg"
            width={40}
            height={40}
            alt="signin"
            onClick={() => {
              setIsOpen(true);
              setStep(1);
            }}
            disabled={isLoading}
            className="cursor-pointer"
          />
        ) : (
          <button
            className="flex justify-center items-center gap-1 w-[122px] h-[22px] p-2 relative"
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
          >
              <UserMenu
                mobile={mobile}
                isUserMenuOpen={isUserMenuOpen}
                menuRef={menuRef}
              />
            <Image
              src="/assets/icons/user.svg"
              alt="user"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "14px", height: "14px" }}
            />
            <span className="text-[#28A745] w-[92px] h-[22px] font-[500] leading-[21.88px] text-[14px]">
              {isLoading ? "Loading..." : convertNum(mobile)}
            </span>
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="user"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "14px", height: "14px" }}
            />
          </button>
        )}
      </div>
      {/* web design */}
      <div className="hidden md:flex justify-between items-center w-full h-full">
        <div className="flex justify-between items-center gap-2 md:gap-2 lg:gap-10">
          <Image
            src="/assets/icons/Torino.svg"
            width={146}
            height={44}
            alt="torino-logo"
          />
          <ul className="md:w-[499px] w-[390px] h-[25px] flex justify-around items-center font-[400] text-base leading-6">
            {navLinks.map(({ name, href }) => {
              const isActive = pathname.endsWith(href);
              return (
                <li
                  key={name}
                  className={isActive ? "text-[#28A745]" : undefined}
                >
                  <Link href={href}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {!isLoggedIn ? (
          <button
            className="flex justify-center items-center gap-2 w-[167px] h-11 p-2 border-2 border-[#28A745] rounded-lg"
            onClick={() => {
              setIsOpen(true);
              setStep(1);
            }}
            disabled={isLoading}
          >
            <span className="text-[#28A745] w-full h-full font-[500] leading-7 text-[18px] flex items-center justify-center gap-2">
              {isLoading ? (
                <div className="h-full flex justify-center items-center gap-1 bg-white">
                  <div className="h-2 w-2 bg-[#28A745] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="h-2 w-2 bg-[#28A745] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="h-2 w-2 bg-[#28A745] rounded-full animate-bounce"></div>
                  Loading
                </div>
              ) : (
                "ورود | ثبت نام"
              )}
            </span>
          </button>
        ) : (
          <button
            className="relative flex justify-center items-center gap-1 w-[180px] h-11 p-2 "
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
            onBlur={(e) => {
              if (!menuRef?.current?.contains(e.relatedTarget)) {
                setIsUserMenuOpen(false);
              }
            }}
          >
            <UserMenu
              mobile={mobile}
              isUserMenuOpen={isUserMenuOpen}
              menuRef={menuRef}
            />

            <Image
              src="/assets/icons/profile.svg"
              width={24}
              height={24}
              alt="profile"
            />
            <span className="text-[#28A745] h-full font-[500] leading-7 text-[18px]">
              {isLoading ? "Loading..." : convertNum(mobile)}
            </span>
            <Image
              src="/assets/icons/arrow-down.svg"
              width={24}
              height={24}
              alt="arrow-down"
            />
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
