// import Cross from "@/components/icons/Cross";
import CardSlider from "@/components/partials/CardSlider/CardSlider";
import SearchForm from "@/components/templates/SearchForm";
import { convertNum, formatPrice } from "@/core/utils/convertNumToPersian";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }) {
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
    <div className="">
      <Image
        src="/assets/images/cover.png"
        width={1440}
        height={350}
        alt="cover"
        className="mt-3"
      />

      <h1 className="text-center h-[25px] md:h-[43px] mt-6 md:mt-4 text-base md:text-[28px] font-[400] md:font-[600] text-[#595959] leading-6 md:leading-[43px]">
        <span className="text-custom-green">تورینو</span> برگزار کننده بهترین
        تور های داخلی و خارجی
      </h1>
      <SearchForm pathname="/" />
      <Link
        href="/tours"
        className="font-[400] text-xl leading-[31px] px-[29px] md:px-5 lg:px-[126px] inline-block mt-10"
      >
        همه تورها
      </Link>
      <ul className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 px-[29px] md:px-5 lg:px-[126px] mt-4">
        {tours.length === 0 ? (
          <div className="flex justify-center items-center">موردی یافت نشد</div>
        ) : (
          tours.slice(0, 6).map((tour) => (
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
                <button className="flex justify-center items-center bg-custom-green p-3 rounded-[4px] text-[15px] text-white w-[99px] h-[30px] md:h-[33px] font-[400] leading-[23.25px]">
                <Link
                  href={`tours/${tour.id}`}
                >
                  رزرو
                </Link>
                </button>

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
      <div className="h-[220px] md:h-[251px] px-[29px] md:px-5 lg:px-[126px] mt-20">
        <div className="md:flex h-full md:border md:border-1 md:border-[#00000040] rounded-[10px]">
          <div className="flex md:w-[70%] md:h-full relative justify-between h-[128px] border border-1 border-[#10411B] border-b-0 md:border-0 md:rounded-[10px] bg-custom-green rounded-tr-[10px] rounded-tl-[10px]">
            <div className="flex">
              <div className="flex flex-col gap-4 px-5 md:px-12 py-4 md:py-6">
                <div className="font-[600] text-[25px] md:text-5xl leading-[34.1px] md:leading-[74.4px]">
                  <span className="pl-2 md:pl-5 text-white">خرید تلفنی از</span>
                  <span className="text-[#10411B]">تورینو</span>
                </div>
                <span className="text-white font-[300] md:font-[400] text-base md:text-[32px] leading-[21.7px] md:leading-[49.6px]">
                  به هر کجا که می‌خواهید!
                </span>
              </div>
            </div>
            <div className="">
              <Image
                src="/assets/images/cartoon.svg"
                width={0}
                height={0}
                alt="cartoon"
                className="absolute bottom-[-14px] lg:bottom-0 lg:left-10 left-0  w-[235px] h-[200px] lg:w-[308px] lg:h-[225px]"
              />
            </div>
          </div>
          <div className="flex md:w-[30%] md:flex-col justify-around md:justify-center md:gap-4 items-center rounded-br-[10px] rounded-bl-[10px] p-4 border-t-0 border border-1 md:border-0">
            <div className="flex items-center gap-4 p-2">
              <span className="mt-1 font-[600] md:font-[700] text-xl md:text-[28px] leading-[31.25px] md:leading-[43.75px] text-[#282828]">
                {convertNum("021-1840")}
              </span>
              <span>
                <Image
                  src="/assets/icons/call.svg"
                  width={0}
                  height={0}
                  alt="call"
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </span>
            </div>
            <a
              href="tel:0211840"
              className="w-[136px] md:w-[175px] flex items-center justify-center bg-[#10411B] text-white p-3 rounded-[9px] text-sm md:text-[16px] font-[500] leading-[21.88px] md:leading-[25px]"
            >
              اطلاعات بیشتر
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start md:flex-row md:justify-between px-[29px] md:px-5 lg:px-[126px] mt-20">
        <div className="flex md:flex-col w-full justify-center md:justify-start">
          <div className="flex justify-center gap-4 md:justify-start items-center ">
            <div className="flex justify-center items-center w-[34px] h-[34px] md:w-[59px] md:h-[59px] rounded-full bg-gradient-to-b from-[#28A745] to-[#10411B]">
              <Image
                src="/assets/icons/question-sign.svg"
                width={16}
                height={37}
                alt="question"
              />
            </div>
            <div className="flex items-center gap-1 font-[600] text-2xl md:text-[40px] leading-[37.49px] md:leading-[62.49px]">
              <span className="pl-1">چرا</span>
              <span className="text-custom-green">تورینو</span>
              <span>؟</span>
            </div>
          </div>

          <div className="hidden md:flex flex-col">
            <div className="max-w-[517px] mt-7">
              <h5 className="mb-4 font-[500] text-2xl leading-[39.56px]">
                تور طبیعت‌گردی و تاریخی
              </h5>
              <p className=" h-[264px] font-[400] text-xl text-[#282828] text-justify leading-[44px] ">
                اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در
                دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید
                تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های
                گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای
                فرهنگی و تاریخی را خریداری کنید.
              </p>
            </div>
          </div>
        </div>
        <CardSlider tours={tours} />
      </div>
      <hr className="block w-[328px] md:w-full m-auto md:mx-0 mt-16 md:mt-8" />
      <div className="flex flex-col md:flex-row justify-between gap-12 items-center mt-12 md:mt-7 px-[29px] md:px-5 lg:px-[126px]">
        <div className="flex items-center gap-[6px]">
          <Image
            src="/assets/icons/Group-16.svg"
            width={0}
            height={0}
            alt="group"
            className="w-[71.27px] h-16 md:w-[121px] md:h-[109px]"
          />
          <div className="flex flex-col gap-2">
            <p className="font-[500] text-[14px] md:text-[26px] leading-[21.88px] md:leading-[40.63px] text-[#282828]">
              بصرفه‌ترین قیمت
            </p>
            <p className="text-pretty w-[202px] md:w-fit text-xs md:text-base md:font-[300] md:leading-[25px] leading-[18.75px] text-[#282828]">
              بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[6px]">
          <Image
            src="/assets/icons/Group-17.svg"
            width={0}
            height={0}
            alt="group"
            className="w-[71.27px] h-16 md:w-[109px] md:h-[99px]"
          />
          <div className="flex flex-col gap-2">
            <p className="font-[500] text-[14px] md:text-[26px] leading-[21.88px] md:leading-[40.63px]">
              پشتیبانی
            </p>
            <p className="md:text-balance w-[202px]  text-xs md:text-base md:font-[300] md:leading-[25px] leading-[18.75px] text-[#282828]">
              پشتیبانی و همراهی {convertNum(24)} ساعته در تمامی مراحل سفر شما.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[5px]">
          <Image
            src="/assets/icons/Group-18.svg"
            width={0}
            height={0}
            alt="group"
            className="w-[71.27px] h-16 md:w-[104px] md:h-[104px]"
          />
          <div className="flex flex-col gap-2">
            <p className="font-[500] text-[14px] md:text-[26px] leading-[21.88px] md:leading-[40.63px]">
              رضایت کاربران
            </p>
            <p className="w-[202px] text-xs md:text-base md:font-[300] md:leading-[25px] leading-[18.75px] text-[#282828]">
              رضایت بیش از {convertNum(10)}هزار کاربر از تور های ما.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
