import PageHeader from "../../../pageHeader";
import TestimonyCard from "../testimonyCard";

export default function TestimonyPage() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="/hero-testimony.jpg"
        title="Testimonials"
        description="Hear what our customers have to say about Game Basket! We're proud of the positive feedback we receive from our customers, and we're always looking for ways to improve our products and services.These reviews are a great way to learn more about our products and services, and to see what other customers think of us."
      />
      <div className="w-[1161px]">
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 py-8">
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
      </div>
    </section>
  );
}
