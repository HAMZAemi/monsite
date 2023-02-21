import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MACHINE LEARNING Engineer ",
          "DEEP LEARNING Engineer",
          "DATA ANALYTICS Engineer",
          "BUSINESS INTELLIGENCE Analyst",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
