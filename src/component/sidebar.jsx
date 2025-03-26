import React from "react";
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from "@mui/icons-material/AddBox";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RedeemIcon from '@mui/icons-material/Redeem';
import GroupsIcon from '@mui/icons-material/Groups';
import HeadphonesIcon from '@mui/icons-material/Headphones';
export const Sidebar = ({isOpen}) => {
  return (
      <aside className={`bg-white fixed overflow-y-auto top-0 left-0 w-[250px] h-[95vh] rounded-lg shadow-md mt-4 transform transition-transform duration-300 ${
        isOpen ? "translate-x-2" : "-translate-x-full"
} lg:translate-x-2 lg:block`}>
      <div className="flex items-center h-20 space-x-2 pl-6 py-5">
      <img src="/images/logo.png" alt="Logo" className="w-8 h-5 mt-1" />
        <h1 className="text-sm font-medium">dailyexchanger Dashboard</h1>
      </div>
      <hr className="bg-gradient-to-r from-gray-50 via-gray-400 to-gray-50 h-[1px]" />
      <nav>
        <ul>
        <li className="pt-8 pb-3 text-gray-600">
              <a href="#" className="flex justify-between items-center px-6">
                <div className="flex items-center space-x-4">
                  <button className="bg-pink-600 px-[21px] py-[20px] rounded-lg">  
                  </button>
                  <span className="font-semibold text-sm active:text-gray-600">Dashboard</span>
                </div>
              </a>
            </li>
            <li className="py-3 text-gray-600">
            <a href="#" className="flex justify-between items-center px-6">
            <div className="flex items-center space-x-4">
                  <button className="bg-gray-200 px-3 py-2 rounded-lg">  
                 <AddBoxIcon sx={{fontSize:"18px", color:"GrayText"}}/>
                  </button>
                  <span className="font-semibold text-sm">Deposit</span>
                </div>
              </a>
            </li>
            <li className="py-3 text-gray-600">
            <a href="#" className="flex justify-between items-center px-6">
            <div className="flex items-center space-x-4">
            <button className="bg-gray-200 px-3 py-2 rounded-lg">  
                 <IndeterminateCheckBoxIcon sx={{fontSize:"18px", color:"GrayText"}}/>
                  </button>
                  <span className="font-semibold text-sm">Withdraw</span>
                </div>
              </a>
            </li>
            <li className="py-3 text-gray-600">
            <a href="#" className="flex justify-between items-center px-6">
            <div className="flex items-center space-x-4">
            <button className="bg-gray-200 px-3 py-2 rounded-lg">  
                 <CurrencyExchangeIcon sx={{fontSize:"18px"}}/>
                  </button>
                  <span className="font-semibold text-sm">Exchange</span>
                </div>
              </a>
            </li>
            <li className="py-3 text-gray-600">
            <a href="#" className="flex justify-between items-center px-6">
            <div className="flex items-center space-x-4">
            <button className="bg-gray-200 px-3 py-2 rounded-lg">  
                 <RedeemIcon sx={{fontSize:"18px", color:"gray"}}/>
                  </button>
                  <span className="font-semibold text-sm">E-Vouchers</span>
                </div>
              </a>
              </li>
              <li className="py-3 text-gray-600">
              <a href="#" className="flex justify-between items-center px-6">
                <div className="flex items-center space-x-4">
                  <button className="bg-gray-200 px-3 py-2 rounded-lg">  
                 <GroupsIcon sx={{fontSize:"18px", color:"GrayText"}}/>
                  </button>
                  <span className="font-semibold text-sm">Invite & Earn</span>
                  </div>
                  </a>
                  </li>
        </ul>
        <footer className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 rounded-2xl mx-4 my-4 pt-3 ">
        <div className="text-left p-3 w-full">
<div className="bg-white inline-block mb-3 rounded-md p-1">
<HeadphonesIcon sx={{color:"gray"}}/>
</div>
<h6 className="text-white mb-0 font-semibold">Need Help?</h6>
<p className="text-white text-sm font-semibold pb-3">Contact Our Support</p>
          <a className="bg-white w-full inline-block text-center py-2 px-4 rounded-lg shadow-xl mx-auto uppercase text-xs font-bold tracking-tight">Contact Us</a>
          </div>
          </footer>
          </nav>
          </aside>
        
  );
};
