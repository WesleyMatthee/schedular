import React from "react";

const InterviewerList = function(props) {
  console.log("Interviewer List:", props);
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  )
}