import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import NotificationsIcon from '@mui/icons-material/Notifications';
import TelegramIcon from '@mui/icons-material/Telegram';
import PublicIcon from '@mui/icons-material/Public';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-wrap px-8 gap-6 justify-start">
        {/* Card 1 */}
        <div className="lg:max-w-[240px] px-4 py-5 w-full shadow-lg rounded-xl bg-white flex justify-between items-start">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-md font-semibold text-gray-700">PKR Balance</p>
            <h2 className="text-xl font-bold text-black">0.594000</h2>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <img
              src="/images/pak-flag.png"
              alt="pak-flag"
              className="h-16 w-16 xl:h-8 xl:w-8"
            />
            <MoreHorizIcon className="text-gray-500 cursor-pointer" />
          </div>
        </div>
        {/* Card 2 */}
        <div className="px-4 py-5 lg:max-w-[240px] w-full  shadow-lg rounded-xl bg-white flex justify-between items-start">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-md font-semibold text-gray-700">USD Balance</p>
            <h2 className="text-xl font-bold text-black">0</h2>
          </div>
          <div className="flex flex-col items-center space-x-2">
            <img
              src="/images/us-flag.png"
              alt="us-flag"
              className="h-16 w-16 xl:h-8 xl:w-8"
            />
            <MoreHorizIcon className="text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <section className="flex flex-wrap px-8 py-8 lg:space-x-8">
        <div className=" bg-white shadow-md rounded-xl overflow-x-auto">
          <h2 className="text-lg text-gray-700 font-semibold p-6">
            Recent Activity
          </h2>
          <hr />
          <table className="w-full border-collapse bg-white shadow-md rounded-xl">
            <thead>
              <tr className="text-left text-gray-400 uppercase text-xs border-b">
                <th className="px-6 py-2">Date</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-8">Status</th>
                <th className="px-6">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-2 py-0.5 ml-4 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-3 py-0.5 ml-3 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-3 py-0.5 ml-3 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-3 py-0.5 ml-3 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-3 py-0.5 ml-3 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-3 py-0.5 ml-3 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-3 py-0.5 ml-3 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-5 text-gray-500 text-sm whitespace-nowrap">
                  <div className="flex">
                    <div>
                      <small className="text-sm">
                        20 Jan 2025 &nbsp;&nbsp;&nbsp;&nbsp;
                      </small>
                    </div>
                    <div className="flex flex-col justify-center"></div>
                    <h6 className="text-md font-semibold text-gray-700 px-4">
                      Withdrawal to Easypaisa
                    </h6>
                  </div>
                </td>
                <td>
                  <p className="text-xs font-semibold text-gray-500">-1010.00 PKR</p>
                </td>
                <td>
                  <button className="uppercase px-3 py-0.5 ml-3 bg-gradient-to-r from-lime-300 to-lime-600 text-white text-xs font-bold rounded-xl">
                    <small>completed</small>
                  </button>
                </td>
                <td>
                  <button
                    className="bg-pink-600 text-sm uppercase mx-4 px-5 py-2 hover:scale-105 text-white rounded-md
                      "
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <aside className="bg-white lg:w-[288px] w-full shadow-lg rounded-xl mt-6 lg:mt-0">
        <h2 className="text-lg text-gray-700 font-semibold p-6">
            How to get started?
          </h2>
          <ul>
          <li className=" text-gray-600">  
                <div className="flex items-center space-x-4 px-5">
                <i class="bi bi-bell-fill bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent"></i>
                  <span className="font-semibold text-sm active:text-gray-600">Deposit Fund</span>
                </div>
                <div className="flex items-center space-x-4 pl-7 pb-1">
                <p className="px-6 border-l-2 text-xs text-gray-400 pb-4 font-semibold">Any amount you can deposit in your wallet for your use.</p>
                </div>
            </li>
            <li className=" text-gray-600">  
                <div className="flex items-center space-x-4 px-4">
                <TelegramIcon style={{color:"red"}}/>
                  <span className="font-semibold text-sm active:text-gray-600">Send/Request money</span>
                </div>
                <div className="flex items-center space-x-4 pl-7 pb-1">
                <p className="px-6 border-l-2 text-xs text-gray-400 pb-4 font-semibold">Send fund or Request fund from your friends.</p>
                </div>
            </li>
            <li className=" text-gray-600">  
                <div className="flex items-center space-x-4 px-5">
                <i class="bi bi-globe-asia-australia bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent text-lg"></i>
                  <span className="font-semibold text-sm active:text-gray-600">Exchange eCurrencies</span>
                </div>
                <div className="flex items-center space-x-4 pl-7 pb-1">
                <p className="px-6 border-l-2 text-xs text-gray-400 pb-4 font-semibold">Exchange your ecurrencies by deposit and making withdraw with multiple e-wallets.</p>
                </div>
            </li>
            <li className=" text-gray-600">  
                <div className="flex items-center space-x-4 px-5">
              
                <i class="bi bi-credit-card-2-back bg-gradient-to-r from-orange-300 to-orange-600 bg-clip-text text-transparent text-lg"></i>
                  <span className="font-semibold text-sm active:text-gray-600">Activate Prepaid Credit Card</span>
</div>
                <div className="flex items-center space-x-4 pl-7 pb-1">
                <p className="px-6 border-l-2 text-xs text-gray-400 pb-4 font-semibold">Activate your prepaid debit and use it anywhere online.</p>
                </div>
            </li>
            <li className=" text-gray-600">  
                <div className="flex items-center space-x-4 px-5">
                <i class="bi bi-cart-fill bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent text-lg"></i>
                  <span className="font-semibold text-sm active:text-gray-600">Use Prepaid Card</span>
                </div>
                <div className="flex items-center space-x-4 pl-7 pb-1">
                <p className="px-6 border-l-2 text-xs text-gray-400 pb-4 font-semibold">Use your Prepaid Credit Card on Paypal, Go for shopping anywhere, you can use our card anywhere online were VISA cards are accepted.</p>
                </div>
            </li>
            <li className=" text-gray-600">  
                <div className="flex items-center space-x-4 px-5">
             <i className="bi bi-cash-coin text-black text-lg"></i>
                  <span className="font-semibold text-sm active:text-gray-600">Want to Earn? Make Referrals</span>
                </div>
                <div className="flex items-center space-x-4 pl-7 pb-1 mb-3">
                <p className="px-6 border-l-2 text-xs text-gray-400 pb-4 font-semibold">Join Affliate Program and earn money.</p>
                </div>
            </li>
          </ul>
        </aside>
      </section>
    </>
  );
};
