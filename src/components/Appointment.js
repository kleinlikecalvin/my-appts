import React from "react";
import "./Appointment.css";
import { CirclePicker } from "react-color";

export default function Appointment({ children, ...props }) {
  const [color, setColor] = React.useState("green");
  const [colorPickerVisibility, setColorPickerVisibility] =
    React.useState("none");

  function handleSwatchChange(color, event) {
    setColor(color.hex);
    setColorPickerVisibility("none");
  }

  function handleClick() {
    setColorPickerVisibility("flex");
  }

  if (props.stream === "upcoming") {
    return (
      <div className="Appointment upcoming">
        <div className="row details">
          <div className="col info">{children}</div>
          <div className="col colorCont">
            <div className="swatchCont" onClick={() => handleClick()}>
              {" "}
              <div className="swatch" style={{ backgroundColor: color }}></div>
              <i className="fa fa-solid fa-angle-down"></i>
            </div>
            <div id="colorPicker" style={{ display: colorPickerVisibility }}>
              <CirclePicker
                width="90px"
                colors={["red", "yellow", "green", "purple"]}
                onChangeComplete={(color) => handleSwatchChange(color)}
              />
            </div>
          </div>
        </div>
        <div className="row notes">
          <textarea rows={3} cols={33} placeholder="Notes"></textarea>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Appointment past">
        <div className="row">
          <div className="details">{children}</div>
        </div>
        <div className="row">
          <textarea rows={3} cols={33} placeholder="Notes" disabled></textarea>
        </div>
      </div>
    );
  }
}
