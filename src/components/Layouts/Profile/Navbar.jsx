/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useState } from "react";
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
  } from "@material-tailwind/react";

  import {
    ChevronDownIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";

// profile menu component
const profileMenuItems = [
    {
      label: "Sign Out",
      icon: PowerIcon,
    },
];  

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
    const closeMenu = () => setIsMenuOpen(false);
   
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
}

export const ProfileNavbar = ({ onToggleDrawer }) => {

  return (
    <div>
        <Navbar 
            variant="gradient"
            className={`top-0 z-10 h-max max-w-full border-none rounded-none transition-all duration-300 ease-in-out px-4 py-2 lg:px-8 lg:py-4`}
        >
            <div className="flex items-center justify-between text-[#1D1B1B]">
                <Typography
                    as="li"
                    className="mr-4 cursor-pointer py-1.5 font-bold"
                >
                    <NavLink
                        to={"/"} 
                    >
                        OMINITECH
                    </NavLink>
                </Typography>
                <div className="mr-4 hidden lg:block">
                    {/* TODO: icons */}
                </div>
                <div className="flex items-center gap-4">
                    <ProfileMenu />
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={onToggleDrawer}
                    >
                        <Bars3Icon className="h-6 w-6" strokeWidth={2}/>
                    </IconButton>
                </div>
            </div>
        </Navbar>
    </div>
  );
};
