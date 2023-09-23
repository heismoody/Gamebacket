import { useState } from "react";
import SubmitBtn from "../../components/buttons/submitBtn";
import SectionHeader from "../../components/sectionHeader";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
    const [slideup, setSlideup] = useState(false)
  return (
    <section className="flex justify-center items-center pt-28 bg-background">
      <div className="w-[1161px]">
        <SectionHeader name="CART" title="Shopping Cart" description="" />
        <div className="flex justify-between py-10">
          <div className="bg-black w-[63%] h-fit flex flex-col justify-center items-center">
            <table className="table-auto w-[95%]">
              <thead>
                <tr className="introheading-2 text-base">
                  <th className="pt-5">Icon</th>
                  <th className="pt-5">Product</th>
                  <th className="pt-5">Price (Tsh)</th>
                  <th className="pt-5">Quantity</th>
                  <th className="pt-5">Subtotal (Tsh)</th>
                  <th className="pt-5">Action</th>
                </tr>
              </thead>
              <tbody className="font-inter font-medium text-sm text-submessage text-center">
                <tr className="py-5">
                  <td className="flex justify-center items-center py-5">
                    <div className="w-[50px] h-[50px]">
                      <img
                        src="product-flights.jpg"
                        className="imgrender"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>Flight Simulation 10</td>
                  <td>50,000</td>
                  <td>
                    <input
                      type="number"
                      className="bg-transparent w-10 outline-none text-white border border-submessage rounded pl-1"
                      placeholder="1"
                      min={1}
                      max={10}
                    />
                  </td>
                  <td>50,000</td>
                  <td>
                    <span className="border border-submessage px-2 rounded py-1 text-red-500">
                      Delete
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-center items-center py-5">
                    <div className="w-[50px] h-[50px]">
                      <img
                        src="product-flights.jpg"
                        className="imgrender"
                        alt=""
                      />
                    </div>
                  </td>
                  <td>Flight Simulation 10</td>
                  <td>50,000</td>
                  <td>
                    <input
                      type="number"
                      className="bg-transparent w-10 outline-none text-white border border-submessage rounded pl-1"
                      placeholder="1"
                      min={1}
                      max={10}
                    />
                  </td>
                  <td>50,000</td>
                  <td>
                    <span className="border border-submessage px-2 rounded py-1 text-red-500">
                      Delete
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="pl-7 border-t border-submessage/30 py-4 w-full">
                <SubmitBtn />
            </div>
          </div>
          <div className="w-[35%] bg-black flex flex-col gap-y-3 px-8 py-5">
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
            <div className="flex justify-between items-center" onClick={()=>setSlideup(!slideup)}>
              <span className="introheading-2 text-base cursor-pointer">
                Change Address
              </span>
              {
                slideup &&
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className="fill-primary w-6 h-6"
                >
                    <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
                </svg>
              }
              { !slideup &&
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                className="fill-primary w-6 h-6"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
              }
            </div>
            {
                slideup &&
                <div className="flex flex-col gap-3 py-3">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-full py-2 px-4 outline-none text-sm"
                        placeholder="Tanzania"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-full py-2 px-4 outline-none text-sm"
                        placeholder="Dar es Salaam"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-full py-2 px-4 outline-none text-sm"
                        placeholder="Sayansi - Makumbusho"
                    />
                    <SubmitBtn />
                </div>
            }
            <div className="flex justify-between items-center introheading-2 text-base border-t border-submessage/30 pt-4">
              <span className="text-xl">Total</span>
              <span>50,000 Tsh</span>
            </div>
            <Link to='/shoppingcart/completeorder'>
              <button className="introheading-2 py-2 px-4 text-base bg-primary w-full text-black rounded">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
