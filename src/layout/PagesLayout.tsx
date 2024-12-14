import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import "../App.css";

export const PagesLayout = ({ children, isNavbarDark }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className={`${isNavbarDark ? "bg-black " : "bg-white "} h-40`}>
        <Navbar theme={isNavbarDark ? "dark" : "light"} />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center w-full">
        <div className="w-full">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
