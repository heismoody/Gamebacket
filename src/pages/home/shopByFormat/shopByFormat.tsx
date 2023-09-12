import GameCard from "../../../components/gameCard"

const ShopByFormat = () => {
  return (
    <div className="px-8 flex justify-between py-10">
        <div className="text-white/80 w-[40%]">
            <strong className="block text-3xl">Shop by format</strong>
            <ul className="flex py-2">
                <li>
                    <span></span>
                    <span>PlayStation Store</span>
                </li>
                <li>
                    <span></span>
                    <span>XBOX</span>
                </li>
            </ul>
            <strong className="w-[80%] block text-xl">
                Games are only available within the Tanzaninan borders
            </strong>
            <p className="py-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, numquam nihil dicta assumenda doloremque cupiditate soluta voluptatem.
            </p>
            <button className="viewallbtn text-white">
                View all
            </button>
        </div>
        <div className="flex gap-x-3">
            <GameCard
                title="Cyberpunk"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                price={80000}
                category="PS4"
                image="https://i.pinimg.com/564x/51/45/d0/5145d0a6a35fb97c8ccc7ae5c450eda9.jpg"
            />
            <GameCard
                title="Cyberpunk"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                price={80000}
                category="PS4"
                image="https://i.pinimg.com/564x/51/45/d0/5145d0a6a35fb97c8ccc7ae5c450eda9.jpg"
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
  )
}

export default ShopByFormat