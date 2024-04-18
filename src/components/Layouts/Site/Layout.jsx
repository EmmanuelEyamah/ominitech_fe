import { FC } from "react";
import { SiteNavbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const SiteLayout = () => {

  return (
    <div className="flex flex-col h-full">
        <SiteNavbar />
        <div className="flex-1 bg-[#1D1B1B]">
            <div className="mx-auto py-8 px-3 lg:px-0">
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
  );
};
