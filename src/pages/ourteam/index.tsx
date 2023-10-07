import PageHeader from "../pageHeader";
import TeamMemberCard from "./teamMemberCard";

export default function OurTeam() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="/hero-team.jpg"
        title="Our Team"
        description="Enoying that much? Here is a team of passionate gamers, front-end and back-end developers, and a skilled coordinator, working together to create and share the best gaming experiences for everyone."
      />
      <div className="w-[1161px] mobile:w-full">
        <div className="flex justify-between items-center py-10 mobile:flex-col mobile:gap-y-5 ">
            <TeamMemberCard
                image="alex.jpg"
                name="Alex Greatman"
                role="Coordinator"
            />
            <TeamMemberCard
                image="moody.jpg"
                name="Moody Happier"
                role="Front-End Engineer"
            />
            <TeamMemberCard
                image="danford.jpg"
                name="Danford Jobs"
                role="Back-End Engineer"
            />
        </div>
      </div>
    </section>
  );
}
