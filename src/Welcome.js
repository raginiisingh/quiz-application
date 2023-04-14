import React from "react";
import { useState } from "react";
import CreateQuiz from "./CreateQuiz";

function Welcome() {
  const [welcome, setwelcome] = useState(true);
  function handleClick() {
    setwelcome(false);
  }

  return (
    <>
      {welcome ? (
        <>
          <div className="welcome-screen">
            <div className="heading">WELCOME TO THE ULTIMATE QUIZ!</div>
            <button className="start"
              onClick={() => {
                handleClick();
              }}
            >
              START
            </button>
          </div>
        </>
      ) : (
        <>
        <CreateQuiz/>
        </>
      )}
    </>
  );
}

export default Welcome;
