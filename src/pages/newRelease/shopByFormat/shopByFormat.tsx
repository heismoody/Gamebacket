import GameCard from "../../../components/gameCard"

const ShopByFormat = () => {
  return (
    <div>
        <div>
            <strong>Shop by format</strong>
            <ul className="flex">
                <li>
                    <span></span>
                    <span>PlayStation Store</span>
                </li>
                <li>
                    <span></span>
                    <span>XBOX</span>
                </li>
            </ul>
            <strong>
                Games are only available within the Tanzaninan borders
            </strong>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, numquam nihil dicta assumenda doloremque cupiditate soluta voluptatem accusantium est obcaecati vero commodi dolore inventore veniam.
            </p>
            <button className="viewallbtn">
                View all
            </button>
        </div>
        <div>
            <GameCard/>
        </div>
    </div>
  )
}

export default ShopByFormat