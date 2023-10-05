import { Link } from "react-router-dom";
import ViewAllBtn from "../buttons/viewAllBtn";

export default function SectionHeader({...props}:IsectionHeader) {
  return (
    <div className='w-full'>
        <span className={`introheading-1 ${props.reused ? "text-primary" : ''}`}>{props.name}</span>
        <div className="flex justify-between mobile:block pt-3">
          <div className="flex items-center mobile:block gap-6">
            <span className="introheading-2">{props.title}</span>
            <span className="descr-1">
              {props.description}
            </span>
          </div>
          <Link to={props.url}>
            <span className={`${props.cta ? '' : 'hidden'}`}>
            <ViewAllBtn name="View All"/>
            </span>
          </Link>
        </div>
    </div>
  )
}
