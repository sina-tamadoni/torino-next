import { convertNum } from "@/core/utils/convertNumToPersian";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function UserMenu({ mobile, isUserMenuOpen, menuRef }) {
  const router = useRouter();
  const clearCookiesAndRefresh = () => {
    document.cookie.split(";").forEach((cookie) => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
    window.location.href = "/";
  };

  return (
    <>
      {isUserMenuOpen && (
        <div
          ref={menuRef}
          tabIndex="0" 
          className="absolute pb-1 top-10 md:top-14 -left-4 md:-left-7 w-[157px] md:w-[246px] bg-white shadow-lg rounded-md border"
        >
          <div className="flex gap-2 md:gap-3 items-center bg-[#f4f4f4] md:px-4 py-2">
            <span className="mr-2">
              <div className="w-7 h-7 rounded-full bg-[#d9d9d9] flex justify-center items-center">
                <Image
                  src="/assets/icons/frame.svg"
                  width={16}
                  height={16}
                  alt="profile"
                />
              </div>
            </span>
            <span className="text-[#10411B] font-[500] text-sm md:text-base leading-[21.88px] md:leading-[25px]">
              {convertNum(mobile)}
            </span>
          </div>
          <div className="border-t"></div>

          <div
            className="flex items-center gap-2 md:gap-3 md:px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            <span className="mr-2">
              <Image
                src="/assets/icons/profile-2.svg"
                width={20}
                height={20}
                alt="profile"
              />
            </span>
            <span className="text-[#282828] font-[500] text-sm md:text-base leading-[21.88px] md:leading-[25px]">
              اطلاعات حساب کاربری
            </span>
          </div>
          <div className="border-t"></div>

          <div
            className="flex items-center gap-2 md:gap-3 md:px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={clearCookiesAndRefresh}
          >
            <span className="mr-2">
              <Image
                src="/assets/icons/logout.svg"
                width={20}
                height={20}
                alt="logout"
              />
            </span>
            <span className="text-[#D40000] font-[500] text-sm md:text-base leading-[21.88px] md:leading-[25px]">
              خروج از حساب کاربری
            </span>
          </div>
        </div>
      )}
    </>
  );
}
