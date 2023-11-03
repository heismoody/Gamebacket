export default function OrderList() {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div className="w-[95%] px-3 pt-6 cursor-pointer">
        <ul className="descr-1 flex-row items-center gap-8 text-sm font-semibold">
          <li className="text-primary border-b-2 pb-2 border-primary">
            All Orders
          </li>
          <li className="pb-2">Completed</li>
          <li className="pb-2">Pending</li>
          <li className="pb-2">Canceled</li>
        </ul>
      </div>
      <div className="flex justify-between w-[95%]">
        <table className="table-auto w-full text-left font-inter font-normal text-submessage">
          <thead>
            <tr className="text-white text-base border-b-[1px] border-submessage/20">
              <th className="py-2">No</th>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="even:bg-background">
              <td className="pl-2">1</td>
              <td>23321354</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px]">
                    <img
                      src="../product-fife.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Fifa 23</span>
                </div>
              </td>
              <td>Makumbusho Dar-es-Salaam</td>
              <td>03/11/2023</td>
              <td>40,000 Tsh</td>
              <td>
                <span className="bg-green-900 text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">2</td>
              <td>23321354</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px]">
                    <img
                      src="../product-racing.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>NFS Payback</span>
                </div>
              </td>
              <td>Mawasiliano Dar-es-Salaam</td>
              <td>03/11/2023</td>
              <td>70,000 Tsh</td>
              <td>
                <span className="bg-orange-700 text-orange-300 text-xs font-semibold px-4 py-1 rounded-full">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">3</td>
              <td>23321354</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px]">
                    <img
                      src="../product-flights.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Airplane Simulation</span>
                </div>
              </td>
              <td>Kimara, Temboni Dar-es-Salaam</td>
              <td>03/11/2023</td>
              <td>80,000 Tsh</td>
              <td>
                <span className="bg-green-900 text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
                  Completed
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">4</td>
              <td>23321354</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px]">
                    <img
                      src="../product-romans.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Splinter Cell</span>
                </div>
              </td>
              <td>Banana Dar-es-Salaam</td>
              <td>21/09/2023</td>
              <td>50,000 Tsh</td>
              <td>
                <span className="bg-red-900 text-red-300 text-xs font-semibold px-3.5 py-1 rounded-full">
                  Canceled
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">5</td>
              <td>23321354</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px]">
                    <img
                      src="../product-warlord.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Call of Duty 4</span>
                </div>
              </td>
              <td>Changanyikeni Dar-es-Salaam</td>
              <td>23/09/2023</td>
              <td>50,000 Tsh</td>
              <td>
                <span className="bg-orange-700 text-orange-300 text-xs font-semibold px-4 py-1 rounded-full">
                  Pending
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">6</td>
              <td>23321354</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px]">
                    <img
                      src="../product-vikings.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Vikings 3</span>
                </div>
              </td>
              <td>Mwenge, Mataa Dar-es-Salaam</td>
              <td>26/08/2023</td>
              <td>70,000 Tsh</td>
              <td>
                <span className="bg-green-900 text-green-300 text-xs font-semibold px-2 py-1 rounded-full">
                  Completed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
