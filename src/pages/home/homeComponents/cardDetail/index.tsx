export default function CardDetail({...props}:IcardDetails) {
  return (
    <div className="w-full">
      <span className="introheading-1 pb-5 block">{props.name}</span>
      <div className="flex flex-col gap-5">
        <span className={`introheading-2 leading-[3.75rem] ${props.reused ? 'text-white ': 'text-black'}`}>{props.title}</span>
        <span className={`descr-1 ${props.reused ? 'text-submessage font-oxanium font-bold text-2xl' : 'text-black'}`}>
          {props.description}
        </span>
        <button className={`viewallbtn ${props.reused ? '' : 'bg-black text-submessage'}`}>
          {props.btnName}
        </button>
      </div>
    </div>
  );
}
