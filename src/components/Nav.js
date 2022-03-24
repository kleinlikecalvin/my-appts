import React from "react";
import "./Nav.css";
import Button from "./Button";

export default function Nav() {
  return (
    <nav className="Nav">
      <Button>
        <span className="i">
          <i className="fa fa-solid fa-house-user"></i>
        </span>
        <span className="navSpan">Home</span>
      </Button>
      <Button>
        <span className="i">
          <i className="fa fa-regular fa-calendar"></i>
        </span>
        <span className="navSpan">Appointments</span>
      </Button>
      <Button>
        <span className="i">
          <i className="fa fa-solid fa-comment-dots"></i>
        </span>
        <span className="navSpan">Messages</span>
      </Button>
      <Button>
        <span className="i">
          <i className="fa fa-regular fa-clipboard"></i>
        </span>
        <span className="navSpan">Forms</span>
      </Button>
      <Button>
        <span className="i">
          <i className="fa fa-regular fa-receipt"></i>
        </span>
        <span className="navSpan">Billing</span>
      </Button>
      <Button>
        <span className="i">
          <i className="fa fa-regular fa-gear"></i>
        </span>
        <span className="navSpan">Setting</span>
      </Button>
      <Button>
        <span className="i">
          <i className="fa fa-solid fa-right-from-bracket"></i>
        </span>
        <span className="navSpan">Logout</span>
      </Button>
    </nav>
  );
}
