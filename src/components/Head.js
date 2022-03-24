import React from "react";
import "./Head.css";
import "../App.css";
import Button from "./Button";
import icon from "../images/weirdIcon.jpeg";

export default function Head() {
  return (
    <header>
      <div className="user">
        <div className="user-avatar">
          <i className="fa fa-solid fa-user"></i>
        </div>
        <p id="username">User Name</p>
      </div>
      <div className="search">
        <input type="search" placeholder="Search" />
        <Button id="searchPage">
          <i className="fa fa-solid fa-magnifying-glass"></i>
        </Button>
      </div>
      <div className="notificationsCont">
        <Button id="notifications">
          <i className="fa fa-solid fa-bell"></i>
        </Button>
        <Button>
          <img src={icon} alt="Not sure what this is for" />
        </Button>
      </div>
    </header>
  );
}
