"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCards, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function CardSlider({ tours }) {
  return (
    <div className="max-w-md mx-auto md:mx-10 my-10  relative">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation]}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        className="w-[255px] h-[284px] md:w-[289px] md:h-[379px] "
      >
        {tours.map((tour) => (
          <SwiperSlide key={tour.id} className="shadow-lg">
            <Image
              src={tour.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt="pic"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center mt-4 absolute -bottom-8 right-10 md:right-16">
        <span className="px-10">
          <Image
            src="/assets/icons/arrow-right.svg"
            width={0}
            height={0}
            className="w-6 h-6 md:w-9 md:h-9 swiper-button-next"
            alt="pic"
          />
        </span>
        <span className="px-10">
          <Image
            src="/assets/icons/arrow-left.svg"
            width={0}
            height={0}
            className="w-6 h-6 md:w-9 md:h-9 swiper-button-prev"
            alt="pic"
          />
        </span>
      </div>
    </div>
  );
}
