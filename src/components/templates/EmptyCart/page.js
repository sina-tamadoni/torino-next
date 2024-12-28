import { useRouter } from "next/navigation";

export default function EmptyCart() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-sm w-full">
        <div className="text-custom-green mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-16 h-16 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l.971-1.942a.75.75 0 01.67-.408h4.218c.287 0 .55.163.67.408L15.75 4.5m-7.5 0h7.5m-7.5 0a3 3 0 00-3 3v10.5a3 3 0 003 3h7.5a3 3 0 003-3V7.5a3 3 0 00-3-3m-7.5 0h7.5"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          سبد خرید شما خالی است
        </h2>
        <p className="text-gray-500 mb-6">
          هنوز هیچ محصولی به سبد خرید خود اضافه نکرده‌اید.
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
