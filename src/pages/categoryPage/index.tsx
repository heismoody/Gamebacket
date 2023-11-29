import getGames from "../../api/requests";
import AddToCartCard from "../home/homeComponents/addToCartCard";
import PageHeader from "../pageHeader";

export default function CategoryPage() {
  const {data} = getGames()
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="https://c4.wallpaperflare.com/wallpaper/741/914/473/machine-race-the-game-nfs-need-for-speed-heat-hd-wallpaper-preview.jpg"
        title="Racing"
        description="Fuel your adrenaline rush with the hottest racing games on the market!
        Experience the thrill of the race with stunning visuals, realistic physics, and pulse-pounding action. From high-octane supercars to off-road rally machines, we have the perfect racing game for everyone. Whether you're a seasoned pro or a casual gamer, our racing games will keep you coming back for more. So get ready to fire up your engines and hit the track!"
      />
      <div className="flex flex-col w-[1161px] mobile:w-[90%] gap-y-10 pt-8">
        <div className="grid grid-cols-6 mobile:grid-cols-2  gap-x-[26px] gap-y-8 ">
          {
            data.result.map((result: {id:string, name: string}) => {
              return [
                <AddToCartCard key={result.id}
                imageurl="product-flights.jpg"
                name={result.name}
                actualprice={40000}
                />
              ]
            })
          }
          
        </div>
      </div>
    </section>
  );
}
