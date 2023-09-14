export default function Footer() {
  return (
    <footer className="relative flex justify-center bg-[#15111E] text-white items-center font-oxanium font-bold h-[80vh] bg-[url('footer-bg.jpg')] bg-cover">
      <div className="w-full h-full bg-[#10111D]/90 top-0 absolute"/>
      <div className="w-[85%] h-full flex py-20 relative gap-10">
        <div className="flex flex-col">
          <div className="flex gap-5 pb-8">
            <div>
              <label>About Gameplay</label>
              <ul className="footerlist">
                <li>About us</li>
                <li>Contact us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <label>Buy</label>
              <ul className="footerlist">
                <li>How to buy</li>
                <li>Game List</li>
                <li>Collections</li>
              </ul>
            </div>
            <div>
              <label>Help</label>
              <ul className="footerlist">
                <li>FAQ</li>
                <li>How to active game</li>
                <li>Create a ticket</li>
              </ul>
            </div>
            <div>
              <label>Community</label>
              <ul className="footerlist">
                <li>Blog</li>
                <li>Giveaway</li>
                <li>Become affilate</li>
              </ul>
            </div>
          </div>
          <div className="opacity-70 font-inter font-normal border-y-[1px] border-white/20 py-7">
            <ul className="flex items-between gap-5">
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Our thanks</li>
              <li>Cookie declaration</li>
            </ul>
          </div>
          <div className="flex gap-2 py-10">
            <div className="p-2 rounded-sm bg-blue-900 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </div>
            <div className="p-2 rounded-sm bg-blue-900 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </div>
            <div className="p-2 rounded-sm bg-blue-900 w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="white"
                className="w-5 h-5"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>
          </div>
          <div>
            <span className="text-xs">© 2023 GameBacket. Implemented By Heismoody</span>
          </div>
        </div>
        <div className="flex flex-col h-fit bg-[url('bg-newsletter.png')] py-10 px-10">
          <span className="font-inter font-black text-[#d22779] text-[13px] tracking-[5px]">
            NEWSLETTER
          </span>
          <span className="text-5xl py-4">Get up to $100 off*</span>
          <span className="text-white/60 text-xl font-inter font-normal">
            Your first order when you sign up for emails
          </span>
          <span className="text-2xl pb-4 pt-7">Sign up now!</span>
          <div className="flex gap-3">
            <input
              type="email"
              name=""
              placeholder="Email address"
              id=""
              className="py-2 text-black/80 outline-none pl-3 pr-28"
              required
            />
            <button className="navbtn bg-[#FFC01D] text-black py-2 px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
