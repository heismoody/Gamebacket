import LandingCard from "./landingCard";

export const LandingPage = () => {
  return (
  <section className="w-full flex justify-center pt-24 pb-10 relative bg-[url('/hero-home.jpg')] bg-cover bg-no-repeat">
    <div className="absolute w-full h-full top-0 bg-black/50"/>
    <div className="w-[1161px] relative">
      <div className="w-[55%] py-24">
        <h1 className="introheading-2 text-[64px] leading-[80px]">
          FIFA 23 Release Date Announced!
        </h1>
        <p className="descr-1 text-base py-4">
          Gear up, fellow gamers! FIFA 23's drop date is locked in. Get ready to score big on your favorite platforms, and let the soccer showdown begin!
        </p>
      </div>
      <div className="w-full flex justify-between items-center">
        <LandingCard
          iconurl="cloud_download.png"
          title="Quick Delivered"
          description="Lightning-fast Delivery"
        />
         <LandingCard
          iconurl="verified_user.png"
          title="Reiable & Safe"
          description="Trustworthy and Secure."
        />
         <LandingCard
          iconurl="chat_read.png"
          title="Customer Support"
          description="Always Here To Help"
        />
         <LandingCard
          iconurl="new_releases.png"
          title="Trusted Reviews"
          description="Reliable Product Insights"
        />
      </div>
    </div>
  </section>
  );
};
