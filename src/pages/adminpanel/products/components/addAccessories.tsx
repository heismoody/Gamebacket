export default function AddAccessories() {
  return (
    <div className="border-[1px] border-black/30 rounded introheading-2 text-black text-sm p-4">
      <form action="" method="post">
        <label className="text-black/80 pt-0">Add Images</label>
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
        <label htmlFor="proname" className="text-black/80 pt-0">
          Product Name
        </label>
        <input
          type="text"
          name="proname"
          placeholder="Ps4 Slim Pro"
          className="productinput"
        />
        <label htmlFor="category" className="text-black/80">
          Category
        </label>
        <select name="category" id="" className="productinput">
          <option value="1">Action</option>
          <option value="2">Adventure</option>
          <option value="3">Arcade</option>
          <option value="4">RPG</option>
          <option value="5">Fighting</option>
          <option value="6">Shooter</option>
        </select>
        <label htmlFor="proname" className="text-black/80">
          Price
        </label>
        <input
          type="number"
          name="proname"
          placeholder="40000"
          className="productinput"
        />
        <label htmlFor="prodescription" className="text-black/80">
          Description
        </label>
        <textarea
          name="prodescription"
          id=""
          className="productinput h-[20vh] resize-none"
          placeholder="Enter Accessory Description"
        />
        <div className="flex justify-end pt-2">
          <button type="submit" className="py-2 px-3 bg-primary rounded">
            Publish Product
          </button>
        </div>
      </form>
    </div>
  );
}
