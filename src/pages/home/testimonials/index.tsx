import SectionHeader from "../homeComponents/sectionHeader";
import TestimonyCard from "./testimonyCard";

export default function Testimonials() {
  return (
    <section className="w-full flex justify-center items-center pb-20">
      <div className="w-[85%]">
        <SectionHeader
          name="TESTIMONIALS"
          title="TESTIMONIALS"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
        <div className="flex justify-between items-center pt-16 pb-20">
          <TestimonyCard
            title="Had the Best Experience!"
            description="Lorem ipsum dolor sit amet, consecte adip assa iaculis porta ultricies
                semper massa amet pretium dia nibh cursus."
            name="John Williams"
            occupation="Gamer"
            imageurl="testimonials-1.jpg"
          />
          <TestimonyCard
            title="I highly recommend GamePlay"
            description="Lorem ipsum dolor sit amet, consecte adip assa iaculis porta ultricies
                semper massa amet pretium dia nibh cursus."
            name="Melissa Harvey"
            occupation="Gamer"
            imageurl="testimonials-2.jpg"
          />
          <TestimonyCard
            title="Had the Best Experience!"
            description="Lorem ipsum dolor sit amet, consecte adip assa iaculis porta ultricies
                semper massa amet pretium dia nibh cursus."
            name="Harry Anderson"
            occupation="Gamer"
            imageurl="testimonials-3.jpg"
          />
        </div>
      </div>
    </section>
  );
}
