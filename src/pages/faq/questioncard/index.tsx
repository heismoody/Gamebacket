import { useState } from "react";

export default function QuestionCard({ ...props }: IquestionCard) {
  const [showQuestion, setShowQuestion] = useState(false);
  return (
    <>
      <span
        className="flex items-center justify-between py-3 cursor-pointer"
        onClick={() => {
          setShowQuestion(!showQuestion);
        }}
      >
        <span
          className={`introheading-2 text-2xl ${
            showQuestion ? "text-tertiary" : ""
          }`}
        >
          {props.question}
        </span>
        {!showQuestion ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="fill-submessage w-5 h-5"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="fill-tertiary w-5 h-5"
          >
            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
          </svg>
        )}
      </span>
      {showQuestion && <p className="descr-1">{props.description}</p>}
    </>
  );
}
