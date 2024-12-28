"use client";

import { useAuth } from "@/context/AuthProvider";
import { useCheckOtp } from "@/core/services/mutations";
import { convertNum } from "@/core/utils/convertNumToPersian";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import OtpInput from "react18-input-otp";

function CheckOTPForm({ mobile, code }) {
  const [verificationCode, setVerificationCode] = useState("");
  const { isPending, mutate } = useCheckOtp();
  const { setStep, setIsOpen } = useAuth();

  useEffect(() => {
    setVerificationCode(code);
  }, [code]);

  if (isPending) return;

  const changeHandler = (otp) => {
    setVerificationCode(otp);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    mutate(
      { mobile, code: verificationCode },
      {
        onSuccess: ({ data }) => {
          setIsOpen(false);
          toast.success("خوش آمدید");
          setStep(1);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <form className=" flex flex-col justify-center items-center w-full h-full">
      <h4 className="w-full h-[43px] font-[600] text-[22px] md:text-[28px] leading-[34px] md:leading-[43.4px] text-center">
        کد تایید را وارد کنید
      </h4>
      <div className="flex flex-col w-[278px] md:w-[491px] my-9 ">
        <label
          htmlFor="mobile"
          className="w-full  text-center h-[25px] leading-6 font-[300] text-base mb-[10px]"
        >
          {`کد تایید به شماره ${convertNum("09224526847")} ارسال شد`}
        </label>
        <div
          style={{ direction: "ltr" }}
          className="ltr min-w-[278px] flex justify-center items-center"
        >
          <OtpInput
            value={verificationCode}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              border: "1px solid silver",
              borderRadius: "5px",
              width: "41px",
              height: "41px",
              margin: "0 3px",
            }}
          />
        </div>

        <button
          type="submit"
          className="min-w-[278px] h-[54px] bg-[#28A745] mt-[41px] border border-1 border-[#00000040] rounded-md font-[500] text-lg leading-7 text-white"
          onClick={submitHandler}
        >
          ارسال کد تایید
        </button>
      </div>
    </form>
  );
}

export default CheckOTPForm;
