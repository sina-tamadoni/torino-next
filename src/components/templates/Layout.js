"use client";

import Footer from "../partials/Footer";
import Header from "../partials/Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
