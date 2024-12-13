import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const PagesLayout = ({ children, isNavbarDark }) => {
  return (
    <div className={`flex flex-col min-h-screen `}>
      {/* render Navbar */}
      <Navbar theme={isNavbarDark ? "dark" : "light"} />

      {/* Main Content (Centered) */}
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="w-full max-w-7xl px-6">{children}</div>
      </main>

      {/* render Footer */}
      <Footer />
    </div>
  );
};
