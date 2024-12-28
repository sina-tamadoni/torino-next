import { converDateToShamsi } from "@/core/utils/convertDateToShamsi";
import { convertNum, formatPrice } from "@/core/utils/convertNumToPersian";
import Image from "next/image";
import React from "react";

const Card = ({ tours }) => {
  return (
    <ul className="h-fit flex flex-col gap-3">
      {tours?.data?.map((tour) => (
        <li
          key={tour.id}
          className="border border-[#00000033] rounded-lg max-w-4xl w-full bg-white"
        >
          <div className="4">
            <div className="grid md:grid-cols-2 gap-5 p-5">
              <div className="flex items-center gap-7 md:gap-0 md:col-span-2">
                <div className="md:flex-1 flex items-center gap-3">
                  <Image
                    src="/assets/icons/sun-fog-white.svg"
                    width={0}
                    height={0}
                    alt="sun"
                    className="w-[18px] h-[18px] md:w-6 md:h-6"
                  />
                  <h3 className="text-xs md:text-sm font-normal leading-[18.6px] md:leading-[21.7px]">
                    {tour.title}
                  </h3>
                </div>
                <div className="md:flex-1 flex items-center gap-2">
                  <Image
                    src={`/assets/icons/${
                      tour.fleetVehicle === "هواپیما" ? "airplane-white" : "bus"
                    }.svg`}
                    width={0}
                    height={0}
                    alt="airplane"
                    className="w-[18px] h-[18px] md:w-6 md:h-6"
                  />
                  <h3 className="text-xs md:text-sm font-normal leading-[18.6px] md:leading-[21.7px]">
                    <span>{`سفر با ${tour.fleetVehicle}`}</span>
                  </h3>
                </div>
              </div>

              <div className="flex justify-between md:justify-start md:gap-20 items-center">
                <h4 className="font-semibold text-sm leading-[21.7px]">{`${tour?.origin?.name} به ${tour?.destination?.name}`}</h4>
                <span className="text-[#00000099] text-xs md:text-sm font-normal leading-[18.75px] md:leading-[21.88px]">
                  {convertNum(converDateToShamsi(tour.startDate))}
                </span>
              </div>
              <div className="flex justify-between md:justify-start md:gap-20 items-center">
                <h4 className="font-semibold text-sm leading-[21.7px]">
                  تاریخ برگشت
                </h4>
                <span className="text-[#00000099] text-xs md:text-sm font-normal leading-[18.75px] md:leading-[21.88px]">
                  {convertNum(converDateToShamsi(tour.endDate))}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-12 divide-x p-4 border-t">
              <div className="flex gap-7 items-center text-center w-[40%] lg:w-[30%]">
                <h4 className="text-[#00000080] min-w-[55px] text-[10px] md:text-sm leading-[15.5px] md:leading-[21.7px]">
                  شماره تور
                </h4>
                <p className="text-[#282828] truncate font-semibold text-xs md:text-sm leading-[18.75px] md:leading-[21.88px]">
                  {tour.id}
                </p>
              </div>
              <div className="flex gap-7 items-center text-center w-[60%] md:w-[80%]">
                <h4 className="text-[#00000080] text-[10px] md:text-sm leading-[15.5px] md:leading-[21.7px]">
                  مبلغ
                </h4>
                <p className="text-[#282828] font-semibold text-xs md:text-sm leading-[18.75px] md:leading-[21.88px]">
                  {formatPrice(convertNum(tour.price))}
                  <span className="px-1 font-[300] text-[8px] md:text-[10px] leading-[12.5px] md:leading-[15.63px] ">
                    تومان
                  </span>
                </p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Card;
