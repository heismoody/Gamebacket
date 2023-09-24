import { Link } from "react-router-dom";
import SubmitBtn from "../../../components/buttons/submitBtn";
import { useState } from "react";

export default function CartTotals() {
    const [slideup, setSlideup] = useState(false)
  return (
    <>
      <span className="introheading-2 text-2xl pb-4">Cart Totals</span>
      <div className="flex justify-between items-center introheading-2 text-sm">
        <span className="">Subtotals</span>
        <span className="text-base">50,000 Tsh</span>
      </div>
      <div className="flex justify-between introheading-2 text-sm">
        <span>Delivery</span>
        <span>Free Delivery</span>
      </div>
      <span className="descr-1 flex-row text-sm">
        Delivery to <strong>Mwenge</strong>
      </span>
      <div
        className="flex justify-between items-center"
        onClick={() => setSlideup(!slideup)}
      >
        <span className="introheading-2 text-base cursor-pointer">
          Change Address
        </span>
        {slideup && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="fill-primary w-6 h-6"
          >
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
          </svg>
        )}
        {!slideup && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="fill-primary w-6 h-6"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        )}
      </div>
      {slideup && (
        <div className="flex flex-col gap-3 py-3">
          <input
            type="text"
            name=""
            id=""
            className="w-full py-2 px-4 outline-none text-sm rounded"
            placeholder="Tanzania"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-full py-2 px-4 outline-none text-sm rounded"
            placeholder="Dar es Salaam"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-full py-2 px-4 outline-none text-sm rounded"
            placeholder="Sayansi - Makumbusho"
          />
          <SubmitBtn />
        </div>
      )}
      <div className="flex justify-between items-center introheading-2 text-base border-t border-submessage/30 pt-4">
        <span className="text-xl">Total</span>
        <span>50,000 Tsh</span>
      </div>
      <Link to="/shoppingcart/completeorder">
        <button className="introheading-2 py-2 px-4 text-base bg-primary w-full text-black rounded">
          Proceed to Checkout
        </button>
      </Link>
    </>
  );
}
