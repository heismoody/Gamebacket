import ViewAllBtn from "../../../../components/buttons/viewAllBtn";

export default function SectionHeader({...props}:IsectionHeader) {
  return (
    <div className='w-full'>
        <span className={`introheading-1 ${props.reused ? "text-primary" : ''}`}>{props.name}</span>
        <div className="flex justify-between pt-3">
          <div className="flex items-center gap-6">
            <span className="introheading-2">{props.title}</span>
            <span className="descr-1">
              {props.description}
            </span>
          </div>
          <ViewAllBtn/>
        </div>
    </div>
  )
}
