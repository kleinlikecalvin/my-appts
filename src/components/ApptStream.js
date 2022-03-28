import React from "react";
import Appointment from "./Appointment";
import RescheduleAppt from "./RescheduleAppt";
import "./ApptStream.css";

export default function ApptStream(props) {
  if (props.stream === "upcoming") {
    return (
      <div className="ApptStream upcoming">
        <Appointment stream={props.stream}>
          <h2>Vocational Evaluation</h2>
          <p>Monday, October 16 10:00am</p>
          <p>124 Seaside Ave., Daytona Beach, FL 88118</p>
        </Appointment>
        <RescheduleAppt />
        <Appointment stream={props.stream}>
          <h2>Physical Therapy Evaluation</h2>
          <p>Fridy, October 27 3:00pm</p>
          <p>124 Seaside Ave., Daytona Beach, FL 88118</p>
        </Appointment>
        <RescheduleAppt />
      </div>
    );
  } else {
    return (
      <div className="ApptStream past">
        <Appointment stream={props.stream}>
          <h2>Situational Assessment</h2>
          <p>Tuesday, October 3 4:00pm</p>
          <p>124 Seaside Ave., Daytona Beach, FL 88118</p>
        </Appointment>
      </div>
    );
  }
}
