import React from "react";
import "./Specialcard.css";
import { useState } from "react";

function Specialcard(props) {
  const { ques, ans } = props;
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="card rightcard">
      <div className="card-body right__content">
        <div className="first__row">
          {ques}
          {showAnswer ? (
            <button
              className="ansbtn"
              onClick={() => {
                console.log(showAnswer);
                setShowAnswer(!showAnswer);
              }}
            >
              -
            </button>
          ) : (
            <button
              className="ansbtn"
              onClick={() => {
                console.log(showAnswer);
                setShowAnswer(!showAnswer);
              }}
            >
              +
            </button>
          )}
        </div>
        {showAnswer && <div className="second__row">{ans}</div>}
      </div>
    </div>
  );
}

export default Specialcard;
