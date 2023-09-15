import CardDetail from "../homeComponents/cardDetail";

export default function GetNow() {
  return (
    <section className="w-full flex justify-center">
      <div className="w-[85%] flex gap-10">
        <div className="relative">
          <img src="shape-ellipse.png" alt="" />
          <div className="bg-black p-10 w-[520px] absolute top-24 left-14">
            <CardDetail
              name="CATALOG"
              title="Display Our Prices On Your Favorite Websites!"
              description="Works on Steam, Twitch, Amazon, YouTube and more!"
              btnName="Get The Gaming Now"
              reused={true}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div>
            <img src="vr-gaming.jpg" alt="" />
          </div>
          <div>
            <img src="gaming-console.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
