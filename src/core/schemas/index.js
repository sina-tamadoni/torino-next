import { object, string } from "yup";

const bankAcountSchema = object({
  shaba_code: string().required("شماره شبا را وارد کنید"),
  debitCard_code: string()
    .required("شماره کارت را وارد کنید")
    .length(16, "شماره کارت باید ۱۶ رقم باشد"),
  accountIdentifier: string()
    .required("شماره حساب را وارد کنید")
    .min(8, "شماره حساب باید حداقل ۸ کاراکتر باشد")
    .max(16, "شماره حساب باید حداکثر 16 کاراکتر باشد"),
});

const emailSchema = object({
  email: string()
    .email("ایمیل وارد شده معتبر نیست")
    .required("ایمیل را وارد کنید"),
});

const personalInfoSchema = object({
  firstName: string()
    .required(" نام ونام خانوادگی را وارد کنید")
    .min(3, "نام و نام خانوادگی باید حداقل سه حرف باشد"),
  nationalCode: string()
    .required(" کد ملی را وارد کنید")
    .matches(/^\d{10}$/, " کد ملی باید ده رقم باشد"),
  birthDate: string()
    .required("تاریخ تولد را وارد کنید")
    .max(new Date(), "تاریخ تولد نمی‌تواند در آینده باشد"),
  gender: string()
    .required("انتخاب جنسیت الزامی است")
    .oneOf(["male", "female"], "جنسیت باید مرد یا زن باشد"),
});

const cartInfoSchema = object({
  fullName: string()
    .required(" نام ونام خانوادگی را وارد کنید")
    .min(3, "نام و نام خانوادگی باید حداقل سه حرف باشد"),
  nationalCode: string()
    .required(" کد ملی را وارد کنید")
    .matches(/^\d{10}$/, " کد ملی باید ده رقم باشد"),
  birthDate: string()
    .required("تاریخ تولد را وارد کنید")
    .max(new Date(), "تاریخ تولد نمی‌تواند در آینده باشد"),
  gender: string()
    .required("انتخاب جنسیت الزامی است")
    .oneOf(["male", "female"], "جنسیت باید مرد یا زن باشد"),
});

export { bankAcountSchema, emailSchema, personalInfoSchema, cartInfoSchema };
