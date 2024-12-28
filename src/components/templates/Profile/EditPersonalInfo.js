import { personalInfoSchema } from "@/core/schemas";
import { useUpdatePersonalInfo } from "@/core/services/mutations";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function EditPersonalInfo({ user, setPage }) {
  const { mutate, isPending } = useUpdatePersonalInfo();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(personalInfoSchema) });
  const birthDate = watch("birthDate", user?.data?.birthDate);

  const onSubmit = (data) => {
    if (isPending) return;
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data?.data?.message);
        setPage(1);
      },
      onError: (error) => toast.error(error.message),
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[385px] md:h-[270px] flex flex-col justify-between border border-1 border-[#00000033] rounded-[10px] py-4 px-5"
    >
      <p className="text-base leading-6 font-[400]">ویرایش اطلاعات شخصی</p>
      <div className="grid grid-cols-1 md:grid-cols-2 h-[70%] md:h-[50%] items-center md:gap-x-4 md:gap-y-1">
        <div>
          <input
            defaultValue={user?.data?.firstName}
            {...register("firstName")}
            placeholder="نام و نام خانوادگی"
            className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green w-full h-[45px] border border-1 border-[#00000080] rounded-[5px] text-sm font-[400] leading-[21.7px] text-[#00000080]"
          />
          {!!errors?.firstName && (
            <span className="w-full text-right text-[#D40000] px-1 text-xs">
              {errors?.firstName?.message}
            </span>
          )}
        </div>
        <div>
          <input
            type="number"
            defaultValue={user?.data?.nationalCode}
            {...register("nationalCode", { setValueAs: (value) => +value })}
            placeholder="کد ملی"
            className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green w-full h-[45px] border border-1 border-[#00000080] rounded-[5px] text-sm font-[400] leading-[21.7px] text-[#00000080]"
          />
          {!!errors?.nationalCode && (
            <span className="w-full text-right text-[#D40000] px-1 text-xs">
              {errors?.nationalCode?.message}
            </span>
          )}
        </div>

        <div className="relative overflow-hidden w-full h-[45px] border border-1 border-[#00000080] rounded-[5px] text-sm font-[400] leading-[21.7px] text-[#00000080]">
          <div className="flex justify-start gap-2 items-center p-2 w-full">
            <Image
              src="/assets/icons/calendar.svg"
              width={14}
              height={14}
              alt="calender"
            />
            <span>{birthDate || "تاریخ تولد"}</span>
          </div>
          <input
            type="date"
            defaultValue={user?.data?.birthDate || "تاریخ تولد"}
            {...register("birthDate")}
            className="absolute w-full h-full opacity-0 top-0 right-0 cursor-pointer px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
          />
          {!!errors?.birthDate && (
            <span className="w-full text-right text-[#D40000] px-1 text-xs">
              {errors?.birthDate?.message}
            </span>
          )}
        </div>

        <div className="relative w-full h-[45px] border border-1 border-[#00000080] rounded-[5px] text-sm font-[400] leading-[21.7px] text-[#00000080]">
          <label
            htmlFor="gender"
            className="hidden md:block absolute -top-[9px] right-3 bg-white px-1 text-sm text-gray-600"
          >
            جنسیت
          </label>
          <select
            defaultValue={user?.data?.gender}
            {...register("gender")}
            id="gender"
            className="w-full h-full cursor-pointer text-[#282828] border-none outline-none rounded-[5px] px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green"
          >
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
          {!!errors?.gender && (
            <span className="w-full text-right text-[#D40000] px-1 text-xs">
              {errors?.gender?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between gap-4 *:flex-1 *:p-2 *:rounded-[5px] text-base font-[600] leading-[24.8px]">
        <button type="submit" className="bg-custom-green text-white">
          تایید
        </button>
        <button
          onClick={() => setPage(1)}
          className="text-custom-green border border-1 border-custom-green"
        >
          انصراف
        </button>
      </div>
    </form>
  );
}

export default EditPersonalInfo;
