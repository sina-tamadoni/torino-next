"use client";

import Loader from "@/components/partials/Loader";
import EmptyCart from "@/components/templates/EmptyCart/page";
import { cartInfoSchema } from "@/core/schemas";
import { useOrder } from "@/core/services/mutations";
import { useGetCart } from "@/core/services/queries";
import calculateDaysDifference from "@/core/utils/calculateDaysDifference";
import { converDateToShamsi } from "@/core/utils/convertDateToShamsi";
import { convertNum, formatPrice } from "@/core/utils/convertNumToPersian";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Cart() {
  const { data: tour, error, isError, isLoading } = useGetCart();
  const { mutate } = useOrder();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(cartInfoSchema) });
  const birthDate = watch("birthDate");
  const days = calculateDaysDifference(
    tour?.data?.startDate,
    tour?.data?.endDate
  );

  function onSubmit(data) {
    mutate(data, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        window.location.reload();
      },
      onError: (error) => {
        if (error.message === "Invalid token") {
          toast.error("توکن شما معتبر نیست");
        }
        toast.error(error.message);
      },
    });
  }
  if (isLoading) {
    return <Loader />;
  }
  if (tour?.data.length === 0 || !tour?.data) {
    return <EmptyCart />;
  }
  return (
    <form
      className="min-h-screen bg-[#f3f3f3] p-4 flex flex-col md:flex-row px-[29px] md:px-5 lg:px-[126px] gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="bg-white md:h-[258px] p-6 rounded-lg shadow-md flex-1 md:flex-[2] flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/assets/icons/profile-black.svg"
            width={24}
            height={24}
            alt="profile"
          />
          <h2 className="text-2xl font-normal leading-[37.5px]">
            مشخصات مسافر
          </h2>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              {...register("fullName")}
              className="flex-1 min-w-[calc(50%-0.5rem)] px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green border border-[#00000080] p-3 rounded"
            />
            {!!errors?.fullName && (
              <span className="w-full text-right text-[#D40000] mt-1 px-1 text-xs">
                {errors?.fullName?.message}
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="کد ملی"
              className="flex-1 min-w-[calc(50%-0.5rem)] border p-3 rounded focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green border-[#00000080]"
              {...register("nationalCode", { setValueAs: (value) => +value })}
            />
            {!!errors?.nationalCode && (
              <span className="w-full text-right text-[#D40000] mt-1 px-1 text-xs">
                {errors?.nationalCode?.message}
              </span>
            )}
          </div>
          <div>
            <div className="relative overflow-hidden flex-1 min-w-[calc(50%-0.5rem)] border p-3 rounded border-[#00000080]">
              <div className="flex justify-start gap-2 items-center w-full">
                <Image
                  src="/assets/icons/calendar.svg"
                  width={14}
                  height={14}
                  alt="calender"
                />
                <span>
                  {(birthDate && convertNum(converDateToShamsi(birthDate))) ||
                    "تاریخ تولد"}
                </span>
                <input
                  type="date"
                  {...register("birthDate")}
                  className="absolute opacity-0 top-2 right-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green border-[#00000080]"
                />
              </div>
            </div>
            {!!errors?.birthDate && (
              <span className="w-full text-right text-[#D40000] mt-1 px-1 text-xs">
                {errors?.birthDate?.message}
              </span>
            )}
          </div>
          <div>
            <div className=" overflow-hidden flex-1 min-w-[calc(50%-0.5rem)] border rounded border-[#00000080]">
              <select
                defaultValue="none"
                placeholder="جنسیت"
                {...register("gender")}
                id="gender"
                className="w-full h-full cursor-pointer text-[#282828] border-none outline-none p-3"
              >
                <option value="none" disabled>
                  جنسیت
                </option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>
            {!!errors?.gender && (
              <span className="w-full text-right text-[#D40000] mt-1 px-1 text-xs">
                {errors?.gender?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white md:h-[228px] p-6 rounded-lg shadow-md flex-1 md:flex-[1]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold leading-[37.2px]">
            {tour?.data?.title}
          </h2>
          <span className="text-base leading-[25px] text-[#282828]">
            {`${convertNum(days)} روز و ${convertNum(days - 1)} شب`}
          </span>
        </div>

        <hr className="border-dashed border-gray-300 mb-4" />

        <div className="flex justify-between items-center mb-4">
          <span className="font-normal text-base leading-[25px] text-[#282828]">
            قیمت نهایی
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[#009ECA] font-[500] text-[28px] leading-[43.75px]">
              {tour?.data?.price && formatPrice(tour?.data?.price)}
            </span>
            <span className="font-normal text-[14px] leading-[21.88px] ">
              تومان
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full h-[56px] bg-custom-green text-white py-2 rounded-[10px] hover:bg-green-700 transition"
        >
          ثبت و خرید نهایی
        </button>
      </div>
    </form>
  );
}

export default Cart;
