const GameCard = ({...props}:gamecard) => {
  return (
    <div className="rounded-xl overflow-hidden drop-shadow-lg border border-white/70">
        <div className="bg-blue-500 text-xl font-medium text-white px-5 border-b border-white/70">
            {props.category}
        </div>
        <div className="w-[200px] h-[230px] relative">
            <img 
                className="w-full h-full object-cover"
                src={props.image} 
                alt="" 
                loading="lazy" 
            />
            <div className="absolute bottom-0 bg-black h-full w-full">
                <div>
                    <span>Call Of Duty</span>
                    <span>30000 TSH</span>
                    <button className="buynowbtn">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span>Preorder</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GameCard