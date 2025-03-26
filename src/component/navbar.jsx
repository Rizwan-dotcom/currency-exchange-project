import React, { useState } from "react";
import HistoryIcon from "@mui/icons-material/History";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MenuIcon from "@mui/icons-material/Menu";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";

export const Navbar = ({ isOpen, toggleNavbar }) => {
  const [navItem, setNavItem] = useState(false);
  const toggleItem = () => setNavItem(!navItem);
  return (
    <>
      <nav className="flex justify-between items-center px-6 py-4 lg:px-10">
        <div className="flex flex-col">
          <p className="text-gray-400 text-sm">
            dailyexchanger &nbsp;{" "}
            <span className="text-gray-700">/ Portal</span>
          </p>
          <h6 className="font-bold">Dashboard</h6>
        </div>

        <ul className="flex items-center space-x-5">
          <li>
            <button
              onClick={toggleNavbar}
              className="flex items-center lg:hidden"
            >
              {isOpen ? (
                <ClearAllIcon sx={{ fontSize: "24px", color: "gray" }} />
              ) : (
                <MenuIcon sx={{ fontSize: "24px", color: "gray" }} />
              )}
            </button>
          </li>
          <li className="hidden xs:hidden sm:flex items-center space-x-1">
            <HistoryIcon sx={{ fontSize: "18px", color: "gray" }} />
            <span className="font-semibold text-sm text-gray-500 hidden lg:block">
              All Activity
            </span>
          </li>
          <li className="hidden xs:hidden sm:flex items-center space-x-1">
            <HeadphonesIcon sx={{ fontSize: "18px", color: "gray" }} />
            <span className="font-semibold text-sm text-gray-500 hidden lg:block">
              Support
            </span>
          </li>
          <li className="hidden xs:hidden sm:flex items-center space-x-1">
            <SettingsIcon sx={{ fontSize: "18px", color: "gray" }} />
            <span className="font-semibold text-sm text-gray-500 hidden lg:block">
              Setting
            </span>
          </li>
          <li className="hidden xs:hidden sm:flex items-center space-x-1">
            <PowerSettingsNewIcon sx={{ fontSize: "18px", color: "gray" }} />
            <span className="font-semibold text-sm text-gray-500 hidden lg:block">
              Logout
            </span>
          </li>

          <li className="xs:block sm:hidden">
            <button className="flex items-center" onClick={toggleItem}>
              <i className="bi bi-three-dots text-xl text-gray-500"></i>
            </button>
          </li>
        </ul>
      </nav>
{navItem && 
      <ul
      className="absolute right-6 top-10 mt-2 w-9 bg-white shadow-md rounded-md py-2 lg:hidden"   
      >
        <li className="flex items-center px-2 py-2 hover:bg-gray-100">
          <HistoryIcon sx={{ fontSize: "18px", color: "gray" }} />
          <span className="font-semibold text-sm hidden ">
            All Activity
          </span>
        </li>
        <li className="flex items-center px-2 py-2 hover:bg-gray-100">
          <HeadphonesIcon sx={{ fontSize: "18px", color: "gray" }} />
          <span className="font-semibold text-sm hidden">Support</span>
        </li>
        <li className="flex items-center px-2 py-2 hover:bg-gray-100">
          <SettingsIcon sx={{ fontSize: "18px", color: "gray" }} />
          <span className="font-semibold text-sm hidden">Setting</span>
        </li>
        <li className="flex items-center px-2 py-2 hover:bg-gray-100">
          <PowerSettingsNewIcon sx={{ fontSize: "18px", color: "gray" }} />
          <span className="font-semibold text-sm hidden">Logout</span>
        </li>
      </ul>
      }
    </>
  );
};
