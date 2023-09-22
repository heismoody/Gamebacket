import { useState } from "react";
import Avatar from "../../../../components/avatars";

export default function CommentCard() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  return (
    <div className="flex justify-between py-4 border border-white/5 px-4 rounded-xl">
      <Avatar image="testimonials-3.jpg" />
      <div className="flex flex-col w-[83%] descr-1">
        <span className="flex justify-between font-semibold text-white/80 text-sm">
          <span>Username</span>
          <span className="text-white/50">1 day ago</span>
        </span>
        <p className="text-sm line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          omnis blanditiis distinctio inventore ratione dicta voluptates error
          veniam vitae expedita? Voluptatibus aperiam iure unde minus expedita
          placeat nemo provident velit!
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${
                like
                  ? "fill-primary"
                  : "stroke-1 stroke-current fill-transparent"
              }`}
              onClick={() => setLike(!like)}
            >
              <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <span className="descr-1 text-sm font-medium">13</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className={`w-6 h-6 ${
                dislike
                  ? "fill-primary"
                  : "stroke-1 stroke-current fill-transparent"
              }`}
              onClick={() => setDislike(!dislike)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center cursor-pointer hover:border rounded-lg px-2 border-white/20">
            <span className="introheading-2 text-xs">Reply</span>
          </div>
        </div>
      </div>
    </div>
  );
}
