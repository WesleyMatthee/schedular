import React from "react";
import "components/Appointment/style.scss";
import Show from "./Show";
import Empty from "./Empty";
import Header from "./Header";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
// import { Fragment } from "react";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const Appointment = function(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  return (


    <article className="appointment">
      <Header time={props.time} />
      {mode === CREATE && (
        <Form interviewers={[]} onCancel={back}/>
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}

    </article>

  );
};

export default Appointment;