import { emailSchema } from "@/core/schemas";
import { useUpdatePersonalInfo } from "@/core/services/mutations";
import { convertNum } from "@/core/utils/convertNumToPersian";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function EditAccountInfo({ user, setPage }) {
  const { mutate, isPending } = useUpdatePersonalInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(emailSchema) });
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
      className="h-[189px] md:h-[115px] flex flex-col justify-between border border-1 border-[#00000033] rounded-[10px] py-6 px-5"
    >
      <p className="text-base leading-6 font-[400]">اطلاعات حساب کاربری</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:px-[27px]">
        <div className="flex justify-between md:justify-start md:gap-10 items-center">
          <p className="font-[300] text-sm leading-[21.7px]">شماره موبایل</p>
          <p className="font-[400] text-sm leading-[21.88px]">
            {user?.data?.mobile && convertNum(user?.data?.mobile)}
          </p>
        </div>
        <div className="relative flex flex-col items-center gap-1">
          <div className="w-full flex justify-between items-center gap-2">   
          <input
            defaultValue={user?.data?.email}
            {...register("email")}
            placeholder="آدرس ایمیل"
            className="flex-1 rounded-[5px] border border-1 border-[#00000080] w-[186px] h-10 p-2 text-sm font-[400] leading-[21.7px]"
          />
          <button
            type="submit"
            className="w-[93px] h-10 p-2 rounded-[5px] flex justify-center items-center bg-[#2BA745] text-white text-base font-[600] leading-[24.8px]"
          >
            تایید
          </button>
          </div>
          {!!errors?.email && (
            <span className="absolute -bottom-5 right-1 w-full text-right text-[#D40000] text-xs">
              {errors?.email?.message}
            </span>
          )}

        </div>
      </div>
    </form>
  );
}

export default EditAccountInfo;
