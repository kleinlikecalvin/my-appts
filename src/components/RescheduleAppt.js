import React from "react";
import "./RescheduleAppt.css";
import Button from "./Button";

export default function RescheduleAppt() {
  const [hover, setHover] = React.useState();
  let background = {};
  if (!hover) {
    background = "#11525c";
  } else {
    background = "red";
  }
  return (
    <div className="RescheduleAppt">
      <Button
        style={{
          backgroundColor: background,
          padding: "25px",
          borderRadius: "10px",
          color: "white",
          transition: "300ms",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Reschedule Appointment*
      </Button>
      <p>*request must be within 24 hours and requires staff approval</p>
    </div>
  );
}
