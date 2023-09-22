import AddToCartBtn from "../../../components/buttons/addToCartBtn";

export default function MainDetails({ ...props }: IgameDetails) {
  return (
    <div className="flex justify-between w-[1161px] pt-16">
      <div className="w-[30%] h-[400px] relative">
        <img src="callofduty.jpg" alt="" className="imgrender" />
      </div>
      <div className="flex flex-col gap-y-5 w-[65%] relative">
        <div className="flex justify-between">
          <div className="flex gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
              className="fill-primary w-5 h-5"
            >
              <path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 576 512"
              className="fill-primary w-5 h-5"
            >
              <path d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9.6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="fill-primary w-5 h-5"
            >
              <path d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7.1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z" />
            </svg>
          </div>
          <span className="introheading-2 text-sm text-submessage">
            AVERAGE PLAYTIME: 10 HOURS
          </span>
        </div>
        <span className="introheading-2">Call of Warlords</span>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2">
            <span
              className={`descr-1 text-base ${
                props.promoprice
                  ? "line-through text-sm"
                  : "text-primary font-medium underline text-xl"
              }`}
            >
              {props.actualprice}
            </span>
            {props.promoprice && (
              <span className="descr-1 text-xl font-medium underline text-primary">
                {props.promoprice}
              </span>
            )}
          </div>
          <div>
            <AddToCartBtn/>
          </div>
        </div>
        <div>
          <span className="introheading-2 text-3xl">About</span>
          <p className="descr-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            harum officia vel assumenda aliquam ipsam dignissimos sit quas atque
            eaque, ipsum nesciunt debitis delectus perferendis consequatur?
            Nesciunt ex quibusdam magnam ut, praesentium quae, tempore cumque
            aspernatur asperiores consectetur provident nemo, quidem consequatur
            illo dolor earum nostrum fugiat neque mollitia! Earum.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-2">
            <span className="flex items-center gap-x-2">
              <span className="introheading-2 text-sm">Release date:</span>
              <span className="descr-1 text-[13px]">Oct 27, 2022</span>
            </span>
            <span className="flex items-center gap-x-2">
              <span className="introheading-2 text-sm">Genre:</span>
              <span className="descr-1 text-[13px]">Action, Shooter</span>
            </span>
            <span className="flex items-center gap-x-2">
              <span className="introheading-2 text-sm">Age rating:</span>
              <span className="descr-1 text-[13px]">Not rated</span>
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="flex items-center gap-x-2">
              <span className="introheading-2 text-sm">Website:</span>
              <span className="descr-1 text-[13px]">
                https://www.callofduty.com/modernwarfare2
              </span>
            </span>
            <span className="flex items-center gap-x-2">
              <span className="introheading-2 text-sm">Tags:</span>
              <span className="descr-1 text-[13px]">
                Singleplayer, Steam Achievements, Multiplayer
              </span>
            </span>
            <span className="flex items-center gap-x-2">
              <span className="introheading-2 text-sm">Age rating:</span>
              <span className="descr-1 text-[13px]">Not rated</span>
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="flex items-center gap-x-2">
              <span className="introheading-2 text-sm">Rating:</span>
              <span className="flex items-center gap-x-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-primary w-4 h-4"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-primary w-4 h-4"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-primary w-4 h-4"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-primary w-4 h-4"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  className="fill-primary w-4 h-4"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </span>
            </span>
            <span className="flex flex-col border border-submessage rounded px-3">
              <span className="introheading-2 text-xs text-submessage">
                Save To
              </span>
              <span className="descr-1  text-white flex-row items-center justify-between">
                <span className="text-xl font-medium">Collection</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    className="fill-primary w-5 h-5"
                  >
                    <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v96V384c0 35.3 28.7 64 64 64H256V384H64V160H256V96H64V32zM288 192c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V192zm0 288c0 17.7 14.3 32 32 32H544c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H445.3c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32V480z" />
                  </svg>
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
