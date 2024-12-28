import { converDateToShamsi } from "@/core/utils/convertDateToShamsi";
import { convertNum } from "@/core/utils/convertNumToPersian";
import Image from "next/image";
import React from "react";

function UserProfileInfo({ user, setPage }) {
  return (
    <div className="flex flex-col gap-5 overflow-hidden">
      <div className="h-[169px] lg:h-[115px] flex flex-col justify-between border border-1 border-[#00000033] rounded-[10px] p-4">
        <p className="text-base leading-6 font-[400]">اطلاعات حساب کاربری</p>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 md:px-[37px]">
          <div className="flex justify-between md:justify-start md:gap-5 items-center">
            <p className="font-[300] text-sm leading-[21.7px]">شماره موبایل</p>
            <p className="font-[400] text-sm leading-[21.88px]">
              {user?.data?.mobile && convertNum(user?.data?.mobile)}
            </p>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex gap-7 md:justify-start md:gap-5 items-center">
              <p className="font-[300] text-sm leading-[21.7px]">ایمیل</p>
              <p className="max-w-24 truncate xs:overflow-visible xs:whitespace-normal xs:text-clip">
                {user?.data?.email}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/assets/icons/edit.svg"
                width={16}
                height={16}
                alt="edit"
              />
              <button
                onClick={() => setPage(2)}
                className="font-[400] text-[#009ECA] text-sm leading-[21.7px]"
              >
                افزودن
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[251px] md:h-[171px] flex flex-col justify-between md:justify-start md:gap-7 border border-1 border-[#00000033] rounded-[10px] p-4">
        <div className="flex justify-between items-center">
          <p className="text-base leading-6 font-[400]">اطلاعات شخصی</p>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/icons/edit.svg"
              width={16}
              height={16}
              alt="edit"
            />
            <button
              onClick={() => setPage(3)}
              className="font-[400] text-[#009ECA] text-sm leading-[21.7px]"
            >
              ویرایش اطلاعات
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          <div className="flex justify-between md:justify-start md:gap-10 items-center">
            <span className="font-[300] text-sm leading-[21.7px]">
              نام و نام خانوادگی
            </span>
            <span className="font-[600] text-sm leading-[21.7px]">
              {user?.data?.firstName}
            </span>
          </div>
          <div className="flex justify-between md:justify-start md:gap-14 items-center">
            <span className="font-[300] text-sm leading-[21.7px]">کد ملی</span>
            <span className="font-[400] text-sm leading-[21.88px]">
              {user?.data?.nationalCode && convertNum(user?.data?.nationalCode)}
            </span>
          </div>
          <div className="flex justify-between md:justify-start md:gap-24 items-center">
            <span className="font-[300] text-sm leading-[21.7px]">جنسیت</span>
            <span className="font-[600] text-sm leading-[21.7px]">
              {user?.data?.gender === "male" ? "مرد" : "زن"}
            </span>
          </div>
          <div className="flex justify-between md:justify-start md:gap-10 items-center">
            <span className="font-[300] text-sm leading-[21.7px]">
              تاریخ تولد
            </span>
            <span className="font-[400] text-sm leading-[21.88px]">
              {user?.data?.birthDate &&
                convertNum(converDateToShamsi(user?.data?.birthDate))}
            </span>
          </div>
        </div>
      </div>

      <div className="h-[205px] lg:h-[171px] flex flex-col justify-between border border-1 border-[#00000033] rounded-[10px] p-4">
        <div className="flex justify-between items-center">
          <p className="text-base leading-6 font-[400]">اطلاعات حساب بانکی</p>
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/icons/edit.svg"
              width={16}
              height={16}
              alt="edit"
            />
            <button
              onClick={() => setPage(4)}
              className="font-[400] text-[#009ECA] text-sm leading-[21.7px]"
            >
              ویرایش اطلاعات
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          <div className="flex justify-between items-center md:justify-start md:gap-14">
            <span className="font-[300] text-sm leading-[21.7px]">
              شماره کارت
            </span>
            <span className="font-[600] text-sm leading-[21.7px]">
              {user?.data?.payment?.debitCard_code &&
                convertNum(user?.data?.payment?.debitCard_code)}
            </span>
          </div>
          <div className="flex justify-between items-center md:justify-start md:gap-14">
            <span className="font-[300] text-sm leading-[21.7px]">
              شماره شبا
            </span>
            <span className="font-[400] text-sm leading-[21.88px]">
              IR{" "}
              {user?.data?.payment?.shaba_code &&
                convertNum(user?.data?.payment?.shaba_code)}
            </span>
          </div>
          <div className="flex justify-between items-center md:justify-start md:gap-14">
            <span className="font-[300] text-sm leading-[21.7px]">
              شماره حساب
            </span>
            <span className="font-[400] text-sm leading-[21.88px]">
              {user?.data?.payment?.accountIdentifier &&
                convertNum(user?.data?.payment?.accountIdentifier)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileInfo;
