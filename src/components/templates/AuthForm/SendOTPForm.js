import { useAuth } from "@/context/AuthProvider";
import { useSendOtp } from "@/core/services/mutations";
import { convertNum } from "@/core/utils/convertNumToPersian";
import toast from "react-hot-toast";

function SendOTPForm({ mobile, setMobile, setCode }) {
  const { isPending, mutate } = useSendOtp();
  const { setStep } = useAuth();

  const sendHandler = async (e) => {
    e.preventDefault();
    if (isPending) {
      return;
    }

    mutate(
      { mobile },
      {
        onSuccess: ({ data }) => {
          setCode(data?.code);
          setStep(2);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };
  return (
    <form className=" flex flex-col justify-center items-center w-full h-full">
      <h4 className="w-[133px] md:w-[169px] h-[43px] mt-[4px] font-[600] text-[22px] md:text-[28px] leading-[34px] md:leading-[43.4px] text-center">
        ورود به تورینو
      </h4>
      <div className="flex flex-col w-[278px] md:w-[491px] my-9 ">
        <label
          htmlFor="mobile"
          className="w-full h-[25px] leading-6 font-[300] text-base mb-[10px]"
        >
          شماره موبایل خود را وارد کنید:
        </label>
        <input
          name="mobile"
          placeholder={convertNum("3524***0912")}
          value={mobile}
          className="w-full h-[54px] p-4 outline-none rounded-md border border-1 border-[#00000040]"
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          type="submit"
          className="w-full h-[54px] bg-[#28A745] mt-[41px] border border-1 border-[#00000040] rounded-md font-[500] text-lg leading-7 text-white"
          onClick={sendHandler}
        >
          ارسال کد تایید
        </button>
      </div>
    </form>
  );
}

export default SendOTPForm;
