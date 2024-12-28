"use client";

import { dashboardLinks } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <hr className="w-full md:hidden" />
      <div className="w-full h-screen flex flex-col md:flex-row gap-4 md:gap-8 mt-[14px] px-[29px] md:px-5 lg:px-[126px]">
        <div className="w-full border-b-[1px] md:border md:border-1 md:w-[284px] md:h-[170px] md:rounded-[10px] border-[#00000040] md:overflow-hidden">
          <ul className="flex md:divide-y md:divide-[#00000033] md:flex-col md:h-full md:w-full justify-between items-center h-[29px] text-[12px] md:text-[14px] font-[400] leading-[18.6px] md:leading-[21.7px]">
            {dashboardLinks.map(({ name, href, icon }) => {
              const isActive = pathname === href;
              return (
                <li
                  key={name}
                  className={`${
                    isActive
                      ? "text-[#28A745] border-b-2 border-[#28A745] md:bg-[#28A74540] md:border-0"
                      : undefined
                  } w-[92px] md:w-full text-center md:text-right md:px-4 flex gap-2 justify-center md:justify-start items-center h-full pb-[5px] md:h-1/3`}
                >
                  <Image
                    src={`/assets/icons/${icon}`}
                    width={0}
                    height={0}
                    alt="icon"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <Link
                    className="md:w-full md:h-full md:flex md:items-center"
                    href={href}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </>
  );
}

export default Layout;
