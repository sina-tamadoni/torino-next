const Loader = ({ size = "medium" }) => {
  const sizes = {
    small: "w-8 h-8",
    medium: "w-16 h-16",
    large: "w-24 h-24",
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-2 mt-10">
      <div
        className={`${sizes[size]} border-4 border-transparent border-t-[#28a745] rounded-full spin`}
        aria-label="Loading"
      ></div>
      <p className="text-gray-600 text-sm">
        {size === "small"
          ? "در حال بارگذاری..."
          : size === "medium"
          ? "لطفاً صبر کنید..."
          : "در حال پردازش اطلاعات..."}
      </p>
    </div>
  );
};

export default Loader;
