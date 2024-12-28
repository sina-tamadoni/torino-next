import { useUpdatePersonalInfo } from "@/core/services/mutations";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { bankAcountSchema } from "@/core/schemas";
function EditBankInfo({ user, setPage }) {
  const { mutate, isPending } = useUpdatePersonalInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          setPage(1);
        },
        onError: (error) => toast.error(error.message),
      }
    );
  };
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="h-[354px] md:h-[230px] flex flex-col justify-start gap-5 border border-1 border-[#00000033] rounded-[10px] py-7 px-5"
    >
      <p className="text-base leading-6 font-[400]">
        ویرایش اطلاعات حساب بانکی
      </p>
      <div className="flex flex-col md:flex-row  md:gap-5 h-[65%] justify-around md:justify-between items-center *:w-full">
        <div className="">
          <input
            defaultValue={user?.data?.payment?.debitCard_code}
            {...register("debitCard_code")}
            placeholder="شماره کارت"
            className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green w-full h-[45px] border border-1 border-[#00000080] rounded-[5px] text-sm font-[400] leading-[21.7px] text-[#00000080]"
          />
          {!!errors?.debitCard_code && (
            <span className="w-full text-right text-[#D40000] px-1 text-xs">
              {errors?.debitCard_code?.message}
            </span>
          )}
        </div>
        <div>
          <input
            defaultValue={user?.data?.payment?.accountIdentifier}
            {...register("accountIdentifier")}
            placeholder="شماره حساب"
            className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green w-full h-[45px] border border-1 border-[#00000080] rounded-[5px] text-sm font-[400] leading-[21.7px] text-[#00000080]"
          />
          {!!errors?.accountIdentifier && (
            <span className="w-full text-right text-[#D40000] px-1 text-xs">
              {errors?.accountIdentifier?.message}
            </span>
          )}
        </div>
        <div>
          <input
            defaultValue={user?.data?.payment?.shaba_code}
            {...register("shaba_code")}
            placeholder="شماره شبا"
            className="px-2 focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-custom-green w-full h-[45px] border border-1 border-[#00000080] rounded-[5px] text-sm font-[400] leading-[21.7px] text-[#00000080]"
          />
          {!!errors?.shaba_code && (
            <span className="w-full text-right text-[#D40000] px-1 text-xs">
              {errors?.shaba_code?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between ite gap-4 *:flex-1 *:p-2 *:rounded-[5px] text-base font-[600] leading-[24.8px]">
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

export default EditBankInfo;
