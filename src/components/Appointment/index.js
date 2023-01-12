import React from "react";
import "components/Appointment/style.scss";
import Show from "./Show";
import Empty from "./Empty";
import Header from "./Header";
// import { Fragment } from "react";


const Appointment = function(props) {
  return (
  
    <article className="appointment">
      <Header time={props.time} />
      {props.interview ? <Show 
        student={props.interview.student} 
        interviewer={props.interview.interviewer} //HARD CODED ID
      /> : <Empty />}
     
    </article>

  );
};

export default Appointment;