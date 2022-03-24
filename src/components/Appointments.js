import React from "react";
import "./Appointments.css";
import Calendar from "react-calendar";
import Appointment from "./Appointment";
import RescheduleAppt from "./RescheduleAppt";

export default function Appointments() {
  return (
    <div className="Appointments">
      <div className="apptsCont">
        {" "}
        <Appointment>
          {" "}
          <h2>Vocational Evaluation</h2>
          <p>Monday, October 16 10:00am</p>
          <p>124 Seaside Ave., Daytona Beach, FL 88118</p>
        </Appointment>
        <RescheduleAppt />
        <Appointment>
          {" "}
          <h2>Physical Therapy Evaluation</h2>
          <p>Fridy, October 27 3:00pm</p>
          <p>124 Seaside Ave., Daytona Beach, FL 88118</p>
        </Appointment>
        <RescheduleAppt />
      </div>
      <div className="calendarCont">
        {" "}
        <Calendar />
      </div>
    </div>
  );
}
