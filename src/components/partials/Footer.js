import React from "react";
import { convertNum } from "@/core/utils/convertNumToPersian";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full h-[367px] md:h-[290px] px-[29px] xl:px-[126px] mt-[193px] md:mt-[96px]">
      {/* mobile design */}
      <div className="flex flex-col md:hidden justify-center items-center">
        <div className="flex justify-between sm:justify-around w-full text-[#282828] mt-[23px] ">
          <div className="flex flex-col gap-[11px]">
            <h1 className="font-[600] leading-[34.1px] text-[22px] sm:text-2xl">
              تورینو
            </h1>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              درباره ما
            </span>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              تماس با ما
            </span>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              چرا تورینو
            </span>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              بیمه مسافرتی
            </span>
          </div>
          <div className="flex flex-col gap-[11px]">
            <h1 className="font-[600] leading-[34.1px] text-[22px] sm:text-2xl">
              خدمات مشتریان
            </h1>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              پشتیبانی آنلاین
            </span>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              راهنمای خرید
            </span>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              راهنمای استرداد
            </span>
            <span className="leading-[24.8px] font-[400] sm:text-lg">
              پرسش و پاسخ
            </span>
          </div>
        </div>

        <div className="flex justify-between sm:justify-around items-center w-full mt-[37px]">
          <div className="w-[136px]">
            <div className="flex justify-between items-center">
              <Image
                src="/assets/icons/qrcode.svg"
                width={35}
                height={38}
                alt="icon"
              />
              <Image
                src="/assets/icons/samandehi.svg"
                width={34}
                height={38}
                alt="icon"
              />
              <Image
                src="/assets/icons/aira.svg"
                width={35}
                height={38}
                alt="icon"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <Image
                src="/assets/icons/state-airline.svg"
                width={40}
                height={38}
                alt="icon"
              />
              <Image
                src="/assets/icons/passenger-rights.svg"
                width={36}
                height={38}
                alt="icon"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-end  w-[194px]">
            <Image
              src="/assets/icons/Torino.svg"
              width={100}
              height={30}
              alt="icon"
            />
            <span className="mt-[11px] text-[14px] font-[vazir]">
              تلفن پشتیبانی: {convertNum("8574-021")}
            </span>
          </div>
        </div>

        <div className="w-full border border-1 mt-[11px] sm:mt-[37px]"></div>
        <p className="text-xs font-[300] leading-[18.6px] w-full text-center mt-2">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </div>

      {/* web design */}
      <div className="hidden md:block w-full h-full ">
        <div className="w-full border border-1 mt-[11px] sm:mt-[37px]"></div>
        <div className="flex justify-between h-full ">
          <div className="flex gap-24 text-[#282828] mt-[21px]">
            <div className="flex flex-col gap-[11px]">
              <h1 className="font-[600] leading-[34.1px] text-[22px] sm:text-2xl mb-6">
                تورینو
              </h1>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                درباره ما
              </span>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                تماس با ما
              </span>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                چرا تورینو
              </span>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                بیمه مسافرتی
              </span>
            </div>
            <div className="flex flex-col gap-[11px]">
              <h1 className="font-[600] leading-[34.1px] text-[22px] sm:text-2xl mb-6">
                خدمات مشتریان
              </h1>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                پشتیبانی آنلاین
              </span>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                راهنمای خرید
              </span>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                راهنمای استرداد
              </span>
              <span className="leading-[24.8px] font-[400] sm:text-lg">
                پرسش و پاسخ
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-9 mt-[29px]">
            <div className="flex flex-col items-end gap-5">
              <Image
                src="/assets/icons/Torino.svg"
                width={146}
                height={44}
                alt="icon"
              />
              <span className="mt-[11px] text-[15px] font-[400] leading-6">
                تلفن پشتیبانی: {convertNum("8574-021")}
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex gap-4 lg:gap-8 items-center">
                <Image
                  src="/assets/icons/state-airline.svg"
                  width={78}
                  height={74}
                  alt="icon"
                />
                <Image
                  src="/assets/icons/passenger-rights.svg"
                  width={71}
                  height={74}
                  alt="icon"
                />

                <Image
                  src="/assets/icons/qrcode.svg"
                  width={68}
                  height={74}
                  alt="icon"
                />
                <Image
                  src="/assets/icons/samandehi.svg"
                  width={67}
                  height={74}
                  alt="icon"
                />
                <Image
                  src="/assets/icons/aira.svg"
                  width={68}
                  height={74}
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-1"></div>
        <p className="text-xs font-[300] leading-[18.6px] w-full text-center mt-2">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
