const NavigationBar = () => {
  return (
    <>
    <div className="flex flex-col items-center bg-black/80 text-white">
      <div className="w-full flex justify-center border-b-[1px] border-white/40">
        <div className="flex items-center justify-between w-[90%] py-3">
          <div className="flex items-center gap-x-8">
            <div className="h-[50px]">
              <img className="w-full h-full" src="gamebacket.webp" alt="" />
            </div>
            <div>
              <form>
                <div className="flex">
                  <button
                    id="dropdown-button"
                    data-dropdown-toggle="dropdown"
                    className="flex-shrink-0 z-10 inline-flex items-center py-1.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg"
                    type="button"
                  >
                    All{" "}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Mockups
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Templates
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Design
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Logos
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 outline-none"
                      placeholder="Search games"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 py-1.5 px-4 text-sm font-medium h-full text-white bg-red-600 rounded-r-lg border border-red-600 outline-none"
                    >
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.pinimg.com/564x/03/d1/48/03d148b3453464c751b78f14e8561652.jpg"
                alt=""
              />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              <div className="pl-4">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  <span className="-top-2 left-4 absolute flex justify-center items-center  w-6 h-6 text-xs bg-red-500 border-2 border-white dark:border-gray-800 rounded-full">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%]">
        <ul className="list-none flex justify-between text-xs py-2 font-medium">
          <li>DIGITAL DOWNLOAD</li>
          <li>PRE ORDERS</li>
          <li>NEW RELEASES</li>
          <li>PS4</li>
          <li>XBOX ONE</li>
          <li>NENTENDO</li>
          <li>CONSOLE & ACCESSORIES</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default NavigationBar;
