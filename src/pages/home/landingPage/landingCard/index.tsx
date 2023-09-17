export default function LandingCard({...props}:Ilandcard) {
  return (
    <div className="bg-[url('/bg-card.png')] flex justify-center items-center w-[265px] rounded-sm">
        <div className="flex flex-col items-center gap-y-2 py-4">
            <div className="h-10 w-10">
                <img src={props.iconurl} alt="" className="imgrender"/>
            </div>
            <span className="introheading-2 text-base">{props.title}</span>
            <span className="descr-1 text-xs">{props.description}</span>
        </div>
    </div>
  )
}
