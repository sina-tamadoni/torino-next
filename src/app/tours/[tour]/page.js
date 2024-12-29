import AddToCartButton from "@/components/partials/AddToCartButton";
import calculateDaysDifference from "@/core/utils/calculateDaysDifference";
import {
  converDateToShamsi,
  formatISODate,
} from "@/core/utils/convertDateToShamsi";
import { convertNum, formatPrice } from "@/core/utils/convertNumToPersian";
import Image from "next/image";

export const revalidate = 60 * 60; // 1hour
export async function generateStaticParams() {
  const tours = await fetch("http://localhost:6500/tour").then((res) =>
    res.json()
  );
  return tours.map((tour) => ({ id: tour.id }));
}

export default async function TourDetails({ params }) {
  const { tour } = await params;

  const selectedTour = await fetch(`http://localhost:6500/tour/${tour}`).then(
    (res) => res.json()
  );

  return (
    <div className="bg-[#f3f3f3] min-h-screen px-0 md:px-[20px] lg:px-[126px] md:py-9">
      <div className="bg-white md:rounded-lg shadow-lg p-6 w-full mt-1 ">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 flex justify-center">
            <Image
              src={selectedTour.image}
              width={397}
              height={220}
              alt="pic"
              style={{ objectFit: "cover" }}
              className="rounded-lg w-full md:w-[397px] h-[220px] md:h-[265]"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="flex justify-between items-center md:items-start md:flex-col">
              <h1 className="text-2xl md:text-[32px] font-semibold md:font-semibold leading-[37.2px] md:leading-[49.6px]">
                {selectedTour.title}
              </h1>

              <p className="font-normal text-[15px] leading-[23.44px] text-[#282828] md:mt-3">
                {`${convertNum(
                  calculateDaysDifference(
                    selectedTour.startDate,
                    selectedTour.endDate
                  )
                )} روز`}
              </p>
            </div>

            <div className="flex justify-between md:justify-start md:gap-10 mt-5 md:mt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/user-tick.svg"
                  width={0}
                  height={0}
                  alt="pic"
                  className="w-[14px] h-[14px] lg:w-6 lg:h-6"
                />
                <span className="font-normal text-[13px] lg:text-xl leading-[20.15px] lg:leading-[31px] text-[#7D7D7D]">
                  تور لیدر از مبدا
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/map.svg"
                  width={0}
                  height={0}
                  alt="pic"
                  className="w-[14px] h-[14px] lg:w-6 lg:h-6"
                />
                <span className="font-normal text-[13px] lg:text-xl leading-[20.15px] lg:leading-[31px] text-[#7D7D7D]">
                  برنامه سفر
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/medal-star.svg"
                  width={0}
                  height={0}
                  alt="pic"
                  className="w-[14px] h-[14px] lg:w-6 lg:h-6"
                />
                <span className="font-normal text-[13px] lg:text-xl leading-[20.15px] lg:leading-[31px] text-[#7D7D7D]">
                  تضمین کیفیت
                </span>
              </div>
            </div>

            <div className="flex justify-between items-baseline mt-4 md:mt-2">
              <p className="">
                <span className="text-[#009ECA] font-[500] text-2xl lg:text-[28px]  leading-[37.5px] lg:leading-[43.75px]">
                  {formatPrice(selectedTour.price)}
                </span>
                <span className="font-normal text-[10px] md:text-[14px] leading-[15.63px] lg:leading-[21.88px] px-2">
                  تومان
                </span>
              </p>
              <AddToCartButton
                tourId={selectedTour.id}
                price={selectedTour.price}
                title={selectedTour.title}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-3 md:grid-cols-6 divide-x divide-gray-200 gap-4">
          <div className="hidden md:flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/routing-2.svg"
                width={20}
                height={20}
                alt="pic"
              />
              <span className="font-normal text-base lg:text-lg leading-[25px] lg:leading-[28.13px] text-[#444444]">
                مبدا
              </span>
            </div>
            <p className="text-sm lg:text-base font-[500] leading-[21.88px] lg:leading-[25px] text-[#282828]">
              {selectedTour.origin.name}
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/calendar-1.svg"
                width={20}
                height={20}
                alt="pic"
              />
              <span className="font-normal text-base lg:text-lg leading-[25px] lg:leading-[28.13px] text-[#444444]">
                تاریخ رفت
              </span>
            </div>
            <p className="text-sm lg:text-base font-[500] leading-[21.88px] lg:leading-[25px] text-[#282828]">
              {convertNum(
                converDateToShamsi(formatISODate(selectedTour.startDate))
              )}
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/calendar-2.svg"
                width={20}
                height={20}
                alt="pic"
              />
              <span className="font-normal text-base lg:text-lg leading-[25px] lg:leading-[28.13px] text-[#444444]">
                تاریخ برگشت
              </span>
            </div>
            <p className="text-sm lg:text-base font-[500] leading-[21.88px] lg:leading-[25px] text-[#282828]">
              {convertNum(
                converDateToShamsi(formatISODate(selectedTour.endDate))
              )}
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/bus.svg"
                width={20}
                height={20}
                alt="pic"
              />
              <span className="font-normal text-base lg:text-lg leading-[25px] lg:leading-[28.13px] text-[#444444]">
                حمل و نقل
              </span>
            </div>
            <p className="text-sm lg:text-base font-[500] leading-[21.88px] lg:leading-[25px] text-[#282828]">
              {selectedTour.fleetVehicle}
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/profile-2user.svg"
                width={20}
                height={20}
                alt="pic"
              />
              <span className="font-normal text-base lg:text-lg leading-[25px] lg:leading-[28.13px] text-[#444444]">
                ظرفیت
              </span>
            </div>
            <p className="text-sm lg:text-base font-[500] leading-[21.88px] lg:leading-[25px] text-[#282828]">
              {convertNum(selectedTour.availableSeats)} نفر
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/icons/security.svg"
                width={20}
                height={20}
                alt="pic"
              />
              <span className="font-normal text-base lg:text-lg leading-[25px] lg:leading-[28.13px] text-[#444444]">
                بیمه
              </span>
            </div>
            <p className="text-sm lg:text-base font-[500] leading-[21.88px] lg:leading-[25px] text-[#282828]">
              {selectedTour.insurance ? "دارد" : "ندارد"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
