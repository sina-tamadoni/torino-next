import Image from "next/image";
import { useRouter } from "next/navigation";

export default function EmptyTours() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center shadow-md rounded-[10px]">
      <div className="bg-white mb-16 shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
        <div className="flex place-content-center mb-7">
          <Image
            src="/assets/icons/map-route.svg"
            width={100}
            height={100}
            alt="transactions"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          هیچ توری یافت نشد
        </h2>
        <p className="text-gray-500 mb-6">
          شما هنوز در هیچ توری ثبت نام نکرده‌اید
        </p>

        <button
          onClick={handleGoHome}
          className="bg-custom-green text-white py-2 px-4 rounded-lg w-full hover:bg-green-700 transition"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    </div>
  );
}