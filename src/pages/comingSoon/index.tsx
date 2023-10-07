import { Link } from "react-router-dom";
import BackHomeBtn from "../../components/buttons/backHome";

export default function ComingSoon() {
  return (
    <section className="flex justify-center items-center bg-[url('/comingsoon-bg.jpg')] bg-cover bg-no-repeat pt-16 relative">
      <div className="w-full h-full bg-black/60 top-0 absolute"/>
        <div className="w-[1161px] mobile:w-[90%] flex flex-col gap-y-5 items-start mobile:items-center relative py-44 mobile:py-32">
            <span className="introheading-2 text-[62px] mobile:text-5xl">Coming Soon</span>
            <span className="introheading-2 text-2xl">It Will Be Available Soon</span>
            <p className="descr-1 text-xl">
                Sorry, Our developers are at work expect it different when you be back again.
            </p>
            <Link to="/">
              <BackHomeBtn/>
            </Link>
        </div>
    </section>
  )
}
