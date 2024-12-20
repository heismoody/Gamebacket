import { Link } from "react-router-dom";
import SectionHeader from "../../../components/sectionHeader";
import TestimonyCard from "./testimonyCard";
import ViewAllBtn from "../../../components/buttons/viewAllBtn";

export default function Testimonials() {
  return (
    <section className="w-full flex justify-center items-center pb-20">
      <div className="w-[1161px] mobile:w-[90%] flex flex-col items-center">
        <SectionHeader
          name="TESTIMONIALS"
          title="TESTIMONIALS"
          description="Player Reviews: Hear What Gamers Are Saying About Our Service!"
          url="/testimonials"
          cta
        />
        <div className="flex justify-between items-center pt-16 pb-20 w-full mobile:flex-col mobile:gap-y-5">
          <TestimonyCard
            title="Super quick delivery!"
            description="It's rare to find such a perfect combination of speed and affordability in online gaming purchases. Kudos to this platform."
            name="John Williams"
            occupation="Gamer"
            imageurl="testimonials-1.jpg"
          />
          <TestimonyCard
            title="I highly recommend GameBacket"
            description="This site is a gem for budget-conscious gamers like me. The quick delivery was a pleasant surprise on top of the already great prices."
            name="Melissa Harvey"
            occupation="Gamer"
            imageurl="testimonials-2.jpg"
          />
          <TestimonyCard
            title="Had the Best Experience!"
            description="Couldn't be happier with my purchase! The fast delivery and wallet-friendly prices make this website a top choice for gamers."
            name="Harry Anderson"
            occupation="Gamer"
            imageurl="testimonials-3.jpg"
          />
        </div>
        <Link to="/testimonials">
          <span className="hidden mobile:block">
            <ViewAllBtn name="View All" />
          </span>
        </Link>
      </div>
    </section>
  );
}
