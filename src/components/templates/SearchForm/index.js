"use client";

import { converDateToShamsi } from "@/core/utils/convertDateToShamsi";
import { convertNum } from "@/core/utils/convertNumToPersian";
import { DateToISO } from "@/core/utils/DateToISO";
import { flatten } from "flat";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";

function SearchForm({ pathname }) {
  const [query, setQuery] = useState("");
  const { handleSubmit, register, control, watch } = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = watch("originId");
  const destination = watch("destinationId");
  const selectedDateRange = watch("date");

  useEffect(() => {
    if (searchParams) {
      router.replace(pathname);
    }
  }, []);

  const submitHandler = (form) => {
    const flattedForm = flatten(form);
    const query = new URLSearchParams(flattedForm).toString();
    setQuery(query);
    router.push(`${pathname}?${query}`);
  };

  return (
    <div className="md:px-5">
      <form
        className="grid grid-cols-2 md:max-w-[874px] md:m-auto md:flex md:justify-between md:items-center md:border md:border-1 md:rounded-[20px] md:border-[#00000026] p-5 md:p-2 w-full px-29px gap-2 md:mt-6"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="relative overflow-hidden border md:border-0 border-1 rounded-xl border-[#00000026]">
          <div className="flex justify-center gap-2 items-center p-2 w-full">
            <Image
              src="/assets/icons/location.svg"
              width={0}
              height={0}
              alt="location"
              className="w-[18px] h-[18px] md:w-5 md:h-5 mb-[7px]"
            />
            <span className=" font-[400] text-5 leading-[23.28px]">
              {origin == 1
                ? "تهران"
                : origin == 2
                ? "سنندج"
                : origin == 3
                ? "اصفهان"
                : "مبدا"}
            </span>
          </div>
          <select
            {...register("originId")}
            defaultValue="none"
            className="absolute w-full h-full opacity-0 top-0 right-0 cursor-pointer px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
          >
            <option value="none" disabled>
              مبدا
            </option>
            <option value="1">تهران</option>
            <option value="2">سنندج</option>
            <option value="3">اصفهان</option>
          </select>
        </div>

        <div className="relative overflow-hidden border md:border-0 border-1 rounded-xl border-[#00000026]">
          <div className="flex justify-center gap-2 items-center p-2 w-full">
            <Image
              src="/assets/icons/global-search.svg"
              width={0}
              height={0}
              alt="calender"
              className="w-[18px] h-[18px] md:w-5 md:h-5 mb-[7px]"
            />
            <span className="font-[400] text-5 leading-[23.28px]">
              {destination == 1
                ? "سنندج"
                : destination == 2
                ? "مادرید"
                : destination == 3
                ? "سلیمانیه"
                : destination == 3
                ? "هولر"
                : destination == 3
                ? "مازندران"
                : destination == 3
                ? "کویر"
                : destination == 3
                ? "ایتالیا"
                : "مقصد"}
            </span>
          </div>
          <select
            {...register("destinationId")}
            defaultValue="none"
            className="absolute w-full h-full opacity-0 top-0 right-0 cursor-pointer px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
          >
            <option value="none" disabled>
              مقصد
            </option>
            <option value="1">سنندج</option>
            <option value="2">مادرید</option>
            <option value="3">سلیمانیه</option>
            <option value="4">هولر</option>
            <option value="5">مازندران</option>
            <option value="6">کویر</option>
            <option value="7">ایتالیا</option>
          </select>
        </div>
        <div className="col-span-2 flex relative overflow-hidden border md:border-0 border-1 rounded-xl border-[#00000026]">
          <div className="flex justify-center gap-2 items-center p-2 w-full ">
            {(selectedDateRange?.startDate && selectedDateRange?.endDate && (
              <div className="flex w-full justify-around items-center">
                <p>
                  {convertNum(converDateToShamsi(selectedDateRange.startDate))}
                </p>
                -
                <p>
                  {convertNum(converDateToShamsi(selectedDateRange.endDate))}
                </p>
              </div>
            )) || (
              <div className="flex justify-center gap-2 items-center w-full">
                <Image
                  src="/assets/icons/calendar.svg"
                  width={0}
                  height={0}
                  alt="location"
                  className="w-[18px] h-[18px] md:w-5 md:h-5 mb-[1px]"
                />
                <span className=" font-[400] text-5 leading-[25.63px]">
                  تاریخ
                </span>
              </div>
            )}
          </div>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange } }) => (
              <DatePicker
                inputClass="absolute w-full h-full opacity-0 top-0 right-0 cursor-pointer px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
                round="x2"
                accentColor="#28A745"
                onChange={(e) => {
                  onChange({
                    startDate: DateToISO(e.from),
                    endDate: DateToISO(e.to),
                  });
                }}
                range
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="bg-custom-green rounded-2xl md:w-[190px] p-2 col-span-2 text-xl font-[400] leading-[31px] text-white"
        >
          جستجو
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
