export default function Footer() {
  return (
    <footer className="flex justify-center bg-[#15111E] text-white items-center font-oxanium">
      <div className="w-[80%] flex flex-col justify-center">
        <div className="flex gap-5">
          <div>
            <strong>About Gameplay</strong>
            <ul className="footerlist">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <strong>Buy</strong>
            <ul className="footerlist">
              <li>How to buy</li>
              <li>Game List</li>
              <li>Collections</li>
            </ul>
          </div>
          <div>
            <strong>Help</strong>
            <ul className="footerlist">
              <li>FAQ</li>
              <li>How to active game</li>
              <li>Create a ticket</li>
            </ul>
          </div>
          <div>
            <strong>Community</strong>
            <ul className="footerlist">
              <li>Blog</li>
              <li>Giveaway</li>
              <li>Become affilate</li>
            </ul>
          </div>
        </div>
        <div className="opacity-70 font-inter border-y-[1px] border-white/20">
          <ul className="flex items-between gap-5">
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Our thanks</li>
            <li>Cookie declaration</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
