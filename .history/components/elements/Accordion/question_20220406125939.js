import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import './'
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header>
        <h4
          onClick={() => setExpanded(!expanded)}
          className="text-white question-title"
        >
          {title}
        </h4>
        <button
          className="btn text-white"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{info}</p>}
    </article>
  );
};

export default Question;
