import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import DashboardHeader from "./dashboard/components/dashboardHeader";

export default function AdminPanel() {
  return (
    <div className="flex bg-background h-screen">
      <div className="flex flex-col py-5 gap-5 items-center w-[20%] my-3">
        <div className="w-[130px]">
          <img src="/download.png" className="imgrender" alt="" />
        </div>
        <div className="w-full">
          <ul className="flex justify-center text-white font-bold text-base">
            <div className="flex flex-col items-end w-full">
              <NavLink
                to="./"
                className={({ isActive }) =>
                  isActive ? "w-[90%] bg-slate-900 rounded-l-2xl" : "w-[90%]"
                }
              >
                <li className="flex items-center gap-10 px-8 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-white w-5 h-5"
                  >
                    <path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z" />
                  </svg>
                  Dashboard
                </li>
              </NavLink>
              <NavLink
                to="orders"
                className={({ isActive }) =>
                  isActive ? "w-[90%] bg-slate-900 rounded-l-2xl" : "w-[90%]"
                }
              >
                <li className="flex items-center gap-10  px-8 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                  </svg>
                  Orders
                </li>
              </NavLink>
              <NavLink
                to="products"
                className={({ isActive }) =>
                  isActive ? "w-[90%] bg-slate-900 rounded-l-2xl" : "w-[90%]"
                }
              >
                <li className="flex items-center gap-10 w-[90%] px-8 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 640 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
                  </svg>
                  Products
                </li>
              </NavLink>
              <NavLink
                to="users"
                className={({ isActive }) =>
                  isActive ? "w-[90%] bg-slate-900 rounded-l-2xl" : "w-[90%]"
                }
              >
                <li className="flex items-center gap-10 w-[90%] px-8 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="w-5 h-5 fill-white"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                  Users
                </li>
              </NavLink>
              <li className="flex items-center gap-10 w-[90%] px-8 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-white"
                >
                  <path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z" />
                </svg>
                News
              </li>
            </div>
          </ul>
        </div>
        <div className="h-full flex items-end gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
            className="w-6 h-6 fill-submessage cursor-pointer"
          >
            <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
          </svg>
          <span className="introheading-2 text-base text-submessage cursor-pointer">
            Log Out
          </span>
        </div>
      </div>
      <div className="w-[80%] flex flex-col items-center bg-slate-900 my-3 mr-3 rounded-2xl py-4">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
}
