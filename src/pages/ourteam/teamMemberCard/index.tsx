export default function TeamMemberCard({...props}:IteamMemberCard) {
  return (
    <div className={`w-[280px] h-[320px] rounded bg-cover bg-no-repeat relative flex justify-center items-end`} style={{ backgroundImage: `url(${props.image})` }}>
        <div className="flex flex-col items-center bg-gradient-to-t from-background w-full pt-5 pb-2">
            <span className="introheading-2 text-2xl">{props.name}</span>
            <span className="descr-1 text-base text-primary">{props.role}</span>
        </div>
    </div>
  )
}
