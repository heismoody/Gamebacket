import { useState } from "react";
import Avatar from "../../../components/avatars";
import CommentCard from "./commentcard";

export default function Comment() {
  const [controls, setControls] = useState(false);
  return (
    <section className="flex justify-center">
      <div className="w-[95%] mobile:w-full mobile:py-4">
        <span className="introheading-2 text-xl py-3 block">100 Comments</span>
        <div className="flex justify-between py-4">
          <Avatar image="testimonials-3.jpg" />
          <div className="w-[83%] mobile:w-[80%]">
            <textarea
              name="comment"
              id=""
              className="w-full text-white text-sm bg-transparent border-b-2 border-submessage/40 rounded px-4 resize-none outline-none placeholder:text-sm"
              placeholder="Add a review"
              onFocus={() => setControls(true)}
            />
            {controls && (
              <div className="flex justify-end items-center gap-x-3 introheading-2 text-sm ">
                <span className="hover:text-red-500 cursor-pointer" onClick={()=>setControls(false)}>Cancel</span>
                <span className="hover:text-primary cursor-pointer">Publish</span>
              </div>
            )}
          </div>
        </div>
        <div className="overflow-auto grid grid-cols-1 gap-y-3">
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    </section>
  );
}
