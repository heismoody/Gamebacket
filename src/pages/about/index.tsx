export default function AboutUs() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <div className="w-full pt-56 bg-[url('/hero-about.jpg')] bg-cover bg-no-repeat relative flex justify-center">
        <div className="bg-black/50 absolute top-0 w-full h-full" />
        <div className="bg-gradient-to-t from-background absolute top-0 w-full h-full" />
        <div className="relative introheading-2 w-[1161px]">
          <span>About Us</span>
          <p className="descr-1 text-base w-[80%] py-2">
            GameBacket is your one-stop shop for all your gaming needs, offering
            a wide variety of games at competitive prices, with fast shipping
            and a satisfaction guarantee. We're passionate about gaming, and
            we're committed to providing our customers with the best possible
            experience.
          </p>
        </div>
      </div>
      <div className="w-[1161px]">
        <div className="flex flex-col">
          <span
            className={`introheading-2 leading-[3.2rem] w-[85%] text-[44px] py-7`}
          >
            We're on a mission to enable everyone to discover the joy of gaming
          </span>
          <div className="flex justify-between">
            <p className="descr-1 w-[50%]">
              GameBacket is committed to making gaming accessible and enjoyable
              for everyone. We believe that gaming is a powerful force that can
              bring people together, create new experiences, and inspire
              creativity. More than that, GameBacket is committed to creating a
              gaming community that is inclusive and welcoming.
              <p className="pt-3">
                Their mission to enable everyone to discover the joy of gaming
                is reflected in everything they do. They offer a wide variety of
                games at competitive prices, with fast shipping and a
                satisfaction guarantee. They also have a team of knowledgeable
                and friendly customer service representatives who are always
                happy to help people find the right games for them.
              </p>
              <p className="pt-3">
                We believe that gaming should be fun for everyone, regardless of
                their age, gender, race, or ability. That's why we support a
                variety of gaming initiatives, such as Girls Who Code and Extra
                Life. We also host our own gaming events and tournaments
                throughout the year.
              </p>
            </p>
            <div className="w-[48%] h-[500px]">
              <img src="about1.jpg" className="imgrender" alt="" />
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="w-[48%] h-[350px]">
              <img src="story-sect.jpg" className="imgrender" alt="" />
            </div>
            <div className="w-[50%] flex flex-col gap-y-3">
              <span className="introheading-1">OUR STORY</span>
              <span className={`introheading-2 leading-[3.75rem]`}>
                Our story
              </span>
              <p className="descr-1">
                It all started with a passion for games and a desire to make
                them more accessible to everyone. We wanted to create a place
                where people of all ages and backgrounds could come to discover
                and purchase the games they love, at great prices and with
                excellent customer service. 
                <p className="pt-3">
                That place is GameBacket.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
