import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Links } from "../../../utils/links";
import { useLocation } from 'react-router-dom';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
    Badge
  } from "@material-tailwind/react";

  import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "Edit Profile",
      icon: Cog6ToothIcon,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
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


const NavItems = ({ label, active }) => {
    return (
        <div className={`py-2 ${active ? 'text-[#10c8ff] border-b-2 border-[#10c8ff]' : 'text-white'}`}>
            <label>
                {label}
            </label>
        </div>
    );
};

const useMenuActive = (route ) => {
    const location = useLocation();
  
    const isActive =
      (location.pathname.includes(route) && route.length > 1) ||
      location.pathname === route;
  
    return isActive;
  };

export const SiteNavbar = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const userLogin = false;

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 35) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {Links.map((link, index) => {
            const isActive = useMenuActive(link.route)
            return (
                <Typography
                    as="li"
                    variant="small"
                    className="p-1 font-normal"
                    key={`link-tag-${index}`}
                >
                    <NavLink
                        to={link.route} 
                        className="flex items-center"
                    >
                    <NavItems 
                        label={link.label} 
                        active={isActive}
                    />
                    
                    </NavLink>
                </Typography>
            )
          })}  
          
        </ul>
      );
  return (
    <div>
        <Navbar 
            variant="gradient"
            className={`top-0 z-10 h-max max-w-full border-none rounded-none transition-all duration-300 ease-in-out px-4 py-2 lg:px-8 lg:py-4 ${isSticky ? 'shadow-md fixed' : ''}`}
            style={{ background: "#1D1B1B"}}
        >
            <div className="flex items-center justify-between text-white">
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
                <div className="mr-4 hidden lg:block">{navList}</div>
                <div className="flex items-center gap-4">
                        <div className="flex items-center gap-x-1">
                            {!userLogin && 
                                <Button
                                    variant="text"
                                    size="sm"
                                    className="hidden lg:inline-block text-white"
                                >
                                  <NavLink
                                      to={"/auth/signup"} 
                                  >
                                    <span>Sign Up</span>
                                  </NavLink>
                                </Button>
                            }
                            <Badge 
                                content="new"
                                className="hidden lg:inline-block"
                            >
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    style={{ background: "#C6FF17", color: "#000"}}
                                >
                                    
                                    <NavLink
                                      to={"/ominihub"} 
                                    >
                                      <span>OminiHub</span>
                                    </NavLink>
                                </Button>
                            </Badge>
                        </div>
                        {userLogin && <ProfileMenu />}
                        <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                        >
                        {openNav ? (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                            </svg>
                        ) : (
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            </svg>
                        )}
                        </IconButton>
                </div>
            </div>
                <MobileNav open={openNav}>
                    {navList}
                    {!userLogin && 
                        <div className="flex items-center gap-x-1">
                            <Button fullWidth variant="text" size="sm" className="text-white">
                            <NavLink
                              to={"/auth/login"} 
                            >
                              <span>Log In</span>
                            </NavLink>
                            </Button>
                            <Button fullWidth variant="gradient" size="sm" className="">
                            <NavLink
                              to={"/auth/signup"} 
                            >
                              <span>Sign in</span>
                            </NavLink>
                            </Button>
                        </div>
                    }
                </MobileNav>
        </Navbar>
    </div>
  );
};
