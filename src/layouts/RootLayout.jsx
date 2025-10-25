import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const RootLayout = () => {
  React.useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Toaster position="top-right" />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
