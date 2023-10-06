import { Link } from "react-router-dom";
import ViewAllBtn from "../buttons/viewAllBtn";

export default function SectionHeader({...props}:IsectionHeader) {
  return (
    <div className='w-full'>
        <span className={`introheading-1 ${props.reused ? "text-primary" : ''}`}>{props.name}</span>
        <div className="flex justify-between pt-3">
          <div className="flex items-center mobile:flex-col mobile:items-start mobile:gap-y-2 gap-6">
            <span className="introheading-2 mobile:text-3xl">{props.title}</span>
            <span className="descr-1">
              {props.description}
            </span>
          </div>
          <Link to={props.url}>
            <span className={`mobile:hidden ${props.cta ? '' : 'hidden'}`}>
            <ViewAllBtn name="View All"/>
            </span>
          </Link>
        </div>
    </div>
  )
}
