import CardComponent from "./releaseCardComponent/cardComponent";

const NewRelease = () => {
  return (
    <div className="w-full h-[60vh] flex items-center relative">
      <div className="w-full">
        <div className="flex flex-row justify-between px-10 w-full">
          <span className="text-2xl text-white font-semibold">
            New releases
          </span>
          <button className="viewallbtn">View all</button>
        </div>
        <div className="px-10 pb-5 flex justify-between items-center w-full h-[250px]">
          <CardComponent
            title="Watch Dogs"
            image="https://assets.vg247.com/current//2014/05/watch_dogs.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={40000}
          />
          <CardComponent
            title="Grand Theft Auto 5"
            image="https://c4.wallpaperflare.com/wallpaper/262/188/865/new-grand-theft-auto-v-grand-theft-auto-5-game-wallpaper-preview.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={80000}
          />
          <CardComponent
            title="Assassin Creed III"
            image="https://c4.wallpaperflare.com/wallpaper/486/661/140/assassin-s-creed-3-connor-free-running-wallpaper-preview.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={60000}
          />
          <CardComponent
            title="Need For Speed Payback"
            image="https://c4.wallpaperflare.com/wallpaper/834/182/492/need-for-speed-need-for-speed-payback-car-ford-wallpaper-preview.jpg"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            price={100000}
          />
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
