import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-[29px] lg:px-[326px] flex flex-col lg:flex-row-reverse lg:w-full justify-center items-center lg:gap-[138px] lg:h-[555px] lg:mt-[83px]">
      <Image
        src="/assets/images/Error TV.svg"
        width={322}
        height={322}
        alt="error-tv"
        className="md:w-[555px] md:h-[555px]"
      />
      <div className="flex flex-col justify-center items-center gap-5  md:gap-20">
        <p className="w-[266px] md:w-[399px] h-[37px] leading-[37.2px] md:leading-[55.8px] text-[#282828] text-2xl md:text-4xl font-[600] text-center">
          صفحه مورد نظر یافت نشد!
        </p>
        <button className="w-[232px] md:w-[361px] h-[58px] md:h-[75px] p-2 rounded-2xl bg-[#D8FFE1] text-[#28A745] leading-[31px] md:leading-[43.4px] text-xl md:text-[28px] font-[600]">
          <Link href="/">بازگشت به صفحه اصلی</Link>
        </button>
      </div>
    </div>
  );
}
