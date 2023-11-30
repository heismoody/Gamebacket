import UsersTable from "./components/usersTable";

export default function Users() {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div className="w-[95%] pl-3 pt-4 cursor-pointer flex justify-end items-center">
        <div className="flex gap-3 w-[30%]">
          <div className="w-full introheading-2 text-sm bg-background rounded-lg flex items-center">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search for a user"
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
        </div>
      </div>
      <div className="flex justify-between w-[95%]">
        <UsersTable/>
      </div>
      <div className="flex items-center gap-3 font-inter font-semibold text-submessage text-sm cursor-pointer">
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
    </div>
  );
}
