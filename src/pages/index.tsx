import GameCard from "../components/gameCard"
import NewRelease from "./newRelease/newRelease"

const Homepage = () => {
  return (
    <section className="flex flex-col items-start justify-center bg-slate-500">
        <div className="w-[45%] px-10">
            <strong className="text-5xl">
                WATCH DOGS
            </strong>
            <p className="text-base py-5">
                Welcome to Watch Dogs, where technology is your ultimate weapon and the city of the future is yours to command. Immerse yourself in this thrilling action-adventure game that blurs the lines between reality and virtuality, offering a truly unparalleled gaming experience.
            </p>
            <div className="flex flex-row gap-4">
                <button className="buynowbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span>BUY GAME</span>
                </button>
                <button className="playtrailerbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    <span>SEE TRAILER</span>
                </button>
                <button className="favoritebtn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <span className="text-white/70">Favorite</span>
                </button>
            </div>
            <div className="flex flex-row gap-x-5 pb-2 pt-8">
                <button className="controlbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button className="controlbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
        <div className="flex flex-row justify-between px-10 w-full py-3">
            <span className="text-2xl text-white font-semibold">
                Preorders
            </span>  
            <button className="viewallbtn">
                View all
            </button>
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
                title="Tomb Rider"
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
        <div className="w-full">
            <NewRelease/>
        </div>
        

    </section>
  )
}

export default Homepage