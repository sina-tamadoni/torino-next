"use client";

import { useState } from "react";
import { formatPrice } from "@/core/utils/convertNumToPersian";
import { useRouter } from "next/navigation";
import { useAddToCart } from "@/core/services/mutations";
import toast from "react-hot-toast";
import Image from "next/image";

function AddToCartButton({ tourId, price, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { mutate } = useAddToCart();

  function submitHandler() {
    mutate(tourId, {
      onSuccess: (data) => {
        setIsOpen(true);
        setMessage(data.data.message);
      },
      onError: (error) => {
        if (
          error.message ===
          "Cannot read properties of null (reading 'accessToken')"
        ) {
          toast.error("برای رزرو تور باید ثبت نام کنید!");
        }
        toast.error(error.message);
      },
    });
  }
  return (
    <>
      <button
        type="submit"
        onClick={() => {
          setIsOpen(true);
          submitHandler(tourId);
        }}
        className="px-4 py-2 w-[154px] h-[42px] lg:w-[204px] lg:h-[56px] mt-4 bg-custom-green text-white font-normal text-xl lg:text-[2xl] flex justify-center items-center rounded-[10px] shadow hover:bg-green-700 outline-none"
      >
        رزرو و خرید
      </button>
      {isOpen && (
        <Modal
          message={message}
          setIsOpen={setIsOpen}
          price={price}
          title={title}
        />
      )}
    </>
  );
}

export default AddToCartButton;

function Modal({ message, setIsOpen, price, title }) {
  const router = useRouter();

  return (
    <div className="fixed top-0 right-0 w-svw h-svh bg-black/20 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col w-[358px] h-fit mx-4 bg-white rounded-[20px] drop-shadow-md px-[10px] md:px-[7px] ">
          <div className="flex justify-between items-center w-full px-4 py-6">
            <h1>{message}</h1>
            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <Image
                src="/assets/icons/cross.svg"
                width={30}
                height={30}
                alt="close"
              />
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center px-4 py-6">
            <span>{title}</span>
            <span className="px-2">{formatPrice(price)}تومان</span>
          </div>
          <button
            className="w-fit m-auto text-custom-green borde border-2 border-custom-green px-10 py-3 my-5 rounded-lg"
            onClick={() => router.push("/cart")}
          >
            مشاهده سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
