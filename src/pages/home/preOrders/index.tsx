import GameCard from "../../../components/gameCard"

export const PreOrders = () => {
  return (
    <div className="bg-black/60">
      <div className="w-full bg-gradient-to-t from-slate-900">
          <div className="flex flex-row justify-between px-10 w-full py-3">
            <span className="text-2xl text-white font-semibold">Preorders</span>
            <button className="viewallbtn">View all</button>
          </div>
          <div className="px-10 pb-5 flex justify-between w-full ">
            <GameCard
              title="Call Of Duty"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              price={30000}
              category="PS4"
              image="https://img.freepik.com/free-photo/modern-special-forces-soldier-camouflage-uniform-looking-sideways-studio-photo-against-dark-textured-wall_613910-20426.jpg?w=740&t=st=1693412912~exp=1693413512~hmac=8c8b8eeab90149f646867c7bb7b44c7993d672fd62ab82a688eed61835a97bb2"
            />
            <GameCard
              title="Fifa 23"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              price={80000}
              category="PS4"
              image="https://i.pinimg.com/564x/35/04/98/3504983aa150daf92d780683913c1c68.jpg"
            />
            <GameCard
              title="Apex Legends"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              price={100000}
              category="PS4"
              image="https://i.pinimg.com/originals/84/58/24/8458240f09c66fba4aa98e26313993be.jpg"
            />
            <GameCard
              title="Tomb Raider"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              price={50000}
              category="PS4"
              image="https://img.freepik.com/premium-photo/battletested-grace-compelling-snapshot-realistic-soldier-woman_990746-305.jpg?w=740"
            />
            <GameCard
              title="Cyberpunk"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
              price={80000}
              category="PS4"
              image="https://i.pinimg.com/564x/51/45/d0/5145d0a6a35fb97c8ccc7ae5c450eda9.jpg"
            />
          </div>
      </div>
    </div>
  )
}
