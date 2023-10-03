import { useState } from "react";
import { Link } from "react-router-dom";

export default function OptionComponent() {
  const [showOption, setShowOption] = useState(false);
  return (
    <>
      <span className="flex items-center gap-2 cursor-pointer" onClick={() => {setShowOption(!showOption)}}>
        <span>Options</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className={`fill-white ${showOption ? 'rotate-180' :''}`}
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </span>
      </span>
      {showOption && (
        <div
          id="dropdown"
          className="absolute bg-black divide-y mt-5 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          
        >
          <ul className="py-2 text-sm text-white">
            <Link to="comingsoon">
              <li className="subnavigation">Track Order</li>
            </Link>
            <Link to="comingsoon">
              <li className="subnavigation">Tournaments</li>
            </Link>
            <Link to="/ourteam">
              <li className="subnavigation">Our Team</li>
            </Link>
            <Link to="/faq">
              <li className="subnavigation">FAQ</li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}
