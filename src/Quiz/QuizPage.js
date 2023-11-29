import React from "react";
import Genericquestionsection from "./Genericquestionsection";
import ShowPath from "../Showpath";
import Questions from "./Questions";

export default function QuizPage() {
  const loopQns = Questions[0];
  return (
    <>
      <ShowPath></ShowPath>
      <section className="mainSection mx-4 mb-4">
        <Genericquestionsection questions={loopQns} title={"LOOPS"} />;
      </section>
    </>
  );
}
