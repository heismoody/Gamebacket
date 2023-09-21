import { useState } from "react";
import RequirementList from "./requirements";
import DeveloperList from "./developers";
import SimilarGames from "./similarGames";
import MainDetails from "./mainDetails";

export default function GameDetail() {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="bg-background">
      <section className="flex justify-center items-center">
        <div className="w-[1161px]">
          <div className="flex justify-between py-16 bg-[url('/callofduty.jpg')] relative">
            <div className="absolute top-0 w-full h-full bg-black/80" />
            <div className="absolute top-0 w-full h-full bg-gradient-to-t from-background" />
            <MainDetails actualprice="20,000Tsh" promoprice="50,000 Tsh" />
          </div>
          <div className="flex justify-between">
            <div>
              <div className="descr-1 flex-row border border-submessage w-fit rounded py-2 px-3 divide-x-[1px] divide-submessage font-semibold cursor-pointer">
                <span
                  className={`px-4 ${toggle === 1 ? "text-primary" : ""}`}
                  onClick={() => setToggle(1)}
                >
                  Requirements
                </span>
                <span
                  className={`px-5 ${toggle === 2 ? "text-primary" : ""}`}
                  onClick={() => setToggle(2)}
                >
                  Developers
                </span>
                <span
                  className={`px-5 ${toggle === 3 ? "text-primary" : ""}`}
                  onClick={() => setToggle(3)}
                >
                  Reviews (0)
                </span>
              </div>
              {toggle === 1 && <RequirementList />}
              {toggle === 2 && <DeveloperList />}
            </div>
            <div className="w-[55%]">
              <video
                className="h-[50vh] w-full object-cover"
                src="nfsp.mp4"
                autoPlay
                loop
                controls
              />
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="rounded overflow-hidden">
                  <img
                    src="category-strategy.jpg"
                    alt=""
                    className="imgrender"
                  />
                </div>
                <div className="rounded overflow-hidden">
                  <img src="callofduty.jpg" alt="" className="imgrender" />
                </div>
                <div className="rounded overflow-hidden">
                  <img src="callofduty2.jpg" alt="" className="imgrender" />
                </div>
                <div className="rounded overflow-hidden">
                  <img src="category-fps.jpg" alt="" className="imgrender" />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <SimilarGames />
          </div>
        </div>
      </section>
    </div>
  );
}
