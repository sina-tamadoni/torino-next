import "./globals.css";
import "swiper/css";
import "swiper/css/effect-cards";
import Layout from "@/components/templates/Layout";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import AuthForm from "@/components/templates/AuthForm";
import { yekan } from "@/core/utils/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${yekan.className} antialiased sm:max-w-[1440px]`}>
        <TanstackQueryProvider>
          <Layout>
            <AuthForm />
            {children}
          </Layout>
        </TanstackQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
