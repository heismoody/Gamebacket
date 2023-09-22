import { useState } from "react";
import Avatar from "../../../components/avatars";
import CommentCard from "./commentcard";

export default function Comment() {
  const [controls, setControls] = useState(false);
  return (
    <section className="flex justify-center">
      <div className="w-[95%]">
        <span className="introheading-2 text-xl py-3 block">100 Comments</span>
        <div className="flex justify-between py-4">
          <Avatar image="testimonials-3.jpg" />
          <div className="w-[83%]">
            <textarea
              name="comment"
              id=""
              className="w-full text-white text-sm bg-transparent border-b-2 border-submessage/40 rounded px-4 resize-none outline-none placeholder:text-sm"
              placeholder="Add a review"
              onFocus={() => setControls(true)}
            />
            {controls && (
              <div className="flex justify-end gap-x-1 focus:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-7 h-7 stroke-2 stroke-red-700"
                  onClick={()=>setControls(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 stroke-2 stroke-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
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
