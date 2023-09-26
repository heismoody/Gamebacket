import HeaderDetails from "./headerDetails";

export default function PageHeader({...props}:IpageHeader) {
  return (
    <div className={`w-full pt-56 bg-[url('${props.image}')] bg-cover bg-no-repeat relative flex justify-center`}>
        <div className="bg-black/50 absolute top-0 w-full h-full" />
        <div className="bg-gradient-to-t from-background absolute top-0 w-full h-full" />
        <div className="relative introheading-2 w-[1161px]">
          <HeaderDetails
            title={props.title}
            description={props.description}
          />
        </div>
    </div>
  )
}
