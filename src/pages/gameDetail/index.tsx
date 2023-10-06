import { useState } from "react";
import RequirementList from "./requirements";
import DeveloperList from "./developers";
import SimilarGames from "./similarGames";
import MainDetails from "./mainDetails";
import Comment from "./comments";

export default function GameDetail() {
  const [toggle, setToggle] = useState(1);
  return (
    <div className="bg-background">
      <section className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center py-16 bg-[url('/callofduty.jpg')] bg-no-repeat bg-cover relative">
          <div className="absolute top-0 w-full h-full bg-black/80" />
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-background" />
          <MainDetails actualprice="20,000Tsh" promoprice="50,000 Tsh" />
        </div>
        <div className="w-[1161px] mobile:w-[90%]">
          <div className="flex justify-between mobile:flex-col">
            <div className="w-[40%] mobile:w-full">
              <div className="descr-1 flex-row border border-submessage w-fit mobile:w-full rounded py-2 px-3 divide-x-[1px] divide-submessage font-semibold cursor-pointer">
                <span
                  className={`px-4 mobile:px-0 ${toggle === 1 ? "text-primary" : ""}`}
                  onClick={() => setToggle(1)}
                >
                  Requirements
                </span>
                <span
                  className={`px-5 mobile:px-1 ${toggle === 2 ? "text-primary" : ""}`}
                  onClick={() => setToggle(2)}
                >
                  Developers
                </span>
                <span
                  className={`px-5 mobile:px-1 ${toggle === 3 ? "text-primary" : ""}`}
                  onClick={() => setToggle(3)}
                >
                  Reviews (0)
                </span>
              </div>
              {toggle === 1 && <RequirementList />}
              {toggle === 2 && <DeveloperList />}
              {toggle === 3 && <Comment />}
            </div>
            <div className="w-[55%] mobile:w-full">
              <video
                className="h-[50vh] mobile:h-[25vh] w-full object-cover"
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
