import TopProductCard from "./topProductCard";

export default function TopProduct() {
  return (
    <div className="w-full bg-background rounded-lg px-5 py-3">
      <div className="flex justify-between">
        <span className="introheading-2 text-lg">Top Selling Product</span>
        <span className="descr-1 flex-row gap-2 items-center text-sm">
          see all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="w-3 h-3 fill-submessage"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </span>
      </div>
      <div>
        <ul className="flex flex-col gap-4 py-4">
          <li>
            <TopProductCard no={1} title="Fifa 23" price="40,000 Tsh" imageurl="product-fife.jpg" />
          </li>
          <li>
            <TopProductCard no={2} title="Call of Duty" price="50,000 Tsh" imageurl="product-warlord.jpg" />
          </li>
          <li>
            <TopProductCard no={3} title="Need For Speed Payback" price="60,000 Tsh" imageurl="product-racing.jpg" />
          </li>
        </ul>
      </div>
    </div>
  );
}
