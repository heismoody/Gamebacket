import { useState } from "react";
import { Link } from "react-router-dom";

export default function GameSearch() {
  const [receivedData, setReceivedData] = useState(null);

  const searchData = (value: string) => {
    const fetchSearchData = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=c2c28f3e51fa493fb92eea864d55e573&search=${value}`
      );
      const searchData = await response.json();

      console.log(value.length);
      setReceivedData(searchData.results);
      return searchData.results;
    };

    fetchSearchData();
  };

  const handleSearch = (value: string) => {
    searchData(value);
    if (value.length == 0) {
      setReceivedData(null);
    }
  };

  return (
    <div className="flex flex-col relative">
      <div className="flex items-center justify-between gap-x-2 border px-2 rounded-md mb-6 border-submessage mobile:w-full">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => handleSearch(e.target.value)}
          className="py-1 bg-transparent border-none px-2 text-white outline-none placeholder:placeholdersearch"
          placeholder="Search Desired Game"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className="w-5 h-5 stroke-submessage"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      {receivedData != null && (
        <ul className="bg-black z-50 w-full py-3 px-3 absolute top-10 rounded-md">
          
                <Link to='/adminpanel'>
                  <li className="introheading-2 border-b-[1px] border-submessage py-2 text-sm hover:cursor-pointer hover:text-primary">
                    Call of Duty
                  </li>
                </Link>
        </ul>
      )}
    </div>
  );
}
