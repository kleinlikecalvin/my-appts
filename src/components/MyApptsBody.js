import React from "react";
import ApptStream from "./ApptStream";
import Button from "./Button";
import Calendar from "react-calendar";
import "./MyApptsBody.css";

export default function Appointments() {
  const [stream, setStream] = React.useState("upcoming");

  return (
    <div className="Body">
      <div className="myApptsHead">
        <h1>My Appointments</h1>
        <div className="apptsTypeBtnsCont">
          <Button onClick={() => setStream("upcoming")}>
            Upcoming Appointments
          </Button>
          <Button onClick={() => setStream("past")}>Past Appointments</Button>
        </div>
      </div>
      <div className="row">
        <ApptStream stream={stream} />
        <div className="calendarCont">
          <Calendar selectRange={true} />
        </div>
      </div>
    </div>
  );
}
