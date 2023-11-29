import { Link, NavLink } from "react-router-dom";
import OptionComponent from "./navigationComponents/optioncomponent";
import CartIcon from "./navigationComponents/cartIcon";
import SlideCartCard from "./navigationComponents/slideCartCard";
import { useState } from "react";
import useCartStore from "../../store/store";

const NavigationBar = () => {
  const [slideCart, setSlideCart] = useState(false);
  const [mobileMenu, setCloseMobileMenu] = useState(false);
  const items = useCartStore((s) => s.items);
  return (
    <nav className="absolute inset-x-0 top-0 z-50 flex justify-center text-white font-oxanium w-full h-fit border-b-[1px] border-submessage/30">
      <div className="w-[90%] flex justify-between items-center py-3 relative">
        <div className="w-[130px]">
          <img src="/download.png" className="imgrender" alt="" />
        </div>
        <div className="mobile:hidden">
          <ul className="flex items-center font-bold text-base gap-5">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/accessories"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <li>Accessories</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              <li>Contact</li>
            </NavLink>
            <li>
              <OptionComponent />
            </li>
          </ul>
        </div>
        <div className="hidden mobile:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="fill-primary w-5 h-5"
            onClick={() => {
              setCloseMobileMenu(true);
            }}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <div className="flex items-center gap-4 mobile:hidden">
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
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setSlideCart(true);
            }}
          >
            <CartIcon />
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
      {mobileMenu && (
        <div className="w-full h-screen bg-black flex flex-col fixed">
          <div className="w-full flex justify-end items-center py-5 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              className="fill-submessage h-7 w-7 cursor-pointer"
              onClick={() => {
                setCloseMobileMenu(false);
              }}
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
          <div>
            <ul className="flex flex-col px-6 font-bold text-base gap-5">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/accessories"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>Accessories</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>About</li>
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>Contact</li>
              </NavLink>
              <li
                onClick={() => {
                  setSlideCart(true);
                  setCloseMobileMenu(false);
                }}
              >
                <div className="flex justify-between">
                  <span>Cart</span>
                  <span className="text-primary">10</span>
                </div>
              </li>
              <NavLink
                to="/comingsoon"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>Track Order</li>
              </NavLink>
              <NavLink
                to="/comingsoon"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>Tournaments</li>
              </NavLink>
              <NavLink
                to="/ourteam"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>Our Team</li>
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
                onClick={() => {
                  setCloseMobileMenu(false);
                }}
              >
                <li>FAQ</li>
              </NavLink>
            </ul>
            <div className="flex justify-center gap-3 h-full">
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
      )}
      {slideCart && (
        <div className="w-full h-screen bg-black/80 flex justify-end fixed">
          <div className="w-[30%] mobile:w-full bg-background h-full flex flex-col items-center">
            <div className="w-full flex justify-end items-center py-2 mobile:py-6 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                className="fill-submessage h-7 w-7 cursor-pointer"
                onClick={() => {
                  setSlideCart(false);
                }}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </div>
            {items.length === 0 && (
              <div className="w-[85%]">
                <p className="descr-1 text-base font-semibold text-center">
                  SORRY!! No products in the cart.
                </p>
              </div>
            )}
            <div className="w-[85%] flex flex-col">
              {items.map((item) => {
                return [
                  <SlideCartCard
                    image={item.image}
                    name={item.title}
                    price={item.price}
                  />,
                ];
              })}
              <div className="flex justify-center items-center py-5 border-b border-submessage">
                <span className="text-lg font-semibold">Subtotal: price</span>
              </div>
            </div>
            <div className="w-[85%] flex justify-around py-5">
              <Link to="/shoppingcart" state={items}>
                <button
                  className="bg-secondary introheading-2 text-lg  py-2 px-6 rounded-sm"
                  onClick={() => {
                    setSlideCart(false);
                  }}
                >
                  View Cart
                </button>
              </Link>
              <Link to="/shoppingcart/completeorder">
                <button
                  className="bg-primary introheading-2 text-lg text-black py-2 px-6 rounded-sm"
                  onClick={() => {
                    setSlideCart(false);
                  }}
                >
                  CheckOut
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
