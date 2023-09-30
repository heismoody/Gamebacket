import { Link } from "react-router-dom";
import OptionComponent from "./navigationComponents/optioncomponent";
import CartIcon from "./navigationComponents/cartIcon";

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
            <Link to="/accessories">
              <li>Accessories</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <li>
              <OptionComponent/>
            </li>
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
          <CartIcon/>
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
