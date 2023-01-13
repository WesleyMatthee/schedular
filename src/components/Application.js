import "components/Application.scss";
import DayList from './DayList';
import { useState, useEffect } from "react";
import React from "react";
import Appointment from "./Appointment";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";



export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}

  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  // const setDays = (days) => {
  //   setState(prev => ({ ...prev, days }));
  // };

  const setDay = day => setState({ ...state, day });



  useEffect(() => {
    // const apiDays = `http://localhost:8001/api/days`;
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      console.log(all);
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);



  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          // onChange={(day) => setState({...state, day})}

          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
        {/* Replace this with the sidebar elements during the "Project Setup & Familiarity" activity. */} 
      </section>
       <section className="schedule">
        { dailyAppointments.map((appointment) => {
          // const interview = getInterview(state, appointment.interview);
          return (
            <Appointment
              key={appointment.id}
              {...appointment}
              interview={getInterview(state, appointment.interview)}
            />);
        })}
        <Appointment key="last" time="5pm" />
      </section>

    </main>
  );
}
