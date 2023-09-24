import SubmitBtn from "../../../components/buttons/submitBtn";

export default function ShoppingList() {
  return (
    <>
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
          <tr className="border-b border-submessage/30">
            <td className="flex justify-center items-center py-5">
              <div className="w-[50px] h-[50px]">
                <img src="product-flights.jpg" className="imgrender" alt="" />
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
              <span className="border border-submessage/50 px-2 rounded py-1 text-red-500">
                Delete
              </span>
            </td>
          </tr>
          <tr className="border-b border-submessage/30">
            <td className="flex justify-center items-center py-5">
              <div className="w-[50px] h-[50px]">
                <img src="product-flights.jpg" className="imgrender" alt="" />
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
              <span className="border border-submessage/50 px-2 rounded py-1 text-red-500">
                Delete
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pl-7 py-4 w-full">
        <SubmitBtn />
      </div>
    </>
  );
}
