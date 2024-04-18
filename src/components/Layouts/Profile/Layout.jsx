import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { ProfileNavbar } from "./Navbar";
import { Sidebar } from "./SideBar";
import { ProfileDrawer } from "./Drawer";


export const ProfileLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ProfileNavbar onToggleDrawer={toggleDrawer} />
      <div className="flex flex-1">
        <div className="flex-shrink-0 hidden lg:block">
          <Sidebar />
        </div>
        <div className="flex-1">
          <ProfileDrawer open={isDrawerOpen} onClose={toggleDrawer}/>
          <div className="p-4 lg:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
