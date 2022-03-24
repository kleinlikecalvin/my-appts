import React from "react";
import "./Appointment.css";
import { CirclePicker } from "react-color";

export default function Appointment({ children, ...props }) {
  const [color, setColor] = React.useState("green");
  const [colorPickerVisibility, setColorPickerVisibility] =
    React.useState("none");

  function handleSwatchChange(color, event) {
    setColor(color.hex);
  }

  function handleClick() {
    if (colorPickerVisibility === "none") {
      setColorPickerVisibility("flex");
    } else {
      setColorPickerVisibility("none");
    }
  }
  return (
    <div className="Appointment">
      <div className="row">
        <div className="col details">{children}</div>
        <div className="col colorCont">
          <div className="swatchCont" onClick={() => handleClick()}>
            {" "}
            <div className="swatch" style={{ backgroundColor: color }}></div>
            <i className="fa fa-solid fa-angle-down"></i>
          </div>
          <div id="colorPicker" style={{ display: colorPickerVisibility }}>
            {" "}
            <CirclePicker
              width="90px"
              colors={["red", "yellow", "green", "purple"]}
              onChangeComplete={(color) => handleSwatchChange(color)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <textarea rows={3} cols={33} placeholder="Notes"></textarea>
      </div>
    </div>
  );
}
