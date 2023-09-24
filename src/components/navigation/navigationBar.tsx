import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex justify-center text-white font-oxanium w-full h-fit border-b-[1px] border-submessage/30">
      <div className="w-[90%] flex justify-between items-center py-3 relative">
        <div className="w-[130px]">
          <img src="/download.png" className="imgrender" alt="" />
        </div>
        <div>
          <ul className="flex items-center font-bold text-base gap-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <li className="flex items-center gap-1">
              <span>Shop</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className="fill-white"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </span>
            </li>
            <Link to="/news">
              <li>News</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="absolute -top-1 -right-2 rounded-full flex justify-center items-center text-sm font-bold text-black bg-primary w-5 h-5">
              <span>10</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="/login">
              <button className="navbtn border-[1px] border-white/40">
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="navbtn bg-primary text-black border-[1px] border-primary">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
