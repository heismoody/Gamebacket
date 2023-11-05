export default function Users() {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <div className="w-[95%] pl-3 pt-6 cursor-pointer flex justify-end items-center">
        <div className="flex gap-3 w-[30%]">
          <div className="w-full introheading-2 text-sm bg-background rounded-lg flex items-center">
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search for a user"
              className="bg-transparent w-[90%] outline-none px-3 py-2.5"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-4 h-4 stroke-submessage cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[95%]">
        <table className="table-auto w-full text-left font-inter font-normal text-submessage">
          <thead>
            <tr className="text-white text-base border-b-[1px] border-submessage/20">
              <th className="py-2">No</th>
              <th>Profile</th>
              <th>E-mail</th>
              <th>Date</th>
              <th>orders</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="even:bg-background">
              <td className="pl-2">1</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img
                      src="../product-fife.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Moody Amin</span>
                </div>
              </td>
              <td>moodyamin531@gmail.com</td>
              <td>03/11/2023</td>
              <td>40</td>
              <td className="flex items-center gap-2 py-3">
                <span
                  className="rounded p-2 flex justify-center items-center bg-green-900 w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-green-400 w-3 h-3"
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </span>
                <span className="rounded p-2 flex justify-center items-center bg-red-900 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-red-400 w-3 h-3"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">2</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img
                      src="../product-racing.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>John Doe</span>
                </div>
              </td>
              <td>johndoe@gmail.com</td>
              <td>03/11/2023</td>
              <td>70</td>
              <td className="flex items-center gap-2 py-3">
                <span
                  className="rounded p-2 flex justify-center items-center bg-green-900 w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-green-400 w-3 h-3"
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </span>
                <span className="rounded p-2 flex justify-center items-center bg-red-900 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-red-400 w-3 h-3"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">3</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img
                      src="../product-flights.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Alias John</span>
                </div>
              </td>
              <td>aliasjohn@yahoo.com</td>
              <td>03/11/2023</td>
              <td>8</td>
              <td className="flex items-center gap-2 py-3">
                <span
                  className="rounded p-2 flex justify-center items-center bg-green-900 w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-green-400 w-3 h-3"
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </span>
                <span className="rounded p-2 flex justify-center items-center bg-red-900 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-red-400 w-3 h-3"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">4</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img
                      src="../product-romans.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Happieness Alex</span>
                </div>
              </td>
              <td>happinessalex@hotmail.com</td>
              <td>21/09/2023</td>
              <td>0</td>
              <td className="flex items-center gap-2 py-3">
                <span
                  className="rounded p-2 flex justify-center items-center bg-green-900 w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-green-400 w-3 h-3"
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </span>
                <span className="rounded p-2 flex justify-center items-center bg-red-900 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-red-400 w-3 h-3"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">5</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img
                      src="../product-warlord.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Kalinga John</span>
                </div>
              </td>
              <td>kalingajohn@gmail.com</td>
              <td>23/09/2023</td>
              <td>5</td>
              <td className="flex items-center gap-2 py-3">
                <span
                  className="rounded p-2 flex justify-center items-center bg-green-900 w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-green-400 w-3 h-3"
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </span>
                <span className="rounded p-2 flex justify-center items-center bg-red-900 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-red-400 w-3 h-3"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </span>
              </td>
            </tr>
            <tr className="even:bg-background">
              <td className="pl-2">6</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="w-[35px] h-[35px] rounded-full overflow-hidden">
                    <img
                      src="../product-vikings.jpg"
                      alt=""
                      className="imgrender"
                    />
                  </span>
                  <span>Danford James</span>
                </div>
              </td>
              <td>danford@gamepoint.com</td>
              <td>26/08/2023</td>
              <td>7</td>
              <td className="flex items-center gap-2 py-3">
                <span
                  className="rounded p-2 flex justify-center items-center bg-green-900 w-fit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                    className="fill-green-400 w-3 h-3"
                  >
                    <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                  </svg>
                </span>
                <span className="rounded p-2 flex justify-center items-center bg-red-900 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    className="fill-red-400 w-3 h-3"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
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
