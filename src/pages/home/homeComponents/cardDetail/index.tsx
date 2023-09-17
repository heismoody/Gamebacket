export default function CardDetail({...props}:IcardDetails) {
  return (
    <div className="w-full">
      <span className="introheading-1 pb-5 block">{props.name}</span>
      <div className="flex flex-col gap-5">
        <span className={`introheading-2 leading-[3.75rem] ${props.gamenow || props.catalog ? 'text-white ': 'text-black'}`}>{props.title}</span>
        {
          (props.gamenow || props.preorder) &&
          <span className={`descr-1 ${props.gamenow ? 'font-oxanium font-bold text-2xl' : 'text-black'}`}>
            {props.description}
          </span>
        }
        {
          props.catalog &&
          <span className="descr-1">
            {props.description}
          </span>
        }
        <button className={`viewallbtn ${props.gamenow || props.catalog ? '' : 'bg-black text-submessage'}`}>
          {props.btnName}
        </button>
      </div>
    </div>
  );
}
