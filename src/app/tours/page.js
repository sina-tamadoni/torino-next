import SearchForm from "@/components/templates/SearchForm";
import { formatPrice } from "@/core/utils/convertNumToPersian";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Tours({ searchParams }) {
  const { destinationId, originId, startDate, endDate } =
    (await searchParams) || {};

  const query = new URLSearchParams({
    destinationId: destinationId || "",
    originId: originId || "",
    startDate: startDate || "",
    endDate: endDate || "",
  }).toString();

  const res = await fetch(
    `http://localhost:6500/tour${query ? `?${query}` : ""}`,
    { cache: "no-store" }
  );
  const tours = await res.json();
  return (
    <div>
      <SearchForm pathname="/tours" />
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 px-[29px] md:px-5 lg:px-[126px] mt-20">
        {tours.length === 0 ? (
          <div className="flex justify-center items-center">موردی یافت نشد</div>
        ) : (
          tours.map((tour) => (
            <li
              key={tour.id}
              className="w-max-[330px] flex flex-col gap-2 overflow-hidden rounded-[10px] shadow-[0_0_2px_0_#00000040]"
            >
              <div className="w-full h-[159px] bg-white">
                <Image
                  src={tour.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="pic"
                />
              </div>
              <div className="font-[400] text-[22px] leading-[34.1px] my-2 px-3">
                {tour.title}
                <div>
                  {tour.options.map((option) => (
                    <span
                      key={option}
                      className="font-[400] text-[15px] text-[#282828B2] leading-[23.25px] pl-2"
                    >
                      {`${option} `}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-t-1 border-[#0000001F] p-3">
                <Link
                  key={tour.id}
                  href={`tours/${tour.id}`}
                  className="flex justify-center items-center bg-custom-green p-3 rounded-[4px] text-[15px] text-white w-[99px] h-[30px] md:h-[33px] font-[400] leading-[23.25px]"
                >
                  رزرو
                </Link>

                <div>
                  <span className="text-base font-[400] leading-[25px] text-[#009ECA] px-1">{`${formatPrice(
                    tour.price
                  )}`}</span>
                  <span className="text-xs font-[400] leading-[18.75px]">
                    تومان
                  </span>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
