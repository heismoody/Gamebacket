import { useLocation } from "react-router";
import SubmitBtn from "../../../components/buttons/submitBtn";
import { CartItem } from "../../../store/store";

export default function ShoppingList() {
  const { state } = useLocation();
  console.log(state);
  return (
    <>
      <table className="table-auto w-[95%] mobile:w-full">
        <thead>
          <tr className="introheading-2 text-base mobile:text-[10px]">
            <th className="pt-5 mobile:hidden">Icon</th>
            <th className="pt-5">Product</th>
            <th className="pt-5">Price (Tsh)</th>
            <th className="pt-5">Quantity</th>
            <th className="pt-5">Subtotal (Tsh)</th>
            <th className="pt-5">Action</th>
          </tr>
        </thead>
        <tbody className="font-inter font-medium text-sm mobile:text-[8px] text-submessage text-center">
          {
            state.length === 0 &&
            <tr>
              <td className="py-6 text-submessage text-lg font-semibold" colSpan={6}>Sorry!! No Item In The Cart Or Shopping Item Selected</td>
            </tr>
          }
          {state.map((item: CartItem) => {
            return [
              <tr className="border-b border-submessage/30">
                <td className="flex justify-center items-center py-5 mobile:hidden">
                  <div className="w-[50px] h-[50px]">
                    <img src={item.image} className="imgrender" alt="" />
                  </div>
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <input
                    type="number"
                    className="bg-transparent w-10 mobile:w-8 outline-none text-white border border-submessage rounded pl-1"
                    placeholder="1"
                    min={1}
                    max={10}
                  />
                </td>
                <td>50,000</td>
                <td className="mobile:flex mobile:justify-center">
                  <span className="border border-submessage/50 px-2 cursor-pointer rounded py-1 text-red-500 mobile:hidden">
                    Delete
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-red-500 h-4 w-4 hidden mobile:block"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </td>
              </tr>,
            ];
          })}
        </tbody>
      </table>
      <div className="pl-7 py-4 w-full">
        <SubmitBtn />
      </div>
    </>
  );
}
