import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-[#1D1B1B]">
        <div className="h-full flex">
          <div className="w-[60%] bg-cover bg-center hidden lg:block" style={{backgroundImage: 'url("/template.jpg")'}}></div>
          <div className="w-full lg:w-[40%] bg-white flex items-center justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
