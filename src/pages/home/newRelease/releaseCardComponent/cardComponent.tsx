const CardComponent = ({ ...props }: Icardcomponentprops) => {
  return (
    <div className={`w-[300px] h-[180px] rounded-xl overflow-hidden relative drop-shadow-lg hover:releasehover`}>      
      <img 
        className="w-full h-full object-cover"
        src={props.image} 
        alt="" 
      />
      <div className="bg-black/50 w-full h-full absolute top-0"/>
      <div className="flex flex-col justify-center px-6 h-full absolute top-0 text-white/80">
        <span className="font-semibold text-base">{props.title}</span>
        <p className="text-xs py-2 font-semibold">{props.description}</p>
        <span className="block font-bold text-base pb-2">
          {props.price} TSH
        </span>
        <button className="buynowbtn py-1 px-3 w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span>Buy now</span>
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
