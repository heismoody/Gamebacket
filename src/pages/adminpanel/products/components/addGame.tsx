import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddGame() {
  const { register } = useForm();
  const [discount, setDiscount] = useState(true);
  return (
    <div className="border-[1px] border-black/30 rounded introheading-2 text-black text-sm p-4">
      <div className="border-[1px] border-black/30 rounded-lg flex items-center mb-5">
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search Games"
          className="bg-transparent w-[90%] outline-none p-2"
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
      <form>
        <label htmlFor="gamename" className="text-black/80 pt-0">
          Game Title
        </label>
        <input
          {...register("gameName")}
          type="text"
          name="gamename"
          placeholder="Call of Duty 4"
          className="productinput"
        />
        <label htmlFor="platforms" className="text-black/80">
          Platforms
        </label>
        <input
          {...register("platforms")}
          type="text"
          name="platforms"
          placeholder="windows,android,playstation"
          className="productinput"
        />
        <label className="text-black/80 rounded border-[1px] border-black/40 p-3 mt-5">
          <div className="flex gap-3">
            <div>
              <label htmlFor="actualprice" className="text-black/80 pt-0">
                Actual Price
              </label>
              <input
                {...register("platforms")}
                type="number"
                name="actualprice"
                placeholder="40000"
                className="productinput"
              />
            </div>
            <div>
              <label
                htmlFor="discountprice"
                className="text-black/80 pt-0 flex justify-between"
              >
                <span>Discount Price</span>
                <input
                  type="checkbox"
                  name="altno"
                  className="outline-none"
                  id=""
                  onClick={() => {
                    setDiscount(!discount);
                  }}
                />
              </label>
              <input
                {...register("platforms")}
                type="number"
                name="discountprice"
                placeholder="20000"
                disabled={discount}
                className="productinput"
              />
            </div>
          </div>
        </label>
        <label className="text-black/80 rounded border-[1px] border-black/40 p-3 mt-5">
          <div className="flex gap-3">
            <div>
              <label htmlFor="actualprice" className="text-black/80 pt-0">
                Playtime (HRS)
              </label>
              <input
                {...register("platforms")}
                type="number"
                name="actualprice"
                placeholder="40"
                className="productinput"
              />
            </div>
            <div>
              <label
                htmlFor="discountprice"
                className="text-black/80 pt-0 flex justify-between"
              >
                Age (Yrs)
              </label>
              <input
                {...register("platforms")}
                type="number"
                name="discountprice"
                placeholder="20"
                className="productinput"
              />
            </div>
            <div>
              <label
                htmlFor="discountprice"
                className="text-black/80 pt-0 flex justify-between"
              >
                Release Date
              </label>
              <input
                {...register("platforms")}
                type="date"
                name="discountprice"
                placeholder="20000"
                className="productinput"
              />
            </div>
          </div>
        </label>
        <label className="text-black/80">Add Images</label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center py-5">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <div className="flex flex-row items-center py-5 gap-3">
          <span className="w-[70px] h-[70px] rounded overflow-hidden relative group">
            <img src="../product-basketb.jpg" alt="" className="imgrender" />
            <span className="absolute top-0 w-full h-full bg-red-900/80 flex justify-center items-center invisible group-hover:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-red-400 w-6 h-6 cursor-pointer"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </span>
          </span>
          <span className="w-[70px] h-[70px] rounded overflow-hidden relative group">
            <img src="../product-basketb.jpg" alt="" className="imgrender" />
            <span className="absolute top-0 w-full h-full bg-red-900/80 flex justify-center items-center invisible group-hover:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-red-400 w-6 h-6 cursor-pointer"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </span>
          </span>
          <span className="w-[70px] h-[70px] rounded overflow-hidden relative group">
            <img src="../product-basketb.jpg" alt="" className="imgrender" />
            <span className="absolute top-0 w-full h-full bg-red-900/80 flex justify-center items-center invisible group-hover:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-red-400 w-6 h-6 cursor-pointer"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </span>
          </span>
          <span className="w-[70px] h-[70px] rounded overflow-hidden relative group">
            <img src="../product-basketb.jpg" alt="" className="imgrender" />
            <span className="absolute top-0 w-full h-full bg-red-900/80 flex justify-center items-center invisible group-hover:visible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className="fill-red-400 w-6 h-6 cursor-pointer"
              >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
              </svg>
            </span>
          </span>
        </div>
        <label htmlFor="genre" className="text-black/80">
          Genre
        </label>
        <input
          {...register("platforms")}
          type="text"
          name="genre"
          placeholder="Action, Shooter"
          className="productinput"
        />
        <label htmlFor="website" className="text-black/80">
          Website
        </label>
        <input
          {...register("platforms")}
          type="text"
          name="website"
          placeholder="https://www.callofduty.com/modernwarfare2"
          className="productinput"
        />
        <label htmlFor="tags" className="text-black/80">
          Tags
        </label>
        <input
          {...register("platforms")}
          type="text"
          name="tags"
          placeholder="Singleplayer, Steam Achievements, Multiplayer"
          className="productinput"
        />
        <label htmlFor="prodescription" className="text-black/80">
          About
        </label>
        <textarea
          name="prodescription"
          id=""
          className="productinput h-[20vh] resize-none"
          placeholder="Enter Accessory Description"
        />
        <label htmlFor="prodescription" className="text-black/80">
          Requirements
        </label>
        <textarea
          name="prodescription"
          id=""
          className="productinput h-[20vh] resize-none"
          placeholder="Enter Accessory Description"
        />
        <div className="flex justify-end pt-2">
          <button type="submit" className="py-2 px-3 bg-primary rounded">
            Publish Game
          </button>
        </div>
      </form>
    </div>
  );
}
