import { useState } from "react";
import GamesTable from "./components/gamesTable";
import AccessoriesTable from "./components/accessoriesTable";
import AddAccessories from "./components/addAccessories";
import AddGame from "./components/addGame";

export default function Products() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="flex flex-col items-center w-full gap-5 drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className=" drawer-content w-[95%] pl-3 pt-6 cursor-pointer flex justify-between items-center">
        <ul className="descr-1 flex-row items-center gap-8 text-sm font-semibold">
          <li className={`pb-2 ${toggle ? "text-primary border-b-2 border-primary":""}`} onClick={()=>setToggle(true)}>Games</li>
          <li className={`pb-2 ${!toggle ? "text-primary border-b-2 border-primary":""}`} onClick={()=>setToggle(false)}>Accessories</li>
        </ul>
        <div className="flex gap-3 w-[30%]">
          <div className="w-full introheading-2 text-sm bg-background rounded-lg flex items-center">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search for a game"
              className="bg-transparent w-[90%] outline-none px-3 py-2.5"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-4 h-4 stroke-submessage cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <label
            htmlFor="my-drawer-4"
            className="p-2 bg-background rounded flex justify-center items-center drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="fill-primary w-5 h-5"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </label>
        </div>
      </div>
      <div className="drawer-content flex justify-between w-[95%]">
        {
          toggle &&
          <GamesTable/>
        }
        {
          !toggle &&
          <AccessoriesTable/>
        }
      </div>
      <div className="drawer-content flex items-center gap-3 font-inter font-semibold text-submessage text-sm cursor-pointer">
        <span className="border-[1px] rounded-md border-submessage/50 px-2 py-1">
          Previous
        </span>
        <ul className="flex gap-1">
          <li className="rounded-sm px-2 py-1 border-[1px] border-submessage/50 bg-primary text-black">
            1
          </li>
          <li className="rounded-sm px-2 py-1 border-[1px] border-submessage/50">
            2
          </li>
          <li className="rounded-sm px-2 py-1 border-[1px] border-submessage/50">
            3
          </li>
          <li className="rounded-sm px-2 py-1 border-[1px] border-submessage/50">
            4
          </li>
        </ul>
        <span className="border-[1px] rounded-md border-submessage/50 px-2 py-1">
          Next
        </span>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-[35%] min-h-full bg-base-100 text-base-content">
        {
          !toggle &&
          <AddAccessories/>
        }
        {
          toggle &&
          <AddGame/>
        }
        </div>
      </div>
    </div>
  );
}
